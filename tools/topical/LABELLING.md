# Labelling questions with topics

Labels live in `tools/topical/labels/<subject>-<paper>.json`:

```json
{
  "2024 June|3": [{ "topicId": "4", "subtopicId": "4.2" }],
  "2024 June|7": [
    { "topicId": "2", "subtopicId": "2.1", "focus": "Parts (a), (b)" },
    { "topicId": "6", "subtopicId": "6.2", "focus": "Parts (c), (d)" }
  ]
}
```

The key is `<session>|<question number>`, exactly as the packet header writes it.
Topic and subtopic ids come from the paper's outline (in the packet, from
`syllabus/` for maths or from the existing index for physics and computer science).

## Rules

1. Read the whole question, every part, before choosing. Packet text is extracted
   from the PDF, so maths notation is garbled; the wording is what matters. The
   `MS:` line, where present, is the start of the mark scheme and often names the
   method ("Uses the chain rule", "Poisson approximation").
2. One label when the question is about one subtopic, or when one subtopic clearly
   dominates (most of the marks). No `focus`.
3. Two labels (rarely three) when distinct parts test different subtopics and each
   is a substantial, self-contained piece of work a student would want to practise
   under that topic. Each label then gets a `focus` naming its parts, written
   `Parts (a), (b)`, `Part (c)` or `Parts (b)(ii), (c)`. Don't split off a one-mark
   part that only sets up the main question.
4. Classify by the skill being tested, not the context: a mechanics question set on
   a ramp that is really about friction in equilibrium is friction; a pure question
   that uses a sequence to set up a logarithm problem is logarithms.
5. Questions from old-specification papers go under the closest current subtopic.
6. Never repeat a subtopic within one question, and only use ids from the outline.

## Checks

Before handing back, check that every packet header is a key, every subtopic
belongs to its topic, and no question repeats a subtopic. `build.mjs` repeats
these checks and reports anything left over.

## Cambridge sciences and 9709

- **Multiple choice (Paper 1).** One label per question, never a `focus`.
- **A Level structured papers (Paper 4)** list the AS topics too. Use the A Level
  subtopic when the question tests A Level content (a Born–Haber cycle is 23.1, not
  5.2); use an AS subtopic only when the part is purely AS content.
- **Practical papers (Paper 3)** are labelled by the experiment: a titration is 1.1
  however the results are later used, and a qualitative-analysis question is 2.1 or
  2.2. Biology drawing and graticule work is topic 2.
- **Planning papers (Paper 5)** are labelled by the skill most of the marks test.
  Split into planning and analysis only when both are substantial.
- **Older syllabus.** Content no longer in the syllabus (chemistry applications,
  biology crop plants, ecology, 9709 planes) goes under the topic marked
  "(older syllabus)"; anything else goes under the closest current subtopic.
