import React, { useEffect, useState } from "react";
import type { Paper, SubjectKey } from "../data/subjects";
import { loadTopical, type TopicalData } from "../data/topical";
import { PaperHeader } from "./PaperPage";
import { Link } from "./Link";
import { TopicWorkspace } from "./TopicWorkspace";

type Props = {
  subjectKey: SubjectKey;
  paperCode: string;
  paper: Paper;
  topicId?: string;
  subtopicId?: string;
};

const fmt = new Intl.NumberFormat("en-GB");

/** Loads one paper's topical index, then shows the syllabus outline or a topic. */
export const TopicalView: React.FC<Props> = (props) => {
  const { subjectKey, paperCode } = props;
  const key = `${subjectKey}-${paperCode}`;
  const [loaded, setLoaded] = useState<{ key: string; data: TopicalData } | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setFailed(false);
    loadTopical(subjectKey, paperCode)
      .then((data) => !cancelled && setLoaded({ key, data }))
      .catch((error) => {
        console.error("Could not load the topical index", error);
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [key, subjectKey, paperCode]);

  return (
    <>
      <PaperHeader subjectKey={subjectKey} paperCode={paperCode} paper={props.paper} view="topics" />
      {failed ? (
        <p className="status">Couldn't load the questions. Check your connection and reload the page.</p>
      ) : !loaded || loaded.key !== key ? (
        <p className="status">Loading questions…</p>
      ) : (
        <TopicalBody {...props} data={loaded.data} />
      )}
    </>
  );
};

const TopicalBody: React.FC<Props & { data: TopicalData }> = ({ subjectKey, paperCode, topicId, subtopicId, data }) => {
  const topic = data.topics.find((t) => t.id === topicId);
  if (topic) {
    return (
      <TopicWorkspace
        key={`${topic.id}/${subtopicId ?? ""}`}
        subjectKey={subjectKey}
        paperCode={paperCode}
        data={data}
        topic={topic}
        subtopicId={topic.subtopics.some((s) => s.id === subtopicId) ? subtopicId : undefined}
      />
    );
  }
  return <Outline subjectKey={subjectKey} paperCode={paperCode} data={data} />;
};

const Outline: React.FC<{ subjectKey: SubjectKey; paperCode: string; data: TopicalData }> = ({
  subjectKey,
  paperCode,
  data,
}) => {
  const bySubtopic = new Map<string, Set<string>>();
  const byTopic = new Map<string, Set<string>>();
  for (const q of data.questions) {
    const id = `${q.session}|${q.number}`;
    if (!bySubtopic.has(q.subtopicId)) bySubtopic.set(q.subtopicId, new Set());
    if (!byTopic.has(q.topicId)) byTopic.set(q.topicId, new Set());
    bySubtopic.get(q.subtopicId)!.add(id);
    byTopic.get(q.topicId)!.add(id);
  }
  const sessions = new Set(data.questions.map((q) => q.session)).size;
  const total = new Set(data.questions.map((q) => `${q.session}|${q.number}`)).size;

  return (
    <>
      <p className="note outline-note">
        {fmt.format(total)} questions from {sessions} sessions, filed by syllabus topic. Pick a topic to read
        through the questions, make a random practice set, and print it with the mark scheme.
      </p>
      <ol className="outline">
        {data.topics.map((topic) => (
          <li key={topic.id} className="outline-topic">
            <h2>
              <Link to={{ subject: subjectKey, paper: paperCode, view: "topics", topic: topic.id }}>
                <span className="outline-num">{topic.id}</span>
                {topic.title}
              </Link>
              <span className="count">{byTopic.get(topic.id)?.size ?? 0}</span>
            </h2>
            {topic.subtopics.length > 1 && (
              <ul>
                {topic.subtopics.map((sub) => (
                  <li key={sub.id}>
                    <Link
                      to={{ subject: subjectKey, paper: paperCode, view: "topics", topic: topic.id, subtopic: sub.id }}
                    >
                      <span className="outline-num">{sub.id}</span>
                      {sub.title}
                    </Link>
                    <span className="count">{bySubtopic.get(sub.id)?.size ?? 0}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </>
  );
};
