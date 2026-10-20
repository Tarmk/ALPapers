// Writes src/data/papers/index.json: each paper's title, session count and year
// range, for the home and subject pages (which don't load the full link lists).
// Run after editing any src/data/papers/<subject>.json.
//
//   node tools/topical/catalog.mjs

import { readdirSync, readFileSync, writeFileSync } from "node:fs";

const root = new URL("../../", import.meta.url);
const dir = new URL("src/data/papers/", root);

const title = (description) => description.replace(/^Paper\s+\d+\s*[-–]\s*/i, "");
const yearRange = (labels) => {
  const years = labels.map((l) => Number(l.match(/\b(19|20)\d{2}\b/)?.[0])).filter(Boolean);
  if (!years.length) return "";
  const lo = Math.min(...years);
  const hi = Math.max(...years);
  return lo === hi ? `${lo}` : `${lo}–${hi}`;
};

const index = {};
for (const file of readdirSync(dir).filter((f) => f.endsWith(".json") && f !== "index.json")) {
  const key = file.replace(".json", "");
  const { papers } = JSON.parse(readFileSync(new URL(file, dir), "utf8"));
  index[key] = {};
  for (const [code, paper] of Object.entries(papers)) {
    const sessions = [...Object.keys(paper.years), ...Object.keys(paper.oldSpec?.years ?? {})];
    index[key][code] = { title: title(paper.description), sessions: sessions.length, years: yearRange(sessions) };
  }
}
writeFileSync(new URL("index.json", dir), JSON.stringify(index, null, 1) + "\n");
console.log(Object.entries(index).map(([k, v]) => `${k}: ${Object.keys(v).length} papers`).join(", "));
