---
title: "Phase 2: Feature Plan Review"
permalink: /pages/re-engineering/process/feature-plan-review/
---

# Phase 2: Feature Plan Review

The `prd-to-features` agent pauses after generating the feature plan and before producing feature specification files. This is the team's quality gate — the plan determines how the PRD is sliced into deliverable units of work, and mistakes here propagate into every feature specification.

## What you are reviewing

The agent presents a feature plan table. For each proposed feature, check:

- **Build Layer** — are foundation features (data models, reference data) in the lowest layers? Are orchestration features (navigation, dashboards) in the highest?
- **Feature ID** — sequential numbering starting from FT-001
- **Title** — clear, descriptive, and scoped to a coherent unit of user value
- **Description** — accurately summarises what the feature delivers
- **MoSCoW Priority** — reflects the business criticality described in the PRD
- **PRD Sections** — the relevant PRD sections are correctly mapped to this feature
- **Upstream Dependencies** — features that must be built first — are these correct and complete?
- **Downstream Dependencies** — features that depend on this one — consistent with the upstream column?

## What to look for

### Correct layering

Applications are built bottom-up. Verify the plan follows this principle:

- **Lowest layers** — shared reference data, core domain entities, and data models. These are the foundations that other features build on.
- **Middle layers** — individual domain screens, workflows, and business capabilities. Each should be independently deliverable within its bounded context.
- **Highest layers** — cross-cutting concerns (authentication, authorisation), navigation shells, landing pages, and dashboards. These depend on the features they protect, link to, or aggregate.

A common mistake is placing the home screen or navigation shell in a low layer. These are consumers of other features and belong in the highest layers.

### Feature scope

- Is each feature self-contained and independently deliverable?
- Does each feature map to a coherent unit of user value rather than a technical layer?
- Are features preferably scoped to a single bounded context?
- Are any features too large (covering multiple unrelated workflows) or too small (a single field or button)?

### Dependency correctness

- Walk each feature and confirm all upstream dependencies appear in a lower build layer
- Check that no circular dependencies exist
- Verify that shared data or entities are captured as explicit upstream dependencies

### Coverage

- Does the plan account for all bounded contexts, screens, workflows, and business rules in the PRD?
- Are there PRD sections not mapped to any feature?
- Has common infrastructure been accounted for (authentication, shared reference data, navigation)?

### Priority alignment

- Do MoSCoW priorities reflect the business criticality described in the PRD and stakeholder interviews?
- Are core domain features prioritised over supporting or generic subdomain features?

## Who does the review

The feature plan should be reviewed by the **product manager** and **key stakeholders** who understand the application's domain, business priorities, and technical landscape.

## How to adjust

If the plan needs changes, describe the adjustments to the agent before confirming. For example:

> Could you merge FT-003 and FT-004 into a single feature? They both cover the same workflow and would be awkward to deliver separately.

> FT-007 should be a "Must" not a "Could" — the reporting capability is a regulatory requirement.

> The navigation shell (FT-012) should depend on FT-002 and FT-005 as well, since it links to those screens.

The agent will revise the plan and present it again for confirmation.

## Outcome

A confirmed feature plan that the agent uses to generate individual feature specification files. Once confirmed, the agent proceeds to [Feature Decomposition — Stage 2]({{ '/pages/re-engineering/process/feature-decomposition/' | relative_url }}).
