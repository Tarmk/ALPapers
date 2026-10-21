// Checks a labelling run's output against its packet: every question in the
// packet has labels, every label is a real subtopic of its topic, no subtopic is
// repeated within a question, and split labels carry a focus.
//
//   node tools/topical/check-part.mjs offline/work/packets/chemistry-P1-3.md tools/topical/labels/parts/chemistry-P1-3.json

import { readFileSync } from "node:fs";

const [packetPath, partPath] = process.argv.slice(2);
const packet = readFileSync(packetPath, "utf8");
const key = packet.match(/^# (\S+) questions/m)[1];
const syllabus = JSON.parse(readFileSync(new URL(`syllabus/${key}.json`, import.meta.url), "utf8"));
const topicOf = new Map(syllabus.topics.flatMap((t) => t.subtopics.map((s) => [s.id, t.id])));

let part;
try {
  part = JSON.parse(readFileSync(partPath, "utf8"));
} catch (err) {
  console.log(`cannot read ${partPath}: ${err.message}`);
  process.exit(1);
}

const ids = [...packet.matchAll(/^### (.+)$/gm)].map((m) => m[1].trim());
const problems = [];
for (const id of ids) {
  const labels = part[id];
  if (!Array.isArray(labels) || !labels.length) {
    problems.push(`${id}: no labels`);
    continue;
  }
  const seen = new Set();
  for (const l of labels) {
    if (topicOf.get(l.subtopicId) !== l.topicId) problems.push(`${id}: ${l.topicId}/${l.subtopicId} is not in the outline`);
    if (seen.has(l.subtopicId)) problems.push(`${id}: ${l.subtopicId} repeated`);
    seen.add(l.subtopicId);
    if (labels.length > 1 && !l.focus) problems.push(`${id}: split label without focus`);
  }
}
for (const id of Object.keys(part)) if (!ids.includes(id)) problems.push(`${id}: not in this packet`);

if (problems.length) {
  console.log(`${problems.length} problem(s):`);
  for (const p of problems.slice(0, 40)) console.log("  " + p);
  process.exit(1);
}
console.log(`ok: ${ids.length} questions labelled`);
