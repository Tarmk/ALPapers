"""
Remove mirror watermarks and exam-board boilerplate from a PDF before splitting.

Some mirrors stamp every page with a diagonal logo and a footer band of small
print. They add these as separate `q ... Q` graphics groups around the original
page content: one before it (the logo, drawn with a Form XObject) and one after
it (the logo again as paths, plus the footer text). Those groups are cut out of
the content stream, so the original page is left exactly as published.

Cambridge's copyright-acknowledgements paragraph is also redacted: it is not part
of any question, but sits under the last question on the page.

Changes are made to the in-memory document only.
"""

from __future__ import annotations

import re

import pymupdf as fitz

STAMP_COLOUR = re.compile(rb"^0?\.055\d* 0?\.227\d* 0?\.36\d* rg$")
STAMP_TEXT = re.compile(rb"papacambridge", re.IGNORECASE)
# "third-party" is sometimes set with a non-breaking hyphen (U+2011).
BOILERPLATE_START = re.compile(r"^Permission to reproduce items where third.party owned material")
BOILERPLATE_END = re.compile(r"University of Cambridge\.$")


def _groups(stream: bytes) -> list[tuple[int, int, int]]:
    """(start, end, depth) of every q ... Q group, with q/Q on their own lines."""
    groups = []
    stack: list[int] = []
    pos = 0
    for line in stream.split(b"\n"):
        token = line.strip()
        if token == b"q":
            stack.append(pos)
        elif token == b"Q" and stack:
            start = stack.pop()
            groups.append((start, pos + len(line), len(stack)))
        pos += len(line) + 1
    return groups


def _is_stamp(body: bytes) -> bool:
    lines = [l.strip() for l in body.split(b"\n") if l.strip() and l.strip() != b"q"]
    starts_with_colour = bool(lines) and bool(STAMP_COLOUR.match(lines[0]))
    return starts_with_colour or bool(STAMP_TEXT.search(body))


def strip_stamps(stream: bytes) -> bytes:
    groups = _groups(stream)
    cuts: list[tuple[int, int]] = []
    # Outermost groups first, so a whole stamp group is cut once.
    for start, end, _depth in sorted(groups, key=lambda g: g[2]):
        if any(a <= start and end <= b for a, b in cuts):
            continue
        body = stream[start:end]
        if not _is_stamp(body):
            continue
        # Never cut a group that also holds the original page: its TrueType text, or
        # a Form XObject other than the stamp's own logo.
        foreign_xobject = any(name != b"FormXob.pcm" for name in re.findall(rb"/([^\s/]+)\s+Do\b", body))
        if b"/TT" in body or foreign_xobject:
            continue
        cuts.append((start, end))
    if not cuts:
        return stream
    out = bytearray()
    last = 0
    for a, b in sorted(cuts):
        out += stream[last:a]
        last = b
    out += stream[last:]
    return bytes(out)


def clean_document(doc: fitz.Document) -> int:
    """Strip mirror stamps and boilerplate. Returns the number of pages changed."""
    changed = 0
    for page in doc:
        touched = False
        for xref in page.get_contents():
            stream = doc.xref_stream(xref)
            if not STAMP_TEXT.search(stream) and b".055 .227" not in stream:
                continue
            cleaned = strip_stamps(stream)
            if cleaned != stream:
                doc.update_stream(xref, cleaned)
                touched = True

        lines = [
            ("".join(s["text"] for s in line["spans"]).strip(), fitz.Rect(line["bbox"]))
            for block in page.get_text("dict")["blocks"]
            for line in block.get("lines", ())
        ]
        start = next((r for t, r in lines if BOILERPLATE_START.match(t)), None)
        if start is not None:
            end = next((r for t, r in lines if BOILERPLATE_END.search(t) and r.y0 >= start.y0), None)
            if end is not None:
                page.add_redact_annot(fitz.Rect(page.rect.x0 + 20, start.y0 - 12, page.rect.x1 - 20, end.y1 + 2))
                page.apply_redactions(
                    images=fitz.PDF_REDACT_IMAGE_NONE,
                    graphics=fitz.PDF_REDACT_LINE_ART_REMOVE_IF_COVERED,
                )
                touched = True
        changed += touched
    return changed
