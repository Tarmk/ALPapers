// Finds every Cambridge question paper and mark scheme for a syllabus on
// papacambridge (which names files predictably: 9701_s24_qp_12.pdf) and writes
// src/data/papers/<subject>.json. A missing file answers with a redirect, so a
// cheap ranged GET tells us whether each one exists.
//
//   node tools/topical/discover-cie.mjs chemistry [--from 2008]
//
// Re-running keeps links already in the file and adds new sessions.

import { existsSync, readFileSync, writeFileSync } from "node:fs";

const BASE = "https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/";

// component(year) gives the paper's first digit in the file name for that year,
// or null when the paper wasn't set that year.
const SCIENCE = (code) => ({
  code,
  papers: {
    P1: { description: "Paper 1 - Multiple Choice", component: () => 1 },
    P2: { description: "Paper 2 - AS Level Structured Questions", component: () => 2 },
    P3: { description: "Paper 3 - Advanced Practical Skills", component: () => 3, variants: 6 },
    P4: { description: "Paper 4 - A Level Structured Questions", component: () => 4 },
    P5: { description: "Paper 5 - Planning, Analysis and Evaluation", component: () => 5 },
  },
});

// 9709 was renumbered in 2020: Mechanics 2 was dropped and statistics moved from 6/7 to 5/6.
const NEW_9709 = 2020;
const SYLLABI = {
  chemistry: SCIENCE("9701"),
  biology: SCIENCE("9700"),
  "maths-cie": {
    code: "9709",
    papers: {
      P1: { description: "Paper 1 - Pure Mathematics 1", component: () => 1 },
      P2: { description: "Paper 2 - Pure Mathematics 2", component: () => 2 },
      P3: { description: "Paper 3 - Pure Mathematics 3", component: () => 3 },
      M1: { description: "Paper 4 - Mechanics", component: () => 4 },
      M2: { description: "Paper 5 - Mechanics 2 (until 2019)", component: (y) => (y < NEW_9709 ? 5 : null) },
      S1: { description: "Paper 5 - Probability and Statistics 1", component: (y) => (y < NEW_9709 ? 6 : 5) },
      S2: { description: "Paper 6 - Probability and Statistics 2", component: (y) => (y < NEW_9709 ? 7 : 6) },
    },
  },
};

const SESSIONS = [
  ["s", "June"],
  ["m", "March"],
  ["w", "November"],
];

const args = process.argv.slice(2);
const subject = args[0];
const syllabus = SYLLABI[subject];
if (!syllabus) {
  console.error(`usage: discover-cie.mjs <${Object.keys(SYLLABI).join("|")}> [--from YEAR]`);
  process.exit(1);
}
const from = Number(args[args.indexOf("--from") + 1]) || 2008;
const to = new Date().getFullYear();

async function exists(name) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(BASE + name, { headers: { Range: "bytes=0-4" }, redirect: "manual" });
      const body = res.status < 300 ? await res.text() : "";
      return body.startsWith("%PDF");
    } catch (err) {
      if (attempt >= 3) throw err;
      await new Promise((r) => setTimeout(r, 1000 * attempt));
    }
  }
}

async function pool(items, size, fn) {
  let i = 0;
  await Promise.all(Array.from({ length: size }, async () => { while (i < items.length) await fn(items[i++]); }));
}

const jobs = [];
for (const [code, paper] of Object.entries(syllabus.papers)) {
  for (let year = from; year <= to; year++) {
    const component = paper.component(year);
    if (component == null) continue;
    for (const [letter, month] of SESSIONS) {
      if (letter === "m" && year < 2016) continue;
      const stem = `${syllabus.code}_${letter}${String(year).slice(2)}`;
      // Until 2009 most papers had a single version, filed without a variant digit.
      if (year <= 2009) jobs.push({ code, year, month, v: 0, qp: `${stem}_qp_${component}.pdf`, ms: `${stem}_ms_${component}.pdf` });
      for (let v = 1; v <= (paper.variants ?? 3); v++) {
        jobs.push({ code, year, month, v, qp: `${stem}_qp_${component}${v}.pdf`, ms: `${stem}_ms_${component}${v}.pdf` });
      }
    }
  }
}

const found = [];
let checked = 0;
await pool(jobs, 12, async (job) => {
  if (await exists(job.qp)) {
    job.hasMs = await exists(job.ms);
    found.push(job);
  }
  if (++checked % 200 === 0) console.log(`  ${checked}/${jobs.length}`);
});

const file = new URL(`../../src/data/papers/${subject}.json`, import.meta.url);
const out = existsSync(file) ? JSON.parse(readFileSync(file, "utf8")) : { papers: {} };
const monthOrder = { March: 0, June: 1, November: 2 };
for (const [code, paper] of Object.entries(syllabus.papers)) {
  const years = { ...(out.papers[code]?.years ?? {}) };
  for (const job of found.filter((j) => j.code === code)) {
    years[job.v ? `${job.month} ${job.year} (v${job.v})` : `${job.month} ${job.year}`] = { qp: BASE + job.qp, ...(job.hasMs ? { ms: BASE + job.ms } : {}) };
  }
  const key = (label) => {
    const [, month, year, v] = label.match(/(\w+) (\d{4})(?: \(v(\d)\))?/) ?? [];
    return Number(year) * 100 + monthOrder[month] * 10 + Number(v ?? 0);
  };
  const sorted = Object.fromEntries(Object.entries(years).sort(([a], [b]) => key(b) - key(a)));
  if (Object.keys(sorted).length) out.papers[code] = { description: paper.description, years: sorted };
}
writeFileSync(file, JSON.stringify(out, null, 1) + "\n");
for (const [code, p] of Object.entries(out.papers)) {
  const labels = Object.keys(p.years);
  const noMs = Object.values(p.years).filter((l) => !l.ms).length;
  console.log(`${subject} ${code}: ${labels.length} sessions (${labels.at(-1)} – ${labels[0]})${noMs ? `, ${noMs} without mark scheme` : ""}`);
}
