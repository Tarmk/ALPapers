import React from "react";
import { BOARDS, LEVELS, paperSummary, type Subject } from "../data/catalog";
import { topicalSummary } from "../data/topical";
import { Link } from "./Link";

const fmt = new Intl.NumberFormat("en-GB");

export const SubjectPage: React.FC<{ subject: Subject }> = ({ subject }) => (
  <>
    <header className="page-head">
      <p className="eyebrow">
        {BOARDS[subject.board]} · {LEVELS.find((l) => l.id === subject.level)?.name} · {subject.code}
      </p>
      <h1>{subject.name}</h1>
    </header>

    {subject.groups.map((group) => {
      const codes = group.codes.filter((code) => paperSummary(subject.key, code));
      if (!codes.length) return null;
      return (
        <section key={group.label} className="paper-group">
          <h2 className="group-label">{group.label}</h2>
          <ul className="paper-list">
            {codes.map((code) => {
              const paper = paperSummary(subject.key, code)!;
              const topical = topicalSummary(subject.key, code);
              return (
                <li key={code} className="paper-row">
                  <Link to={{ subject: subject.key, paper: code }} className="paper-row-main">
                    <span className="paper-code">{code}</span>
                    <span className="paper-name">{paper.title}</span>
                  </Link>
                  <span className="paper-meta">
                    {paper.sessions} sessions, {paper.years}
                  </span>
                  <span className="paper-actions">
                    <Link to={{ subject: subject.key, paper: code }}>Papers</Link>
                    {topical ? (
                      <Link to={{ subject: subject.key, paper: code, view: "topics" }}>
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
