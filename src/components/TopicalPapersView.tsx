import React, { useEffect, useMemo, useState } from "react";
import { flushSync } from "react-dom";
import {
  loadTopical,
  type TopicalData,
  type TopicalPaperCode,
  type TopicalQuestion,
  type TopicalSubjectKey,
  type TopicalTopic,
} from "../data/topical";

type Props = {
  subjectKey: TopicalSubjectKey;
  paperCode: TopicalPaperCode;
  topicId?: string;
  subtopicId?: string;
  onSelectTopic: (topicId: string) => void;
  onSelectSubtopic: (topicId: string, subtopicId: string) => void;
};

const hasPartialTopicFocus = (question: TopicalQuestion) => question.topicFocus !== "Whole question";
const ALL_SUBTOPICS_ID = "all";
type SheetContent = "questions" | "markScheme";

const sessionYear = (session: string) => {
  const match = session.match(/\b(20\d{2})\b/);
  return match ? Number.parseInt(match[1], 10) : 0;
};

const sortSessions = (sessions: string[]) =>
  [...sessions].sort((a, b) => sessionYear(b) - sessionYear(a) || a.localeCompare(b));

const shuffleQuestions = (questions: TopicalQuestion[]) => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const waitForPrintableImages = async () => {
  const images = Array.from(document.querySelectorAll<HTMLImageElement>(".print-sheet img"));
  await Promise.all(
    images.map((image) => {
      if (image.complete && image.naturalWidth > 0) return Promise.resolve();
      return new Promise<void>((resolve) => {
        image.addEventListener("load", () => resolve(), { once: true });
        image.addEventListener("error", () => resolve(), { once: true });
      });
    }),
  );
};

/** Loads the topical index for one paper, then shows it. */
export const TopicalPapersView: React.FC<Props> = (props) => {
  const { subjectKey, paperCode } = props;
  const key = `${subjectKey}:${paperCode}`;
  const [loaded, setLoaded] = useState<{ key: string; data: TopicalData } | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setFailed(false);
    loadTopical(subjectKey, paperCode)
      .then((data) => {
        if (!cancelled) setLoaded({ key, data });
      })
      .catch((error) => {
        console.error("Could not load the topical questions", error);
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [key, subjectKey, paperCode]);

  if (failed) {
    return <p className="intro-text">Could not load the questions. Check your connection and refresh the page.</p>;
  }
  if (!loaded || loaded.key !== key) {
    return <p className="intro-text">Loading questions...</p>;
  }
  return <TopicalPaper {...props} topics={loaded.data.topics} questions={loaded.data.questions} />;
};

const TopicalPaper: React.FC<Props & { topics: TopicalTopic[]; questions: TopicalQuestion[] }> = ({
  paperCode,
  topicId,
  subtopicId,
  onSelectTopic,
  onSelectSubtopic,
  topics: topicalTopics,
  questions: topicalQuestions,
}) => {
  const countQuestions = (predicate: (q: TopicalQuestion) => boolean) =>
    topicalQuestions.filter(predicate).length;

  const selectedTopic = topicalTopics.find((topic) => topic.id === topicId);
  const supportsMarkScheme = topicalQuestions.some((question) => question.markSchemeImages?.length);
  const requestedSubtopic = selectedTopic?.subtopics.find((subtopic) => subtopic.id === subtopicId);
  const selectedSubtopicId = requestedSubtopic ? requestedSubtopic.id : ALL_SUBTOPICS_ID;
  const selectedSubtopic = requestedSubtopic;
  const isAllSubtopicsSelected = selectedSubtopicId === ALL_SUBTOPICS_ID;

  const topicQuestions = useMemo(() => {
    if (!selectedTopic) return [];
    if (isAllSubtopicsSelected) {
      return topicalQuestions.filter((question) => question.topicId === selectedTopic.id);
    }
    if (!selectedSubtopic) return [];
    return topicalQuestions.filter((question) => question.subtopicId === selectedSubtopic.id);
  }, [isAllSubtopicsSelected, selectedSubtopic, selectedTopic, topicalQuestions]);

  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [mode, setMode] = useState<"browse" | "random">("random");
  const [sheetContent, setSheetContent] = useState<SheetContent>("questions");
  const [randomCount, setRandomCount] = useState("20");
  const [randomQuestions, setRandomQuestions] = useState<TopicalQuestion[]>([]);
  const [selectedSessions, setSelectedSessions] = useState<Set<string>>(new Set());
  const availableSessions = useMemo(
    () => sortSessions(Array.from(new Set(topicQuestions.map((question) => question.session)))),
    [topicQuestions],
  );
  const recentSessions = useMemo(() => {
    const years = availableSessions.map(sessionYear).filter(Boolean);
    const latestYear = years.length ? Math.max(...years) : 0;
    return new Set(availableSessions.filter((session) => sessionYear(session) >= latestYear - 2));
  }, [availableSessions]);
  const questions = useMemo(() => {
    if (selectedSessions.size === 0) return [];
    return topicQuestions.filter((question) => selectedSessions.has(question.session));
  }, [selectedSessions, topicQuestions]);
  const questionsWithMarkScheme = useMemo(
    () => questions.filter((question) => question.markSchemeImages?.length),
    [questions],
  );
  // Keep one stable random pool so question paper and mark scheme stay aligned.
  const randomPool = supportsMarkScheme ? questionsWithMarkScheme : questions;

  useEffect(() => {
    setSelectedSessions(new Set(availableSessions));
  }, [availableSessions]);

  useEffect(() => {
    setSelectedIds(new Set(questions.map((question) => question.id)));
    const maxCount = randomPool.length;
    const count = maxCount === 0 ? 0 : Math.max(1, Math.min(Number.parseInt(randomCount, 10) || 1, maxCount));
    setRandomQuestions(shuffleQuestions(randomPool).slice(0, count));
  }, [questions, randomCount, randomPool]);

  useEffect(() => {
    if (!supportsMarkScheme) {
      setSheetContent("questions");
    }
  }, [supportsMarkScheme]);

  const selectedQuestions = questions.filter((question) => selectedIds.has(question.id));
  const printableQuestions = mode === "random" ? randomQuestions : selectedQuestions;

  const handleToggle = (questionId: string) => {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  };

  const handleGenerateRandom = () => {
    const maxCount = randomPool.length;
    const count = maxCount === 0 ? 0 : Math.max(1, Math.min(Number.parseInt(randomCount, 10) || 1, maxCount));
    setRandomQuestions(shuffleQuestions(randomPool).slice(0, count));
  };

  const handleToggleSession = (session: string) => {
    setSelectedSessions((current) => {
      const next = new Set(current);
      if (next.has(session)) {
        next.delete(session);
      } else {
        next.add(session);
      }
      return next;
    });
  };

  const handlePrint = async (content: SheetContent) => {
    flushSync(() => setSheetContent(content));
    await waitForPrintableImages();
    window.print();
  };

  if (!selectedTopic) {
    return (
      <>
        <section className="intro">
          <h2>{paperCode} Topical Papers</h2>
          <p className="intro-text">
            Choose a main syllabus topic, then narrow it down to a subtopic to build a printable
            question sheet.
          </p>
        </section>

        <section className="topical-grid" aria-label={`${paperCode} topical syllabus topics`}>
          {topicalTopics.map((topic: TopicalTopic) => (
            <button
              key={topic.id}
              type="button"
              className="card card-button topical-card"
              onClick={() => onSelectTopic(topic.id)}
            >
              <span className="topical-topic-code">Topic {topic.id}</span>
              <h3>{topic.title}</h3>
              <span className="card-pill">
                {countQuestions((question) => question.topicId === topic.id)} Questions
              </span>
            </button>
          ))}
        </section>
      </>
    );
  }

  return (
    <>
      <section className="intro topical-controls">
        <div>
          <span className="topical-topic-code">Topic {selectedTopic.id}</span>
          <h2>{selectedTopic.title}</h2>
          <p className="intro-text">
            Choose a subtopic, browse the matching questions or generate a random printable set.
          </p>
        </div>
        <div className="topical-print-actions">
          <button className="print-button" type="button" onClick={() => handlePrint("questions")}>
            Print question paper
          </button>
          {supportsMarkScheme && (
            <button className="print-button" type="button" onClick={() => handlePrint("markScheme")}>
              Print mark scheme
            </button>
          )}
        </div>
      </section>

      <div className="topical-workspace">
        <aside className="question-picker card" aria-label="Question selection">
          <label className="topical-field">
            <span>Subtopic</span>
            <select
              value={selectedSubtopicId}
              onChange={(event) => onSelectSubtopic(selectedTopic.id, event.target.value)}
            >
              <option value={ALL_SUBTOPICS_ID}>
                All Subtopics ({countQuestions((question) => question.topicId === selectedTopic.id)})
              </option>
              {selectedTopic.subtopics.map((subtopic) => (
                <option key={subtopic.id} value={subtopic.id}>
                  {subtopic.title} ({countQuestions((question) => question.subtopicId === subtopic.id)})
                </option>
              ))}
            </select>
          </label>

          <fieldset className="topical-mode session-filter">
            <legend>Years / Sessions</legend>
            <div className="session-filter-actions">
              <button
                type="button"
                className="paper-link select-all-button"
                onClick={() => setSelectedSessions(new Set(availableSessions))}
              >
                All
              </button>
              <button
                type="button"
                className="paper-link select-all-button"
                onClick={() => setSelectedSessions(new Set(recentSessions))}
              >
                Recent
              </button>
              <button
                type="button"
                className="paper-link select-all-button"
                onClick={() => setSelectedSessions(new Set())}
              >
                None
              </button>
            </div>
            <p className="session-filter-summary">
              {selectedSessions.size} of {availableSessions.length} session(s) included
            </p>
            <div className="session-filter-list">
              {availableSessions.map((session) => {
                const matchingCount = topicQuestions.filter((question) => question.session === session).length;
                return (
                  <label key={session}>
                    <input
                      type="checkbox"
                      checked={selectedSessions.has(session)}
                      onChange={() => handleToggleSession(session)}
                    />
                    <span>
                      {session}
                      <small>{matchingCount} question(s)</small>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="topical-mode">
            <legend>Question mode</legend>
            <label>
              <input
                type="radio"
                name="topical-mode"
                value="browse"
                checked={mode === "browse"}
                onChange={() => setMode("browse")}
              />
              Display questions below
            </label>
            <label>
              <input
                type="radio"
                name="topical-mode"
                value="random"
                checked={mode === "random"}
                onChange={() => setMode("random")}
              />
              Random printable set
            </label>
          </fieldset>

          {supportsMarkScheme && (
            <fieldset className="topical-mode">
              <legend>View</legend>
              <label>
                <input
                  type="radio"
                  name="sheet-content"
                  value="questions"
                  checked={sheetContent === "questions"}
                  onChange={() => setSheetContent("questions")}
                />
                Questions
              </label>
              <label>
                <input
                  type="radio"
                  name="sheet-content"
                  value="markScheme"
                  checked={sheetContent === "markScheme"}
                  onChange={() => setSheetContent("markScheme")}
                />
                Mark scheme
              </label>
            </fieldset>
          )}

          {mode === "random" && (
            <div className="random-controls">
              <label className="topical-field">
                <span>How many questions?</span>
                <input
                  type="number"
                  min="1"
                  max={Math.max(1, randomPool.length)}
                  value={randomCount}
                  onChange={(event) => setRandomCount(event.target.value)}
                />
              </label>
              <button className="print-button random-button" type="button" onClick={handleGenerateRandom}>
                Generate random set
              </button>
            </div>
          )}

          <div className="question-picker-header">
            <strong>
              {mode === "random" ? `${randomQuestions.length} generated` : `${questions.length} questions`}
            </strong>
            {mode === "browse" && (
              <button
                type="button"
                className="paper-link select-all-button"
                onClick={() => setSelectedIds(new Set(questions.map((question) => question.id)))}
              >
                Select all
              </button>
            )}
          </div>

          {mode === "browse" ? (
            questions.map((question) => (
              <label key={question.id} className="question-option">
                <input
                  type="checkbox"
                  checked={selectedIds.has(question.id)}
                  onChange={() => handleToggle(question.id)}
                />
                <span>
                  <strong>Q{question.questionNumber}</strong>
                  <small>{question.session} · {question.paperCode}</small>
                  {hasPartialTopicFocus(question) && (
                    <small className="topic-focus-label">{question.topicFocus}</small>
                  )}
                </span>
              </label>
            ))
          ) : randomQuestions.length === 0 ? (
            <p className="random-hint">
              {sheetContent === "markScheme" && supportsMarkScheme
                ? "No questions with mark schemes are available for this selection."
                : "Enter a number and generate a random set."}
            </p>
          ) : (
            randomQuestions.map((question) => (
              <div key={question.id} className="question-option question-option-static">
                <span>
                  <strong>Q{question.questionNumber}</strong>
                  <small>{question.session} · {question.paperCode}</small>
                  {hasPartialTopicFocus(question) && (
                    <small className="topic-focus-label">{question.topicFocus}</small>
                  )}
                </span>
              </div>
            ))
          )}
        </aside>

        <section className="print-sheet" aria-label={sheetContent === "questions" ? "Printable question sheet" : "Printable mark scheme"}>
          <div className="print-sheet-header">
            <h2>{paperCode} {sheetContent === "questions" ? "Topical Questions" : "Mark Scheme"}</h2>
            <p>
              {isAllSubtopicsSelected
                ? `${selectedTopic.id} ${selectedTopic.title} - All subtopics`
                : selectedSubtopic?.title}
            </p>
            {mode === "random" && <p>Random Set Of {randomQuestions.length} Question(s)</p>}
          </div>

          {printableQuestions.length === 0 ? (
            <div className="empty-state">
              {mode === "random"
                ? "Generate a random set to preview the sheet."
                : "Select at least one question to preview the sheet."}
            </div>
          ) : (
            printableQuestions.map((question) => (
              <article key={question.id} className="print-question">
                <h3>
                  {question.session} · Q{question.questionNumber}
                </h3>
                {sheetContent === "questions" && hasPartialTopicFocus(question) && (
                  <p className="print-topic-focus">
                    Topic coverage: {question.topicFocus}
                  </p>
                )}
                {sheetContent === "questions" ? (
                  question.images.map((src, index) => (
                    <img
                      key={src}
                      className="question-image"
                      src={src}
                      alt={`${question.session} question ${question.questionNumber} part ${index + 1}`}
                      loading="eager"
                    />
                  ))
                ) : question.markSchemeImages?.length ? (
                  question.markSchemeImages.map((src, index) => (
                    <img
                      key={src}
                      className="question-image"
                      src={src}
                      alt={`${question.session} question ${question.questionNumber} mark scheme part ${index + 1}`}
                      loading="eager"
                    />
                  ))
                ) : (
                  <div className="empty-state">
                    Missing mark scheme for {question.session} Q{question.questionNumber}.
                  </div>
                )}
              </article>
            ))
          )}
        </section>
      </div>
    </>
  );
};
