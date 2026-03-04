---
title: The Team
permalink: /pages/overview/the-team/
---

## A small, T-shaped team

The reverse engineering process is designed for a **small, T-shaped team** where members flex across roles as needed. "T-shaped" means each person has a primary specialism (the vertical bar of the T) but is willing and able to contribute outside that specialism when the work demands it.

This is a deliberate choice. The AI tooling handles much of the heavy analytical work — reading code, interpreting screens, structuring outputs — so the team can stay small and focus on steering the process, validating results, and engaging stakeholders.

## Core roles

The team comprises three core roles:

### 1. Delivery Lead

The Delivery Lead coordinates the project, manages stakeholder engagement, ensures the process runs smoothly, and tracks progress. They are responsible for:

- Planning and scheduling the work across all phases
- Coordinating with programme product managers and application stakeholders
- Removing blockers and managing risks
- Ensuring the PRD reaches sign-off on time

### 2. Developer

The Developer runs the AI tooling, reviews technical outputs, and troubleshoots issues. Pairing is optional but preferred for knowledge sharing — having two developers work together reduces the risk of a single point of failure and improves the quality of technical review.

The Developer is responsible for:

- Setting up and configuring the AI tools
- Running the tooling against source code and screenshots
- Reviewing and correcting the AI-generated outputs for technical accuracy
- Escalating anything that looks wrong or incomplete

### 3. BA/UR (Business Analyst / User Researcher)

The BA/UR conducts stakeholder interviews, reviews curated outputs for domain accuracy, and validates the PRD against known business context. They are responsible for:

- Planning and conducting interviews with application users and product owners
- Capturing workflows, workarounds, pain points, and tacit knowledge
- Reviewing the AI-curated outputs to check they make sense from a business perspective
- Ensuring the final PRD accurately reflects how the application is used in practice

## Contrast with traditional approaches

In a non-AI project, you would need a **larger team** with dedicated analysts spending weeks manually reviewing code, documenting screens, and writing requirements. A traditional reverse engineering effort might require:

- Multiple business analysts to manually map out each module
- Technical architects to read and interpret the codebase line by line
- Dedicated writers to produce the requirements document

The AI tooling handles much of this analysis automatically, so the team stays small. The human roles shift from doing the analysis to **reviewing, validating, and enriching** the AI-generated outputs.

## Role activities by process phase

Each role contributes differently across the phases of the process:

| Phase | Delivery Lead | Developer | BA/UR |
|---|---|---|---|
| **Gather Inputs** | Coordinates access to source code and stakeholders | Sets up tooling, ingests source code and screenshots | Conducts and records stakeholder interviews |
| **Content Curation** | Monitors progress | Runs the AI tooling, reviews outputs | — |
| **Review Curated Outputs** | Facilitates review sessions | Reviews technical accuracy | Reviews domain accuracy and business context |
| **Analysis & PRD Generation** | Monitors progress | Runs the AI tooling, reviews outputs | — |
| **PRD Review & Sign-off** | Coordinates the review with stakeholders | Supports technical queries | Validates business requirements, supports sign-off |

All three roles collaborate closely during the **PRD Review & Sign-off** phase to ensure the final document is accurate, complete, and ready for stakeholder approval.
