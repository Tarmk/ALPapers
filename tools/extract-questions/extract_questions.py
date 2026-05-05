#!/usr/bin/env python3
"""
Download a question-paper PDF and export each question as a PNG, in order.

Detects question headings like "Question 1", "Question 2", ... (common for CIE past
papers) via the PDF text layer, or optionally with Tesseract OCR for scan-only files.
Each question is rasterised to a PNG from one heading down to the next (multi-page
questions are stacked into one tall PNG).

Some past-paper URLs (e.g. pages that open a viewer) return HTML instead of a raw
PDF to automated downloads — if --url fails, download the QP in a browser and pass
--pdf path/to/file.pdf.

Usage:
  python extract_questions.py --pdf ./paper.pdf --out ./out --prefix mypaper
  python extract_questions.py --url "https://host/file.pdf" --out ./out
  python extract_questions.py --pdf ./paper.pdf --out ./out --ocr --ocr-dpi 220

  python extract_questions.py --json ../../offline/comsci-cie-paper-3/paper3-years.json \\
    --key "2025 November (v3)" --out ./out
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass
from collections import defaultdict
from pathlib import Path
from typing import Iterable
from urllib.parse import urlparse

try:
    import pytesseract
    from pytesseract import Output as TessOutput

    HAS_TESSERACT = True
except ImportError:
    HAS_TESSERACT = False

import fitz  # PyMuPDF
import requests
from PIL import Image


@dataclass(frozen=True, order=True)
class QuestionMarker:
    num: int
    page: int
    y0: float
    y1: float
    x0: float
    x1: float


def _line_bbox(line: dict) -> tuple[float, float, float, float]:
    xs0 = ys0 = float("inf")
    xs1 = ys1 = float("-inf")
    for sp in line.get("spans", ()):
        x0, y0, x1, y1 = sp["bbox"]
        xs0 = min(xs0, x0)
        ys0 = min(ys0, y0)
        xs1 = max(xs1, x1)
        ys1 = max(ys1, y1)
    return (xs0, ys0, xs1, ys1)


def find_question_markers(doc: fitz.Document) -> list[QuestionMarker]:
    """
    Find 'Question N' headings (word boundary on N so Q1 != Q10).
    """
    pat = re.compile(r"Question\s+(\d+)\b", re.IGNORECASE)
    seen: dict[int, QuestionMarker] = {}

    for page_index in range(len(doc)):
        page = doc[page_index]
        blocks = page.get_text("dict", flags=fitz.TEXT_PRESERVE_WHITESPACE).get("blocks", ())
        for block in blocks:
            if block.get("type") != 0:
                continue
            for line in block.get("lines", ()):
                parts: list[str] = []
                for span in line.get("spans", ()):
                    parts.append(span.get("text", ""))
                line_text = "".join(parts)
                m = pat.search(line_text)
                if not m:
                    continue
                n = int(m.group(1))
                x0, y0, x1, y1 = _line_bbox(line)
                # Keep first occurrence per question number (reading order)
                if n not in seen:
                    seen[n] = QuestionMarker(
                        num=n,
                        page=page_index,
                        y0=y0,
                        y1=y1,
                        x0=x0,
                        x1=x1,
                    )
    return sorted(seen.values(), key=lambda m: (m.page, m.y0))


_CAMBRIDGE_REJECT_NEXT = (
    lambda s: bool(s.startswith("9618")),
    lambda s: s.startswith("© UCLES"),
    lambda s: bool(re.match(r"^\*", s)),
)


def _next_meaningful_line(lines: list[tuple[str, tuple[float, float, float, float]]], idx: int) -> str | None:
    """Return next non-skipped textual line text after idx (same page)."""
    j = idx + 1
    while j < len(lines):
        raw = lines[j][0]
        j += 1
        s = raw.strip().replace("\u2011", "-").replace("\u2212", "-")
        if not s:
            continue
        sl = s.lstrip("*¬").strip()
        if sl.startswith("[Turn over") or sl.startswith("[Turn") or sl.upper().startswith("TURN OVER"):
            continue
        return s
    return None


def _cambridge_solo_digit_is_heading(num: int, next_text: str | None) -> bool:
    """Heuristic: standalone '2'/'3'/'10' markers vs margin page digits before 9618/…"""
    if num < 1 or num > 40:
        return False
    if not next_text:
        return False
    nt = next_text.strip()
    nt = nt.lstrip("*¬ ").strip()

    for pred in _CAMBRIDGE_REJECT_NEXT:
        if pred(nt):
            return False
    # Margin page counters before © / paper code blocks
    if nt.startswith(("9618/", "Paper ", "Paper")):
        return False

    # Normal question starts after a lone number
    if nt.startswith("("):
        return True
    if nt and nt[0].isalpha():
        return True
    if nt.startswith(("•", "–", "-", "—")):
        return True
    # Rare: bullets or OCR noise
    if len(nt) >= 10 and nt[0].isalpha():
        return True
    return False


def find_question_markers_cambridge_cie(doc: fitz.Document) -> list[QuestionMarker]:
    """
    Cambridge Int. style: top-level stems are usually at the left margin:
    either a lone "1" before the question text, or "10 The question text...".
    """
    solo = re.compile(r"^(\d{1,2})$")
    inline = re.compile(r"^(\d{1,2})\s+\S")
    seen: dict[int, QuestionMarker] = {}

    def iter_page_lines(page: fitz.Page) -> list[tuple[str, tuple[float, float, float, float]]]:
        blocks = page.get_text("dict", flags=fitz.TEXT_PRESERVE_WHITESPACE).get("blocks", ())
        tb = [b for b in blocks if b.get("type") == 0]
        tb.sort(key=lambda b: (b["bbox"][1], b["bbox"][0]))
        out: list[tuple[str, tuple[float, float, float, float]]] = []
        for blk in tb:
            for line in blk.get("lines", ()):
                merged = "".join(sp.get("text", "") for sp in line.get("spans", ()))
                out.append((merged, _line_bbox(line)))
        return out

    for page_index in range(len(doc)):
        page = doc[page_index]
        lines = iter_page_lines(page)
        for li, (_, bbox) in enumerate(lines):
            t = lines[li][0].strip().replace("\u2011", "-")
            x0, y0, x1, y1 = bbox

            # Real question markers in CIE 9618 papers sit near the left content margin.
            # This excludes centred page numbers, header/footer codes, and most tables/graphs.
            if not (35 <= x0 <= 65 and 55 <= y0 <= 760):
                continue

            sm = solo.match(t)
            im = inline.match(t)
            if sm:
                n = int(sm.group(1))
                nx = _next_meaningful_line(lines, li)
                if not _cambridge_solo_digit_is_heading(n, nx):
                    continue
            elif im:
                n = int(im.group(1))
                if n < 1 or n > 40:
                    continue
            else:
                continue

            if n not in seen:
                seen[n] = QuestionMarker(
                    num=n,
                    page=page_index,
                    y0=float(y0),
                    y1=float(y1),
                    x0=float(x0),
                    x1=float(x1),
                )
    return sorted(seen.values(), key=lambda m: (m.page, m.y0))


def find_question_markers_fallback(doc: fitz.Document) -> list[QuestionMarker]:
    """If 'Question N' not found, try lines that look like '1.' or '1 ' at line start."""
    pat = re.compile(r"^\s*(\d{1,2})\s*[\.)]\s+\S")
    seen: dict[int, QuestionMarker] = {}

    for page_index in range(len(doc)):
        page = doc[page_index]
        blocks = page.get_text("dict", flags=fitz.TEXT_PRESERVE_WHITESPACE).get("blocks", ())
        for block in blocks:
            if block.get("type") != 0:
                continue
            for line in block.get("lines", ()):
                parts: list[str] = []
                for span in line.get("spans", ()):
                    parts.append(span.get("text", ""))
                line_text = "".join(parts)
                m = pat.match(line_text.strip())
                if not m:
                    continue
                n = int(m.group(1))
                if n < 1 or n > 45:
                    continue
                # Skip likely false positives (page numbers often small)
                if page_index == 0 and n > 20:
                    continue
                x0, y0, x1, y1 = _line_bbox(line)
                if n not in seen:
                    seen[n] = QuestionMarker(
                        num=n,
                        page=page_index,
                        y0=y0,
                        y1=y1,
                        x0=x0,
                        x1=x1,
                    )
    return sorted(seen.values(), key=lambda m: (m.page, m.y0))


def find_question_markers_ocr(doc: fitz.Document, ocr_dpi: int) -> list[QuestionMarker]:
    """Locate 'Question N' by OCR on rendered pages (scan-only PDFs, no text layer)."""
    if not HAS_TESSERACT:
        raise RuntimeError(
            "pytesseract is not installed. Run: pip install pytesseract (and install the Tesseract engine)."
        )

    pat = re.compile(r"Question\s*(\d{1,2})\b", re.IGNORECASE)
    seen: dict[int, QuestionMarker] = {}
    cfg = "--psm 6"

    for page_index in range(len(doc)):
        page = doc[page_index]
        pw, ph = page.rect.width, page.rect.height
        mat = fitz.Matrix(ocr_dpi / 72, ocr_dpi / 72)
        pix = page.get_pixmap(matrix=mat, alpha=False)
        hpx, wpx = pix.height, pix.width
        img = pixmap_to_image(pix).convert("RGB")

        data = pytesseract.image_to_data(img, output_type=TessOutput.DICT, config=cfg)
        n = len(data.get("text", ()))

        lines = defaultdict(list)
        for i in range(n):
            txt = (data["text"][i] or "").strip()
            if not txt:
                continue
            key = (
                int(data["block_num"][i]),
                int(data["par_num"][i]),
                int(data["line_num"][i]),
            )
            left, top = float(data["left"][i]), float(data["top"][i])
            wid, ht = float(data["width"][i]), float(data["height"][i])
            lines[key].append((left, top, wid, ht, txt))

        for key in sorted(lines.keys()):
            parts = sorted(lines[key], key=lambda x: x[0])
            merged = " ".join(p[4] for p in parts)
            m = pat.search(merged)
            if not m:
                continue
            num = int(m.group(1))
            tops = [p[1] for p in parts]
            bottoms = [p[1] + p[3] for p in parts]
            lefts = [p[0] for p in parts]
            rights = [p[0] + p[2] for p in parts]
            y_min_pix = min(tops)
            y_max_pix = max(bottoms)
            x_min_pix = min(lefts)
            x_max_pix = max(rights)

            # Map OCR pixel coordinates (origin top-left) to PDF units
            sy = ph / float(hpx)
            sx = pw / float(wpx)
            y0 = y_min_pix * sy
            y1 = y_max_pix * sy
            x0 = x_min_pix * sx
            x1 = x_max_pix * sx

            if num not in seen:
                seen[num] = QuestionMarker(
                    num=num,
                    page=page_index,
                    y0=float(y0),
                    y1=float(y1),
                    x0=float(x0),
                    x1=float(x1),
                )

    return sorted(seen.values(), key=lambda m: (m.page, m.y0))


def _visual_bbox(page: fitz.Page, bbox: tuple[float, float, float, float]) -> tuple[float, float, float, float]:
    """Map text coordinates to the rendered page orientation used by get_pixmap()."""
    x0, y0, x1, y1 = bbox
    rotation = page.rotation % 360
    if rotation == 0:
        return bbox
    if rotation == 90:
        return (page.rect.width - y1, x0, page.rect.width - y0, x1)
    if rotation == 180:
        return (page.rect.width - x1, page.rect.height - y1, page.rect.width - x0, page.rect.height - y0)
    if rotation == 270:
        return (y0, page.rect.height - x1, y1, page.rect.height - x0)
    return bbox


def _visual_rect(page: fitz.Page, rect: fitz.Rect) -> tuple[float, float, float, float]:
    return _visual_bbox(page, (rect.x0, rect.y0, rect.x1, rect.y1))


def _page_text_lines(page: fitz.Page) -> list[tuple[str, tuple[float, float, float, float]]]:
    blocks = page.get_text("dict", flags=fitz.TEXT_PRESERVE_WHITESPACE).get("blocks", ())
    lines: list[tuple[str, tuple[float, float, float, float]]] = []
    for block in blocks:
        if block.get("type") != 0:
            continue
        for line in block.get("lines", ()):
            text = "".join(span.get("text", "") for span in line.get("spans", ())).strip()
            if not text:
                continue
            lines.append((text, _line_bbox(line)))
    return lines


def find_mark_scheme_markers(doc: fitz.Document) -> list[QuestionMarker]:
    """
    Mark schemes use answer tables rather than question stems. Detect the first row
    for each top-level question, e.g. 1(a), 2, 10(b), in the Question column.
    Coordinates are stored in rendered-page orientation for image-based cropping.
    """
    question_label = re.compile(r"^(\d{1,2})(?:\([a-zivx]+\))*$", re.IGNORECASE)
    seen: dict[int, QuestionMarker] = {}

    for page_index in range(len(doc)):
        page = doc[page_index]
        lines = _page_text_lines(page)
        has_answer_table_header = any(
            text.strip().lower() == "question" and 35 <= _visual_bbox(page, bbox)[0] <= 110
            for text, bbox in lines
        ) and any(text.strip().lower() in {"answer", "answers"} for text, _ in lines)
        if not has_answer_table_header:
            continue

        for raw_text, raw_bbox in lines:
            text = raw_text.replace("\u2011", "-").replace("\u2212", "-").strip()
            match = question_label.match(text)
            if not match:
                continue

            num = int(match.group(1))
            if num < 1 or num > 40 or num in seen:
                continue

            vx0, vy0, vx1, vy1 = _visual_bbox(page, raw_bbox)

            # The answer-table Question column is near the left edge after any
            # page rotation is applied. This excludes marks-column numerals.
            left_limit = 90 if re.fullmatch(r"\d{1,2}", text) else 100
            if not (45 <= vx0 <= left_limit and 45 <= vy0 <= page.rect.height - 35):
                continue

            seen[num] = QuestionMarker(
                num=num,
                page=page_index,
                y0=float(vy0),
                y1=float(vy1),
                x0=float(vx0),
                x1=float(vx1),
            )

    return sorted(seen.values(), key=lambda marker: (marker.page, marker.y0))


def pixmap_to_image(pix: fitz.Pixmap) -> Image.Image:
    if pix.n == 1:  # grayscale
        return Image.frombytes("L", (pix.width, pix.height), pix.samples)
    if pix.n == 4:  # rgba
        return Image.frombytes("RGBA", (pix.width, pix.height), pix.samples)
    if pix.n == 3:
        return Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
    pix = fitz.Pixmap(fitz.csRGB, pix)
    return Image.frombytes("RGB", (pix.width, pix.height), pix.samples)


def render_clip(page: fitz.Page, clip: fitz.Rect, dpi: int) -> Image.Image:
    mat = fitz.Matrix(dpi / 72, dpi / 72)
    pix = page.get_pixmap(matrix=mat, clip=clip, alpha=False)
    return pixmap_to_image(pix).convert("RGB")


def page_is_marked_blank(page: fitz.Page) -> bool:
    return "BLANK PAGE" in page.get_text("text").upper()


def render_page_image(page: fitz.Page, dpi: int) -> Image.Image:
    mat = fitz.Matrix(dpi / 72, dpi / 72)
    pix = page.get_pixmap(matrix=mat, alpha=False)
    return pixmap_to_image(pix).convert("RGB")


def crop_rendered_page(page: fitz.Page, dpi: int, y_top: float, y_bot: float) -> Image.Image:
    image = render_page_image(page, dpi)
    scale = dpi / 72
    top = max(0, min(image.height - 1, int(y_top * scale)))
    bottom = max(top + 1, min(image.height, int(y_bot * scale)))
    return image.crop((0, top, image.width, bottom))


def crop_rendered_rect(
    page: fitz.Page,
    dpi: int,
    x_left: float,
    y_top: float,
    x_right: float,
    y_bot: float,
) -> Image.Image:
    image = render_page_image(page, dpi)
    scale = dpi / 72
    left = max(0, min(image.width - 1, int(x_left * scale)))
    right = max(left + 1, min(image.width, int(x_right * scale)))
    top = max(0, min(image.height - 1, int(y_top * scale)))
    bottom = max(top + 1, min(image.height, int(y_bot * scale)))
    return image.crop((left, top, right, bottom))


def _mark_scheme_table_lines(page: fitz.Page) -> list[float]:
    lines: list[float] = []
    for drawing in page.get_drawings():
        rect = drawing.get("rect")
        if not rect:
            continue
        x0, y0, x1, y1 = _visual_rect(page, rect)
        if abs(y1 - y0) <= 2 and (x1 - x0) >= 250:
            lines.append((y0 + y1) / 2)
    return sorted(set(round(line, 2) for line in lines))


def _mark_scheme_table_top(page: fitz.Page, y_limit: float) -> float:
    candidates = [line for line in _mark_scheme_table_lines(page) if line <= y_limit]
    return candidates[0] if candidates else 0.0


def _mark_scheme_table_bottom(page: fitz.Page, y_top: float, y_limit: float) -> float:
    candidates = [line for line in _mark_scheme_table_lines(page) if y_top + 8 <= line <= y_limit + 3]
    return candidates[-1] if candidates else y_limit


def _append_mark_scheme_crop(
    parts: list[tuple[int, Image.Image]],
    page: fitz.Page,
    page_number: int,
    dpi: int,
    y_top: float,
    y_bot: float,
) -> None:
    if y_bot - y_top < 12 or page_is_marked_blank(page):
        return
    parts.append((page_number, crop_rendered_page(page, dpi, y_top, y_bot)))


def render_mark_scheme_segments(
    doc: fitz.Document,
    start: QuestionMarker,
    end: QuestionMarker | None,
    dpi: int,
    pad_top: float,
    pad_between: float,
) -> list[tuple[int, Image.Image]]:
    """Render mark-scheme rows using rendered-page coordinates, including rotated pages."""
    p0 = start.page
    y_top = max(0.0, start.y0 - pad_top)

    if end is None:
        p1 = len(doc) - 1
        y_bot = doc[p1].rect.height
    else:
        p1 = end.page
        y_bot = max(0.0, end.y0 - pad_between)

    parts: list[tuple[int, Image.Image]] = []

    if p0 == p1:
        page = doc[p0]
        y_limit = min(max(y_bot, y_top + 1), page.rect.height)
        y_bottom = _mark_scheme_table_bottom(page, y_top, y_limit)
        _append_mark_scheme_crop(parts, page, p0 + 1, dpi, y_top, y_bottom)
    else:
        first_page = doc[p0]
        y_bottom = _mark_scheme_table_bottom(first_page, y_top, first_page.rect.height)
        _append_mark_scheme_crop(parts, first_page, p0 + 1, dpi, y_top, y_bottom)

        for page_index in range(p0 + 1, p1):
            page = doc[page_index]
            y_middle_top = _mark_scheme_table_top(page, page.rect.height)
            y_middle_bottom = _mark_scheme_table_bottom(page, y_middle_top, page.rect.height)
            _append_mark_scheme_crop(parts, page, page_index + 1, dpi, y_middle_top, y_middle_bottom)

        last_page = doc[p1]
        # If the next question starts near the top of the next page, the slice
        # before it is only the page header, not answer content.
        if y_bot >= 120:
            y_last_top = _mark_scheme_table_top(last_page, y_bot)
            y_limit = min(max(y_bot, 1), last_page.rect.height)
            y_last_bottom = _mark_scheme_table_bottom(last_page, y_last_top, y_limit)
            _append_mark_scheme_crop(parts, last_page, p1 + 1, dpi, y_last_top, y_last_bottom)

    return parts


def render_legacy_mc_key_segments(doc: fitz.Document, dpi: int) -> dict[int, tuple[int, Image.Image]]:
    """
    Older Physics P1 mark schemes use a compact two-column answer key rather than
    the newer 'Question / Answer / Marks' table. Crop each small number+key row.
    """
    rows: dict[int, tuple[int, Image.Image]] = {}
    number_pattern = re.compile(r"^\d{1,2}$")

    for page_index in range(len(doc)):
        page = doc[page_index]
        lines = _page_text_lines(page)
        lowered = {text.strip().lower() for text, _ in lines}
        if "key" not in lowered or "question" not in lowered:
            continue

        candidates: list[tuple[int, float, float, float, float]] = []
        for raw_text, raw_bbox in lines:
            text = raw_text.strip()
            if not number_pattern.match(text):
                continue
            num = int(text)
            if not 1 <= num <= 40 or num in rows:
                continue
            x0, y0, x1, y1 = _visual_bbox(page, raw_bbox)
            if not (120 <= x0 <= 430 and 75 <= y0 <= page.rect.height - 35):
                continue
            candidates.append((num, x0, y0, x1, y1))

        for num, x0, y0, _x1, y1 in candidates:
            same_column = sorted(
                (
                    (other_num, other_y0, other_y1)
                    for other_num, other_x0, other_y0, _other_x1, other_y1 in candidates
                    if abs(other_x0 - x0) <= 60
                ),
                key=lambda item: item[1],
            )
            next_row_top = next((other_y0 for other_num, other_y0, _ in same_column if other_y0 > y0), None)
            y_bot = min(next_row_top - 2, page.rect.height) if next_row_top else min(y1 + 10, page.rect.height)

            if x0 < page.rect.width / 2:
                x_left, x_right = max(0, x0 - 28), min(page.rect.width, x0 + 105)
            else:
                x_left, x_right = max(0, x0 - 28), min(page.rect.width, x0 + 105)

            rows[num] = (
                page_index + 1,
                crop_rendered_rect(page, dpi, x_left, max(0, y0 - 5), x_right, y_bot),
            )

    return rows


def render_question_segments(
    doc: fitz.Document,
    start: QuestionMarker,
    end: QuestionMarker | None,
    dpi: int,
    pad_top: float,
    pad_between: float,
) -> list[tuple[int, Image.Image]]:
    """
    Render one PNG segment per PDF page. This avoids one very tall PNG for multi-page
    questions and lets us skip blank pages / tiny next-page header slivers.
    """
    p0 = start.page
    y_top = max(0.0, start.y0 - pad_top)

    if end is None:
        p1 = len(doc) - 1
        y_bot = doc[p1].rect.height
    else:
        p1 = end.page
        y_bot = max(0.0, end.y0 - pad_between)

    parts: list[tuple[int, Image.Image]] = []

    if p0 == p1:
        page = doc[p0]
        h = page.rect.height
        clip = fitz.Rect(0, min(y_top, h - 1), page.rect.width, min(max(y_bot, y_top + 1), h))
        if not page_is_marked_blank(page):
            parts.append((p0 + 1, render_clip(page, clip, dpi)))
    else:
        # First page: from y_top to bottom
        page0 = doc[p0]
        h0 = page0.rect.height
        clip0 = fitz.Rect(0, min(y_top, h0 - 1), page0.rect.width, h0)
        if not page_is_marked_blank(page0):
            parts.append((p0 + 1, render_clip(page0, clip0, dpi)))
        # Full middle pages
        for pn in range(p0 + 1, p1):
            pg = doc[pn]
            if page_is_marked_blank(pg):
                continue
            clip_m = pg.rect
            parts.append((pn + 1, render_clip(pg, clip_m, dpi)))
        # Last page: top to y_bot
        page_last = doc[p1]
        hl = page_last.rect.height
        # If the next question starts right at the top of the next page, this page
        # segment is just page number/header whitespace. Do not save it.
        if y_bot >= 90 and not page_is_marked_blank(page_last):
            clip_last = fitz.Rect(0, 0, page_last.rect.width, min(max(y_bot, 1), hl))
            parts.append((p1 + 1, render_clip(page_last, clip_last, dpi)))

    return parts


def _require_pdf_bytes(data: bytes, source: str) -> None:
    if data.startswith(b"%PDF"):
        return
    hint = ""
    try:
        head = data[:800].decode("utf-8", errors="ignore").lower()
        if "<html" in head or "<!doctype html" in head:
            hint = (
                " The server returned HTML (often a browser-only viewer). "
                "Save the PDF locally and use --pdf."
            )
    except Exception:
        pass
    raise SystemExit(f"{source} is not a PDF (missing %PDF header).{hint}")


def download_pdf(url: str, cache_path: Path | None, timeout: int = 120) -> bytes:
    if cache_path and cache_path.is_file():
        data = cache_path.read_bytes()
        _require_pdf_bytes(data, f"Cached file {cache_path}")
        return data
    r = requests.get(
        url,
        timeout=timeout,
        headers={"User-Agent": "TimPapers-question-extractor/1.0"},
    )
    r.raise_for_status()
    data = r.content
    _require_pdf_bytes(data, f"Download from {url!r}")
    if cache_path:
        cache_path.parent.mkdir(parents=True, exist_ok=True)
        cache_path.write_bytes(data)
    return data


def load_pdf(source: Path | bytes) -> fitz.Document:
    if isinstance(source, bytes):
        _require_pdf_bytes(source, "In-memory PDF")
        return fitz.open(stream=source, filetype="pdf")
    data = Path(source).read_bytes()
    _require_pdf_bytes(data, str(source))
    return fitz.open(stream=data, filetype="pdf")


def sanitize_prefix(name: str) -> str:
    return re.sub(r"[^\w.\-]+", "_", name).strip("_") or "paper"


def run_export(
    doc: fitz.Document,
    out_dir: Path,
    prefix: str,
    dpi: int,
    pad_top: float,
    pad_between: float,
    use_fallback: bool,
    dry_run: bool,
    force_ocr: bool,
    ocr_auto: bool,
    ocr_dpi: int,
    mode: str = "question",
) -> list[dict]:
    ocr_used = False

    if mode == "mark-scheme":
        markers = find_mark_scheme_markers(doc)
    elif force_ocr:
        if not HAS_TESSERACT:
            raise SystemExit(
                "OCR requested but pytesseract is not installed "
                '(pip install pytesseract) or Tesseract OCR is missing on PATH.'
            )
        print("[info] --ocr: detecting headings via Tesseract (may take minutes).", file=sys.stderr)
        markers = find_question_markers_ocr(doc, ocr_dpi)
        ocr_used = True
    else:
        markers = find_question_markers(doc)
        if use_fallback:
            cie = find_question_markers_cambridge_cie(doc)
            if len(cie) >= 2 and len(cie) >= len(markers):
                markers = cie

        if len(markers) < 2 and use_fallback:
            fb = find_question_markers_fallback(doc)
            if len(fb) >= len(markers):
                markers = fb

        if not markers:
            if ocr_auto:
                if not HAS_TESSERACT:
                    raise SystemExit(
                        "--ocr-auto needs pytesseract and Tesseract on PATH "
                        '(install both, then retry).'
                    )
                print(
                    "[info] No embedded text headings — trying OCR (--ocr-auto).",
                    file=sys.stderr,
                )
                markers = find_question_markers_ocr(doc, ocr_dpi)
                ocr_used = True

    if not markers:
        if mode == "mark-scheme":
            legacy_mc_segments = render_legacy_mc_key_segments(doc, dpi)
            if legacy_mc_segments:
                out_dir.mkdir(parents=True, exist_ok=True)
                manifest: list[dict] = []
                for num in sorted(legacy_mc_segments):
                    pdf_page, img = legacy_mc_segments[num]
                    fname = f"{prefix}_question_{num:02d}_Q{num}.png"
                    path = out_dir / fname
                    if not dry_run:
                        img.save(path, format="PNG", optimize=True)
                        print(path)
                    else:
                        print(f"[dry-run] would write {path} ({img.width}x{img.height})")
                    manifest.append(
                        {
                            "question": num,
                            "start_page": pdf_page,
                            "approx_pages_span": 1,
                            "outputs": [
                                {
                                    "file": fname,
                                    "pdf_page": pdf_page,
                                    "part": 1,
                                    "width": img.width,
                                    "height": img.height,
                                }
                            ],
                        }
                    )

                manifest_path = out_dir / f"{prefix}_manifest.json"
                manifest_full = {
                    "prefix": prefix,
                    "dpi": dpi,
                    "mode": mode,
                    "ocr_used": ocr_used,
                    "ocr_detection_dpi": ocr_dpi if ocr_used else None,
                    "questions": manifest,
                }
                if not dry_run:
                    manifest_path.write_text(json.dumps(manifest_full, indent=2), encoding="utf-8")
                    print(manifest_path)
                return manifest

        raise SystemExit(
            "No question headings found. Typical fixes:\n"
            "  • If the PDF is a scan/image: add --ocr (requires Tesseract on your PATH)\n"
            "  • If headings don't say 'Question 1': add --no-fallback and edit patterns in code\n"
            "  • If text is selectable: inspect the QP PDF for odd wording/formatting."
        )

    out_dir.mkdir(parents=True, exist_ok=True)
    # Reading order — used to slice from Question N down to Question N+1
    order = sorted(markers, key=lambda m: (m.page, m.y0))

    manifest: list[dict] = []
    for i, cur in enumerate(order):
        nxt = order[i + 1] if i + 1 < len(order) else None

        region_desc = {
            "question": cur.num,
            "start_page": cur.page + 1,
            "outputs": [],
        }
        if nxt:
            region_desc["next_question"] = nxt.num
            region_desc["end_before_page"] = nxt.page + 1

        if mode == "mark-scheme":
            segments = render_mark_scheme_segments(doc, cur, nxt, dpi, pad_top, pad_between)
        else:
            segments = render_question_segments(doc, cur, nxt, dpi, pad_top, pad_between)
        if not segments:
            print(f"[warn] Q{cur.num}: no non-blank page segments produced", file=sys.stderr)
            continue

        pages_span = (
            (nxt.page - cur.page + 1) if nxt else (len(doc) - cur.page)
        )
        region_desc["approx_pages_span"] = int(pages_span)

        for part_index, (pdf_page, img) in enumerate(segments, start=1):
            if len(segments) == 1:
                fname = f"{prefix}_question_{cur.num:02d}_Q{cur.num}.png"
            else:
                fname = f"{prefix}_question_{cur.num:02d}_Q{cur.num}_part_{part_index:02d}.png"
            path = out_dir / fname
            output_info = {
                "file": fname,
                "pdf_page": pdf_page,
                "part": part_index,
                "width": img.width,
                "height": img.height,
            }
            region_desc["outputs"].append(output_info)

            if dry_run:
                print(f"[dry-run] would write {path} ({img.width}x{img.height})")
            else:
                img.save(path, format="PNG", optimize=True)
                print(path)

        manifest.append(region_desc)

    manifest_path = out_dir / f"{prefix}_manifest.json"
    manifest_full = {
        "prefix": prefix,
        "dpi": dpi,
        "mode": mode,
        "ocr_used": ocr_used,
        "ocr_detection_dpi": ocr_dpi if ocr_used else None,
        "questions": manifest,
    }
    if not dry_run:
        manifest_path.write_text(json.dumps(manifest_full, indent=2), encoding="utf-8")
        print(manifest_path)

    return manifest


def qp_label_from_url(url: str) -> str:
    path = urlparse(url).path
    stem = Path(path).stem
    return stem or "paper"


def load_json_qp_path(json_path: Path, key: str | None, qp_field: str) -> tuple[str, str]:
    data = json.loads(json_path.read_text(encoding="utf-8"))
    if key is None:
        raise SystemExit("--key is required when using --json (session label inside years).")

    years = data.get("years")
    if not isinstance(years, dict):
        raise SystemExit("JSON missing .years object")

    if key not in years:
        available = sorted(years.keys())[:40]
        raise SystemExit(f"Unknown key {key!r}. First keys: {available!r}")

    entry = years[key]
    if not isinstance(entry, dict):
        raise SystemExit(f"years[{key!r}] must be an object")

    qp = entry.get(qp_field)
    if not qp or not isinstance(qp, str):
        raise SystemExit(f"No {qp_field!r} URL for {key!r}")

    prefix = sanitize_prefix(qp_label_from_url(qp))
    return qp, prefix


def main(argv: Iterable[str] | None = None) -> None:
    p = argparse.ArgumentParser(description="Extract per-question PNGs from a QP PDF.")
    p.add_argument("--url", help="HTTPS URL of the question paper PDF")
    p.add_argument("--pdf", type=Path, help="Local PDF path")
    p.add_argument("--json", type=Path, help="paper3-years.json style file (use with --key)")
    p.add_argument("--key", help="Which entry in JSON .years to use")
    p.add_argument("--qp-field", default="qp", help="field name for QP URL in JSON year entry")
    p.add_argument("--out", type=Path, required=True, help="Output directory")
    p.add_argument("--prefix", help="Filename prefix for PNGs")
    p.add_argument(
        "--mode",
        choices=("question", "mark-scheme"),
        default="question",
        help="Extraction layout to detect (default: question)",
    )
    p.add_argument("--dpi", type=int, default=150, help="Rasterisation DPI (default 150)")
    p.add_argument("--pad-top", type=float, default=6.0, help="Pdf points above 'Question N' line")
    p.add_argument(
        "--pad-between",
        type=float,
        default=10.0,
        help="Pdf points gap before next question heading",
    )
    p.add_argument("--cache", type=Path, help="Optional path to reuse/save downloaded PDF bytes")
    p.add_argument("--dry-run", action="store_true", help="Detect questions only; do not write PNGs")
    p.add_argument(
        "--no-fallback",
        action="store_true",
        help="Do not try '1.' / '2.' line-number style if Question N not found",
    )
    ocr = p.add_argument_group("OCR (scan/image PDFs)")
    ocr.add_argument(
        "--ocr",
        action="store_true",
        help="Find 'Question N' via Tesseract on rendered pages (ignores embedded text)",
    )
    ocr.add_argument(
        "--ocr-auto",
        action="store_true",
        dest="ocr_auto",
        help="If no embedded headings are found, run OCR automatically",
    )
    ocr.add_argument("--ocr-dpi", type=int, default=200, help="Rendering DPI during OCR detection (72–360, default 200)")
    args = p.parse_args(argv if argv is not None else sys.argv[1:])

    if bool(args.url) + bool(args.pdf) + bool(args.json) != 1:
        p.error("Specify exactly one of --url, --pdf, --json")

    prefix: str
    pdf_bytes: bytes | None = None

    if args.json:
        url, prefix_auto = load_json_qp_path(args.json, args.key, args.qp_field)
        prefix = sanitize_prefix(args.prefix or prefix_auto)
        cache = args.cache or (args.out.parent / ".pdf_cache" / f"{prefix}.pdf")
        pdf_bytes = download_pdf(url, cache_path=cache)
    elif args.url:
        url = args.url
        prefix = sanitize_prefix(args.prefix or qp_label_from_url(url))
        cache = args.cache or (args.out.parent / ".pdf_cache" / f"{prefix}.pdf")
        pdf_bytes = download_pdf(url, cache_path=cache)
    else:
        path = args.pdf
        assert path is not None
        prefix = sanitize_prefix(args.prefix or path.stem)

    dpi = args.dpi
    if dpi < 72 or dpi > 600:
        p.error("--dpi should be between 72 and 600")

    od = args.ocr_dpi
    if od < 72 or od > 360:
        p.error("--ocr-dpi should be between 72 and 360")

    if pdf_bytes is not None:
        doc = load_pdf(pdf_bytes)
    else:
        assert args.pdf is not None
        doc = load_pdf(args.pdf.resolve())

    try:
        run_export(
            doc=doc,
            out_dir=args.out.resolve(),
            prefix=prefix,
            dpi=dpi,
            pad_top=args.pad_top,
            pad_between=args.pad_between,
            use_fallback=not args.no_fallback,
            dry_run=args.dry_run,
            force_ocr=bool(args.ocr),
            ocr_auto=bool(args.ocr_auto),
            ocr_dpi=od,
            mode=args.mode,
        )
    finally:
        doc.close()


if __name__ == "__main__":
    main()
