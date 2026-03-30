---
title: "Phase 6: Feature Decomposition"
permalink: /pages/process/feature-decomposition/
---

# Phase 6: Feature Decomposition

With a signed-off PRD in hand, the next step is to decompose it into individually deliverable feature specifications. Each feature spec is self-contained and detailed enough to serve as a brief for re-engineering.

## What this phase does

The `prd-to-features` skill reads the signed-off PRD and identifies natural feature boundaries using bounded contexts, workflows, screens, and business rules. It then generates a complete feature specification for each feature, written in terms of the re-engineered system rather than the legacy one.

## What goes in

| Input | Location | Description |
|-------|----------|-------------|
| Signed-off PRD | `output/PRD.md` | The PRD produced by the `product-manager` agent and reviewed in Phase 5 |

## What comes out

| Output | Location | Description |
|--------|----------|-------------|
| Feature specifications | `output/features/FT-XXX-*.md` | One file per feature, each with user stories, wireframes, acceptance criteria, and effort estimates |

## How to run it

Invoke the skill directly in your Claude Code session:

```
/prd-to-features
```

The skill looks for `output/PRD.md` by default. If your PRD is at a different path, provide it as an argument:

```
/prd-to-features path/to/PRD.md
```

The skill will analyse the PRD, propose a feature breakdown, and wait for your confirmation before generating the feature files. This gives you an opportunity to adjust the boundaries before any files are written.

> **Tip:** Review the proposed feature list carefully. If a feature looks too broad or too narrow, say so — the skill will adjust the breakdown before proceeding.

## Reviewing the output

A product owner or business analyst should review the generated feature specifications before they are taken into re-engineering. This is a human quality gate — the same principle as the PRD review in Phase 5, applied at the feature level.

### What to look for

- **Completeness** — does each feature spec cover its scope fully, with no missing user stories or acceptance criteria?
- **Self-containment** — can each feature be understood and delivered independently? Are dependencies on other features clearly stated?
- **Accuracy** — do the user stories, business rules, and acceptance criteria match what the PRD describes?
- **Honest gaps** — are genuine ambiguities captured in the Open Questions section rather than papered over?
- **Domain language** — does the spec use the ubiquitous language from the PRD consistently?

## Outcome

A set of feature specifications in `output/features/`, each detailed enough to brief a delivery team on what to build. These specs describe the re-engineered system, not the legacy one — they are forward-looking by design.
