---
title: Feature Specification
permalink: /pages/re-engineering/output-reference/feature-specification/
---

## What this artefact is

An individually deliverable feature specification that describes a coherent unit of user value extracted from the PRD. Each feature file contains everything a development team needs to build, test, and deliver that feature independently — user stories, acceptance criteria, wireframes, business rules, data model, and effort estimates.

## How it's produced

Feature specifications are produced by `feature-writer` agents, spawned in parallel by the `prd-to-features` agent. Each writer receives verbatim PRD extracts relevant to its feature plus shared context (actors, glossary, global business rules), and writes a single file to `output/features/`.

## File naming

`output/features/FT-XXX-feature-name.md`

Where `XXX` is a zero-padded sequential number and `feature-name` is a lowercase hyphenated slug derived from the feature title. For example: `FT-003-sample-registration.md`.

## What it contains

Each feature specification contains 21 mandatory sections:

| # | Section | Description |
|---|---------|-------------|
| — | **Metadata** | Feature ID, upstream/downstream dependencies, MoSCoW priority, PRD reference, open question count |
| 1 | **Problem Statement** | The core problem this feature addresses, framed from the user's perspective |
| 2 | **Benefit Hypothesis** | Expected benefit of delivering this feature, contrasted with the legacy experience |
| 3 | **Target Users and Personas** | User roles that interact with this feature, with usage frequency |
| 4 | **User Goals and Success Criteria** | What users are trying to achieve and how success is measured |
| 5 | **Scope and Boundaries** | What is in scope, out of scope, and where the feature hands off to others |
| 6 | **User Stories and Acceptance Criteria** | Stories in "As a / I want / So that" format with Gherkin acceptance criteria and ASCII wireframes |
| 7 | **User Flows and Scenarios** | End-to-end user journeys with entry points, decision points, and exit points |
| 8 | **UI/Layout Specifications** | Detailed interface descriptions — fields, labels, positions, interaction states |
| 9 | **Business Rules and Validation** | Rules governing the feature's behaviour, with validation actions |
| 10 | **Data Model and Requirements** | Entities, attributes, search parameters, and relationships |
| 11 | **Integration Points and External Dependencies** | External systems, APIs, or services the feature interacts with |
| 12 | **Non-Functional Requirements** | Feature-specific performance, accessibility, or compliance requirements |
| 13 | **Legacy Pain Points and Proposed Improvements** | Known issues from the legacy system and how the new system addresses them |
| 14 | **Internal System Dependencies** | Dependencies on other features, shared services, or platform capabilities |
| 15 | **Business Dependencies** | Non-technical dependencies such as data migration sign-off or policy approval |
| 16 | **Key Assumptions** | Assumptions that, if wrong, would require revisiting the design |
| 17 | **Success Metrics and KPIs** | How success is measured after delivery, with baseline and target values |
| 18 | **Effort Estimate** | Estimated effort in person-days for a single developer |
| 19 | **Open Questions** | Unresolved questions that need answers before implementation |
| 20 | **Definition of Done** | Checklist of conditions that must be satisfied for the feature to be considered complete |
| 21 | **Glossary** | Terms specific to this feature |

### User stories and wireframes

Each user story includes:

- A story statement in "As a [role], I want to [action], so that [benefit]" format
- A MoSCoW priority
- ASCII wireframes using Unicode box-drawing characters, with single-line borders for existing components and double-line borders for new or changed components
- Acceptance criteria in Gherkin Given/When/Then format

User story IDs are globally sequential across all features (US-001, US-002, etc.) to avoid collisions.

## Quality criteria

- Every section is populated — no placeholder text remains
- All content is traceable to the PRD — no fabricated requirements
- User stories cover the happy path, alternative paths, and error paths
- Acceptance criteria are specific enough to be independently testable
- Wireframes use domain-realistic placeholder data drawn from the PRD
- Business rules match those in the PRD
- Upstream and downstream dependencies are consistent with the confirmed feature plan
- Open questions capture genuine ambiguities rather than masking gaps
- Effort estimates include the assumptions behind them

## Example

The following snippet shows a user story excerpt from a fictional sample tracking feature.

```markdown
### US-014: Search submissions by reference number

**Story:** As a Laboratory Analyst, I want to search for submissions by
reference number, so that I can quickly locate a specific submission
without browsing the full list.

**Priority:** Must

**Wireframes:**

╔══════════════════════════════════════════════╗
║  Search Submissions                          ║
╠══════════════════════════════════════════════╣
║                                              ║
║  Reference Number (*)  |  FS000192-07     |  ║
║                        [1]                   ║
║  Sample Type           |  ▼ All Types     |  ║
║  Date From             |  dd/mm/yyyy      |  ║
║  Date To               |  dd/mm/yyyy      |  ║
║                                              ║
║  [ Search ] [2]        [ Clear ] [3]         ║
║                                              ║
╚══════════════════════════════════════════════╝

[1] Text input — partial match supported
[2] Primary action — executes search
[3] Secondary action — resets all fields

**Acceptance Criteria:**

​```gherkin
Scenario: Search by full reference number
  Given the user is on the Search Submissions screen
  And the user has the "Laboratory Analyst" role
  When the user enters "FS000192-07" in the Reference Number field
  And clicks Search
  Then the system displays matching submissions in the results table
  And the results include reference number, sender, and date received

Scenario: Search with no results
  Given the user is on the Search Submissions screen
  When the user enters "NONEXISTENT" in the Reference Number field
  And clicks Search
  Then the system displays a message: "No submissions found matching your criteria"
​```
```
