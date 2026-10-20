// Writes offline/registry.json: one row per paper/session from src/data/papers/*.json.
// The Python tools read this instead of parsing TypeScript.
//
//   node tools/topical/registry.mjs

import { readdirSync, readFileSync, writeFileSync } from "node:fs";

const papersDir = new URL("../../src/data/papers/", import.meta.url);
const SUBJECTS = Object.fromEntries(
  readdirSync(papersDir)
    .filter((f) => f.endsWith(".json") && f !== "index.json")
    .map((f) => [f.replace(".json", ""), JSON.parse(readFileSync(new URL(f, papersDir), "utf8"))]),
);

// Subjects not listed default to Cambridge; the splitter is chosen from this.
const BOARD = { maths: "edexcel" };

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const rows = [];
for (const [subject, data] of Object.entries(SUBJECTS)) {
  for (const [paper, info] of Object.entries(data.papers)) {
    const specs = [["new", info.years]];
    if (info.oldSpec) specs.push(["old", info.oldSpec.years]);
    for (const [spec, years] of specs) {
      for (const [label, links] of Object.entries(years)) {
        if (!links.qp) continue;
        // Old-spec maths sessions are shown as "Old spec 2013 June" in topical mode.
        const session = spec === "old" ? `Old spec ${label}` : label;
        rows.push({
          subject,
          board: BOARD[subject] ?? "cie",
          paper,
          spec,
          session,
          slug: slug(session),
          qp: links.qp,
          ms: links.ms ?? null,
        });
      }
    }
  }
}

writeFileSync(new URL("../../offline/registry.json", import.meta.url), JSON.stringify(rows, null, 1));
console.log(`${rows.length} papers`);
