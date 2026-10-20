// One-off: convert the old src/data/*Topical.ts indexes into src/data/topical/<subject>-<paper>.json.
// Kept for reference; build.mjs is what maintains those files now.
//
//   node tools/topical/migrate-legacy.mjs

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const SOURCES = [
  ["physics", "physicsTopical", { P1: "PHYSICS_P1", P2: "PHYSICS_P2", P3: "PHYSICS_P3", P4: "PHYSICS_P4", P5: "PHYSICS_P5" }],
  ["comsci", "comsciP1Topical", { P1: "COMSCI_P1" }],
  ["comsci", "comsciP2Topical", { P2: "COMSCI_P2" }],
  ["comsci", "comsciP3Topical", { P3: "COMSCI_P3" }],
  ["comsci", "comsciP4Topical", { P4: "COMSCI_P4" }],
];

const root = new URL("../../", import.meta.url);
mkdirSync(new URL("src/data/topical/", root), { recursive: true });

function readArray(source, name) {
  const m = source.match(new RegExp(`export const ${name}: \\w+\\[\\] = (\\[[\\s\\S]*?\\n\\]);`));
  if (!m) throw new Error(`missing ${name}`);
  return JSON.parse(m[1]);
}

for (const [subject, file, papers] of SOURCES) {
  const source = readFileSync(new URL(`src/data/${file}.ts`, root), "utf8");
  for (const [paper, prefix] of Object.entries(papers)) {
    const topics = readArray(source, `${prefix}_TOPICS`);
    const questions = readArray(source, `${prefix}_QUESTIONS`).map((q) => {
      const out = {
        id: q.id,
        session: q.session,
        number: q.questionNumber,
        topicId: q.topicId,
        subtopicId: q.subtopicId,
      };
      if (q.topicFocus && q.topicFocus !== "Whole question") out.focus = q.topicFocus;
      out.images = q.images;
      if (q.markSchemeImages?.length) out.ms = q.markSchemeImages;
      return out;
    });
    writeFileSync(
      new URL(`src/data/topical/${subject}-${paper}.json`, root),
      JSON.stringify({ topics, questions }),
    );
    console.log(subject, paper, questions.length);
  }
}
