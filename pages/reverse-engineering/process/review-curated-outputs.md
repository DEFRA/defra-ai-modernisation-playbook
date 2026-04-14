---
title: "Phase 3: Review Curated Outputs"
permalink: /pages/reverse-engineering/process/review-curated-outputs/
---

# Phase 3: Review Curated Outputs

The downstream analysis agents depend entirely on curated content quality — poor inputs produce poor analysis. This phase is the team's quality gate before automated analysis begins.

## Reviewing HTML Mockups

Check that each HTML mockup meets the following criteria:

- **Faithful representation** — the mockup accurately represents the original screenshot.
- **Text accuracy** — all visible text has been captured correctly.
- **PII replacement** — any PII visible in the original has been replaced with fake equivalents.
- **UI structure** — forms, tables, navigation elements, and layout are correctly represented in the HTML.
- **Completeness** — no screens have been missed. Cross-reference the `html/` directory against the `screenshots/` directory to confirm every screenshot has a corresponding mockup.

## Reviewing Curated Transcripts

Check that each curated transcript meets the following criteria:

- **Relevant content preserved** — domain knowledge and application walkthroughs are preserved verbatim.
- **Off-topic content removed** — project management discussions, scheduling, and social chat have been stripped out.
- **PII-free** — no personally identifiable information remains in the curated transcript.
- **No accidental removal** — important context has not been accidentally removed. Compare against the original transcript if anything seems incomplete.

## Who Does the Review

The BA/UR on the team is best placed to lead this review, as they have the domain context from conducting the stakeholder interviews. They can most readily spot missing content or inaccurate representations.

## Outcome

Confidence that curated outputs are ready for the automated analysis pipeline. If issues are found, re-run the relevant skill on the affected files:

- For a flawed HTML mockup, re-run `image-to-html` on the original screenshot.
- For a flawed curated transcript, re-run `curate-transcript` on the original transcript.
