import { useCallback, useEffect, useState } from "react";
import { SUBJECTS, type SubjectKey } from "../data/subjects";

export type Route = {
  subject?: SubjectKey;
  paper?: string;
  view?: "sessions" | "topics";
  topic?: string;
  subtopic?: string;
};

export function parseRoute(search: string): Route {
  const params = new URLSearchParams(search);
  const subject = params.get("subject") as SubjectKey | null;
  if (!subject || !(subject in SUBJECTS)) return {};
  const paper = params.get("paper") ?? undefined;
  if (!paper || !SUBJECTS[subject].papers[paper]) return { subject };
  // `mode=topical` is the older spelling of `view=topics`; keep shared links working.
  const topics = params.get("view") === "topics" || params.get("mode") === "topical";
  return {
    subject,
    paper,
    view: topics ? "topics" : "sessions",
    topic: topics ? params.get("topic") ?? undefined : undefined,
    subtopic: topics ? params.get("subtopic") ?? undefined : undefined,
  };
}

export function routeHref(route: Route): string {
  const params = new URLSearchParams();
  if (route.subject) params.set("subject", route.subject);
  if (route.paper) params.set("paper", route.paper);
  if (route.view === "topics") params.set("view", "topics");
  if (route.topic) params.set("topic", route.topic);
  if (route.subtopic) params.set("subtopic", route.subtopic);
  const query = params.toString();
  return query ? `/?${query}` : "/";
}

/** The current route, kept in the URL so every view can be bookmarked and shared. */
export function useRoute(): [Route, (next: Route, replace?: boolean) => void] {
  const [route, setRoute] = useState<Route>(() => parseRoute(window.location.search));

  useEffect(() => {
    const onPop = () => setRoute(parseRoute(window.location.search));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((next: Route, replace = false) => {
    const href = routeHref(next);
    if (replace) window.history.replaceState(null, "", href);
    else window.history.pushState(null, "", href);
    setRoute(parseRoute(new URL(href, window.location.origin).search));
    if (!replace) window.scrollTo(0, 0);
  }, []);

  return [route, navigate];
}

/** Plain left-clicks navigate in-app; modified clicks open the real URL in a new tab. */
export function linkHandler(navigate: (r: Route) => void, route: Route) {
  return (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(route);
  };
}
