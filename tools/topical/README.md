# Topical pipeline

Turns the papers listed in `src/data/subjects.ts` into the per-question images and
topic indexes behind the "By topic" view.

Run everything from the repository root with the Python environment in
`tools/extract-questions/.venv` (PyMuPDF, Pillow, requests).

```bash
PY=tools/extract-questions/.venv/Scripts/python.exe   # bin/python on macOS/Linux

node tools/topical/registry.mjs                      # 1. list every paper in subjects.ts
$PY tools/topical/fetch.py --subject maths           # 2. download PDFs to offline/pdfs/ (cached)
$PY tools/topical/audit_links.py                     #    optional: check QP/MS links serve the right file
$PY tools/topical/split_edexcel.py --session-like 2027   # 3a. maths
$PY tools/topical/split_cie.py --subject physics --session-like 2027   # 3b. physics / computer science
node tools/topical/packets.mjs maths-P1              # 4. questions that still need a topic label
#    ...label them into tools/topical/labels/maths-P1.json...
node tools/topical/build.mjs                         # 5. write src/data/topical/*.json
```

## What each step does

**Splitting.** `split_edexcel.py` reads every text line, drawing and image on a page,
drops the page furniture (margins, barcodes, "Question 1 continued", ruled answer
lines) and keeps the bands of real content between one question number and the next.
Those bands are stacked into images of a fixed width, so a question that spans four
pages of answer space becomes one compact image. Question numbers are only accepted
as a run 1, 2, 3, … in reading order, which stops stray numbers in the text from
splitting a question. Mark schemes are cut on the labels in their "Question Number"
column.

`split_cie.py` cuts CAIE question papers with the original `tools/extract-questions`
splitter, so new sessions match the existing images. For mark schemes it tries three
layouts and keeps whichever finds the most questions: the modern answer table, a
"Question" column anywhere on the page (landscape schemes and the 2026 layout), and
the pre-2017 schemes with the number alone in the margin.

Each paper's result goes to `offline/work/<subject>/<paper>/<session>.json`: image
paths, the question text and the start of its mark scheme.

**Labels.** `tools/topical/labels/<subject>-<paper>.json` maps `"<session>|<number>"`
to one or more `{ topicId, subtopicId, focus? }`. A question with parts on different
topics gets one label per topic, with `focus` naming the parts ("Parts (b), (c)").
Maths topics are defined in `syllabus/` (regenerate with `node tools/topical/syllabus/make.mjs`).

**Build.** `build.mjs` merges the split output and labels into `src/data/topical/`,
checks that every image exists and every label is a real subtopic, and writes the
counts in `summary.json` used by the subject pages. Physics and computer science keep
their existing reviewed index and only gain new sessions and missing mark schemes.
Papers without a work folder are left untouched, so the build is safe on a fresh clone.

## Known gaps

- Scanned PDFs with no text layer (some 2002–2006 legacy papers) are skipped.
- A few specimen mark schemes use one-off layouts and have no mark scheme images.
