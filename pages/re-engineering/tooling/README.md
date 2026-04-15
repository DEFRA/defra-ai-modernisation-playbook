---
title: Re-engineering Tooling
permalink: /pages/re-engineering/tooling/
---

# Tooling

The re-engineering phase uses two tools:

- The **legacy reverse engineering plugin** — provides agents for feature decomposition (same plugin as the [Reverse Engineering]({{ '/pages/reverse-engineering/tooling/' | relative_url }}) phase)
- **ralph** — an autonomous AI coding loop runner for implementing features

This section covers each tool and the expected project directory structure.

## Pages in this section

- [Claude Code Plugin]({{ '/pages/re-engineering/tooling/claude-code/' | relative_url }}) — the feature decomposition agents provided by the legacy reverse engineering plugin
- [Ralph]({{ '/pages/re-engineering/tooling/ralph/' | relative_url }}) — installation, commands, options, backends, and prompt customisation for the autonomous build loop runner

## Component map

The following diagram shows how the re-engineering tools relate to one another.

```mermaid
graph LR
    subgraph "Reverse Engineering Output"
        PRD(["output/PRD.md"])
    end

    subgraph "Feature Decomposition"
        ptf[prd-to-features]
        fw[feature-writer]
        features(["output/features/FT-*.md"])

        ptf -->|spawns| fw
        fw --> features
    end

    subgraph "Autonomous Build"
        ralph[ralph plan + build]
        code(["Implemented feature"])

        ralph --> code
    end

    PRD --> ptf
    features -->|one at a time| ralph
```

## Project directory structure

The re-engineering phase extends the project directory across two locations:

**Reverse engineering project** (where the PRD lives):

```
re-project/
├── output/
│   ├── PRD.md                      (from reverse engineering)
│   └── features/                   (from feature decomposition)
│       ├── FT-001-feature-name.md
│       ├── FT-002-feature-name.md
│       └── ...
```

**Target application project** (where ralph builds):

```
app-project/
├── CLAUDE.md                       (operational guardrails — you maintain)
├── IMPLEMENTATION_PLAN.md          (created by ralph plan)
├── PROGRESS.md                     (append-only log by ralph build)
├── specs/
│   └── FT-001-feature-name.md     (copied from re-project)
├── src/
│   └── ...                         (implemented code)
└── test/
    └── ...                         (tests)
```
