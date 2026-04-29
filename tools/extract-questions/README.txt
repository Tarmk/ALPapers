extract_questions.py
----------------------
Downloads (optional) a Cambridge / CIE-style QUESTION PAPER PDF and exports PNGs by
question. Multi-page questions are saved as separate part files, and pages marked
"BLANK PAGE" are skipped.

Setup
-----
  cd tools/extract-questions
  python3 -m venv .venv && source .venv/bin/activate   # Windows: .venv\\Scripts\\activate
  pip install -r requirements.txt

Tesseract OCR (only if you use --ocr or --ocr-auto)
  macOS: brew install tesseract
  Debian/Ubuntu: sudo apt install tesseract-ocr

Typical commands
----------------
  # Best: save the QP PDF from the browser, then:
  python extract_questions.py --pdf ~/Downloads/9618_w25_qp_33.pdf --out ./questions_out

  # Direct URL only works if the server returns a real PDF (Content-Type application/pdf):
  python extract_questions.py --url "https://example.com/paper.pdf" --out ./questions_out

  # Image-only / scan PDF with no selectable text:
  python extract_questions.py --pdf ./scan.pdf --out ./questions_out --ocr

  # Try embedded text first; if nothing is found, run OCR:
  python extract_questions.py --pdf ./paper.pdf --out ./questions_out --ocr-auto

Outputs
-------
  {prefix}_question_NN_QN.png  — one file per question number (NN zero-padded).
  {prefix}_question_NN_QN_part_MM.png  — multi-page question parts.
  {prefix}_manifest.json       — list of questions and output filenames (unless --dry-run).

Batch command
-------------
  # Process every QP in paper3-years.json into offline/extracted/comsci-cie/P3/
  python batch_extract.py \
    --json ../../offline/comsci-cie-paper-3/paper3-years.json \
    --paper-code P3 \
    --out-root ../../offline/extracted/comsci-cie \
    --pdf-root ../../offline/downloaded-pdfs/comsci-cie \
    --overwrite

  # Test only the first paper:
  python batch_extract.py \
    --json ../../offline/comsci-cie-paper-3/paper3-years.json \
    --paper-code P3 \
    --out-root ../../offline/extracted/comsci-cie \
    --pdf-root ../../offline/downloaded-pdfs/comsci-cie \
    --limit 1 \
    --overwrite

Folder layout
-------------
  offline/downloaded-pdfs/comsci-cie/P3/        — cached PDFs
  offline/extracted/comsci-cie/P3/<session>/    — extracted PNGs + manifest

Limitations
-----------
  • Headings must match the pattern "Question" + number (OCR or text). Papers that only
    print "1." at the margin may work with the optional numeric fallback (--no-fallback
    disables it).
  • Very large layout tables or unusual fonts can confuse OCR.
  • Many past-paper hosts return an HTML viewer instead of a raw PDF to curl/scripts;
    use --pdf with a locally saved file.
