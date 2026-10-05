# Past Papers Archive

A clean, modern web app for browsing A-Level past papers: Edexcel IAL Mathematics / Further Mathematics, CIE Physics and CIE Computer Science (9618), with mark schemes and topic-sorted questions.

**Live:** https://al-papers.vercel.app

## Features

- ✨ Clean, modern UI with light/dark mode
- 📱 Fully responsive design
- 🎯 Easy navigation: Subjects → Papers → Years
- 🔗 Direct links to Question Papers (QP) and Mark Schemes (MS)
- 🌙 Theme preference saved in browser
- 📚 Topical view: past-paper questions cut out and grouped by topic, filterable by exam session, with the matching mark-scheme snippets

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to Vercel, Netlify, or any static hosting.

## Adding Papers

Edit `src/data/subjects.ts` to add more papers:

```typescript
"2024 January": {
  qp: "https://link-to-question-paper.pdf",
  ms: "https://link-to-mark-scheme.pdf",
},
```

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Vercel will auto-detect Vite and deploy

## Repository layout

| Path | What it is |
|------|------------|
| `src/` | The React app (`App.tsx`, `components/`, `data/`) |
| `src/data/*.ts` | Paper links and the topical-question indexes |
| `public/topical/` | Question and mark-scheme images served by the topical view |
| `offline/` | Source PDFs and extraction output used to build the topical indexes (large; not needed to run the app) |
| `tools/extract-questions/` | Python scripts that cut a question-paper PDF into per-question PNGs (see its `README.txt`) |

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS Variables (for theming)
