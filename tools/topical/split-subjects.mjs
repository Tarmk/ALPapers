// One-off: split src/data/subjects.ts into one JSON file per subject under
// src/data/papers/, so each subject's links load only when it is opened.
//
//   node tools/topical/split-subjects.mjs

import { mkdirSync, writeFileSync } from "node:fs";
import { SUBJECTS } from "../../src/data/subjects.ts";

const root = new URL("../../", import.meta.url);
mkdirSync(new URL("src/data/papers/", root), { recursive: true });
for (const [key, subject] of Object.entries(SUBJECTS)) {
  writeFileSync(new URL(`src/data/papers/${key}.json`, root), JSON.stringify({ papers: subject.papers }, null, 1) + "\n");
  console.log(key, Object.keys(subject.papers).length, "papers");
}
