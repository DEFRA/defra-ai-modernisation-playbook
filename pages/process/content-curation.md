---
title: "Phase 2: Content Curation"
permalink: /pages/process/content-curation/
---

# Phase 2: Content Curation

The `digital-content-curator` agent prepares raw inputs for downstream analysis. It transforms screenshots and transcripts into structured, analysis-ready formats while preserving all relevant content.

## Sub-processes

### 1. Screenshot to HTML Mockup

The `image-to-html` skill reads each screenshot and produces a semantic, unstyled HTML file that captures all visible UI elements and text. Any PII visible in the original screenshot is replaced with fake equivalents.

> **Note:** Converting screenshots to HTML also reduces the AI workload in later phases, as the model can parse structured text far more efficiently than images. This contributes to more sustainable AI use — see the [DEFRA AI Playbook: Sustainability](https://github.com/DEFRA/defra-ai-sdlc/blob/main/pages/responsible-practices/sustainability.md) guidance for more detail.

**Output:** `html/<name>.html`

### 2. Transcript to Curated Transcript

The `curate-transcript` skill removes off-topic content (project management, scheduling, social chat) while preserving domain knowledge, application walkthroughs, and technical detail verbatim.

**Output:** `transcripts/<name>_curated.txt`

## How to Run

Invoke the `digital-content-curator` agent via your AI coding assistant with the appropriate plugin or extension loaded. The agent discovers all raw files in the `screenshots/` and `transcripts/` directories and processes them automatically. See [Tooling]({{ '/pages/tooling/' | relative_url }}) for setup instructions.

## What It Produces

- `html/*.html` — semantic HTML mockups of every screenshot
- `transcripts/*_curated.txt` — curated transcripts with off-topic content removed

## Large File Sets

When there are many screenshots or transcripts (50+), the curator agent may exhaust its turn budget before finishing. See [Content curation stalls on large file sets]({{ "/pages/considerations/troubleshooting/" | relative_url }}) in the Troubleshooting section for a resumable bash workaround.

For full details on the available skills and tooling, see the [Tooling]({{ '/pages/tooling/' | relative_url }}) section.
