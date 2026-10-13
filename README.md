# Past Papers Archive

[![CI](https://github.com/Tarmk/ALPapers/actions/workflows/ci.yml/badge.svg)](https://github.com/Tarmk/ALPapers/actions/workflows/ci.yml)
![React 18](https://img.shields.io/badge/React-18-61dafb)
![Vite](https://img.shields.io/badge/Vite-5-646cff)

A fast way to find A-Level past papers: Edexcel IAL Mathematics and Further Mathematics, CAIE Physics (9702) and CAIE Computer Science (9618), with mark schemes. The topical mode goes further: every past-paper question is cut out, tagged with its syllabus topic, and can be filtered by session and printed as an A4 practice sheet with the matching mark scheme.

**Live:** https://al-papers.vercel.app

![Topical mode: pick a topic and sessions, then print a random set of real past-paper questions](docs/topical.png)

## Features

- Subjects → papers → years, with direct links to every question paper and mark scheme (plus inserts and source files where they exist), old specifications included
- **Topical mode** for Physics P1–P5, Computer Science P1–P4 and Maths S3: about 8,900 questions sorted by topic and subtopic
- Filter by session, browse, or generate a random printable sheet; the mark-scheme sheet prints in the same order
- Shareable URLs for every view (`?subject=physics&mode=topical&paper=P1&topic=2`)
- Light and dark mode, remembered per browser

## Performance

The topical indexes are big: physics alone is about 4 MB of question data. They used to be bundled into the first page load, so opening the home page downloaded 5.7 MB of JavaScript. Each subject's index is now a separate chunk that is fetched only when its topical view is opened:

| | First load (gzipped) |
|---|---|
| Before | 5,706 KB (307 KB) |
| After | 521 KB (66 KB) |

## Running it locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check, then build to dist/
```

The repository also stores the PDFs and question images (about 4 GB). To work on the app without downloading them:

```bash
git clone --filter=blob:none --no-checkout https://github.com/Tarmk/ALPapers.git
cd ALPapers
git sparse-checkout set --no-cone '/*' '!/offline/' '!/public/'
git checkout main
```

## Repository layout

| Path | What it is |
|------|------------|
| `src/App.tsx` | Views and URL handling |
| `src/data/subjects.ts` | Paper links for every subject, paper and session |
| `src/data/*Topical.ts` | Topical indexes: topics, subtopics and the questions in each |
| `src/data/topical.ts` | Loads one subject's topical index on demand |
| `public/topical/` | Question and mark-scheme images used by topical mode |
| `offline/` | Source PDFs and extraction output used to build the indexes (not needed to run the app) |
| `tools/extract-questions/` | Python scripts that cut a question paper PDF into one image per question (see its `README.txt`) |

To add a paper, add its links to `src/data/subjects.ts`:

```typescript
"2024 January": {
  qp: "https://link-to-question-paper.pdf",
  ms: "https://link-to-mark-scheme.pdf",
},
```

## Tech

React 18, TypeScript (strict), Vite, plain CSS with custom properties for theming. Hosted on Vercel. CI type-checks and builds on every push and reports the bundle sizes.

## License

The code is MIT licensed, see [LICENSE](LICENSE). The question papers and mark schemes are the copyright of their exam boards (Pearson Edexcel and Cambridge University Press & Assessment) and are not covered by that licence.
