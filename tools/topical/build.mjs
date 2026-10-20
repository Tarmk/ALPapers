// Builds the topical indexes in src/data/topical/ from:
//   offline/work/<subject>/<paper>/*.json   split output (images, mark-scheme images, text)
//   tools/topical/syllabus/<key>.json       topic list, for papers built from scratch (maths)
//   tools/topical/labels/<key>.json         topic labels: { "<session>|<number>": [{ topicId, subtopicId, focus? }] }
//
// Physics and computer science keep their existing, reviewed topic labels; this
// adds new sessions and takes the images (question and mark scheme) from the
// latest split of each session. Maths indexes
// are rebuilt from the split output. Papers whose work folder is absent (e.g. a
// fresh clone) are left as they are, so the build is safe to run anywhere.
//
//   node tools/topical/build.mjs [subject ...]   (default: all subjects)

import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";

const root = new URL("../../", import.meta.url);
const path = (p) => new URL(p, root);
const readJson = (p) => JSON.parse(readFileSync(path(p), "utf8"));

const PAPERS = {
  physics: ["P1", "P2", "P3", "P4", "P5"],
  comsci: ["P1", "P2", "P3", "P4"],
  maths: ["P1", "P2", "P3", "P4", "S1", "S2", "S3", "M1", "M2", "M3", "D1", "FP1", "FP2", "FP3"],
};

const slug = (s) =>
  s.toLowerCase().replace(/[()]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function readWork(subject, paper) {
  const dir = `offline/work/${subject}/${paper}/`;
  if (!existsSync(path(dir))) return null;
  return readdirSync(path(dir))
    .filter((f) => f.endsWith(".json"))
    .map((f) => readJson(dir + f));
}

function readLabels(key) {
  const p = `tools/topical/labels/${key}.json`;
  return existsSync(path(p)) ? readJson(p) : {};
}

const problems = [];

function entriesFor(key, session, q, labels) {
  const assigned = labels[`${session}|${q.number}`];
  if (!assigned?.length) {
    problems.push(`${key}: no label for ${session} Q${q.number}`);
    return [];
  }
  return assigned.map((label, i) => {
    const out = {
      id: `${key}-${slug(session)}-q${q.number}${assigned.length > 1 ? `-${i + 1}` : ""}`,
      session,
      number: q.number,
      topicId: label.topicId,
      subtopicId: label.subtopicId,
    };
    if (label.focus) out.focus = label.focus;
    out.images = q.images;
    if (q.msImages?.length) out.ms = q.msImages;
    return out;
  });
}

function buildCie(subject, paper, work) {
  const key = `${subject}-${paper}`;
  const data = readJson(`src/data/topical/${key}.json`);
  const labels = readLabels(key);
  // Older indexes spell sessions "2021 June v1"; subjects.ts says "2021 June (v1)".
  const norm = (s) => s.replace(/[()]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
  const bySession = new Map();
  for (const q of data.questions) {
    if (!bySession.has(norm(q.session))) bySession.set(norm(q.session), []);
    bySession.get(norm(q.session)).push(q);
  }
  let filled = 0;
  let added = 0;
  let relabelled = 0;
  const syllabusFile = `tools/topical/syllabus/${key}.json`;
  if (existsSync(path(syllabusFile))) data.topics = readJson(syllabusFile).topics;
  for (const record of work) {
    const existing = bySession.get(norm(record.session));
    for (const e of existing ?? []) e.session = record.session;
    for (const q of record.questions) {
      if (existing && labels[`${record.session}|${q.number}`] && q.images?.length) {
        // A label in tools/topical/labels replaces the inherited ones for this question.
        data.questions = data.questions.filter((e) => !(e.session === record.session && e.number === q.number));
        data.questions.push(...entriesFor(key, record.session, q, labels));
        relabelled++;
      } else if (existing) {
        // A re-split session replaces its mark-scheme folder, so its images win.
        for (const e of existing) {
          if (e.number !== q.number) continue;
          if (q.images?.length) e.images = q.images;
          if (q.msImages?.length) {
            if (!e.ms?.length) filled++;
            e.ms = q.msImages;
          } else if (e.ms?.some((img) => !existsSync(path(`media${img}`)))) {
            delete e.ms;
          }
        }
      } else if (q.images?.length) {
        const entries = entriesFor(key, record.session, q, labels);
        data.questions.push(...entries);
        added += entries.length;
      }
    }
  }
  console.log(`${key}: +${added} questions, +${filled} mark schemes, ${relabelled} relabelled`);
  return data;
}

function buildMaths(paper, work) {
  const key = `maths-${paper}`;
  const syllabus = readJson(`tools/topical/syllabus/${key}.json`);
  const labels = readLabels(key);
  const questions = [];
  for (const record of work) {
    for (const q of record.questions) {
      if (q.images?.length) questions.push(...entriesFor(key, record.session, q, labels));
    }
  }
  console.log(`${key}: ${questions.length} questions`);
  return { topics: syllabus.topics, questions };
}

function check(key, data) {
  const subtopics = new Map(data.topics.flatMap((t) => t.subtopics.map((s) => [s.id, t.id])));
  for (const q of data.questions) {
    if (subtopics.get(q.subtopicId) !== q.topicId) problems.push(`${key}: ${q.id} has unknown topic ${q.topicId}/${q.subtopicId}`);
    for (const img of [...q.images, ...(q.ms ?? [])]) {
      if (!existsSync(path(`media${img}`))) problems.push(`${key}: missing image ${img}`);
    }
  }
  // Only list topics and subtopics that have questions.
  const used = new Set(data.questions.map((q) => q.subtopicId));
  data.topics = data.topics
    .map((t) => ({ ...t, subtopics: t.subtopics.filter((s) => used.has(s.id)) }))
    .filter((t) => t.subtopics.length);
}

const only = process.argv.slice(2);
const summaryPath = path("src/data/topical/summary.json");
const summary = existsSync(summaryPath) ? JSON.parse(readFileSync(summaryPath, "utf8")) : {};
for (const [subject, papers] of Object.entries(PAPERS)) {
  if (only.length && !only.includes(subject)) continue;
  for (const paper of papers) {
    const key = `${subject}-${paper}`;
    const file = `src/data/topical/${key}.json`;
    const work = readWork(subject, paper);
    let data;
    if (work && subject === "maths") data = buildMaths(paper, work);
    else if (work) data = buildCie(subject, paper, work);
    else if (existsSync(path(file))) data = readJson(file);
    else continue;
    if (!data.questions.length) continue;

    check(key, data);
    writeFileSync(path(file), JSON.stringify(data));
    const distinct = new Set(data.questions.map((q) => `${q.session}|${q.number}`));
    const withMs = new Set(data.questions.filter((q) => q.ms?.length).map((q) => `${q.session}|${q.number}`));
    summary[key] = {
      questions: distinct.size,
      topics: data.topics.length,
      sessions: new Set(data.questions.map((q) => q.session)).size,
      withMarkScheme: withMs.size,
    };
  }
}

writeFileSync(path("src/data/topical/summary.json"), JSON.stringify(summary, null, 1) + "\n");
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`);
  for (const p of problems.slice(0, 60)) console.log("  " + p);
  if (problems.length > 60) console.log(`  ... ${problems.length - 60} more`);
  process.exitCode = 1;
}
