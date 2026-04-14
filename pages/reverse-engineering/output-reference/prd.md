---
title: Product Requirements Document
permalink: /pages/reverse-engineering/output-reference/prd/
---

## What this artefact is

The final deliverable — a comprehensive Product Requirements Document synthesised from all four analysis outputs (domain, interaction, application, and database). This is what stakeholders review and sign off. It describes the system that needs to be rebuilt without prescribing how to build it.

## How it's produced

The PRD is produced by the `product-manager` agent, which reads all four analysis files and synthesises them into a single, coherent requirements document. The agent resolves conflicts between sources, fills in cross-references, and structures the output for a stakeholder audience.

## What it contains

The PRD may contain up to 18 sections, included only where sufficient material exists in the analysis outputs:

1. **Overview** — executive summary of the system and its purpose
2. **Actors** — all user roles and external systems that interact with the application
3. **Domain Model** — bounded contexts, context map, and entity definitions drawn from the domain analysis
4. **Key User Interfaces & Screens** — screen descriptions drawn from the interaction analysis
5. **Business Rules & Processes** — consolidated business rules from application and database analyses
6. **Workflows** — end-to-end workflows with Mermaid sequence diagrams
7. **Computed Fields & Formulas** — calculated values and their derivation logic
8. **Reports & Analytics** — reporting requirements drawn from the application analysis
9. **Behaviour (BDD Gherkin scenarios)** — executable specifications in Given/When/Then format
10. **Roles & Permissions** — access control matrix
11. **Security Constraints** — authentication, authorisation, and data protection requirements
12. **External Systems & Integrations** — all external touchpoints
13. **API Contracts** — interfaces exposed or consumed
14. **Open Questions** — genuine ambiguities and gaps discovered during analysis
15. **Known Limitations & Deficiencies** — issues with the legacy system that should be addressed
16. **Data Migration Considerations** — what needs to happen with existing data
17. **Non-Functional Requirements** — performance, availability, scalability expectations
18. **Glossary** — domain terms carried forward from the domain analysis

## Quality criteria

- All four analysis files referenced as sources
- No fabricated requirements — everything traceable to analysis outputs
- BDD scenarios follow Given/When/Then format
- Domain language consistent with the domain analysis
- Open Questions section captures genuine ambiguities
- Mermaid diagrams render correctly

## Example

The following snippet shows a BDD scenario for a fictional sample tracking system.

```gherkin
Feature: Search Repository

  Scenario: Search by reference number
    Given the user is on the Search screen
    And the user has the "Viewer" role
    When the user enters "FS000192-07" in the Reference Number field
    And clicks Search
    Then the system displays matching submissions in the results list
    And the results include reference number, sender, and date received
```

### Open Questions (excerpt)

| # | Question | Source | Impact |
|---|----------|--------|--------|
| OQ-001 | Several transcript references mention a "bulk import" feature, but no corresponding screen or source code was found. Was this feature removed or never implemented? | interaction-analysis, application-analysis | May require new feature scoping |
| OQ-002 | The database contains a `SubmissionArchive` table with no application code referencing it. Is there a separate archival process running outside this application? | database-analysis | Data migration planning |
| OQ-003 | Stakeholders described different validation rules for reference numbers depending on the sender laboratory. The application code enforces a single format. Which is correct? | domain-analysis, application-analysis | Business rule definition |
