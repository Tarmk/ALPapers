# Past Papers Archive

[![CI](https://github.com/Tarmk/ALPapers/actions/workflows/ci.yml/badge.svg)](https://github.com/Tarmk/ALPapers/actions/workflows/ci.yml)
![React 18](https://img.shields.io/badge/React-18-61dafb)
![Vite](https://img.shields.io/badge/Vite-5-646cff)

Every question paper and mark scheme for Edexcel IAL Mathematics (all 14 units, back to the legacy GCE units) and Cambridge A Level Mathematics 9709, Physics 9702, Chemistry 9701, Biology 9700 and Computer Science 9618, up to the June 2026 series. Every question is also cut out of its paper, filed under its syllabus topic, and can be read, filtered by session, turned into a random practice set and printed with its mark scheme in the same order.

**Live:** https://al-papers.vercel.app

![By-topic view: pick a topic and sessions, then read or print the questions](docs/topical.png)

## Features

- Subjects → papers → sessions, with links to every question paper and mark scheme, plus Paper 2 inserts and Paper 4 source files for computer science, and the previous specifications for maths.
- **By topic** for all 40 papers: about 34,000 questions, 99% with their mark scheme.
- All questions or a seeded random set; filter by session (grouped by year); show the mark scheme under each question; print the questions or the mark schemes on A4, in the same order.
- Every view has a shareable URL (`?subject=physics&paper=P4&view=topics&topic=19`), and back/forward work.
- Light and dark themes; in dark mode the scanned pages are inverted so they don't glare.

## How the topical data is made

`tools/topical/` builds it from the links in `src/data/papers/<subject>.json` (details in its [README](tools/topical/README.md)):

1. **Discover and fetch** every PDF (`discover-cie.mjs` finds every Cambridge session automatically) and check each link serves what it says (three mark-scheme links that served question papers, and a misfiled M2 entry that was a C1 paper, were found and fixed this way).
2. **Clean** mirror watermarks and pasted logos out of the PDF, so the page is exactly as published.
3. **Split** each paper at its question numbers and keep only the printed question: text, tables and diagrams, without answer lines, margins or page furniture. Mark schemes are split on their question column. The splitter copes with the IAL, legacy and Cambridge layouts, landscape schemes, fonts whose text layer is shifted, and Decision papers bundled after their answer book.
4. **Label** each question with its syllabus subtopic, from the full question text, following [`LABELLING.md`](tools/topical/LABELLING.md). A question whose parts test different topics is filed under each, with the parts named. Independent audits of random samples are used to check and correct the labels.
5. **Build** the indexes in `src/data/topical/`, checking that every image exists and every label is a real subtopic.

## Performance

Each paper's topical index is its own chunk, fetched only when that paper's "By topic" view opens, so the first page load stays small. The largest index (physics P1, about 4,700 questions) is 80 KB gzipped. Question images are 16-level greyscale PNGs of about 24 KB.

## Running it locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check, then build to dist/
```

The question images (about 37,000 PNGs, 1.3 GB) are not in the repository. They live in a Cloudflare R2 bucket and production loads them from `VITE_ASSET_BASE` (set in `.env.production`). Locally, the dev server serves them from `media/topical/` if that folder exists; without it the app works but question images don't load. To point a local build at the bucket instead, run `VITE_ASSET_BASE=https://papers-media.jhoi.dev npm run dev`.

The repository still stores the older source PDFs (several GB), and its history holds the images from before they moved. To work on the app without downloading those:

```bash
git clone --filter=blob:none --no-checkout https://github.com/Tarmk/ALPapers.git
cd ALPapers
git sparse-checkout set --no-cone '/*' '!/offline/'
git checkout main
```

## Repository layout

| Path | What it is |
|------|------------|
| `src/App.tsx` | Page shell and routing |
| `src/components/` | Home, subject, paper and topical views |
| `src/data/catalog.ts` | Subjects: board, level, code and paper groups |
| `src/data/papers/<subject>.json` | Paper links for every paper and session, one file per subject (loaded on demand) |
| `src/data/topical/` | One topical index per paper, plus `summary.json` with the counts |
| `media/topical/` | Question and mark-scheme images (git-ignored; uploaded to R2 with `tools/topical/sync-media.mjs`) |
| `tools/topical/` | The pipeline that builds the topical data |
| `offline/` | Older source PDFs and extraction output (not needed to run the app) |

To add a session, add its links to the paper in `src/data/papers/<subject>.json`, run `node tools/topical/catalog.mjs` to refresh the counts, then run the pipeline for it (see `tools/topical/README.md`):

```json
"2026 June": {
  "qp": "https://link-to-question-paper.pdf",
  "ms": "https://link-to-mark-scheme.pdf"
}
```

To add a subject, add it to `SUBJECTS` in `src/data/catalog.ts` and create its `src/data/papers/<key>.json`.

## Tech

React 18, TypeScript (strict), Vite and plain CSS with custom properties for theming, hosted on Vercel. The pipeline is Python (PyMuPDF, Pillow) and Node. CI type-checks and builds on every push and reports the bundle sizes.

## License

The code is MIT licensed, see [LICENSE](LICENSE). The question papers and mark schemes are the copyright of their exam boards (Pearson Edexcel and Cambridge University Press & Assessment) and are not covered by that licence.
