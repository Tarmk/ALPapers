// Summarises the split output for a subject: per paper, how many sessions were
// split, how many questions and mark schemes were found, and the sessions that
// look wrong (no questions, an unusual question count, missing mark schemes).
//
//   node tools/topical/split-report.mjs chemistry [--list] [--write-retry]
//
// --write-retry writes offline/work/<subject>-retry.json, a [paper, session] list
// for `split_cie.py --sessions-file ... --force`.

import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";

const root = new URL("../../", import.meta.url);
const [subject, ...flags] = process.argv.slice(2);
const registry = JSON.parse(readFileSync(new URL("offline/registry.json", root), "utf8")).filter((r) => r.subject === subject);

const median = (xs) => [...xs].sort((a, b) => a - b)[Math.floor(xs.length / 2)] ?? 0;
const retry = [];
for (const paper of [...new Set(registry.map((r) => r.paper))]) {
  const rows = registry.filter((r) => r.paper === paper);
  const records = [];
  const notSplit = [];
  for (const r of rows) {
    const file = new URL(`offline/work/${subject}/${paper}/${r.slug}.json`, root);
    if (existsSync(file)) records.push({ row: r, rec: JSON.parse(readFileSync(file, "utf8")) });
    else notSplit.push(r.session);
  }
  const counts = records.map(({ rec }) => rec.questions.filter((q) => q.images?.length).length);
  const typical = median(counts.filter(Boolean));
  let questions = 0;
  let withMs = 0;
  const problems = [];
  for (const { row, rec } of records) {
    const qs = rec.questions.filter((q) => q.images?.length);
    const ms = qs.filter((q) => q.msImages?.length).length;
    questions += qs.length;
    withMs += ms;
    const why = [];
    if (!qs.length) why.push("no questions");
    else if (qs.length < typical * 0.6 || qs.length > typical * 1.5) why.push(`${qs.length} questions (usually ${typical})`);
    if (row.ms && qs.length && ms < qs.length) why.push(`MS ${ms}/${qs.length}`);
    if (why.length) {
      problems.push(`${row.session}: ${why.join(", ")}`);
      retry.push([paper, row.session]);
    }
  }
  const pct = questions ? Math.round((100 * withMs) / questions) : 0;
  console.log(
    `${subject} ${paper}: ${records.length}/${rows.length} sessions, ${questions} questions, ${pct}% with MS, ${problems.length} flagged` +
      (notSplit.length ? `, ${notSplit.length} not split` : ""),
  );
  if (flags.includes("--list")) for (const p of problems) console.log("    " + p);
}
if (flags.includes("--write-retry")) {
  writeFileSync(new URL(`offline/work/${subject}-retry.json`, root), JSON.stringify(retry));
  console.log(`${retry.length} sessions -> offline/work/${subject}-retry.json`);
}
