#!/usr/bin/env python3
"""
Split Pearson Edexcel (IAL and legacy GCE) maths papers into one image per question.

Edexcel question papers are mostly answer space: ruled lines, "Question 1 continued"
pages and "DO NOT WRITE IN THIS AREA" margins. This keeps only what is printed as
part of the question (text, tables, diagrams), drops the answer space and the page
furniture, and stacks the remaining bands into compact images of a fixed width, so
every question renders at the same scale.

Mark schemes are split on the "Question Number" column of the scheme table.

Writes, per paper:
  media/topical/maths-edexcel/<PAPER>/<session-slug>/q01-1.png, ms01-1.png, ...
  offline/work/maths/<PAPER>/<session-slug>.json   (text + image list per question)

  python tools/topical/split_edexcel.py --paper S1
  python tools/topical/split_edexcel.py --paper P1 --session-like 2026 --force
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path

import pymupdf as fitz
from PIL import Image

from common import PUBLIC_TOPICAL, WORK_ROOT, load_registry, pdf_path
from pdfclean import clean_document

DPI = 170
SCALE = DPI / 72
MAX_GAP = 14.0  # pt; larger vertical gaps (answer space) are collapsed to this
MAX_CHUNK = 680.0  # pt of content per output image, so images fit on an A4 page
PAD = 4.0

# ---------------------------------------------------------------------------
# Page model


@dataclass
class Item:
    kind: str  # "text" | "draw" | "image"
    rect: fitz.Rect  # in rendered (rotated) page coordinates
    text: str = ""
    bold: bool = False
    size: float = 0.0


@dataclass
class PageInfo:
    index: int
    rect: fitz.Rect
    frame: fitz.Rect
    content: list[Item] = field(default_factory=list)  # items that belong to questions
    lines: list[Item] = field(default_factory=list)  # all horizontal text lines (for markers)
    blank: bool = False
    separator_x: float | None = None


RULE_TEXT = re.compile(r"^[\s_.…\-]+$")
FURNITURE_TEXT = re.compile(
    r"^(?:"
    r"Question\s+\d+\s+continued.*"
    r"|\(?\s*Total\s+for\s+Question\s+\d+.*"
    r"|\(?\s*Total\s+\d+\s+marks?\s*\)?"
    r"|TOTAL\s+FOR\s+PAPER.*"
    r"|TOTAL\s+FOR\s+SECTION.*"
    r"|END|BLANK\s+PAGE|Turn\s+over.*|Leave|blank|PMT"
    r"|PhysicsAndMathsTutor\.com|DO\s+NOT\s+WRITE.*|\*P\d+A\d+\*"
    r"|Q\d{1,2}"
    r"|©.*|Page\s+\d+(\s+of\s+\d+)?|PapaCambridge.*|Downloaded\s+from.*|Licensed\s+for.*|Re-uploading.*|Trace\s+ID.*"
    r")$",
    re.IGNORECASE,
)


def _visual(page: fitz.Page, bbox) -> fitz.Rect:
    return fitz.Rect(bbox) * page.rotation_matrix


def _is_bold(span: dict) -> bool:
    return bool(span["flags"] & 16) or "Bold" in span["font"] or span["font"].endswith("-Bo")


def find_frame(page: fitz.Page, drawings: list[dict]) -> fitz.Rect:
    """The grey border most Edexcel papers draw around the writing area."""
    w, h = page.rect.width, page.rect.height
    best = None
    for d in drawings:
        r = _visual(page, d["rect"])
        if r.width > w * 0.7 and r.height > h * 0.7:
            if best is None or r.width * r.height < best.width * best.height:
                best = r
    if best is not None:
        return best
    return fitz.Rect(30, 34, w - 30, h - 46)


def unshift(text: str) -> str:
    """Undo the 29-code-point offset some PDFs' font encodings put on their text layer."""
    return "".join(chr(ord(c) + 29) if 3 <= ord(c) <= 93 and c != " " else c for c in text)


def is_shifted(page: fitz.Page) -> bool:
    """True when the text layer reads like '/HDYH EODQN' ('Leave blank') rather than English."""
    raw = page.get_text()
    words = re.findall(r"[A-Za-z]{3,}", raw)
    if len(words) < 8:
        return False
    common = {"the", "and", "for", "find", "that", "show", "with", "your", "answer", "blank", "leave", "question"}
    plain = sum(w.lower() in common for w in words)
    decoded = sum(w.lower() in common for w in re.findall(r"[A-Za-z]{3,}", unshift(raw.replace("\n", " "))))
    return decoded > 3 * max(plain, 1)


def read_page(page: fitz.Page, mark_scheme: bool, body: fitz.Rect | None = None) -> PageInfo:
    """`body` overrides the detected writing area (used for Cambridge papers, which have no frame)."""
    shifted = is_shifted(page)
    drawings = page.get_drawings()
    frame = body if body is not None else find_frame(page, drawings)
    info = PageInfo(page.number, page.rect, frame)
    raw_text = page.get_text("text")
    info.blank = "BLANK PAGE" in raw_text.upper() and len(raw_text.strip()) < 200

    inside = fitz.Rect(frame.x0 - 1, frame.y0 - 1, frame.x1 + 1, frame.y1 + 1)
    if mark_scheme:
        # Mark schemes have no frame; only drop the running header and footer.
        inside = fitz.Rect(0, 26, page.rect.width, page.rect.height - 34)

    data = page.get_text("dict", flags=fitz.TEXT_PRESERVE_WHITESPACE | fitz.TEXT_CID_FOR_UNKNOWN_UNICODE)
    for block in data["blocks"]:
        if block["type"] == 1:
            r = _visual(page, block["bbox"])
            if r.width < 3 or r.height < 3 or not inside.contains(r):
                continue  # hatched margins, logos outside the frame
            info.content.append(Item("image", r))
            continue
        for line in block["lines"]:
            spans = [s for s in line["spans"] if s["text"].strip()]
            if not spans:
                continue
            text = "".join(s["text"] for s in line["spans"]).replace("\t", " ").strip()
            if shifted:
                text = unshift(text)
            else:
                # Odd lines mix a normal question number with shifted text; at
                # least restore the shifted spaces ("\x03") so the number reads.
                text = text.replace("\x03", " ")
            r = _visual(page, line["bbox"])
            # Text direction as rendered, so landscape (rotated) pages read normally.
            m = page.rotation_matrix
            dx0, dy0 = line["dir"]
            dx, dy = dx0 * m.a + dy0 * m.c, dx0 * m.b + dy0 * m.d
            fonts = " ".join(s["font"] for s in spans)
            item = Item("text", r, text, _is_bold(spans[0]), spans[0]["size"])
            if abs(dy) > 0.1 or "Barcode" in fonts or "BarCode" in fonts or "Wingdings" in fonts:
                continue
            info.lines.append(item)
            if not inside.contains(fitz.Point(r.x0 + 1, (r.y0 + r.y1) / 2)):
                continue
            if RULE_TEXT.match(text) or FURNITURE_TEXT.match(text):
                continue
            if not mark_scheme and body is None and r.x0 > frame.x1 - 45 and len(text) <= 6:
                continue  # "Leave blank" column marks on older papers
            if body is not None and r.x0 > page.rect.width - 72 and item.size < 10:
                continue  # "For Examiner's Use" column on older Cambridge papers
            info.content.append(item)

    for d in drawings:
        r = _visual(page, d["rect"])
        if r.width > page.rect.width * 0.7 and r.height > page.rect.height * 0.5:
            continue  # page frame / background
        if r.width + r.height < 2:
            continue  # stray dots
        # Straight rules have zero-area boxes, which Rect.intersects treats as
        # empty; give them a little thickness so table borders are kept.
        r = fitz.Rect(r.x0 - 0.5, r.y0 - 0.5, r.x1 + 0.5, r.y1 + 0.5)
        if not inside.intersects(r):
            continue
        color = d.get("color") or d.get("fill") or (0, 0, 0)
        grey = min(color) > 0.35
        if body is None and r.height < 1.6 and r.width > 250 and grey:
            continue  # ruled answer lines
        examiner_rule = body is not None and r.x0 > page.rect.width * 0.85
        if r.width < 1.6 and r.height > 300 and (grey or examiner_rule):
            info.separator_x = r.x0  # "Leave blank" column rule; the crop stops left of it
            continue
        if not mark_scheme and (r.x1 < frame.x0 + 2 or r.x0 > frame.x1 - 2):
            continue
        info.content.append(Item("draw", r))
    return info


# ---------------------------------------------------------------------------
# Question boundaries


@dataclass
class Marker:
    num: int
    page: int
    y: float


# "1." on most papers, "1:" on the June 2025 series.
QP_MARKER = re.compile(r"^(\d{1,2})\s*[.:](?:\s|$)")
# Some series print a bold "1" and two spaces with no full stop.
QP_MARKER_BARE = re.compile(r"^(\d{1,2})\s{2,}\S")
# "1.", "1(a)", "4a", "Q2" or a bare "3". Not "5.991" (a critical value) and not
# examiner notes like "2A1:" or "8x".
MS_MARKER = re.compile(r"^[Qq]?\s*(\d{1,2})(?:\s*\.(?!\d)|\s*\(|[a-h](?![a-zA-Z0-9])|\s*$)")
# On pages without the table header (e.g. notes pages) only accept labels like "3(a)" or "3.".
MS_MARKER_STRICT = re.compile(r"^Q?\s*(\d{1,2})(?:\s*\.(?!\d)|\s*\(|[a-h](?![a-zA-Z0-9]))")


def chain(candidates: list[Marker]) -> list[Marker]:
    """Longest run 1, 2, 3, ... in reading order (rejects stray numbers)."""
    candidates = sorted(candidates, key=lambda m: (m.page, m.y))
    out: list[Marker] = []
    pos = -1
    want = 1
    while True:
        nxt = next((i for i in range(pos + 1, len(candidates)) if candidates[i].num == want), None)
        if nxt is None:
            break
        out.append(candidates[nxt])
        pos = nxt
        want += 1
    return out


def qp_markers(pages: list[PageInfo]) -> list[Marker]:
    cands = []
    for p in pages:
        for it in p.lines:
            text = it.text
            shifted_number = re.match(r"^([M-V]{1,2})K(?=\s|$)", text) if it.bold else None
            if shifted_number:
                # "QK" is "4." with its glyph codes 29 too high, on an otherwise normal line.
                text = "".join(chr(ord(c) - 29) for c in shifted_number.group(1)) + "." + text[shifted_number.end():]
            m = QP_MARKER.match(text) or (QP_MARKER_BARE.match(text) if it.bold else None)
            if not m and it.bold and re.fullmatch(r"\d{1,2}", it.text.strip()):
                # A bold number alone on its line, inside the writing area (not a page number).
                if p.frame.y0 < it.rect.y0 < p.frame.y1 - 20:
                    m = re.match(r"(\d{1,2})", it.text.strip())
            if m and it.rect.x0 < p.frame.x0 + 30 and it.rect.x0 > p.frame.x0 - 20:
                cands.append(Marker(int(m.group(1)), p.index, it.rect.y0))
    return chain(cands)


MS_HEADER = re.compile(r"^((Question|Qu\.?|Q)(\s*(Number|No\.?))?|Number)$", re.IGNORECASE)


def ms_markers(pages: list[PageInfo]) -> list[Marker]:
    """
    Question labels ("1", "1.", "2(a)", "Q3") in the left column of the scheme
    table. The column is located from its "Question (Number)" header so that the
    numbered marking-guidance pages and superscripts are not mistaken for labels.
    """
    cands = []
    column: tuple[float, float] | None = None
    for p in pages:
        header = next(
            (
                it
                for it in p.lines
                if MS_HEADER.match(it.text)
                and it.rect.x0 < 140
                and any(
                    re.match(r"^(Scheme|Marks|Answer|Mark Scheme)$", o.text, re.I) and abs(o.rect.y0 - it.rect.y0) < 30
                    for o in p.lines
                )
            ),
            None,
        )
        if header is not None:
            right = max(
                [header.rect.x1]
                + [o.rect.x1 for o in p.lines if o.text.lower() in ("number", "no", "no.") and abs(o.rect.y0 - header.rect.y1) < 18]
            )
            column = (header.rect.x0 - 22, right + 22)
        if column is None:
            continue
        for it in p.lines:
            # Older schemes put the label and the first line of the answer on one
            # text line, so only the left edge has to sit in the column.
            if not (column[0] <= it.rect.x0 <= column[1] - 8) or it.size < 9:
                continue
            m = (MS_MARKER if header is not None else MS_MARKER_STRICT).match(it.text)
            if not m and header is None and it.bold and re.fullmatch(r"\d{1,2}", it.text.strip()):
                # A bare number on a page without the header counts only if it stands
                # alone on its line (digits in a fraction or table have neighbours).
                alone = not any(
                    o is not it and abs(o.rect.y0 - it.rect.y0) < 4 and 0 <= o.rect.x0 - it.rect.x1 < 45 for o in p.lines
                )
                m = re.match(r"(\d{1,2})", it.text.strip()) if alone else None
            if m:
                cands.append(Marker(int(m.group(1)), p.index, it.rect.y0))
    found = chain(cands)
    if len(found) >= 2:
        return found
    # Some schemes have no column header at all. Fall back to labels that stand
    # alone ("1.", "2(a)") near the left edge, after the marking-guidance pages
    # (whose numbered points always have text after the number).
    loose = []
    for p in pages:
        for it in p.lines:
            if it.rect.x0 < 110 and it.size >= 9 and re.match(r"^Q?\s*\d{1,2}\s*(\.|[a-z]|(\([a-z]+\))+)?$", it.text.strip(), re.I):
                loose.append(Marker(int(re.search(r"\d{1,2}", it.text).group()), p.index, it.rect.y0))
    alt = chain(loose)
    return alt if len(alt) > len(found) else found


def snap_to_row(page: PageInfo, marker: Marker) -> Marker:
    """
    Scheme tables often centre the question label vertically in a tall row, so the
    row starts above the label. Move the cut up to the table rule over the label.
    """
    rules = [
        it.rect.y0
        for it in page.content
        # A row border crosses the Question column; rules inside a row start further right.
        if it.kind == "draw"
        and it.rect.height < 3.5
        and it.rect.width > 25  # some tables draw each cell border separately
        and it.rect.x0 < 90
        and marker.y - 160 < it.rect.y0 <= marker.y + 1
    ]
    if not rules:
        return marker
    return Marker(marker.num, marker.page, max(rules) + 0.5)


def paper_end(pages: list[PageInfo]) -> tuple[int, float] | None:
    """Position of 'TOTAL FOR PAPER' / 'END' so the last question stops there."""
    for p in pages:
        for it in p.lines:
            if re.match(r"^TOTAL\s+FOR\s+PAPER", it.text, re.IGNORECASE) or it.text.strip() == "END":
                return p.index, it.rect.y0
    return None


def expected_questions(doc: fitz.Document) -> int:
    """Number of questions the paper says it has, from its per-question totals."""
    text = "".join(p.get_text() for p in doc)
    nums = [int(n) for n in re.findall(r"Total\s+for\s+Question\s+(\d+)", text, re.I)]
    if nums:
        return max(nums)
    # Older papers end each question with "(Total 9 marks)".
    return len(re.findall(r"\(\s*Total\s+\d+\s+marks?\s*\)", text, re.I))


# ---------------------------------------------------------------------------
# Rendering


class Renderer:
    def __init__(self, doc: fitz.Document):
        self.doc = doc
        self.cache: dict[int, Image.Image] = {}

    def page(self, index: int) -> Image.Image:
        if index not in self.cache:
            pix = self.doc[index].get_pixmap(dpi=DPI, colorspace=fitz.csGRAY, alpha=False)
            self.cache = {index: Image.frombytes("L", (pix.width, pix.height), pix.samples)}
        return self.cache[index]

    def crop(self, index: int, x0: float, y0: float, x1: float, y1: float) -> Image.Image:
        img = self.page(index)
        box = (
            max(0, int(x0 * SCALE)),
            max(0, int(y0 * SCALE)),
            min(img.width, int(round(x1 * SCALE))),
            min(img.height, int(round(y1 * SCALE))),
        )
        return img.crop(box)


def bands(items: list[Item]) -> list[tuple[float, float]]:
    out: list[list[float]] = []
    for it in sorted(items, key=lambda i: i.rect.y0):
        # Gaps that would not be collapsed anyway stay inside one band, so the
        # padded crops of neighbouring bands never overlap.
        if out and it.rect.y0 <= out[-1][1] + MAX_GAP + 2 * PAD:
            out[-1][1] = max(out[-1][1], it.rect.y1)
        else:
            out.append([it.rect.y0, it.rect.y1])
    return [(a, b) for a, b in out]


def segment_items(pages: list[PageInfo], start: Marker, end: tuple[int, float] | None) -> list[tuple[int, list[Item]]]:
    last_page = end[0] if end else len(pages) - 1
    result = []
    for pi in range(start.page, last_page + 1):
        p = pages[pi]
        if p.blank:
            continue
        top = start.y - 2 if pi == start.page else 0
        bottom = end[1] - 2 if end and pi == end[0] else p.rect.height
        items = [it for it in p.content if it.rect.y0 >= top and it.rect.y1 <= bottom + 1]
        # Keep drawings that straddle the top boundary only if they start inside it.
        if items:
            result.append((pi, items))
    return result


TABLE_HEADER = re.compile(r"^(Question|Number|Scheme|Answer|Marks|Notes|Guidance|AOs?|Mark Scheme)(\s+(Number|Scheme|Answer|Marks|Notes|Guidance|AOs?))*$", re.I)


def drop_table_header(items: list[Item]) -> list[Item]:
    """Remove the scheme table's header row (text and its shading) from a continuation page."""
    heads = [it for it in items if it.kind == "text" and TABLE_HEADER.match(it.text)]
    if not heads:
        return items
    top = min(h.rect.y0 for h in heads) - 6
    bottom = max(h.rect.y1 for h in heads) + 6
    return [it for it in items if not (it.rect.y0 >= top and it.rect.y1 <= bottom)]


def compose(
    renderer: Renderer, segments: list[tuple[int, list[Item]]], x0: float, x1: float, start_y: float | None = None
) -> list[Image.Image]:
    """Stack the content bands of each page segment, splitting into A4-sized chunks."""
    strips: list[tuple[Image.Image, float]] = []  # (image, gap before in pt)
    for seg_index, (pi, items) in enumerate(segments):
        for band_index, (y0, y1) in enumerate(bands(items)):
            gap = MAX_GAP if (seg_index or band_index) else 0
            top = y0 - PAD
            if start_y is not None and seg_index == 0 and band_index == 0:
                top = max(top, start_y - 1)  # don't pick up the row above the question
            strips.append((renderer.crop(pi, x0, top, x1, y1 + PAD), gap))
    if not strips:
        return []

    chunks: list[list[tuple[Image.Image, float]]] = [[]]
    height = 0.0
    for img, gap in strips:
        h = img.height / SCALE
        if chunks[-1] and height + gap + h > MAX_CHUNK:
            chunks.append([])
            height = 0.0
            gap = 0
        chunks[-1].append((img, gap))
        height += gap + h

    out = []
    width = int(round((x1 - x0) * SCALE))
    for chunk in chunks:
        total = sum(int(g * SCALE) + im.height for im, g in chunk)
        canvas = Image.new("L", (width, total), 255)
        y = 0
        for im, g in chunk:
            y += int(g * SCALE)
            canvas.paste(im, (0, y))
            y += im.height
        out.append(canvas)
    return out


def save_png(img: Image.Image, path: Path) -> None:
    # 16 grey levels keep text and diagrams crisp at about a third of the size.
    img = img.point(lambda v: min(255, int(round(v / 17)) * 17))
    img.quantize(colors=16, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(
        path, format="PNG", optimize=True, bits=4
    )


def item_text(segments: list[tuple[int, list[Item]]]) -> str:
    parts = []
    for _pi, items in segments:
        texts = [it for it in items if it.kind == "text"]
        texts.sort(key=lambda it: (round(it.rect.y0 / 4), it.rect.x0))
        parts.append(" ".join(it.text for it in texts))
    return re.sub(r"\s+", " ", " ".join(parts)).strip()


# ---------------------------------------------------------------------------


def split_document(doc: fitz.Document, mark_scheme: bool) -> tuple[list[Marker], list[PageInfo], tuple[int, float] | None]:
    pages = [read_page(doc[i], mark_scheme) for i in range(len(doc))]
    if mark_scheme:
        found = ms_markers(pages)
        markers = []
        for i, m in enumerate(found):
            snapped = snap_to_row(pages[m.page], m)
            prev = found[i - 1] if i else None
            # Never move a cut above the previous question's label on the same page.
            if prev is not None and prev.page == m.page and snapped.y <= prev.y + 2:
                snapped = m
            markers.append(snapped)
    else:
        # Some Decision downloads are the answer book followed by the question
        # paper; the questions start after the paper's own instructions page.
        start = next(
            (i for i in range(1, len(doc)) if re.search(r"answers\s+in\s+the\s+\w+\s+answer\s+book", doc[i].get_text(), re.I)),
            0,
        )
        markers = qp_markers(pages[start:]) if start else qp_markers(pages)
    end = None if mark_scheme else paper_end(pages)
    return markers, pages, end


def export(doc: fitz.Document, mark_scheme: bool, out_dir: Path, prefix: str, url_base: str) -> tuple[dict[int, dict], list[str]]:
    markers, pages, end = split_document(doc, mark_scheme)
    warnings = []
    renderer = Renderer(doc)
    results: dict[int, dict] = {}
    if not markers:
        return results, ["no question markers found"]

    if mark_scheme:
        x0, x1 = 22.0, pages[markers[0].page].rect.width - 18
    else:
        frame = pages[markers[0].page].frame
        mid = (frame.x0 + frame.x1) / 2
        x0, x1 = mid - 258, mid + 258
        seps = [p.separator_x for p in pages if p.separator_x and p.separator_x > mid]
        if seps:
            x1 = min(x1, min(seps) - 2)

    for i, m in enumerate(markers):
        if i + 1 < len(markers):
            stop = (markers[i + 1].page, markers[i + 1].y)
        else:
            stop = end
        segs = segment_items(pages, m, stop)
        if mark_scheme:
            # Repeated table headers on continuation pages are not part of the answer.
            segs = [(pi, drop_table_header(items) if pi != m.page else items) for pi, items in segs]
        # A page slice with no text is just table rules or a header remnant.
        segs = [(pi, items) for pi, items in segs if any(it.kind != "draw" for it in items)]
        images = compose(renderer, segs, x0, x1, m.y)
        if not images:
            warnings.append(f"Q{m.num}: empty")
            continue
        files = []
        for k, img in enumerate(images, start=1):
            name = f"{prefix}{m.num:02d}-{k}.png"
            save_png(img, out_dir / name)
            files.append(f"{url_base}/{name}")
        results[m.num] = {
            "images": files,
            "pages": sorted({pi + 1 for pi, _ in segs}),
            "text": item_text(segs),
        }
    return results, warnings


def process(row: dict, force: bool) -> dict:
    paper = row["paper"]
    work = WORK_ROOT / "maths" / paper / f"{row['slug']}.json"
    if work.exists() and not force:
        return json.loads(work.read_text(encoding="utf-8"))

    out_dir = PUBLIC_TOPICAL / "maths-edexcel" / paper / row["slug"]
    url_base = f"/topical/maths-edexcel/{paper}/{row['slug']}"
    out_dir.mkdir(parents=True, exist_ok=True)
    for old in out_dir.glob("*.png"):
        old.unlink()

    record: dict = {"session": row["session"], "spec": row["spec"], "paper": paper, "warnings": [], "questions": []}
    qp = pdf_path(row, "qp")
    if not qp.exists():
        record["warnings"].append("question paper not downloaded")
    else:
        doc = fitz.open(qp)
        clean_document(doc)
        text_chars = sum(len(p.get_text().strip()) for p in doc)
        if text_chars < 500:
            record["warnings"].append("scanned question paper (no text layer)")
            questions, warnings = {}, []
        else:
            questions, warnings = export(doc, False, out_dir, "q", url_base)
            expected = expected_questions(doc)
            if expected and expected != len(questions):
                warnings.append(f"expected {expected} questions, found {len(questions)}")
        record["warnings"] += warnings

        ms_results: dict[int, dict] = {}
        if row["ms"] and pdf_path(row, "ms").exists():
            msdoc = fitz.open(pdf_path(row, "ms"))
            clean_document(msdoc)
            if sum(len(p.get_text().strip()) for p in msdoc) < 500:
                record["warnings"].append("scanned mark scheme (no text layer)")
            else:
                ms_results, ms_warn = export(msdoc, True, out_dir, "ms", url_base)
                record["warnings"] += [f"MS {w}" for w in ms_warn]
                missing = sorted(set(questions) - set(ms_results))
                if missing:
                    record["warnings"].append(f"MS missing for {missing}")

        for num in sorted(questions):
            q = questions[num]
            entry = {"number": num, "images": q["images"], "pages": q["pages"], "text": q["text"]}
            if num in ms_results:
                entry["msImages"] = ms_results[num]["images"]
                entry["msPages"] = ms_results[num]["pages"]
                entry["msText"] = ms_results[num]["text"][:600]
            record["questions"].append(entry)

    work.parent.mkdir(parents=True, exist_ok=True)
    work.write_text(json.dumps(record, indent=1, ensure_ascii=False), encoding="utf-8")
    return record


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--paper")
    p.add_argument("--session-like")
    p.add_argument("--force", action="store_true", help="re-split papers that were already processed")
    args = p.parse_args()

    rows = load_registry("maths", args.paper, args.session_like)
    for row in rows:
        try:
            rec = process(row, args.force)
        except Exception as exc:  # keep going; the report lists it
            print(f"[error] {row['paper']} {row['session']}: {exc}", file=sys.stderr)
            continue
        n = len(rec["questions"])
        ms = sum(1 for q in rec["questions"] if q.get("msImages"))
        flag = "" if not rec["warnings"] else "  ! " + "; ".join(rec["warnings"])
        print(f"{row['paper']:>4} {row['session']:<24} {n:>2} questions, {ms:>2} with MS{flag}")


if __name__ == "__main__":
    main()
