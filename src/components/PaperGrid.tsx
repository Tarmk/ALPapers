import React from "react";
import { Subject } from "../data/subjects";

type Props = {
  subject: Subject;
  subjectKey?: string;
  onOpenPaper: (paperCode: string) => void;
  onOpenTopicalPaper?: (paperCode: "P3") => void;
};

// Define paper groups in the desired order
const PAPER_GROUPS = [
  { prefix: "P", label: "Pure Mathematics", codes: ["P1", "P2", "P3", "P4", "P5"] },
  { prefix: "FP", label: "Further Pure", codes: ["FP1", "FP2", "FP3"] },
  { prefix: "M", label: "Mechanics", codes: ["M1", "M2", "M3"] },
  { prefix: "S", label: "Statistics", codes: ["S1", "S2", "S3"] },
  { prefix: "D", label: "Decision", codes: ["D1"] },
];

export const PaperGrid: React.FC<Props> = ({ subject, subjectKey, onOpenPaper, onOpenTopicalPaper }) => {
  const paperCodes = Object.keys(subject.papers);

  if (paperCodes.length === 0) {
    return (
      <div className="empty-state">
        <strong>No papers configured yet.</strong> Open{" "}
        <code>src/data/subjects.ts</code> and add your papers.
      </div>
    );
  }

  // Group papers by type
  const groupedPapers = PAPER_GROUPS.map((group) => ({
    ...group,
    papers: group.codes
      .filter((code) => subject.papers[code])
      .map((code) => ({
        code,
        paper: subject.papers[code],
      })),
  })).filter((group) => group.papers.length > 0);

  return (
    <>
      <section className="intro">
        <h2>Select a paper</h2>
        <p className="intro-text">
          Choose a paper below to view all available years with QP and MS links.
        </p>
      </section>

      <div className="paper-groups">
        {groupedPapers.map((group) => (
          <section key={group.prefix} className="paper-group">
            <h3 className="paper-group-label">{group.label}</h3>
            <div className="paper-group-grid">
              {group.papers.map(({ code, paper }) => {
                return (
                  <button
                    key={code}
                    type="button"
                    className="card card-button"
                    onClick={() => onOpenPaper(code)}
                  >
                    <h4>{code}</h4>
                    <p>{paper.description}</p>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {subjectKey === "comsci" && onOpenTopicalPaper && (
        <section className="paper-group">
          <h3 className="paper-group-label">Topical papers</h3>
          <div className="paper-group-grid">
            <button
              type="button"
              className="card card-button"
              onClick={() => onOpenTopicalPaper("P3")}
            >
              <h4>P3</h4>
              <p>Build printable topical question sheets from extracted Paper 3 questions.</p>
              <span className="card-pill">Topical</span>
            </button>
          </div>
        </section>
      )}
    </>
  );
};
