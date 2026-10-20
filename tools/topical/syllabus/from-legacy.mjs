// One-off: recover the full physics and computer science outlines from the old
// TS indexes (git 94ca92ca), keeping the tidied titles of the current indexes.
// The JSON indexes only list subtopics that have questions, so they lost some.
//
//   node tools/topical/syllabus/from-legacy.mjs <folder with the old *.ts files>

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = process.argv[2];
const root = new URL("../../../", import.meta.url);
const SOURCES = [
  ["physicsTopical", "physics", { P1: "PHYSICS_P1", P2: "PHYSICS_P2", P3: "PHYSICS_P3", P4: "PHYSICS_P4", P5: "PHYSICS_P5" }],
  ["comsciP1Topical", "comsci", { P1: "COMSCI_P1" }],
  ["comsciP2Topical", "comsci", { P2: "COMSCI_P2" }],
  ["comsciP3Topical", "comsci", { P3: "COMSCI_P3" }],
  ["comsciP4Topical", "comsci", { P4: "COMSCI_P4" }],
];

for (const [file, subject, papers] of SOURCES) {
  const source = readFileSync(join(dir, `${file}.ts`), "utf8");
  for (const [paper, prefix] of Object.entries(papers)) {
    const start = source.indexOf(`export const ${prefix}_TOPICS`);
    const open = source.indexOf("[", source.indexOf("=", start));
    const close = source.indexOf("\n];", open);
    const topics = JSON.parse(source.slice(open, close + 2));
    const current = JSON.parse(readFileSync(new URL(`src/data/topical/${subject}-${paper}.json`, root), "utf8")).topics;
    const titles = new Map(current.flatMap((t) => [[t.id, t.title], ...t.subtopics.map((s) => [s.id, s.title])]));
    for (const t of topics) {
      t.title = titles.get(t.id) ?? t.title;
      for (const s of t.subtopics) s.title = titles.get(s.id) ?? s.title;
    }
    writeFileSync(
      new URL(`tools/topical/syllabus/${subject}-${paper}.json`, root),
      JSON.stringify({ topics }, null, 2) + "\n",
    );
    console.log(subject, paper, topics.length, "topics", topics.reduce((n, t) => n + t.subtopics.length, 0), "subtopics");
  }
}
