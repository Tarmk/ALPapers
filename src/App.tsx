import React, { Suspense, lazy, useEffect, useState } from "react";
import { SUBJECTS } from "./data/subjects";
import { SUBJECT_META } from "./lib/catalog";
import { useRoute, type Route } from "./lib/route";
import { Link, NavigateContext } from "./components/Link";
import { Home } from "./components/Home";
import { SubjectPage } from "./components/SubjectPage";
import { PaperPage } from "./components/PaperPage";

// The topical views and their indexes are only downloaded when opened.
const TopicalView = lazy(() => import("./components/TopicalView").then((m) => ({ default: m.TopicalView })));

type Theme = "light" | "dark";

function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Private browsing: the theme just isn't remembered.
    }
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "light" ? "dark" : "light"))];
}

function crumbs(route: Route): { label: string; to?: Route }[] {
  const out: { label: string; to?: Route }[] = [];
  if (!route.subject) return out;
  out.push({ label: SUBJECT_META[route.subject].short, to: { subject: route.subject } });
  if (route.paper) {
    out.push({ label: route.paper, to: { subject: route.subject, paper: route.paper, view: route.view } });
  }
  return out;
}

function pageTitle(route: Route): string {
  if (!route.subject) return "Past Papers";
  const name = SUBJECT_META[route.subject].short;
  if (!route.paper) return `${name} · Past Papers`;
  const what = route.view === "topics" ? "by topic" : "past papers";
  return `${name} ${route.paper} ${what} · Past Papers`;
}

export const App: React.FC = () => {
  const [route, navigate] = useRoute();
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    document.title = pageTitle(route);
  }, [route]);

  const trail = crumbs(route);
  const subject = route.subject ? SUBJECTS[route.subject] : undefined;
  const paper = subject && route.paper ? subject.papers[route.paper] : undefined;

  return (
    <NavigateContext.Provider value={navigate}>
      <header className="masthead">
        <div className="wrap masthead-inner">
          <nav className="trail" aria-label="Breadcrumb">
            <Link to={{}} className="wordmark">
              Past Papers
            </Link>
            {trail.map((c) => (
              <React.Fragment key={c.label}>
                <span className="trail-sep" aria-hidden="true">
                  /
                </span>
                {c.to ? <Link to={c.to}>{c.label}</Link> : <span>{c.label}</span>}
              </React.Fragment>
            ))}
          </nav>
          <button type="button" className="theme-switch" onClick={toggleTheme} aria-label="Switch colour theme">
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <circle cx="8" cy="8" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor" />
            </svg>
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </header>

      <main className="wrap page">
        {!route.subject || !subject ? (
          <Home />
        ) : !route.paper || !paper ? (
          <SubjectPage subjectKey={route.subject} />
        ) : route.view === "topics" ? (
          <Suspense fallback={<p className="status">Loading…</p>}>
            <TopicalView
              subjectKey={route.subject}
              paperCode={route.paper}
              paper={paper}
              topicId={route.topic}
              subtopicId={route.subtopic}
            />
          </Suspense>
        ) : (
          <PaperPage subjectKey={route.subject} paperCode={route.paper} paper={paper} />
        )}
      </main>

      <footer className="colophon">
        <div className="wrap">
          <p>
            Question papers and mark schemes are © Pearson Education and Cambridge University Press &amp;
            Assessment. Links go to the files where they are hosted.
          </p>
          <p>Made by Tarm.</p>
        </div>
      </footer>
    </NavigateContext.Provider>
  );
};
