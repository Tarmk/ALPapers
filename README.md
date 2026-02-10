# Past Papers Archive

A clean, modern web app for browsing IAL Edexcel Mathematics, Further Mathematics, and Physics past papers.

## Features

- ✨ Clean, modern UI with light/dark mode
- 📱 Fully responsive design
- 🎯 Easy navigation: Subjects → Papers → Years
- 🔗 Direct links to Question Papers (QP) and Mark Schemes (MS)
- 🌙 Theme preference saved in browser

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

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS Variables (for theming)
