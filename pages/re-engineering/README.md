---
title: Re-engineering
permalink: /pages/re-engineering/
---

## Overview

The re-engineering phase takes a signed-off **Product Requirements Document (PRD)** produced by the [Reverse Engineering]({{ "/pages/reverse-engineering/" | relative_url }}) phase and uses it to design and build a modern replacement for the legacy application.

The PRD is the sole input. It contains the complete requirements for the legacy application, and the re-engineering process works entirely from this document.

The first step is **feature decomposition**: slicing the PRD into individually deliverable feature specifications that a development cycle can pick up and implement independently.

```mermaid
flowchart LR
    A["PRD"] --> B["Feature Decomposition"]
    B --> C["Feature Plan Review"]
    C --> D["Feature Spec Review"]
    D --> E["Autonomous Build"]
    E --> F["Implementation Review"]
```

Features are implemented one at a time in build layer order using autonomous AI coding loops, then reviewed before moving to the next.

### Sections

- [Process]({{ "/pages/re-engineering/process/" | relative_url }}) — the re-engineering process, starting with feature decomposition
- [Tooling]({{ "/pages/re-engineering/tooling/" | relative_url }}) — agents used during the re-engineering phase
