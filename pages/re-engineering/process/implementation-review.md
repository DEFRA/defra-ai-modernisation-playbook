---
title: "Phase 6: Implementation Review"
permalink: /pages/re-engineering/process/implementation-review/
---

# Phase 6: Implementation Review

After ralph completes the build loop for a feature, the implementation is reviewed before moving to the next feature. This is a light-touch review — ralph's own test verification provides the primary quality gate, but human review catches issues that tests alone cannot.

## What to look for

### Technical review

- Does the implementation match the feature specification?
- Are tests meaningful and covering the acceptance criteria, not just passing?
- Is the code clean and following the project's conventions (as defined in `CLAUDE.md` or `AGENTS.md`)?
- Are there any obvious issues — dead code, placeholder logic, or incomplete implementations that ralph marked as done?

### Product review

- Does the feature behave as described in the user stories?
- Do the workflows match what the feature specification describes?
- Are there any usability issues or edge cases that the specification didn't anticipate?

### Progress log review

Check `PROGRESS.md` for signals:

- **Learnings** — patterns and gotchas discovered during implementation that may affect future features
- **Failed iterations** — items that repeatedly failed may indicate specification ambiguity or architectural issues
- **Unresolved items** — anything flagged but not completed during the loop

## Who does the review

The **product manager** and a **technical reviewer** should review the implementation. The product manager confirms the feature meets the specification's intent; the technical reviewer confirms the code quality and test coverage.

## Outcome

A reviewed, implemented feature ready for integration. If issues are found, either:

- Run another ralph build loop to address them (add findings to `specs/` or `IMPLEMENTATION_PLAN.md`)
- Fix them manually before moving to the next feature

Once satisfied, [archive the loop artifacts]({{ '/pages/re-engineering/process/autonomous-build/' | relative_url }}) and proceed to the next feature in build layer order.
