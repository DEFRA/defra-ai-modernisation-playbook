---
title: Interaction Analysis
permalink: /pages/output-reference/interaction-analysis/
---

## What this artefact is

A comprehensive interaction analysis that stitches HTML mockups with curated transcripts to document every screen, workflow, and navigation path in the legacy application. It bridges the gap between what users see (mockups) and what users say (transcripts).

## How it's produced

The interaction analysis is produced by the `interaction-analyst` agent, which cross-references all HTML mockups against all curated transcripts to build a complete picture of the application's user-facing behaviour.

## What it contains

The interaction analysis has four mandatory sections:

### 1. Screen Inventory

A subsection per screen, each containing:
- **Purpose** — what the screen is for
- **Mockup reference** — link to the HTML file
- **Key fields** — important data fields visible on the screen
- **Key actions** — buttons, links, and other interactive elements
- **Navigation** — where the screen is accessed from and where it leads
- **Access restrictions** — which roles can access the screen
- **Transcript references** — specific lines in curated transcripts that describe the screen

### 2. User Workflows

A subsection per workflow, each containing:
- **Trigger** — what initiates the workflow
- **Business outcome** — what completing the workflow achieves
- **Mermaid flowchart** — visual representation of the workflow steps
- **Step-by-step table** — detailed breakdown of each step

This section also includes a **workarounds** subsection documenting any manual processes users have adopted to compensate for system limitations.

### 3. Screen Navigation Map

A single Mermaid diagram showing all screens and how they connect. This provides a high-level view of the application's navigation structure.

### 4. Cross-Reference: Transcripts to Screens

A mapping table linking transcript passages to screens, with flags for any unmatched references — passages that describe screens not found in the mockups, or mockups not mentioned in any transcript.

## Quality criteria

- Every HTML mockup accounted for in the screen inventory
- Workflows evidenced from transcript descriptions
- Navigation paths match what mockups show
- Mermaid diagrams render correctly
- No orphan screens (every screen reachable from navigation)

## Example

The following snippet shows a screen inventory entry for a search screen in a fictional sample tracking system.

### Search Screen

- **Purpose:** Search for existing sample records in the repository
- **HTML reference:** `html/Search.html`
- **Key fields:** Reference Number, Sample Type, Date Range
- **Key actions:** Search, Clear, Export to Excel
- **Navigation:** Accessed from Home; leads to Search Results
- **Access restrictions:** Available to all authenticated users
- **Transcript references:** `transcripts/demo_curated.txt` (lines 17-20, 74-75)

> "You can search by reference number if you know it, or use the filters to narrow down by sample type and date range. Most of us just search by reference number though."
> — `transcripts/demo_curated.txt` (line 74)
