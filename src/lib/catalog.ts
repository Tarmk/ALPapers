import { SUBJECTS, type Paper, type SubjectKey } from "../data/subjects";

export const SUBJECT_ORDER: SubjectKey[] = ["maths", "physics", "comsci"];

export const SUBJECT_META: Record<SubjectKey, { board: string; short: string }> = {
  maths: { board: "Pearson Edexcel IAL", short: "Maths" },
  physics: { board: "Cambridge 9702", short: "Physics" },
  comsci: { board: "Cambridge 9618", short: "Computer Science" },
};

export const PAPER_GROUPS: Record<SubjectKey, { label: string; codes: string[] }[]> = {
  maths: [
    { label: "Pure", codes: ["P1", "P2", "P3", "P4"] },
    { label: "Statistics", codes: ["S1", "S2", "S3"] },
    { label: "Mechanics", codes: ["M1", "M2", "M3"] },
    { label: "Further Pure", codes: ["FP1", "FP2", "FP3"] },
    { label: "Decision", codes: ["D1"] },
  ],
  physics: [
    { label: "AS Level", codes: ["P1", "P2", "P3"] },
    { label: "A Level", codes: ["P4", "P5"] },
  ],
  comsci: [
    { label: "AS Level", codes: ["P1", "P2"] },
    { label: "A Level", codes: ["P3", "P4"] },
  ],
};

/** "Paper 2 - AS Level Structured Questions" -> "AS Level Structured Questions" */
export function paperTitle(paper: Paper): string {
  return paper.description.replace(/^Paper\s+\d+\s*[-–]\s*/i, "");
}

export function paperSessions(paper: Paper): string[] {
  return [...Object.keys(paper.years), ...Object.keys(paper.oldSpec?.years ?? {})];
}

export function yearRange(labels: string[]): string {
  const years = labels.map((l) => Number(l.match(/\b(19|20)\d{2}\b/)?.[0])).filter(Boolean);
  if (!years.length) return "";
  const lo = Math.min(...years);
  const hi = Math.max(...years);
  return lo === hi ? `${lo}` : `${lo}–${hi}`;
}

export function subjectPaperCount(key: SubjectKey): number {
  return Object.values(SUBJECTS[key].papers).reduce((n, p) => n + paperSessions(p).length, 0);
}
