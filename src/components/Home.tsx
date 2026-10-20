import React from "react";
import { BOARDS, LEVELS, SUBJECTS, subjectPaperCount, type Board, type Subject } from "../data/catalog";
import { topicalSummary } from "../data/topical";
import { Link } from "./Link";

const fmt = new Intl.NumberFormat("en-GB");

const SubjectBlock: React.FC<{ subject: Subject }> = ({ subject }) => {
  const codes = subject.groups.flatMap((g) => g.codes);
  const topical = codes.reduce((n, code) => n + (topicalSummary(subject.key, code)?.questions ?? 0), 0);
  return (
    <section className="subject">
      <p className="eyebrow">{subject.code === "IAL" ? "International A Level" : `Syllabus ${subject.code}`}</p>
      <h3>
        <Link to={{ subject: subject.key }}>{subject.name}</Link>
      </h3>
      <p className="subject-stats">
        {fmt.format(subjectPaperCount(subject.key))} papers
        {topical > 0 && <> · {fmt.format(topical)} questions by topic</>}
      </p>
      <dl className="subject-papers">
        {subject.groups.map((group) => (
          <React.Fragment key={group.label}>
            <dt>{group.label}</dt>
            <dd>
              {group.codes.map((code) => (
                <Link key={code} to={{ subject: subject.key, paper: code }} className="code-link">
                  {code}
                </Link>
              ))}
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </section>
  );
};

export const Home: React.FC = () => (
  <>
    <p className="lede">
      Every question paper and mark scheme, back to the old specifications. Each question is also cut out and
      filed under its syllabus topic, so you can practise one topic at a time and print the questions with their
      mark scheme.
    </p>

    {LEVELS.map((level) => {
      const atLevel = SUBJECTS.filter((s) => s.level === level.id);
      if (!atLevel.length) return null;
      const boards = (Object.keys(BOARDS) as Board[]).filter((b) => atLevel.some((s) => s.board === b));
      return (
        <section key={level.id} className="level">
          <h2 className="level-name">{level.name}</h2>
          {boards.map((board) => (
            <div key={board} className="board">
              <h3 className="group-label">{BOARDS[board]}</h3>
              <div className="subjects">
                {atLevel
                  .filter((s) => s.board === board)
                  .map((s) => (
                    <SubjectBlock key={s.key} subject={s} />
                  ))}
              </div>
            </div>
          ))}
        </section>
      );
    })}
  </>
);
