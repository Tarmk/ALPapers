import summary from "./topical/summary.json";
import { asset, assetBase } from "../lib/asset";

export type TopicalQuestion = {
  id: string;
  session: string;
  number: number;
  topicId: string;
  subtopicId: string;
  /** Set when only some parts of the question are on this topic, e.g. "Parts (b), (c)". */
  focus?: string;
  images: string[];
  /** Mark scheme images, when the mark scheme could be split for this question. */
  ms?: string[];
};

export type TopicalSubtopic = { id: string; title: string };
export type TopicalTopic = { id: string; title: string; subtopics: TopicalSubtopic[] };
export type TopicalData = { topics: TopicalTopic[]; questions: TopicalQuestion[] };

export type TopicalSummary = { questions: number; topics: number; sessions: number; withMarkScheme: number };

const SUMMARY = summary as Record<string, TopicalSummary>;

/** Question counts per paper, without loading the (large) indexes. */
export function topicalSummary(subject: string, paper: string): TopicalSummary | undefined {
  return SUMMARY[`${subject}-${paper}`];
}

export function hasTopical(subject: string, paper: string): boolean {
  return `${subject}-${paper}` in SUMMARY;
}

// Each index is its own chunk, downloaded only when that paper's topical view opens.
const INDEXES = import.meta.glob<TopicalData>(["./topical/*.json", "!./topical/summary.json"], { import: "default" });

export function loadTopical(subject: string, paper: string): Promise<TopicalData> {
  const load = INDEXES[`./topical/${subject}-${paper}.json`];
  if (!load) return Promise.reject(new Error(`No topical index for ${subject} ${paper}`));
  return load().then((data) =>
    assetBase
      ? {
          ...data,
          questions: data.questions.map((q) => ({
            ...q,
            images: q.images.map(asset),
            ms: q.ms?.map(asset),
          })),
        }
      : data,
  );
}
