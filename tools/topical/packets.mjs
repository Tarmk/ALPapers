// Writes classification packets: the text of every question that still needs a
// topic label, in chunks, together with the syllabus outline.
//
//   node tools/topical/packets.mjs maths-S1 [--chunk 140]
//   node tools/topical/packets.mjs physics-P2 --all   (include sessions already in the index)
//
// Output: offline/work/packets/<key>-<n>.md. Labels come back as
// tools/topical/labels/<key>.json (see build.mjs).

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";

const root = new URL("../../", import.meta.url);
const read = (p) => JSON.parse(readFileSync(new URL(p, root), "utf8"));

const [key, ...flags] = process.argv.slice(2);
const chunkSize = Number(flags[flags.indexOf("--chunk") + 1]) || 140;
const [subject, paper] = key.split("-");

const syllabus = `tools/topical/syllabus/${key}.json`;
const topics = existsSync(new URL(syllabus, root)) ? read(syllabus).topics : read(`src/data/topical/${key}.json`).topics;
const labelled = existsSync(new URL(`tools/topical/labels/${key}.json`, root)) ? read(`tools/topical/labels/${key}.json`) : {};
const all = flags.includes("--all");
const known =
  subject === "maths" || all ? new Set() : new Set(read(`src/data/topical/${key}.json`).questions.map((q) => q.session));

const dir = `offline/work/${subject}/${paper}/`;
const items = [];
for (const f of readdirSync(new URL(dir, root))) {
  const rec = read(dir + f);
  if (known.has(rec.session)) continue; // already in the reviewed index
  for (const q of rec.questions) {
    const id = `${rec.session}|${q.number}`;
    if (labelled[id] || !q.images?.length) continue;
    // CAIE structured questions run long and later parts are often on other topics.
    const text = (q.text || "").slice(0, subject === "maths" ? 1400 : 4000);
    const ms = (q.msText || "").slice(0, 220);
    items.push(`### ${id}\n${text}${ms ? `\nMS: ${ms}` : ""}\n`);
  }
}

const outline = topics
  .map((t) => `${t.id} ${t.title}\n${t.subtopics.map((s) => `  ${s.id} ${s.title}`).join("\n")}`)
  .join("\n");

mkdirSync(new URL("offline/work/packets/", root), { recursive: true });
let n = 0;
for (let i = 0; i < items.length; i += chunkSize) {
  n += 1;
  const body = `# ${key} questions ${i + 1}-${Math.min(i + chunkSize, items.length)} of ${items.length}\n\n## Syllabus\n${outline}\n\n## Questions\n${items.slice(i, i + chunkSize).join("\n")}`;
  writeFileSync(new URL(`offline/work/packets/${key}-${n}.md`, root), body);
}
console.log(`${key}: ${items.length} questions in ${n} packet(s)`);
