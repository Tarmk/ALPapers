// Folds labels written in parts (tools/topical/labels/parts/<key>-<anything>.json,
// one file per labelling run so parallel runs never overwrite each other) into
// tools/topical/labels/<key>.json. Part labels win over existing ones.
//
//   node tools/topical/merge-parts.mjs [--delete]

import { existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";

const root = new URL("../../", import.meta.url);
const dir = new URL("tools/topical/labels/parts/", root);
if (!existsSync(dir)) process.exit(0);

const byKey = new Map();
for (const file of readdirSync(dir).filter((f) => f.endsWith(".json"))) {
  const key = file.match(/^([a-z-]+?-[A-Z][A-Z0-9]*)-/)?.[1];
  if (!key) continue;
  if (!byKey.has(key)) byKey.set(key, []);
  byKey.get(key).push(file);
}

for (const [key, files] of byKey) {
  const target = new URL(`tools/topical/labels/${key}.json`, root);
  const labels = existsSync(target) ? JSON.parse(readFileSync(target, "utf8")) : {};
  let n = 0;
  for (const file of files) {
    const part = JSON.parse(readFileSync(new URL(file, dir), "utf8"));
    for (const [id, value] of Object.entries(part)) {
      labels[id] = value;
      n++;
    }
  }
  const sorted = Object.fromEntries(Object.entries(labels).sort(([a], [b]) => a.localeCompare(b)));
  writeFileSync(target, JSON.stringify(sorted, null, 1) + "\n");
  console.log(`${key}: ${n} labels from ${files.length} part file(s), ${Object.keys(sorted).length} total`);
  if (process.argv.includes("--delete")) for (const file of files) rmSync(new URL(file, dir));
}
