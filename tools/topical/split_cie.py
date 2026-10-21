#!/usr/bin/env python3
"""
Split Cambridge (CAIE) papers for topical mode.

Question papers are cut at the original tools/extract-questions splitter's question
markers, then cropped to the printed question like the Edexcel papers: page
furniture and blank answer space are dropped, so every question is one compact
image (or a few, for long ones) at the same width.

Mark schemes are cut with that splitter's table detector ("Question | Answer |
Marks"), and fall back to the pre-2017 layout, where the question number sits
alone in the left margin under a "Page N  Mark Scheme  Syllabus  Paper" header.

Writes offline/work/<subject>/<paper>/<session-slug>.json for each paper.

  python tools/topical/split_cie.py --subject physics --session-like 2026
  python tools/topical/split_cie.py --subject physics --paper P2 --ms-only
"""

from __future__ import annotations

import argparse
import json
import re
import shutil
import sys
from pathlib import Path

import pymupdf as fitz

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "extract-questions"))
import extract_questions as legacy  # noqa: E402

import split_edexcel as ed  # noqa: E402
from common import PUBLIC_TOPICAL, WORK_ROOT, load_registry, pdf_path  # noqa: E402
from pdfclean import clean_document  # noqa: E402

FOLDER = {
    "physics": ("physics-cie", "PHY-"),
    "comsci": ("comsci-cie", ""),
    "chemistry": ("chemistry-cie", ""),
    "biology": ("biology-cie", ""),
    "maths-cie": ("maths-cie", ""),
}
# Paper 1 of the sciences is multiple choice: its mark scheme is one answer table.
MULTIPLE_CHOICE = {("physics", "P1"), ("chemistry", "P1"), ("biology", "P1")}


def out_dirs(row: dict, kind: str) -> tuple[Path, str, str]:
    """Same folder naming as the existing images: <session>_<pdf stem>."""
    folder, code = FOLDER[row["subject"]]
    url = row["qp"] if kind == "qp" else row["ms"]
    stem = legacy.sanitize_prefix(legacy.qp_label_from_url(url))
    sub = f"{code}{row['paper']}{'-MS' if kind == 'ms' else ''}"
    name = f"{legacy.sanitize_prefix(row['session'])}_{stem}"
    return PUBLIC_TOPICAL / folder / sub / name, f"/topical/{folder}/{sub}/{name}", stem


def manifest_to_images(manifest: list[dict], url_base: str) -> dict[int, dict]:
    out = {}
    for q in manifest:
        out[q["question"]] = {
            "images": [f"{url_base}/{o['file']}" for o in q["outputs"]],
            "pages": [o["pdf_page"] for o in q["outputs"]],
        }
    return out


# --- question text (for classification) ------------------------------------


def region_text(doc: fitz.Document, markers: list, i: int) -> str:
    cur = markers[i]
    nxt = markers[i + 1] if i + 1 < len(markers) else None
    last = nxt.page if nxt else len(doc) - 1
    parts = []
    for pi in range(cur.page, last + 1):
        page = doc[pi]
        top = cur.y0 if pi == cur.page else 0
        bottom = nxt.y0 if (nxt and pi == nxt.page) else page.rect.height - 40
        if bottom <= top:
            continue
        parts.append(page.get_text("text", clip=fitz.Rect(0, max(top, 40), page.rect.width, bottom)))
    text = " ".join(parts)
    text = re.sub(r"\.{4,}|_{4,}|…{2,}", " ", text)
    text = re.sub(r"©\s*UCLES.*?(\[Turn over|$)", " ", text)
    return re.sub(r"\s+", " ", text).strip()


# Reference pages printed after the last question (chemistry and biology): their
# numbered tables would otherwise be read as extra questions.
APPENDIX = re.compile(
    r"^(Qualitative analysis notes|Important values, constants and standards|The Periodic Table of Elements)\s*$",
    re.IGNORECASE,
)


def appendix_start(doc: fitz.Document, after_page: int) -> tuple[int, float] | None:
    for pi in range(after_page + 1, len(doc)):
        for block in doc[pi].get_text("dict")["blocks"]:
            for line in block.get("lines", []):
                text = "".join(s["text"] for s in line["spans"]).strip()
                if APPENDIX.match(text):
                    return pi, line["bbox"][1]
    return None


def fill_gaps(doc: fitz.Document, markers: list) -> list:
    """A lone number followed by a diagram or formula fails the 'question text follows'
    test. When n-1 and n+1 were found, take a lone n in the margin between them; also
    look once past the last question found (before any reference pages)."""
    found = {m.num: m for m in markers}
    if not found:
        return markers
    end = appendix_start(doc, min(m.page for m in markers))
    last = max(found)
    for n in range(2, last + 2):
        if n in found or n - 1 not in found or (n <= last and n + 1 not in found):
            continue
        lo = found[n - 1]
        hi = found.get(n + 1) or (legacy.QuestionMarker(num=0, page=end[0], y0=end[1], y1=end[1], x0=0, x1=0) if end else None)
        for pi in range(lo.page, (hi.page if hi else len(doc) - 1) + 1):
            for block in doc[pi].get_text("dict")["blocks"]:
                for line in block.get("lines", []):
                    x0, y0, x1, y1 = line["bbox"]
                    text = "".join(s["text"] for s in line["spans"]).replace("\x07", "").replace("\ufffd", "").strip()
                    after_lo = pi > lo.page or y0 > lo.y0 + 5
                    before_hi = hi is None or pi < hi.page or y0 < hi.y0 - 5
                    if text == str(n) and 35 <= x0 <= 65 and 46 <= y0 <= 760 and after_lo and before_hi and n not in found:
                        found[n] = legacy.QuestionMarker(num=n, page=pi, y0=y0, y1=y1, x0=x0, x1=x1)
    return sorted(found.values(), key=lambda m: (m.page, m.y0))


def lone_numbers(doc: fitz.Document) -> list:
    out = []
    for pi in range(len(doc)):
        for block in doc[pi].get_text("dict")["blocks"]:
            for line in block.get("lines", []):
                x0, y0, x1, y1 = line["bbox"]
                text = "".join(s["text"] for s in line["spans"]).replace(chr(7), "").replace(chr(0xFFFD), "").strip()
                if re.fullmatch(r"\d{1,2}", text) and 35 <= x0 <= 65 and 46 <= y0 <= 760:
                    out.append(legacy.QuestionMarker(num=int(text), page=pi, y0=y0, y1=y1, x0=x0, x1=x1))
    return out


def is_bold(doc: fitz.Document, m) -> bool:
    for block in doc[m.page].get_text("dict")["blocks"]:
        for line in block.get("lines", []):
            x0, y0 = line["bbox"][:2]
            if abs(y0 - m.y0) < 2 and abs(x0 - m.x0) < 2 and line["spans"]:
                span = line["spans"][0]
                return bool(span["flags"] & 16) or "bold" in span["font"].lower()
    return False


def prefer_bold(doc: fitz.Document, markers: list) -> list:
    """Question numbers are bold; numbered list items inside a question are not.
    When most candidates are bold, drop the plain ones."""
    bold = [is_bold(doc, m) for m in markers]
    if sum(bold) >= 2 and sum(bold) >= len(markers) / 2:
        return [m for m, b in zip(markers, bold) if b]
    return markers


def in_sequence(markers: list) -> list:
    """Questions run 1, 2, 3, ... in reading order. Drop stray numbers (graph axes,
    "5 minutes" at the start of a line) that break the run; one missing number is
    tolerated so a single undetected question doesn't lose the rest."""
    out: list = []
    pos = -1
    want = 1
    while True:
        later = markers[pos + 1 :]
        hit = next((m for m in later if m.num == want), None) or next((m for m in later if m.num == want + 1), None)
        if hit is None:
            return out
        out.append(hit)
        pos = markers.index(hit)
        want = hit.num + 1


def qp_markers(doc: fitz.Document) -> list:
    markers = legacy.find_question_markers(doc)
    cie = legacy.find_question_markers_cambridge_cie(doc)
    if len(cie) >= 2 and len(cie) >= len(markers):
        markers = cie
    markers = fill_gaps(doc, sorted(markers, key=lambda m: (m.page, m.y0)))
    # Lone numbers in the margin (often beside a diagram) are only weak evidence on
    # their own; in_sequence keeps them only where they continue the run.
    have = {(m.page, round(m.y0)) for m in markers}
    weak = [m for m in lone_numbers(doc) if (m.page, round(m.y0)) not in have]
    markers = in_sequence(prefer_bold(doc, sorted(markers + weak, key=lambda m: (m.page, m.y0))))
    if markers:
        end = appendix_start(doc, markers[0].page)
        if end:
            markers = [m for m in markers if (m.page, m.y0) < end]
    return markers


# --- compact question images ---------------------------------------------
#
# Cambridge pages carry a page number and barcodes above y=60, the copyright
# line below y=780 and "DO NOT WRITE IN THIS MARGIN" down the sides. Inside that
# body, the same band method as the Edexcel splitter keeps the printed question
# (text, tables, graphs, grids) and collapses the blank answer space.

CIE_END = re.compile(r"^(Additional page|If you use the following lined page|BLANK PAGE)", re.IGNORECASE)


def cie_body(page: fitz.Page) -> fitz.Rect:
    h = page.rect.height
    # Some papers (e.g. March 2020) start the text at y=53, just under the centred
    # page number; the left margin above 58 is otherwise empty.
    top = 58.0
    for block in page.get_text("dict")["blocks"]:
        for line in block.get("lines", []):
            x0, y0 = line["bbox"][:2]
            text = "".join(s["text"] for s in line["spans"]).replace(chr(7), "").strip()
            # Only a question number or part label; barcodes are also set as text here.
            if x0 < 75 and 46 <= y0 < top and re.match(r"^(\d{1,2}\b|\([a-z]+\))", text):
                top = y0 - 2
    return fitz.Rect(30, top, page.rect.width - 30, h - 62)


def compact_qp_export(doc: fitz.Document, out_dir: Path, url_base: str) -> dict[int, dict]:
    markers = [ed.Marker(m.num, m.page, m.y0) for m in qp_markers(doc)]
    if not markers:
        return {}
    pages = [ed.read_page(doc[i], False, cie_body(doc[i])) for i in range(len(doc))]
    end = None
    last = markers[-1]
    for p in pages[last.page:]:
        hit = next((it for it in p.lines if (CIE_END.match(it.text) or APPENDIX.match(it.text)) and (p.index > last.page or it.rect.y0 > last.y)), None)
        if hit:
            end = (p.index, hit.rect.y0)
            break
    renderer = ed.Renderer(doc)
    width = doc[markers[0].page].rect.width
    x0, x1 = 40.0, width - 40.0
    seps = [p.separator_x for p in pages if p.separator_x]
    if seps:
        x1 = min(x1, min(seps) - 2)  # stop before the "For Examiner's Use" column
    results: dict[int, dict] = {}
    for i, m in enumerate(markers):
        stop = (markers[i + 1].page, markers[i + 1].y) if i + 1 < len(markers) else end
        segs = ed.segment_items(pages, m, stop)
        segs = [(pi, items) for pi, items in segs if any(it.kind != "draw" for it in items)]
        images = ed.compose(renderer, segs, x0, x1, m.y)
        files = []
        for k, img in enumerate(images, start=1):
            name = f"q{m.num:02d}-{k}.png"
            ed.save_png(img, out_dir / name)
            files.append(f"{url_base}/{name}")
        if files:
            results[m.num] = {"images": files, "pages": sorted({pi + 1 for pi, _ in segs})}
    return results


# --- pre-2017 mark schemes ------------------------------------------------


OLD_MS_LABEL = re.compile(r"^(\d{1,2})\.?(?:\s*$|\s+\S|\s*\()")


def old_ms_markers(pages: list[ed.PageInfo]) -> list[ed.Marker]:
    cands = []
    for p in pages[1:]:  # page 1 is the cover
        # Only pages with the old running header; newer schemes have numbered
        # "marking principles" in the same margin.
        if not any(re.match(r"^Page \d+$", it.text) for it in p.lines if it.rect.y0 < 90):
            continue
        for it in p.lines:
            if 36 <= it.rect.x0 <= 68 and it.size >= 9 and 66 < it.rect.y0 < p.rect.height - 50:
                m = OLD_MS_LABEL.match(it.text)
                if m:
                    cands.append(ed.Marker(int(m.group(1)), p.index, it.rect.y0))
    return ed.chain(cands)


TABLE_HEAD = re.compile(r"^Question\b(\s+(Answer|Number|Marks|Guidance))*$", re.IGNORECASE)
TABLE_LABEL = re.compile(r"^(\d{1,2})\s*(?:\(|$)")


def table_markers(pages: list[ed.PageInfo]) -> list[ed.Marker]:
    """Labels like 1(a)(i) under a 'Question' column header, wherever that column sits."""
    cands = []
    last_x = None
    for p in pages:
        heads = [
            it
            for it in p.lines
            if TABLE_HEAD.match(it.text)
            and it.rect.x0 < 200
            and (
                " " in it.text.strip()
                or any(re.match(r"^(Answer|Mark|Scheme|Expected|Guidance)", o.text, re.I) and abs(o.rect.y0 - it.rect.y0) < 30 for o in p.lines)
            )
        ]
        if heads:
            x, top = heads[0].rect.x0, heads[0].rect.y1 - 2
        elif last_x is not None:
            # Some schemes print the header on the first page only.
            x, top = last_x, 66
        else:
            continue
        last_x = x
        for it in p.lines:
            if x - 22 <= it.rect.x0 <= x + 60 and it.size >= 9 and it.rect.y0 > top:
                m = TABLE_LABEL.match(it.text)
                if m:
                    cands.append(ed.Marker(int(m.group(1)), p.index, it.rect.y0))
    if last_x is None:
        # No readable header anywhere (some schemes print it one glyph run at a
        # time): take lone numbers in the left-hand column instead.
        for p in pages:
            for it in p.lines:
                if it.rect.x0 < 140 and it.size >= 9 and it.rect.y0 > 66 and re.fullmatch(r"\d{1,2}", it.text.strip()):
                    cands.append(ed.Marker(int(it.text.strip()), p.index, it.rect.y0))
    return ed.chain(cands)


def strip_running_header(pages: list[ed.PageInfo]) -> None:
    """Drop the 'Page N | Mark Scheme | Syllabus | Paper' block and the footer."""
    for p in pages:
        head = [it for it in p.lines if re.match(r"^(Page \d+|Mark Scheme.*|Syllabus|Paper)$", it.text)]
        cut = max((it.rect.y1 for it in head if it.rect.y0 < 90), default=0)
        if cut:
            # The second header line (session, syllabus code, paper number) follows directly.
            second = [it for it in p.lines if cut < it.rect.y0 < cut + 16 and it.rect.x0 > 150]
            cut = max([cut] + [it.rect.y1 for it in second])
        footer = p.rect.height - 48
        p.content = [it for it in p.content if it.rect.y0 > cut + 1 and it.rect.y1 < footer]


def marker_export(doc: fitz.Document, out_dir: Path, prefix: str, url_base: str, old_layout: bool) -> dict[int, dict]:
    pages = [ed.read_page(doc[i], True) for i in range(len(doc))]
    if old_layout:
        strip_running_header(pages)
        markers = old_ms_markers(pages)
    else:
        markers = table_markers(pages)
    renderer = ed.Renderer(doc)
    results: dict[int, dict] = {}
    width = max(page.rect.width for page in doc)  # landscape pages are wider than the cover
    for i, m in enumerate(markers):
        stop = (markers[i + 1].page, markers[i + 1].y) if i + 1 < len(markers) else None
        segs = ed.segment_items(pages, m, stop)
        segs = [(pi, ed.drop_table_header(items) if pi != m.page else items) for pi, items in segs]
        segs = [(pi, items) for pi, items in segs if any(it.kind != "draw" for it in items)]
        images = ed.compose(renderer, segs, 30, width - 30, m.y)
        files = []
        for k, img in enumerate(images, start=1):
            name = f"{prefix}_question_{m.num:02d}_Q{m.num}_part_{k:02d}.png"
            ed.save_png(img, out_dir / name)
            files.append(f"{url_base}/{name}")
        if files:
            results[m.num] = {"images": files, "pages": sorted({pi + 1 for pi, _ in segs})}
    return results


# --------------------------------------------------------------------------


def run_legacy(doc: fitz.Document, out_dir: Path, prefix: str, mode: str, mc: bool) -> list[dict]:
    pad_between = (2.0 if mc else 28.0) if mode == "mark-scheme" else 10.0
    try:
        return legacy.run_export(
            doc=doc, out_dir=out_dir, prefix=prefix, dpi=150, pad_top=6.0, pad_between=pad_between,
            use_fallback=True, dry_run=False, force_ocr=False, ocr_auto=False, ocr_dpi=200, mode=mode,
        )
    except SystemExit:
        return []


def open_a4(path: Path) -> fitz.Document:
    """Every position check here assumes upright A4 pages. A few papers are A3 (some
    2015-2016 chemistry), and some landscape mark schemes are portrait pages with a
    /Rotate flag, whose text comes out in unrotated coordinates. Make every page
    upright, and redraw A3 pages at A4 size."""
    doc = fitz.open(path)
    for page in doc:
        if page.rotation:
            page.remove_rotation()
    if max(doc[0].rect.width, doc[0].rect.height) < 1000:
        return doc
    scaled = fitz.open()
    for page in doc:
        r = page.rect
        k = 842 / max(r.width, r.height)
        new = scaled.new_page(width=r.width * k, height=r.height * k)
        new.show_pdf_page(new.rect, doc, page.number)
    return scaled


def split_ms(row: dict, expected: set[int]) -> tuple[dict[int, dict], str]:
    """Try each layout in its own scratch folder and keep the one that finds the most questions."""
    if not row["ms"] or not pdf_path(row, "ms").exists():
        return {}, "no mark scheme"
    out_dir, url_base, stem = out_dirs(row, "ms")
    doc = open_a4(pdf_path(row, "ms"))
    clean_document(doc)
    mc = (row["subject"], row["paper"]) in MULTIPLE_CHOICE

    scratch = WORK_ROOT / "_scratch" / out_dir.name
    attempts = {
        "table": lambda d: manifest_to_images(run_legacy(doc, d, stem, "mark-scheme", mc), url_base),
        "header": lambda d: marker_export(doc, d, stem, url_base, old_layout=False),
        "margin": lambda d: marker_export(doc, d, stem, url_base, old_layout=True),
    }
    best: tuple[int, str, dict] = (-1, "", {})
    for name, attempt in attempts.items():
        if mc and name != "table":
            break
        d = scratch / name
        shutil.rmtree(d, ignore_errors=True)
        d.mkdir(parents=True)
        found = attempt(d)
        score = len(set(found) & expected) if expected else len(found)
        if score > best[0]:
            best = (score, name, found)
        if expected and expected <= set(found):
            break

    _, method, found = best
    if out_dir.exists():
        shutil.rmtree(out_dir)
    out_dir.parent.mkdir(parents=True, exist_ok=True)
    shutil.copytree(scratch / method if method else scratch, out_dir, ignore=shutil.ignore_patterns("*.json"))
    shutil.rmtree(scratch, ignore_errors=True)
    return found, method


def process(row: dict, ms_only: bool, force: bool) -> dict:
    work = WORK_ROOT / row["subject"] / row["paper"] / f"{row['slug']}.json"
    if work.exists() and not force:
        return json.loads(work.read_text(encoding="utf-8"))
    record: dict = {"session": row["session"], "paper": row["paper"], "warnings": [], "questions": []}

    doc = open_a4(pdf_path(row, "qp"))
    clean_document(doc)
    markers = qp_markers(doc)
    numbers = [m.num for m in markers]
    texts = {m.num: region_text(doc, markers, i) for i, m in enumerate(markers)}

    qp_images: dict[int, dict] = {}
    if not ms_only:
        out_dir, url_base, stem = out_dirs(row, "qp")
        if out_dir.exists():
            for f in out_dir.iterdir():
                f.unlink()
        out_dir.mkdir(parents=True, exist_ok=True)
        qp_images = compact_qp_export(doc, out_dir, url_base)

    ms, method = split_ms(row, set(numbers))
    record["msMethod"] = method
    missing = sorted(set(numbers) - set(ms))
    if missing and row["ms"]:
        record["warnings"].append(f"MS missing for {missing}")

    for n in numbers:
        q = {"number": n, "text": texts.get(n, "")}
        if n in qp_images:
            q.update(qp_images[n])
        if n in ms:
            q["msImages"] = ms[n]["images"]
            q["msPages"] = ms[n]["pages"]
        record["questions"].append(q)

    work.parent.mkdir(parents=True, exist_ok=True)
    work.write_text(json.dumps(record, indent=1, ensure_ascii=False), encoding="utf-8")
    return record


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--subject", required=True, choices=sorted(FOLDER))
    p.add_argument("--paper")
    p.add_argument("--session-like")
    p.add_argument("--ms-only", action="store_true", help="only (re)split mark schemes; keep existing QP images")
    p.add_argument("--sessions-file", type=Path, help="JSON list of [paper, session] pairs to process")
    p.add_argument("--force", action="store_true")
    args = p.parse_args()

    rows = load_registry(args.subject, args.paper, args.session_like)
    if args.sessions_file:
        wanted = {tuple(x) for x in json.loads(args.sessions_file.read_text(encoding="utf-8"))}
        rows = [r for r in rows if (r["paper"], r["session"]) in wanted]
    for row in rows:
        try:
            rec = process(row, args.ms_only, args.force)
        except Exception as exc:
            print(f"[error] {row['paper']} {row['session']}: {exc}", file=sys.stderr)
            continue
        n = len(rec["questions"])
        ms = sum(1 for q in rec["questions"] if q.get("msImages"))
        flag = "" if not rec["warnings"] else "  ! " + "; ".join(rec["warnings"])
        print(f"{row['paper']:>3} {row['session']:<22} {n:>2} q, {ms:>2} MS ({rec.get('msMethod')}){flag}", flush=True)


if __name__ == "__main__":
    main()
