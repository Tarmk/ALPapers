import React from "react";
import { SUBJECTS } from "../data/subjects";
import { topicalSummary } from "../data/topical";
import { PAPER_GROUPS, SUBJECT_META, SUBJECT_ORDER, subjectPaperCount } from "../lib/catalog";
import { Link } from "./Link";

const fmt = new Intl.NumberFormat("en-GB");

export const Home: React.FC = () => (
  <>
    <p className="lede">
      Every question paper and mark scheme for three A-Level courses, back to the old specifications. Each
      question is also cut out and filed under its syllabus topic, so you can practise one topic at a time and
      print the questions with their mark scheme.
    </p>

    <div className="subjects">
      {SUBJECT_ORDER.map((key) => {
        const subject = SUBJECTS[key];
        const topical = Object.keys(subject.papers).reduce(
          (n, code) => n + (topicalSummary(key, code)?.questions ?? 0),
          0,
        );
        return (
          <section key={key} className="subject">
            <p className="eyebrow">{SUBJECT_META[key].board}</p>
            <h2>
              <Link to={{ subject: key }}>{subject.name}</Link>
            </h2>
            <p className="subject-stats">
              {fmt.format(subjectPaperCount(key))} papers
              {topical > 0 && <> · {fmt.format(topical)} questions by topic</>}
            </p>
            <dl className="subject-papers">
              {PAPER_GROUPS[key].map((group) => (
                <React.Fragment key={group.label}>
                  <dt>{group.label}</dt>
                  <dd>
                    {group.codes
                      .filter((code) => subject.papers[code])
                      .map((code) => (
                        <Link key={code} to={{ subject: key, paper: code }} className="code-link">
                          {code}
                        </Link>
                      ))}
                  </dd>
                </React.Fragment>
              ))}
            </dl>
          </section>
        );
      })}
    </div>
  </>
);
