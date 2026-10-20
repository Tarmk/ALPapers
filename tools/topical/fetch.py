#!/usr/bin/env python3
"""
Download the question papers and mark schemes listed in offline/registry.json
into offline/pdfs/<subject>/<paper>/<session-slug>.{qp,ms}.pdf.

Files that are already cached are skipped, so this is safe to re-run after
adding new sessions to src/data/subjects.ts (run registry.mjs first).

  python tools/topical/fetch.py --subject maths
  python tools/topical/fetch.py --subject physics --paper P2 --session-like 2026
"""

from __future__ import annotations

import argparse
import re
import shutil
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from urllib.parse import urlparse

import requests

from common import PDF_ROOT, load_registry, pdf_path

HEADERS = {"User-Agent": "Mozilla/5.0 (past-papers topical pipeline)"}

# Some hosts serve an HTML viewer instead of the PDF; these mirrors carry the same files.
PAPACAMBRIDGE = "https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/"


def candidates(url: str) -> list[str]:
    out = [url]
    name = url.rsplit("/", 1)[-1]
    if "pseudocode.pro" in url:
        out.append(PAPACAMBRIDGE + name)
    return out


LEGACY = PDF_ROOT.parent / "downloaded-pdfs"
LEGACY_DIR = {"physics": ("physics-cie", "PHY-"), "comsci": ("comsci-cie", "")}


def legacy_copy(row: dict, kind: str) -> Path | None:
    """PDFs fetched by the older tools/extract-questions scripts (tracked in git)."""
    if row["subject"] not in LEGACY_DIR:
        return None
    folder, prefix = LEGACY_DIR[row["subject"]]
    stem = re.sub(r"[^\w.\-]+", "_", Path(urlparse(row[kind]).path).stem).strip("_")
    candidate = LEGACY / folder / f"{prefix}{row['paper']}{'-MS' if kind == 'ms' else ''}" / f"{stem}.pdf"
    return candidate if candidate.is_file() else None


def download(url: str, dest: Path, legacy: Path | None = None) -> str:
    if dest.is_file() and dest.stat().st_size > 0:
        return "cached"
    if legacy is not None:
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(legacy, dest)
        return "copied"
    errors = []
    for candidate in candidates(url):
        try:
            r = requests.get(candidate, headers=HEADERS, timeout=120)
            r.raise_for_status()
            if not r.content.startswith(b"%PDF"):
                errors.append(f"{candidate}: not a PDF")
                continue
            dest.parent.mkdir(parents=True, exist_ok=True)
            tmp = dest.with_suffix(".part")
            tmp.write_bytes(r.content)
            tmp.replace(dest)
            return "downloaded"
        except Exception as exc:  # network errors are reported, not fatal
            errors.append(f"{candidate}: {exc}")
    return "failed: " + "; ".join(errors)


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--subject")
    p.add_argument("--paper")
    p.add_argument("--session-like", help="only sessions containing this text")
    p.add_argument("--workers", type=int, default=8)
    args = p.parse_args()

    jobs = []
    for row in load_registry(args.subject, args.paper, args.session_like):
        jobs.append((row["qp"], pdf_path(row, "qp"), legacy_copy(row, "qp")))
        if row["ms"]:
            jobs.append((row["ms"], pdf_path(row, "ms"), legacy_copy(row, "ms")))

    print(f"{len(jobs)} files -> {PDF_ROOT}")
    failed = 0
    with ThreadPoolExecutor(args.workers) as pool:
        for (url, dest, _legacy), status in zip(jobs, pool.map(lambda j: download(*j), jobs)):
            if status.startswith("failed"):
                failed += 1
                print(f"[fail] {dest.relative_to(PDF_ROOT)}: {status}", file=sys.stderr)
            elif status == "downloaded":
                print(f"[ok] {dest.relative_to(PDF_ROOT)}")
    print(f"done, {failed} failed")


if __name__ == "__main__":
    main()
