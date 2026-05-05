#!/usr/bin/env python3
"""
Batch download and extract all question papers from a paper-years JSON file.

Example:
  python batch_extract.py \
    --json ../../offline/comsci-cie-paper-3/paper3-years.json \
    --paper-code P3 \
    --out-root ../../offline/extracted/comsci-cie \
    --pdf-root ../../offline/downloaded-pdfs/comsci-cie
"""

from __future__ import annotations

import argparse
import json
import re
import shutil
import sys
from pathlib import Path
from urllib.parse import urlparse

from extract_questions import download_pdf, load_pdf, qp_label_from_url, run_export, sanitize_prefix


PAPACAMBRIDGE_UPLOAD = (
    "https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/"
)
BESTEXAMHELP_9618 = (
    "https://bestexamhelp.com/exam/cambridge-international-a-level/"
    "computer-science-9618"
)


def raw_pdf_candidates(url: str) -> list[str]:
    """Try original URL, then common raw-PDF mirrors for pseudocode.pro links."""
    candidates = [url]
    parsed = urlparse(url)
    filename = Path(parsed.path).name
    if parsed.netloc.endswith("pseudocode.pro") and filename:
        candidates.append(f"{PAPACAMBRIDGE_UPLOAD}{filename}")
        m = re.search(r"_(?:s|w)(\d{2})_", filename)
        if m:
            year = f"20{m.group(1)}"
            candidates.append(f"{BESTEXAMHELP_9618}/{year}/{filename}")
    return candidates


def read_years(json_path: Path) -> dict[str, dict]:
    data = json.loads(json_path.read_text(encoding="utf-8"))
    years = data.get("years")
    if not isinstance(years, dict):
        raise SystemExit(f"{json_path} does not contain a .years object")
    return years


def download_with_fallback(url: str, cache_path: Path) -> tuple[bytes, str]:
    errors: list[str] = []
    for candidate in raw_pdf_candidates(url):
        try:
            return download_pdf(candidate, cache_path), candidate
        except SystemExit as exc:
            errors.append(f"{candidate}: {exc}")
            if cache_path.exists():
                cache_path.unlink()
        except Exception as exc:
            errors.append(f"{candidate}: {exc}")
            if cache_path.exists():
                cache_path.unlink()
    raise RuntimeError("Could not download a PDF:\n" + "\n".join(errors))


def main() -> None:
    p = argparse.ArgumentParser(description="Batch extract CIE paper questions from a JSON file.")
    p.add_argument("--json", type=Path, required=True, help="paper*-years.json file")
    p.add_argument("--paper-code", required=True, help="Folder label, e.g. P2, P3, P4")
    p.add_argument("--out-root", type=Path, required=True, help="Root for extracted PNG folders")
    p.add_argument("--pdf-root", type=Path, required=True, help="Root for downloaded PDF cache")
    p.add_argument("--qp-field", default="qp", help="JSON field to download, default: qp")
    p.add_argument(
        "--mode",
        choices=("question", "mark-scheme"),
        default="question",
        help="Extraction layout to detect, default: question",
    )
    p.add_argument("--dpi", type=int, default=150)
    p.add_argument("--ocr-auto", action="store_true", help="Try OCR if text-based detection fails")
    p.add_argument("--overwrite", action="store_true", help="Replace existing extracted folders")
    p.add_argument("--limit", type=int, help="Only process the first N entries (for testing)")
    args = p.parse_args()

    years = read_years(args.json.resolve())
    items = list(years.items())
    if args.limit is not None:
        items = items[: args.limit]

    paper_code = sanitize_prefix(args.paper_code.upper())
    out_base = args.out_root.resolve() / paper_code
    pdf_base = args.pdf_root.resolve() / paper_code
    out_base.mkdir(parents=True, exist_ok=True)
    pdf_base.mkdir(parents=True, exist_ok=True)

    ok = 0
    failed: list[str] = []

    for label, info in items:
        if not isinstance(info, dict):
            failed.append(f"{label}: entry is not an object")
            continue
        qp_url = info.get(args.qp_field)
        if not isinstance(qp_url, str) or not qp_url:
            failed.append(f"{label}: missing {args.qp_field}")
            continue

        prefix = sanitize_prefix(qp_label_from_url(qp_url))
        session_slug = sanitize_prefix(label)
        pdf_path = pdf_base / f"{prefix}.pdf"
        out_dir = out_base / f"{session_slug}_{prefix}"

        if out_dir.exists() and not args.overwrite:
            print(f"[skip] {label}: {out_dir}")
            ok += 1
            continue
        if out_dir.exists():
            shutil.rmtree(out_dir)

        print(f"[download] {label}: {qp_url}", flush=True)
        try:
            pdf_bytes, final_url = download_with_fallback(qp_url, pdf_path)
            if final_url != qp_url:
                print(f"[fallback] used raw PDF: {final_url}", flush=True)

            doc = load_pdf(pdf_bytes)
            try:
                if args.mode == "mark-scheme" and paper_code.endswith("P1-MS"):
                    # Multiple-choice mark schemes have one very short table row per question.
                    pad_between = 2.0
                else:
                    pad_between = 28.0 if args.mode == "mark-scheme" else 10.0
                run_export(
                    doc=doc,
                    out_dir=out_dir,
                    prefix=prefix,
                    dpi=args.dpi,
                    pad_top=6.0,
                    pad_between=pad_between,
                    use_fallback=True,
                    dry_run=False,
                    force_ocr=False,
                    ocr_auto=bool(args.ocr_auto),
                    ocr_dpi=200,
                    mode=args.mode,
                )
            finally:
                doc.close()
            ok += 1
        except SystemExit as exc:
            failed.append(f"{label}: {exc}")
            print(f"[fail] {label}: {exc}", file=sys.stderr)
        except Exception as exc:
            failed.append(f"{label}: {exc}")
            print(f"[fail] {label}: {exc}", file=sys.stderr)

    print(f"\nDone. processed={ok} failed={len(failed)}")
    if failed:
        print("\nFailures:", file=sys.stderr)
        for item in failed:
            print(f"  - {item}", file=sys.stderr)
        raise SystemExit(1)


if __name__ == "__main__":
    main()
