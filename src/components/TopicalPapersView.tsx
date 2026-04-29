import React, { useEffect, useMemo, useState } from "react";
import {
  COMSCI_P3_QUESTIONS,
  COMSCI_P3_TOPICS,
  TopicalQuestion,
  TopicalTopic,
} from "../data/comsciP3Topical";

type Props = {
  paperCode: "P3";
  topicId?: string;
  subtopicId?: string;
  onSelectTopic: (topicId: string) => void;
  onSelectSubtopic: (topicId: string, subtopicId: string) => void;
};

const countQuestions = (predicate: (q: TopicalQuestion) => boolean) =>
  COMSCI_P3_QUESTIONS.filter(predicate).length;

const hasPartialTopicFocus = (question: TopicalQuestion) => question.topicFocus !== "Whole question";

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

export const TopicalPapersView: React.FC<Props> = ({
  paperCode,
  topicId,
  subtopicId,
  onSelectTopic,
  onSelectSubtopic,
}) => {
  const selectedTopic = COMSCI_P3_TOPICS.find((topic) => topic.id === topicId);
  const selectedSubtopic =
    selectedTopic?.subtopics.find((subtopic) => subtopic.id === subtopicId) ??
    selectedTopic?.subtopics[0];

  const questions = useMemo(() => {
    if (!selectedSubtopic) return [];
    return COMSCI_P3_QUESTIONS.filter((question) => question.subtopicId === selectedSubtopic.id);
  }, [selectedSubtopic]);

  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [mode, setMode] = useState<"browse" | "random">("random");
  const [randomCount, setRandomCount] = useState("20");
  const [randomQuestions, setRandomQuestions] = useState<TopicalQuestion[]>([]);

  useEffect(() => {
    setSelectedIds(new Set(questions.map((question) => question.id)));
    const count = Math.max(1, Math.min(Number.parseInt(randomCount, 10) || 1, questions.length));
    setRandomQuestions(shuffleQuestions(questions).slice(0, count));
  }, [questions]);

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
    const count = Math.max(1, Math.min(Number.parseInt(randomCount, 10) || 1, questions.length));
    setRandomQuestions(shuffleQuestions(questions).slice(0, count));
  };

  const handlePrint = async () => {
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

        <section className="topical-grid" aria-label="P3 topical syllabus topics">
          {COMSCI_P3_TOPICS.map((topic: TopicalTopic) => (
            <button
              key={topic.id}
              type="button"
              className="card card-button topical-card"
              onClick={() => onSelectTopic(topic.id)}
            >
              <h3>{topic.id}</h3>
              <p>{topic.title}</p>
              <span className="card-pill">
                {countQuestions((question) => question.topicId === topic.id)} questions
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
          <h2>{selectedTopic.id} {selectedTopic.title}</h2>
          <p className="intro-text">
            Choose a subtopic, browse the matching questions or generate a random printable set.
          </p>
        </div>
        <button className="print-button" type="button" onClick={handlePrint}>
          Print A4 sheet
        </button>
      </section>

      <div className="topical-workspace">
        <aside className="question-picker card" aria-label="Question selection">
          <label className="topical-field">
            <span>Subtopic</span>
            <select
              value={selectedSubtopic?.id ?? ""}
              onChange={(event) => onSelectSubtopic(selectedTopic.id, event.target.value)}
            >
              {selectedTopic.subtopics.map((subtopic) => (
                <option key={subtopic.id} value={subtopic.id}>
                  {subtopic.id} {subtopic.title} (
                  {countQuestions((question) => question.subtopicId === subtopic.id)})
                </option>
              ))}
            </select>
          </label>

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

          {mode === "random" && (
            <div className="random-controls">
              <label className="topical-field">
                <span>How many questions?</span>
                <input
                  type="number"
                  min="1"
                  max={questions.length}
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
            <p className="random-hint">Enter a number and generate a random set.</p>
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

        <section className="print-sheet" aria-label="Printable question sheet">
          <div className="print-sheet-header">
            <h2>{paperCode} Topical Questions</h2>
            <p>{selectedSubtopic?.id} {selectedSubtopic?.title}</p>
            {mode === "random" && <p>Random set of {randomQuestions.length} question(s)</p>}
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
                {hasPartialTopicFocus(question) && (
                  <p className="print-topic-focus">
                    Topic coverage: {question.topicFocus}
                  </p>
                )}
                {question.images.map((src, index) => (
                  <img
                    key={src}
                    className="question-image"
                    src={src}
                    alt={`${question.session} question ${question.questionNumber} part ${index + 1}`}
                    loading="eager"
                  />
                ))}
              </article>
            ))
          )}
        </section>
      </div>
    </>
  );
};
