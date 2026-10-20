// Writes audit packets: a random sample of labelled questions per paper, each with
// its text and current labels, for an independent reviewer to check.
//
//   node tools/topical/audit.mjs [per-paper sample size, default 30]
//
// Output: offline/work/audit/<key>.md

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";

const root = new URL("../../", import.meta.url);
const read = (p) => JSON.parse(readFileSync(new URL(p, root), "utf8"));
const size = Number(process.argv[2]) || 30;

// Deterministic shuffle so a re-run audits the same sample.
function sample(items, n, seed) {
  const out = [...items];
  let s = seed;
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out.slice(0, n);
}

mkdirSync(new URL("offline/work/audit/", root), { recursive: true });
for (const file of readdirSync(new URL("tools/topical/labels/", root))) {
  const key = file.replace(".json", "");
  const [subject, paper] = key.split("-");
  const labels = read(`tools/topical/labels/${file}`);
  const topics =
    subject === "maths" ? read(`tools/topical/syllabus/${key}.json`).topics : read(`src/data/topical/${key}.json`).topics;
  const titles = new Map(topics.flatMap((t) => t.subtopics.map((s) => [s.id, s.title])));
  const dir = `offline/work/${subject}/${paper}/`;
  if (!existsSync(new URL(dir, root))) continue;
  const texts = new Map();
  for (const f of readdirSync(new URL(dir, root))) {
    const rec = read(dir + f);
    for (const q of rec.questions) texts.set(`${rec.session}|${q.number}`, q);
  }
  const ids = Object.keys(labels).filter((id) => texts.has(id));
  const picked = sample(ids, Math.min(size, ids.length), [...key].reduce((a, c) => a + c.charCodeAt(0), 7));
  const outline = topics
    .map((t) => `${t.id} ${t.title}\n${t.subtopics.map((s) => `  ${s.id} ${s.title}`).join("\n")}`)
    .join("\n");
  const body = picked
    .map((id) => {
      const q = texts.get(id);
      const current = labels[id]
        .map((l) => `${l.subtopicId} ${titles.get(l.subtopicId) ?? "?"}${l.focus ? ` [${l.focus}]` : ""}`)
        .join("; ");
      return `### ${id}\nCURRENT: ${current}\n${(q.text || "").slice(0, 2500)}${q.msText ? `\nMS: ${q.msText.slice(0, 300)}` : ""}\n`;
    })
    .join("\n");
  writeFileSync(new URL(`offline/work/audit/${key}.md`, root), `# Audit ${key}\n\n## Outline\n${outline}\n\n## Questions\n${body}`);
  console.log(key, picked.length);
}
