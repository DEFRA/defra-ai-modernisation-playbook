---
title: "Phase 1: Feature Decomposition"
permalink: /pages/re-engineering/process/feature-decomposition/
---

# Phase 1: Feature Decomposition

The `prd-to-features` agent reads the signed-off PRD and decomposes it into individually deliverable feature specifications. It identifies natural feature boundaries, plans the implementation order, and generates detailed feature files.

## How to run

Invoke the `prd-to-features` agent via your AI coding assistant with the plugin loaded. The agent defaults to reading `output/PRD.md`.

For example:

> Please could you run the `prd-to-features` agent to decompose the PRD into feature specifications? Thank you.

To use a PRD at a different path:

> Please could you run the `prd-to-features` agent on `path/to/PRD.md`? Thank you.

See [Tooling]({{ '/pages/re-engineering/tooling/' | relative_url }}) for setup instructions.

## What happens

The agent operates in two stages within a single session:

### Stage 1: Feature plan

The agent analyses the PRD and proposes a feature breakdown. It groups related PRD content into features using these principles:

- Each feature should be self-contained and independently deliverable
- A feature maps to a coherent unit of user value, not a technical layer
- Features are preferably scoped to a single bounded context
- Common infrastructure (authentication, navigation, shared reference data) may form its own feature

Features are ordered for implementation using a bottom-up layering approach:

| Build Layer | Description | Examples |
|-------------|-------------|----------|
| 0 (lowest) | Data and domain foundations | Shared reference data, core entities, data models |
| 1–N (middle) | Individual domain screens and workflows | Search, registration, reporting features |
| Highest | Cross-cutting and orchestration concerns | Authentication, navigation shell, dashboards |

The agent presents a feature plan table showing each feature's ID, title, build layer, MoSCoW priority, and dependencies. **It then pauses for confirmation** — see [Feature Plan Review]({{ '/pages/re-engineering/process/feature-plan-review/' | relative_url }}).

### Stage 2: Feature specification generation

After the plan is confirmed (or adjusted), the agent generates one [Feature Specification]({{ '/pages/re-engineering/output-reference/feature-specification/' | relative_url }}) file per feature in parallel.

## What it produces

- A feature plan table (displayed during the session for review)
- `output/features/FT-001-*.md`, `output/features/FT-002-*.md`, etc. — one feature specification per feature

## Incremental runs

If feature files already exist in `output/features/`, the agent detects them and continues from the next available feature and user story IDs. It only produces features for PRD content not yet covered.

## Dependency semantics

The feature plan uses explicit dependency tracking:

- **Upstream dependency** — Feature A is upstream of Feature B if A must be built before B can be meaningfully implemented or tested
- **Downstream dependency** — Feature B is downstream of Feature A if B cannot be built until A exists

A feature's build layer is one greater than the highest layer among its upstream dependencies (or 0 if it has none).
