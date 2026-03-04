---
title: PII Handling
permalink: /pages/considerations/pii-handling/
---

- **Transcripts must be purged of all personally identifiable information (PII) before processing** — this is a mandatory step before any transcript enters the pipeline.
- The `image-to-html` skill replaces PII visible in screenshots with fake equivalents (e.g. real names become fake names, real email addresses become fake ones). However, this is a best-effort process — the team must verify the output.
- It is the team's responsibility to verify that no PII remains in:
  - Curated transcripts
  - HTML mockups
  - Any files committed to version control
- Source code may contain PII in configuration files, connection strings, or test data — review before committing.
- If PII is discovered in any output, remove it immediately and re-run the relevant processing step.
