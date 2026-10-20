"""Paths and registry helpers shared by the topical pipeline scripts."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
REGISTRY = ROOT / "offline" / "registry.json"
PDF_ROOT = ROOT / "offline" / "pdfs"
WORK_ROOT = ROOT / "offline" / "work"
# Question images. Served from object storage in production (see sync-media.mjs);
# the dev server serves them from here.
PUBLIC_TOPICAL = ROOT / "media" / "topical"


def load_registry(subject: str | None = None, paper: str | None = None, session_like: str | None = None) -> list[dict]:
    rows = json.loads(REGISTRY.read_text(encoding="utf-8"))
    return [
        r
        for r in rows
        if (subject is None or r["subject"] == subject)
        and (paper is None or r["paper"] == paper)
        and (session_like is None or session_like.lower() in r["session"].lower())
    ]


def pdf_path(row: dict, kind: str) -> Path:
    """kind is 'qp' or 'ms'."""
    return PDF_ROOT / row["subject"] / row["paper"] / f"{row['slug']}.{kind}.pdf"
