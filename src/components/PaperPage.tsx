import React, { useEffect, useState } from "react";
import { loadPapers, paperSummary, type Paper, type YearLinks } from "../data/catalog";
import { hasTopical } from "../data/topical";
import { sessionYear, shortSession, sortSessions } from "../lib/sessions";
import { Link } from "./Link";

type Props = { subjectKey: string; paperCode: string };

export const PaperHeader: React.FC<Props & { view: "sessions" | "topics" }> = ({ subjectKey, paperCode, view }) => (
  <header className="page-head paper-head">
    <h1>
      <span className="paper-code">{paperCode}</span> {paperSummary(subjectKey, paperCode)?.title}
    </h1>
    {hasTopical(subjectKey, paperCode) && (
      <nav className="tabs" aria-label="View">
        <Link
          to={{ subject: subjectKey, paper: paperCode }}
          aria-current={view === "sessions" ? "page" : undefined}
        >
          Papers
        </Link>
        <Link
          to={{ subject: subjectKey, paper: paperCode, view: "topics" }}
          aria-current={view === "topics" ? "page" : undefined}
        >
          By topic
        </Link>
      </nav>
    )}
  </header>
);

const FileLink: React.FC<{ href?: string; label: string; download?: boolean }> = ({ href, label, download }) =>
  href ? (
    <a className="file-link" href={href} target="_blank" rel="noopener noreferrer" download={download || undefined}>
      {label}
    </a>
  ) : (
    <span className="file-missing" aria-label="not available">
      –
    </span>
  );

const SessionTable: React.FC<{ years: Record<string, YearLinks>; id?: string }> = ({ years, id }) => {
  const sessions = sortSessions(Object.keys(years));
  const showInsert = sessions.some((s) => years[s].insert);
  const showFiles = sessions.some((s) => years[s].resource);
  let lastYear = 0;

  return (
    <table className="sessions" id={id}>
      <thead>
        <tr>
          <th scope="col" className="col-year">
            Year
          </th>
          <th scope="col">Session</th>
          <th scope="col">Question paper</th>
          <th scope="col">Mark scheme</th>
          {showInsert && <th scope="col">Insert</th>}
          {showFiles && <th scope="col">Source files</th>}
        </tr>
      </thead>
      <tbody>
        {sessions.map((session) => {
          const year = sessionYear(session);
          const first = year !== lastYear;
          lastYear = year;
          const links = years[session];
          return (
            <tr key={session} className={first ? "year-start" : undefined} id={first ? `${id ?? "y"}-${year}` : undefined}>
              <th scope="row" className="col-year">
                {first ? year || "" : ""}
              </th>
              <td>{year ? shortSession(session) : session}</td>
              <td>
                <FileLink href={links.qp} label="QP" />
              </td>
              <td>
                <FileLink href={links.ms} label="MS" />
              </td>
              {showInsert && (
                <td>
                  <FileLink href={links.insert} label="Insert" />
                </td>
              )}
              {showFiles && (
                <td>
                  <FileLink href={links.resource} label="Files" download />
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const YearIndex: React.FC<{ years: Record<string, YearLinks>; prefix: string }> = ({ years, prefix }) => {
  const list = [...new Set(Object.keys(years).map(sessionYear))].filter(Boolean).sort((a, b) => b - a);
  if (list.length < 6) return null;
  return (
    <p className="year-index">
      {list.map((y) => (
        <a key={y} href={`#${prefix}-${y}`}>
          {y}
        </a>
      ))}
    </p>
  );
};

/** Loads the subject's links (a separate chunk per subject), then shows the paper. */
export const PaperPage: React.FC<Props> = (props) => {
  const { subjectKey, paperCode } = props;
  const [loaded, setLoaded] = useState<{ key: string; paper?: Paper } | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setFailed(false);
    loadPapers(subjectKey)
      .then((data) => !cancelled && setLoaded({ key: subjectKey, paper: data.papers[paperCode] }))
      .catch(() => !cancelled && setFailed(true));
    return () => {
      cancelled = true;
    };
  }, [subjectKey, paperCode]);

  return (
    <>
      <PaperHeader {...props} view="sessions" />
      {failed ? (
        <p className="status">Couldn't load the papers. Check your connection and reload the page.</p>
      ) : !loaded || loaded.key !== subjectKey || !loaded.paper ? (
        <p className="status">Loading…</p>
      ) : (
        <PaperSessions paper={loaded.paper} />
      )}
    </>
  );
};

const PaperSessions: React.FC<{ paper: Paper }> = ({ paper }) => {
  const old = paper.oldSpec && Object.keys(paper.oldSpec.years).length ? paper.oldSpec : undefined;
  return (
    <>
      {Object.keys(paper.years).length > 0 ? (
        <section>
          <YearIndex years={paper.years} prefix="new" />
          {old && (
            <p className="note">
              Older papers from the previous specification are <a href="#old-spec">further down</a>.
            </p>
          )}
          <SessionTable years={paper.years} id="new" />
        </section>
      ) : (
        <p className="status">No papers have been added for this unit yet.</p>
      )}

      {old && (
        <section id="old-spec" className="old-spec">
          <h2>
            Previous specification{old.specNote ? <span className="muted"> · {old.specNote}</span> : null}
          </h2>
          <p className="note">
            Mostly the same content, so these are still good practice. Check the odd question against the
            current specification.
          </p>
          <YearIndex years={old.years} prefix="old" />
          <SessionTable years={old.years} id="old" />
        </section>
      )}
    </>
  );
};
