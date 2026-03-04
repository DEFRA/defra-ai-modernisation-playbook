---
title: Application Stakeholders
permalink: /pages/overview/stakeholders/
---

## Stakeholders outside the delivery team

Beyond the core delivery team, several stakeholder groups play a critical role in the reverse engineering process. These are the people who provide access, context, and ultimately sign off the outputs.

### Programme Product Managers

Programme Product Managers sit within the LAP programme and act as the **bridge between the delivery team and application stakeholders**. They:

- Coordinate communications between the delivery team and the people who know the legacy application
- Identify the right contacts — the product owners and day-to-day users who can provide the most useful input
- Schedule interviews and manage stakeholder availability
- Ensure the right people are engaged at the right time

### Application Product Owners

Application Product Owners are the **domain subject-matter experts** for the legacy application. They understand what the application is supposed to do, why it was built the way it was, and what business outcomes it supports.

They are responsible for:

- Reviewing and **signing off the PRD** — this is their primary accountability in the process
- Providing context that the code and screenshots alone cannot capture, such as business rules, regulatory requirements, and historical decisions
- Clarifying ambiguities in the AI-generated outputs
- Confirming that the documented requirements accurately reflect the application's intended behaviour

### Application Users

Application Users are the people who use the legacy application **day to day**. They are the interview subjects in the Gather Inputs phase. They explain:

- **Workflows** — how they actually use the application to complete their tasks, which may differ from the originally designed process
- **Workarounds** — the unofficial steps they take to deal with bugs, limitations, or missing features
- **Pain points** — what frustrates them, what slows them down, what they would change if they could
- **Tacit knowledge** — the things everybody "just knows" but nobody has written down, such as which fields must be filled in a certain order, or which reports are the ones that actually matter

This tacit knowledge is particularly valuable. It cannot be extracted from source code or screenshots, and it is often the difference between a PRD that describes what the application does and one that describes what the application actually needs to do.

## Stakeholder engagement by process phase

Stakeholders engage at specific points in the process. Not every phase requires their involvement.

| Phase | Stakeholder involvement |
|---|---|
| **Gather Inputs** | Product owners arrange access to the source code repository. Users participate in recorded interviews conducted by the BA/UR. |
| **Content Curation** | No stakeholder involvement. This phase is automated — the AI tooling processes the gathered inputs. |
| **Review Curated Outputs** | No stakeholder involvement. This is an internal team review where the delivery team checks the AI-curated outputs for accuracy and completeness. |
| **Analysis & PRD Generation** | No stakeholder involvement. This phase is automated — the AI tooling generates the PRD from the curated and reviewed content. |
| **PRD Review & Sign-off** | The application product owner reviews the PRD and signs it off. This is the critical stakeholder gate — the PRD is not complete until the product owner is satisfied it accurately represents the application. |
