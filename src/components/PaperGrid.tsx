import React from "react";
import { Subject } from "../data/subjects";

type Props = {
  subject: Subject;
  onOpenPaper: (paperCode: string) => void;
};

export const PaperGrid: React.FC<Props> = ({ subject, onOpenPaper }) => {
  const paperCodes = Object.keys(subject.papers);

  if (paperCodes.length === 0) {
    return (
      <div className="empty-state">
        <strong>No papers configured yet.</strong> Open{" "}
        <code>src/data/subjects.ts</code> and add your papers.
      </div>
    );
  }

  return (
    <>
      <section className="intro">
        <h2>Select a paper</h2>
        <p className="intro-text">
          Choose a paper below to view all available years with QP and MS links.
        </p>
      </section>

      <section className="card-grid" aria-label="Papers">
        {paperCodes.map((code) => {
          const paper = subject.papers[code];
          const yearCount = Object.keys(paper.years || {}).length;

          return (
            <button
              key={code}
              type="button"
              className="card card-button"
              onClick={() => onOpenPaper(code)}
            >
              <h3>{code}</h3>
              <p>{paper.description}</p>
              <span className="card-pill">
                {yearCount === 0
                  ? "No years added yet"
                  : `${yearCount} ${yearCount === 1 ? "year" : "years"}`}
              </span>
            </button>
          );
        })}
      </section>
    </>
  );
};
