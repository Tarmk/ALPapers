import React from "react";
import { Paper } from "../data/subjects";

type Props = {
  paper: Paper;
  paperCode: string;
};

const PaperTable: React.FC<{ years: Record<string, any> }> = ({ years }) => {
  const yearKeys = Object.keys(years).sort().reverse();

  return (
    <table className="paper-table">
      <thead>
        <tr>
          <th>Year</th>
          <th>Question Paper (QP)</th>
          <th>Mark Scheme (MS)</th>
        </tr>
      </thead>
      <tbody>
        {yearKeys.map((year) => {
          const info = years[year];
          return (
            <tr key={year}>
              <td>{year}</td>
              <td>
                {info?.qp ? (
                  <>
                    <a
                      className="paper-link"
                      href={info.qp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open QP
                    </a>
                    <span className="pill-qp">QP</span>
                  </>
                ) : (
                  "-"
                )}
              </td>
              <td>
                {info?.ms ? (
                  <>
                    <a
                      className="paper-link"
                      href={info.ms}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open MS
                    </a>
                    <span className="pill-ms">MS</span>
                  </>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export const PaperView: React.FC<Props> = ({ paper, paperCode }) => {
  const years = paper.years || {};
  const yearKeys = Object.keys(years);
  const hasOldSpec = paper.oldSpec && Object.keys(paper.oldSpec.years).length > 0;

  if (yearKeys.length === 0 && !hasOldSpec) {
    return (
      <div className="empty-state">
        <strong>No years added yet.</strong> Edit{" "}
        <code>src/data/subjects.ts</code> to add QP/MS links for {paperCode}.
      </div>
    );
  }

  return (
    <div className="paper-sections-container">
      {yearKeys.length > 0 && (
        <section className="paper-section">
          <h2 className="spec-header">New Specification (IAL)</h2>
          <PaperTable years={years} />
        </section>
      )}

      {hasOldSpec && (
        <section className="paper-section old-spec-section">
          <h2 className="spec-header old-spec-header">
            Old Specification
            {paper.oldSpec.specNote && (
              <span className="spec-note"> ({paper.oldSpec.specNote})</span>
            )}
          </h2>
          <p className="old-spec-notice">
            These papers are from the previous specification and are great for additional practice.
          </p>
          <PaperTable years={paper.oldSpec.years} />
        </section>
      )}
    </div>
  );
};
