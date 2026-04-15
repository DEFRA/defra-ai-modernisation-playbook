---
title: Re-engineering Process Overview
permalink: /pages/re-engineering/process/
---

# Process Overview

The re-engineering process takes a signed-off Product Requirements Document (PRD) from the [Reverse Engineering]({{ '/pages/reverse-engineering/' | relative_url }}) phase and works towards a modern replacement for the legacy application. The first step is to decompose the PRD into individually deliverable feature specifications.

```mermaid
flowchart TB
    PRD(["output/PRD.md"])

    subgraph decomposition ["Phases 1–3 — Feature Decomposition"]
        ptf[prd-to-features]
        plan(["Feature Plan"])
        fw[feature-writer]
        features(["output/features/FT-*.md"])

        ptf --> plan
        plan -->|confirmed| fw
        fw --> features
    end

    PRD --> ptf

    subgraph build ["Phases 5–6 — Per Feature"]
        ralph[ralph plan + build]
        review["Implementation Review"]

        ralph --> review
    end

    features --> ralph
```

## Phases

1. **[Feature Decomposition]({{ '/pages/re-engineering/process/feature-decomposition/' | relative_url }})** — the `prd-to-features` agent reads the PRD, identifies natural feature boundaries, and produces a feature plan. After the plan is confirmed, it generates individual feature specification files in parallel.

2. **[Feature Plan Review]({{ '/pages/re-engineering/process/feature-plan-review/' | relative_url }})** — the team reviews the proposed feature breakdown for completeness, correct layering, and sensible scope before feature specifications are generated.

3. **[Feature Specification Review & Sign-off]({{ '/pages/re-engineering/process/feature-review-and-signoff/' | relative_url }})** — the team and stakeholders review the generated feature specifications for accuracy, coverage, and readiness for implementation.

4. **[Project Setup]({{ '/pages/re-engineering/process/project-setup/' | relative_url }})** — install the autonomous build tooling and prepare the target project with an `AGENTS.md` / `CLAUDE.md` and a `rules/` directory describing what good looks like for the application being built.

5. **[Autonomous Build]({{ '/pages/re-engineering/process/autonomous-build/' | relative_url }})** — each signed-off feature specification is implemented using an autonomous AI coding loop ([ralph](https://github.com/marc0der/ralph)), which iteratively plans and builds until the feature is complete and passing tests.

6. **[Implementation Review]({{ '/pages/re-engineering/process/implementation-review/' | relative_url }})** — a light-touch review of each implemented feature from a technical and product perspective before moving to the next feature.

## Input

| Input | Location | Purpose |
|-------|----------|---------|
| Signed-off PRD | `output/PRD.md` | The sole input to the re-engineering phase — contains the complete requirements for the legacy application |

## Output

The process produces a set of feature specification files in `output/features/`, each describing an independently deliverable unit of work with user stories, acceptance criteria, wireframes, and business rules.
