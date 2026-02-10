import React from "react";
import { SubjectKey, SUBJECTS } from "../data/subjects";

type Props = {
  onOpenSubject: (key: SubjectKey) => void;
};

export const SubjectGrid: React.FC<Props> = ({ onOpenSubject }) => {
  return (
    <>
      <section className="intro">
        <h2>Select a subject</h2>
        <p className="intro-text">
          Choose a subject below to see all its papers (P1, P2, P3, FP1, FP2,
          FP3, S1, S2, S3, M1, etc.) organised by year with links to QP and MS.
        </p>
      </section>

      <section className="subject-grid" aria-label="Subjects">
        <button
          type="button"
          className="card card-button subject-card"
          onClick={() => onOpenSubject("maths")}
        >
          <h3>Mathematics</h3>
          <p>{SUBJECTS.maths.description}</p>
          <span className="card-pill">
            P1 · P2 · P3 · P4 · S1 · S2 · S3 · M1 · M2 · M3 · D1 · FP1 · FP2 · FP3
          </span>
        </button>

        <button
          type="button"
          className="card card-button subject-card"
          onClick={() => onOpenSubject("physics")}
        >
          <h3>Physics</h3>
          <p>{SUBJECTS.physics.description}</p>
          <span className="card-pill">P1 · P2 · P3</span>
        </button>

        <button
          type="button"
          className="card card-button subject-card"
          onClick={() => onOpenSubject("comsci")}
        >
          <h3>Computer Science</h3>
          <p>{SUBJECTS.comsci.description}</p>
          <span className="card-pill">Cambridge 9618</span>
        </button>
      </section>
    </>
  );
};

