import React, { useCallback, useEffect, useMemo, useState } from "react";
import { flushSync } from "react-dom";
import type { TopicalData, TopicalQuestion, TopicalTopic } from "../data/topical";
import { getSubject } from "../data/catalog";
import { sessionYear, shortSession, sortSessions, compareSessions } from "../lib/sessions";
import { Link, useNavigate } from "./Link";

type Props = {
  subjectKey: string;
  paperCode: string;
  data: TopicalData;
  topic: TopicalTopic;
  subtopicId?: string;
};

/** One printable question; several index entries can point at the same question. */
type Item = { key: string; session: string; number: number; focus?: string; images: string[]; ms?: string[] };

type Printing = null | "questions" | "answers";

const DEFAULT_COUNT = 10;

// Small seeded PRNG so a random set stays the same while filters and views change.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffled<T>(items: T[], seed: number): T[] {
  const rand = mulberry32(seed);
  const out = [...items];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function collect(questions: TopicalQuestion[]): Item[] {
  const byKey = new Map<string, Item & { whole: boolean; foci: Set<string> }>();
  for (const q of questions) {
    const key = `${q.session}|${q.number}`;
    const item = byKey.get(key);
    if (!item) {
      byKey.set(key, {
        key,
        session: q.session,
        number: q.number,
        images: q.images,
        ms: q.ms,
        whole: !q.focus,
        foci: new Set(q.focus ? [q.focus] : []),
      });
    } else {
      item.whole ||= !q.focus;
      if (q.focus) item.foci.add(q.focus);
    }
  }
  return [...byKey.values()].map(({ whole, foci, ...item }) => ({
    ...item,
    focus: whole ? undefined : [...foci].join("; "),
  }));
}

async function imagesReady(): Promise<void> {
  const images = Array.from(document.querySelectorAll<HTMLImageElement>(".sheet img"));
  await Promise.all(
    images.map((img) =>
      img.complete
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            img.addEventListener("load", () => resolve(), { once: true });
            img.addEventListener("error", () => resolve(), { once: true });
          }),
    ),
  );
}

const SessionFilter: React.FC<{
  sessions: string[];
  counts: Map<string, number>;
  selected: Set<string>;
  onChange: (next: Set<string>) => void;
}> = ({ sessions, counts, selected, onChange }) => {
  const years = useMemo(() => {
    const map = new Map<number, string[]>();
    for (const s of sessions) {
      const y = sessionYear(s);
      if (!map.has(y)) map.set(y, []);
      map.get(y)!.push(s);
    }
    return [...map.entries()];
  }, [sessions]);
  const latest = Math.max(...sessions.map(sessionYear));

  const toggle = (list: string[]) => {
    const next = new Set(selected);
    const allOn = list.every((s) => next.has(s));
    for (const s of list) {
      if (allOn) next.delete(s);
      else next.add(s);
    }
    onChange(next);
  };

  return (
    <fieldset className="session-filter">
      <legend>
        Sessions <span className="muted">{selected.size === sessions.length ? "all" : `${selected.size} of ${sessions.length}`}</span>
      </legend>
      <p className="quick">
        <button type="button" className="text-button" onClick={() => onChange(new Set(sessions))}>
          All
        </button>
        <button
          type="button"
          className="text-button"
          onClick={() => onChange(new Set(sessions.filter((s) => sessionYear(s) >= latest - 2)))}
        >
          Last 3 years
        </button>
        <button type="button" className="text-button" onClick={() => onChange(new Set())}>
          None
        </button>
      </p>
      <div className="years">
        {years.map(([year, list]) => (
          <div key={year} className="year-row">
            <button
              type="button"
              className="year-toggle"
              onClick={() => toggle(list)}
              aria-pressed={list.every((s) => selected.has(s))}
              title={`Toggle every ${year || "undated"} session`}
            >
              {year || "Other"}
            </button>
            <span className="chips">
              {list.map((s) => (
                <button
                  key={s}
                  type="button"
                  className="chip"
                  aria-pressed={selected.has(s)}
                  onClick={() => toggle([s])}
                  title={`${s}: ${counts.get(s) ?? 0} question${counts.get(s) === 1 ? "" : "s"}`}
                >
                  {year ? shortSession(s, true) : s}
                </button>
              ))}
            </span>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export const TopicWorkspace: React.FC<Props> = ({ subjectKey, paperCode, data, topic, subtopicId }) => {
  const navigate = useNavigate();
  const subtopic = topic.subtopics.find((s) => s.id === subtopicId);

  const topicItems = useMemo(
    () =>
      collect(
        data.questions.filter((q) => (subtopic ? q.subtopicId === subtopic.id : q.topicId === topic.id)),
      ).sort((a, b) => compareSessions(a.session, b.session) || a.number - b.number),
    [data.questions, subtopic, topic.id],
  );
  const sessions = useMemo(() => sortSessions(new Set(topicItems.map((i) => i.session))), [topicItems]);
  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const i of topicItems) map.set(i.session, (map.get(i.session) ?? 0) + 1);
    return map;
  }, [topicItems]);

  const [selectedSessions, setSelectedSessions] = useState<Set<string>>(() => new Set(sessions));
  const [mode, setMode] = useState<"all" | "random">("all");
  const [count, setCount] = useState(DEFAULT_COUNT);
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 2 ** 31));
  const [showAnswers, setShowAnswers] = useState(false);
  const [needMs, setNeedMs] = useState(false);
  const [excluded, setExcluded] = useState<Set<string>>(new Set());
  const [printing, setPrinting] = useState<Printing>(null);

  const inSessions = topicItems.filter((i) => selectedSessions.has(i.session));
  const withoutMs = inSessions.filter((i) => !i.ms?.length).length;
  const pool = needMs ? inSessions.filter((i) => i.ms?.length) : inSessions;
  const shown = mode === "random" ? shuffled(pool, seed).slice(0, Math.max(1, count)) : pool;
  const printable = mode === "all" ? shown.filter((i) => !excluded.has(i.key)) : shown;

  useEffect(() => {
    const done = () => setPrinting(null);
    window.addEventListener("afterprint", done);
    return () => window.removeEventListener("afterprint", done);
  }, []);

  const print = useCallback(async (what: Exclude<Printing, null>) => {
    flushSync(() => setPrinting(what));
    await imagesReady();
    window.print();
  }, []);

  const toggleExcluded = (key: string) =>
    setExcluded((cur) => {
      const next = new Set(cur);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const heading = subtopic ? subtopic.title : topic.title;
  const sheetTitle = `${getSubject(subjectKey)?.short ?? ""} ${paperCode} · ${subtopic ? `${subtopic.id} ` : `${topic.id} `}${heading}`;
  const view: Printing = printing ?? (showAnswers ? null : "questions");

  return (
    <div className="workspace">
      <div className="workspace-head">
        <p className="eyebrow">
          <Link to={{ subject: subjectKey, paper: paperCode, view: "topics" }}>All topics</Link>
          <span aria-hidden="true"> / </span>
          {subtopic ? (
            <Link to={{ subject: subjectKey, paper: paperCode, view: "topics", topic: topic.id }}>
              {topic.id} {topic.title}
            </Link>
          ) : (
            <>Topic {topic.id}</>
          )}
        </p>
        <h2>{heading}</h2>
      </div>

      <aside className="controls" aria-label="Question options">
        {topic.subtopics.length > 1 && (
          <label className="field">
            <span>Subtopic</span>
            <select
              value={subtopic?.id ?? ""}
              onChange={(e) =>
                navigate({
                  subject: subjectKey,
                  paper: paperCode,
                  view: "topics",
                  topic: topic.id,
                  subtopic: e.target.value || undefined,
                })
              }
            >
              <option value="">Whole topic</option>
              {topic.subtopics.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.id} {s.title}
                </option>
              ))}
            </select>
          </label>
        )}

        <fieldset className="segmented">
          <legend>Questions</legend>
          <label>
            <input type="radio" name="mode" checked={mode === "all"} onChange={() => setMode("all")} />
            All {pool.length}
          </label>
          <label>
            <input type="radio" name="mode" checked={mode === "random"} onChange={() => setMode("random")} />
            Random set
          </label>
        </fieldset>

        {mode === "random" && (
          <div className="random-row">
            <label className="field inline">
              <span>How many</span>
              <input
                type="number"
                min={1}
                max={Math.max(1, pool.length)}
                value={count}
                onChange={(e) => setCount(Math.max(1, Number.parseInt(e.target.value, 10) || 1))}
              />
            </label>
            <button type="button" className="button" onClick={() => setSeed((s) => s + 1)}>
              Shuffle
            </button>
          </div>
        )}

        <label className="check">
          <input type="checkbox" checked={showAnswers} onChange={(e) => setShowAnswers(e.target.checked)} />
          Show mark schemes under questions
        </label>
        {withoutMs > 0 && (
          <label className="check">
            <input type="checkbox" checked={needMs} onChange={(e) => setNeedMs(e.target.checked)} />
            Skip the {withoutMs} without a mark scheme
          </label>
        )}

        <SessionFilter sessions={sessions} counts={counts} selected={selectedSessions} onChange={setSelectedSessions} />

        <div className="print-actions">
          <button type="button" className="button primary" disabled={!printable.length} onClick={() => print("questions")}>
            Print questions
          </button>
          <button type="button" className="button" disabled={!printable.length} onClick={() => print("answers")}>
            Print mark schemes
          </button>
          <p className="hint">
            {printable.length} question{printable.length === 1 ? "" : "s"}, in the order shown. The mark schemes
            print in the same order.
          </p>
        </div>
      </aside>

      <section className={`sheet${printing ? " is-printing" : ""}`} aria-label="Questions">
        <header className="sheet-head">
          <h3>{sheetTitle}</h3>
          <p>
            {printing === "answers" ? "Mark scheme" : "Questions"} ·{" "}
            {mode === "random" ? `random set of ${printable.length}` : `${printable.length} questions`}
          </p>
        </header>

        {shown.length === 0 ? (
          <p className="status">
            {selectedSessions.size === 0 ? "Pick at least one session." : "No questions match these settings."}
          </p>
        ) : (
          shown.map((item, index) => {
            const left = mode === "all" && excluded.has(item.key);
            if (printing && left) return null;
            return (
              <article key={item.key} className={`question${left ? " is-left-out" : ""}`}>
                <header className="question-head">
                  <span className="question-ref">
                    {mode === "random" && <span className="question-index">{index + 1}.</span>}
                    {item.session} · Q{item.number}
                    {item.focus && <span className="focus"> · {item.focus}</span>}
                  </span>
                  {mode === "all" && !printing && (
                    <label className="check small">
                      <input type="checkbox" checked={!left} onChange={() => toggleExcluded(item.key)} />
                      Print
                    </label>
                  )}
                </header>

                {view !== "answers" &&
                  item.images.map((src, i) => (
                    <img
                      key={src}
                      className="page-image"
                      src={src}
                      alt={`${item.session} question ${item.number}${item.images.length > 1 ? `, part ${i + 1}` : ""}`}
                      loading={printing ? "eager" : "lazy"}
                    />
                  ))}

                {view !== "questions" &&
                  (item.ms?.length ? (
                    <div className="answer">
                      {!printing && <p className="answer-label">Mark scheme</p>}
                      {item.ms.map((src, i) => (
                        <img
                          key={src}
                          className="page-image"
                          src={src}
                          alt={`Mark scheme for ${item.session} question ${item.number}${item.ms!.length > 1 ? `, part ${i + 1}` : ""}`}
                          loading={printing ? "eager" : "lazy"}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="answer missing">No mark scheme for this question.</p>
                  ))}
              </article>
            );
          })
        )}
      </section>
    </div>
  );
};
