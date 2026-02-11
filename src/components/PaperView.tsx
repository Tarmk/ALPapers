import React from "react";
import { Paper } from "../data/subjects";

type Props = {
  paper: Paper;
  paperCode: string;
};

const PaperTable: React.FC<{ years: Record<string, any>; showResource?: boolean; showInsert?: boolean }> = ({ years, showResource, showInsert }) => {
  const yearKeys = Object.keys(years).sort().reverse();

  return (
    <table className="paper-table">
      <thead>
        <tr>
          <th>Year</th>
          <th>Question Paper (QP)</th>
          <th>Mark Scheme (MS)</th>
          {showInsert && <th>Pseudocode Insert</th>}
          {showResource && <th>Source Files</th>}
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
              {showInsert && (
                <td>
                  {info?.insert ? (
                    <>
                      <a
                        className="paper-link"
                        href={info.insert}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open
                      </a>
                      <span className="pill-in">IN</span>
                    </>
                  ) : (
                    "-"
                  )}
                </td>
              )}
              {showResource && (
                <td>
                  {info?.resource ? (
                    <>
                      <a
                        className="paper-link"
                        href={info.resource}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Download
                      </a>
                      <span className="pill-res">SF</span>
                    </>
                  ) : (
                    "-"
                  )}
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const YearJumpButtons: React.FC<{ uniqueYears: string[] }> = ({ uniqueYears }) => {
  const handleScroll = (year: string) => {
    const element = document.getElementById(`year-${year}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="year-jump-buttons">
      {uniqueYears.map((year) => (
        <button
          key={year}
          className="year-jump-btn"
          onClick={() => handleScroll(year)}
        >
          {year}
        </button>
      ))}
    </div>
  );
};

const YearGroupedTable: React.FC<{ years: Record<string, any>; showResource?: boolean; showInsert?: boolean }> = ({ years, showResource, showInsert }) => {
  // Group by calendar year
  const grouped: Record<string, Record<string, any>> = {};
  
  Object.entries(years).forEach(([key, value]) => {
    const match = key.match(/(\d{4})/);
    if (match) {
      const year = match[1];
      if (!grouped[year]) grouped[year] = {};
      grouped[year][key] = value;
    }
  });

  const sortedYears = Object.keys(grouped).sort().reverse();

  return (
    <>
      {sortedYears.map((year) => (
        <div key={year} id={`year-${year}`} className="year-group">
          <h3 className="year-group-header">{year}</h3>
          <PaperTable years={grouped[year]} showResource={showResource} showInsert={showInsert} />
        </div>
      ))}
    </>
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

  // Extract unique calendar years
  const extractUniqueYears = (yearData: Record<string, any>) => {
    const years = new Set<string>();
    Object.keys(yearData).forEach((key) => {
      const match = key.match(/(\d{4})/);
      if (match) years.add(match[1]);
    });
    return Array.from(years).sort().reverse();
  };

  const uniqueYears = extractUniqueYears(years);
  const uniqueOldYears = hasOldSpec ? extractUniqueYears(paper.oldSpec.years) : [];

  const showResource = paperCode === "P4";
  const showInsert = paperCode === "P2";

  return (
    <div className="paper-sections-container">
      {yearKeys.length > 0 && (
        <section className="paper-section">
          <h2 className="spec-header">New Specification (IAL)</h2>
          {uniqueYears.length > 0 && (
            <>
              <p className="intro-text">Jump to year:</p>
              <YearJumpButtons uniqueYears={uniqueYears} />
              {hasOldSpec && (
                <button
                  className="year-jump-btn old-spec-jump"
                  onClick={() => {
                    const element = document.getElementById('old-spec-section');
                    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  Old Specification ↓
                </button>
              )}
            </>
          )}
          <YearGroupedTable years={years} showResource={showResource} showInsert={showInsert} />
        </section>
      )}

      {hasOldSpec && (
        <section className="paper-section old-spec-section" id="old-spec-section">
          <h2 className="spec-header old-spec-header">
            Old Specification
            {paper.oldSpec.specNote && (
              <span className="spec-note"> ({paper.oldSpec.specNote})</span>
            )}
          </h2>
          <p className="old-spec-notice">
            These papers are from the previous specification and are great for additional practice.
          </p>
          {uniqueOldYears.length > 0 && (
            <>
              <p className="intro-text">Jump to year:</p>
              <YearJumpButtons uniqueYears={uniqueOldYears} />
            </>
          )}
          <YearGroupedTable years={paper.oldSpec.years} showResource={showResource} showInsert={showInsert} />
        </section>
      )}
    </div>
  );
};
