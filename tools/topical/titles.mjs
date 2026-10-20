// One-off tidy of the physics and computer science topic titles: sentence case
// like the maths outlines, with acronyms and names kept, and a few fixes.
//
//   node tools/topical/titles.mjs

import { readFileSync, writeFileSync } from "node:fs";

const FIXED = {
  "Newton laws of motion": "Newton's laws of motion",
  "Stress, strain and Young modulus": "Stress, strain and the Young modulus",
  "D.C. Circuits": "D.C. circuits",
  "I-V characteristics": "I–V characteristics",
  "Artificial Intelligence (legacy Paper 1 questions)": "Artificial intelligence (older Paper 1 questions)",
  "Artificial Intelligence (AI)": "Artificial intelligence (AI)",
  "Central Processing Unit (CPU) Architecture": "CPU architecture",
  "Database Management Systems (DBMS)": "Database management systems (DBMS)",
  "Data Definition Language (DDL) and Data Manipulation Language (DML)": "DDL and DML (SQL)",
  "Purposes of an Operating System (OS)": "Purposes of an operating system",
  "Introduction to Abstract Data Types (ADT)": "Abstract data types (ADTs)",
  "Ultrasound, X-rays and PET": "Ultrasound, X-rays and PET",
  "Standard candles and Hubble law": "Standard candles and Hubble's law",
  "Floating-Point Numbers, Representation And Manipulation": "Floating-point numbers",
  "Processors, Parallel Processing And Virtual Machines": "Processors, parallel processing and virtual machines",
  "Pseudocode Design And Debugging": "Pseudocode design and debugging",
  "Algorithm Design And Trace Tables": "Algorithm design and trace tables",
  "Program Development Life cycle": "Program development life cycle",
  "Object-Oriented Programming": "Object-oriented programming",
  "Object-Oriented programming": "Object-oriented programming",
  "User-Defined Data Types": "User-defined data types",
  "User-Defined data types": "User-defined data types",
};

const KEEP = new Set(["SI", "PET", "X-rays", "AI", "CPU", "OS", "SQL", "Boolean", "Paper", "ADT", "ADTs"]);

function sentenceCase(title) {
  if (FIXED[title]) return FIXED[title];
  return title
    .split(" ")
    .map((word, i) => {
      if (i === 0 || KEEP.has(word.replace(/[(),]/g, "")) || /^[A-Z.]{2,}$/.test(word)) return word;
      return word.toLowerCase();
    })
    .join(" ");
}

const root = new URL("../../", import.meta.url);
for (const key of ["physics-P1", "physics-P2", "physics-P3", "physics-P4", "physics-P5", "comsci-P1", "comsci-P2", "comsci-P3", "comsci-P4"]) {
  const file = new URL(`src/data/topical/${key}.json`, root);
  const data = JSON.parse(readFileSync(file, "utf8"));
  for (const t of data.topics) {
    t.title = sentenceCase(t.title);
    for (const s of t.subtopics) s.title = sentenceCase(s.title);
  }
  writeFileSync(file, JSON.stringify(data));
  console.log(key, data.topics.map((t) => t.title).join(" | "));
}
