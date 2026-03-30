---
title: Feature Specifications
permalink: /pages/output-reference/feature-specifications/
---

## What this artefact is

Individually deliverable feature specifications decomposed from the signed-off PRD. Each feature file is self-contained and describes a slice of the re-engineered system in enough detail for a delivery team to begin work.

## How it's produced

Feature specifications are produced by the `prd-to-features` skill, which reads the PRD, identifies natural feature boundaries, and generates one file per feature. The skill proposes a feature breakdown and waits for confirmation before writing any files.

## What it contains

Each feature specification follows a structured template with up to 21 sections, included where the PRD provides sufficient material:

1. **Metadata** — feature ID, title, bounded context, priority, and effort estimate
2. **Problem statement** — what problem this feature solves and the benefit hypothesis
3. **Target users** — who uses this feature and what they need from it
4. **Success criteria** — measurable outcomes that confirm the feature works as intended
5. **Scope** — what is in and out of scope for this feature
6. **User stories** — Given/When/Then format with acceptance criteria
7. **Wireframes** — ASCII wireframes using Unicode box-drawing characters
8. **UI/layout specifications** — detailed enough for designers to mock up
9. **Business rules** — rules specific to this feature, traced back to the PRD
10. **Data model** — entities, attributes, and relationships relevant to this feature
11. **Integration points** — external systems or other features this depends on
12. **Non-functional requirements** — performance, availability, and scalability expectations
13. **Legacy pain points** — issues with the legacy implementation this feature should address
14. **Dependencies** — other features that must be delivered before or alongside this one
15. **Assumptions** — decisions made in the absence of confirmed information
16. **Open questions** — genuine ambiguities that need resolution before or during delivery
17. **Definition of Done** — checklist of conditions that must be met for the feature to be considered complete
18. **Effort estimate** — t-shirt size estimate with rationale
19. **Glossary** — domain terms specific to this feature

## File naming

Feature files are named `FT-XXX-feature-name.md`, where `XXX` is a zero-padded sequential number. For example:

- `FT-001-sample-registration.md`
- `FT-002-laboratory-assignment.md`
- `FT-003-results-entry.md`

## Quality criteria

- Every feature traces back to requirements in the PRD
- No fabricated requirements — gaps are captured in Open Questions
- User stories follow Given/When/Then format
- Features are independently deliverable where possible, with dependencies explicitly stated
- Domain language is consistent with the PRD's ubiquitous language
- No placeholder text left in the final output

## Example

The following snippets show key sections from a fictional sample search feature specification.

### User story with acceptance criteria

```gherkin
US-001: Search by reference number

As a laboratory technician
I want to search for a sample by its reference number
So that I can quickly find a specific submission

Acceptance criteria:

  Given the user is on the Sample Search screen
  And the user has the "Viewer" role
  When the user enters "FS000192-07" in the Reference Number field
  And clicks Search
  Then the system displays matching submissions in the results list
  And the results show reference number, sender, date received, and status
```

### Wireframe

```
┌─────────────────────────────────────────────┐
│ Sample Search                               │
├─────────────────────────────────────────────┤
│ Reference Number: [______________]          │
│ Sender:           [______________]          │
│ Date From:        [__________]              │
│ Date To:          [__________]              │
│                                             │
│ [Search]  [Clear]                           │
├─────────────────────────────────────────────┤
│ Ref        │ Sender    │ Received  │ Status │
│────────────┼───────────┼───────────┼────────│
│ FS000192-07│ Lab A     │ 15/01/2025│ Active │
│ FS000193-01│ Lab B     │ 16/01/2025│ Pending│
└─────────────────────────────────────────────┘
```

### Business rules (excerpt)

| ID | Rule | Source |
|----|------|--------|
| BR-001 | Reference number search is an exact prefix match | PRD §5, BR-012 |
| BR-002 | Date range must not exceed 12 months | PRD §5, BR-045 |
| BR-003 | Users without the "Viewer" role cannot access the search screen | PRD §10 |

### Open questions (excerpt)

| # | Question | Impact |
|---|----------|--------|
| OQ-001 | Should search results be paginated or infinitely scrolled? The PRD does not specify. | UI design decision |
| OQ-002 | The legacy system limits results to 500 rows. Should this limit be carried forward? | Performance and UX |
