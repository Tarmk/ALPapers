import type { TopicalQuestion, TopicalTopic } from "./comsciP3Topical";

export type { TopicalQuestion, TopicalTopic };
export type TopicalSubjectKey = "comsci" | "physics" | "maths";
export type TopicalPaperCode = "P1" | "P2" | "P3" | "P4" | "P5" | "S3";
export type TopicalData = { topics: TopicalTopic[]; questions: TopicalQuestion[] };

/**
 * The topical indexes are large (physics alone is about 5 MB of JSON-like data),
 * so each subject is a separate chunk that is only downloaded when someone opens
 * that subject's topical view, instead of being part of the first page load.
 */
export async function loadTopical(subject: TopicalSubjectKey, paper: TopicalPaperCode): Promise<TopicalData> {
  if (subject === "maths") {
    const m = await import("./mathsS3Topical");
    return { topics: m.MATHS_S3_TOPICS, questions: m.MATHS_S3_QUESTIONS };
  }
  if (subject === "physics") {
    const m = await import("./physicsTopical");
    const byPaper: Record<string, TopicalData> = {
      P1: { topics: m.PHYSICS_P1_TOPICS, questions: m.PHYSICS_P1_QUESTIONS },
      P2: { topics: m.PHYSICS_P2_TOPICS, questions: m.PHYSICS_P2_QUESTIONS },
      P3: { topics: m.PHYSICS_P3_TOPICS, questions: m.PHYSICS_P3_QUESTIONS },
      P4: { topics: m.PHYSICS_P4_TOPICS, questions: m.PHYSICS_P4_QUESTIONS },
      P5: { topics: m.PHYSICS_P5_TOPICS, questions: m.PHYSICS_P5_QUESTIONS },
    };
    return byPaper[paper] ?? byPaper.P5;
  }
  switch (paper) {
    case "P1": {
      const m = await import("./comsciP1Topical");
      return { topics: m.COMSCI_P1_TOPICS, questions: m.COMSCI_P1_QUESTIONS };
    }
    case "P2": {
      const m = await import("./comsciP2Topical");
      return { topics: m.COMSCI_P2_TOPICS, questions: m.COMSCI_P2_QUESTIONS };
    }
    case "P4": {
      const m = await import("./comsciP4Topical");
      return { topics: m.COMSCI_P4_TOPICS, questions: m.COMSCI_P4_QUESTIONS };
    }
    default: {
      const m = await import("./comsciP3Topical");
      return { topics: m.COMSCI_P3_TOPICS, questions: m.COMSCI_P3_QUESTIONS };
    }
  }
}
