import React, { useEffect, useState } from "react";
import { SUBJECTS, SubjectKey, Subject, Paper } from "./data/subjects";
import { SubjectGrid } from "./components/SubjectGrid";
import { PaperGrid } from "./components/PaperGrid";
import { PaperView } from "./components/PaperView";

type ViewState =
  | { type: "subjects" }
  | { type: "papers"; subjectKey: SubjectKey; subject: Subject }
  | {
      type: "paper";
      subjectKey: SubjectKey;
      subject: Subject;
      paperCode: string;
      paper: Paper;
    };

function getInitialView(): ViewState {
  const params = new URLSearchParams(window.location.search);
  const subjectKey = params.get("subject") as SubjectKey | null;
  const paperCode = params.get("paper");

  if (subjectKey && SUBJECTS[subjectKey]) {
    const subject = SUBJECTS[subjectKey];

    if (paperCode && subject.papers[paperCode]) {
      return {
        type: "paper",
        subjectKey,
        subject,
        paperCode,
        paper: subject.papers[paperCode],
      };
    }

    return { type: "papers", subjectKey, subject };
  }

  return { type: "subjects" };
}

function getInitialTheme(): "light" | "dark" {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  
  // Check system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  
  return "light";
}

export const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(() => getInitialView());
  const [theme, setTheme] = useState<"light" | "dark">(() => getInitialTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const url = new URL(window.location.href);

    if (view.type === "paper") {
      url.searchParams.set("subject", view.subjectKey);
      url.searchParams.set("paper", view.paperCode);
    } else if (view.type === "papers") {
      url.searchParams.set("subject", view.subjectKey);
      url.searchParams.delete("paper");
    } else {
      url.searchParams.delete("subject");
      url.searchParams.delete("paper");
    }

    window.history.replaceState(null, "", url.toString());
  }, [view]);

  const handleOpenSubject = (key: SubjectKey) => {
    const subject = SUBJECTS[key];
    if (!subject) return;
    setView({ type: "papers", subjectKey: key, subject });
  };

  const handleOpenPaper = (paperCode: string) => {
    if (view.type !== "papers") return;
    const paper = view.subject.papers[paperCode];
    if (!paper) return;
    setView({
      type: "paper",
      subjectKey: view.subjectKey,
      subject: view.subject,
      paperCode,
      paper,
    });
  };

  const handleBackToSubjects = () => {
    setView({ type: "subjects" });
  };

  const handleBackToPapers = () => {
    if (view.type !== "paper") return;
    setView({ type: "papers", subjectKey: view.subjectKey, subject: view.subject });
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          {view.type === "paper" ? (
            <>
              <button className="back-link" onClick={handleBackToPapers}>
                &larr; {view.subject.name}
              </button>
              <div>
                <h1 className="site-title">
                  {view.paperCode} - {view.paper.description}
                  <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                  >
                    {theme === "light" ? "🌙" : "☀️"}
                  </button>
                </h1>
                <p className="site-tagline">
                  Select a year to open the question paper (QP) or mark scheme (MS).
                </p>
              </div>
            </>
          ) : view.type === "papers" ? (
            <>
              <button className="back-link" onClick={handleBackToSubjects}>
                &larr; All subjects
              </button>
              <div>
                <h1 className="site-title">
                  {view.subject.name}
                  <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                  >
                    {theme === "light" ? "🌙" : "☀️"}
                  </button>
                </h1>
                <p className="site-tagline">Select a paper to view past years.</p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h1 className="site-title">
                  Past Papers
                  <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                  >
                    {theme === "light" ? "🌙" : "☀️"}
                  </button>
                </h1>
                <p className="site-tagline">
                  Quickly find exam papers by subject and paper.
                </p>
              </div>
            </>
          )}
        </div>
      </header>

      <main className="container">
        {view.type === "subjects" ? (
          <SubjectGrid onOpenSubject={handleOpenSubject} />
        ) : view.type === "papers" ? (
          <PaperGrid subject={view.subject} onOpenPaper={handleOpenPaper} />
        ) : (
          <PaperView paper={view.paper} paperCode={view.paperCode} />
        )}
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>Personal past paper archive.</p>
          <p className="footer-credit">Made by Tarm</p>
        </div>
      </footer>
    </>
  );
};

