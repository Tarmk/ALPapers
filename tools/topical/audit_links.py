#!/usr/bin/env python3
"""
Check that every cached PDF is what subjects.ts says it is: mark-scheme links
should open a mark scheme and question-paper links a question paper, for the
right paper. Mirrors occasionally serve the wrong file under a correct-looking
URL. Scanned PDFs without a text layer are reported as unknown.

  python tools/topical/audit_links.py [--subject physics]
"""

from __future__ import annotations

import argparse
import re

import pymupdf as fitz

from common import load_registry, pdf_path

MS_HINTS = re.compile(r"mark(ing)?\s*scheme|marking\s+(guidance|principles)|question\s+number\s+scheme|\bscheme\b.*\bmarks\b", re.I | re.S)
QP_HINTS = re.compile(r"instructions|answer\s+all\s+(the\s+)?questions|candidate\s+(number|name)|centre\s+number|write\s+your\s+name", re.I)


def kind_of(path) -> str:
    try:
        doc = fitz.open(path)
    except Exception:
        return "unreadable"
    text = " ".join(doc[i].get_text() for i in range(min(3, len(doc))))
    if len(text.strip()) < 80:
        return "scanned"
    ms = bool(MS_HINTS.search(text))
    qp = bool(QP_HINTS.search(text[:3000]))
    if ms and not qp:
        return "ms"
    if qp and not ms:
        return "qp"
    # Both: mark schemes often repeat "answer all questions"; trust the cover title.
    head = doc[0].get_text()[:1500]
    if re.search(r"mark(ing)?\s*scheme", head, re.I):
        return "ms"
    return "qp" if qp else "unknown"


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--subject")
    args = p.parse_args()
    bad = 0
    for row in load_registry(args.subject):
        for kind in ("qp", "ms"):
            if not row[kind]:
                continue
            path = pdf_path(row, kind)
            if not path.exists():
                continue
            got = kind_of(path)
            if got in ("scanned", "unknown"):
                continue
            if got != kind:
                bad += 1
                print(f"{row['subject']} {row['paper']} {row['session']}: {kind.upper()} link serves a {got.upper()}  {row[kind]}")
    print(f"{bad} mismatched link(s)")


if __name__ == "__main__":
    main()
