import React from "react";
import { SUBJECTS, type SubjectKey } from "../data/subjects";
import { topicalSummary } from "../data/topical";
import { PAPER_GROUPS, SUBJECT_META, paperSessions, paperTitle, yearRange } from "../lib/catalog";
import { Link } from "./Link";

const fmt = new Intl.NumberFormat("en-GB");

export const SubjectPage: React.FC<{ subjectKey: SubjectKey }> = ({ subjectKey }) => {
  const subject = SUBJECTS[subjectKey];
  return (
    <>
      <header className="page-head">
        <p className="eyebrow">{SUBJECT_META[subjectKey].board}</p>
        <h1>{subject.name}</h1>
      </header>

      {PAPER_GROUPS[subjectKey].map((group) => {
        const codes = group.codes.filter((code) => subject.papers[code]);
        if (!codes.length) return null;
        return (
          <section key={group.label} className="paper-group">
            <h2 className="group-label">{group.label}</h2>
            <ul className="paper-list">
              {codes.map((code) => {
                const paper = subject.papers[code];
                const sessions = paperSessions(paper);
                const topical = topicalSummary(subjectKey, code);
                return (
                  <li key={code} className="paper-row">
                    <Link to={{ subject: subjectKey, paper: code }} className="paper-row-main">
                      <span className="paper-code">{code}</span>
                      <span className="paper-name">{paperTitle(paper)}</span>
                    </Link>
                    <span className="paper-meta">
                      {sessions.length} sessions, {yearRange(sessions)}
                    </span>
                    <span className="paper-actions">
                      <Link to={{ subject: subjectKey, paper: code }}>Papers</Link>
                      {topical ? (
                        <Link to={{ subject: subjectKey, paper: code, view: "topics" }}>
                          By topic <span className="count">{fmt.format(topical.questions)}</span>
                        </Link>
                      ) : (
                        <span className="muted">By topic</span>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </>
  );
};
