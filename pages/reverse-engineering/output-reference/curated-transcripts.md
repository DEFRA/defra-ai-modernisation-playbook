---
title: Curated Transcripts
permalink: /pages/reverse-engineering/output-reference/curated-transcripts/
---

## What this artefact is

Cleaned versions of stakeholder interview transcripts with off-topic content removed. The curated transcript preserves domain knowledge and application walkthrough content verbatim whilst stripping out material that adds no value to the analysis.

## How it's produced

Curated transcripts are produced by the `curate-transcript` skill, invoked either via the `digital-content-curator` agent or directly. The skill processes a raw transcript file and outputs a cleaned version.

## What it contains

The curated transcript retains the original text with targeted removals:

**Kept intact:**
- Domain terminology and definitions
- Application walkthroughs and screen descriptions
- Business rules and process explanations
- Technical details about the system
- User roles and permissions discussions
- Pain points and workarounds

**Removed:**
- Project management discussions (timelines, budgets, resourcing)
- Scheduling and logistics (meeting arrangements, availability)
- Social pleasantries and greetings
- Unrelated tangents and off-topic conversation
- Any remaining personally identifiable information

Output files are written to `output/transcripts/` and follow the naming convention: `<name>_curated.txt`

## Quality criteria

- Domain knowledge and application walkthroughs preserved verbatim
- Off-topic content removed (project management, scheduling, social chat)
- No PII remains
- Important context not accidentally removed
- File follows naming convention: `<name>_curated.txt`

## Example

The following shows what gets kept versus removed from a raw transcript.

**Original:**

> "So before we start the demo, just checking — is everyone on the call? Great. Let me share my screen. So this is the home page of the Field Sample Tracker. You can see the main menu here with options for searching the repository, registering new submissions, and running reports."

**Curated:**

> "So this is the home page of the Field Sample Tracker. You can see the main menu here with options for searching the repository, registering new submissions, and running reports."

The scheduling check and screen-sharing logistics are removed. The application walkthrough content — describing the home page and its menu options — is preserved word for word.
