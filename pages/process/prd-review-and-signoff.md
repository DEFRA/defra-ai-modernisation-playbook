---
title: "Phase 5: PRD Review & Sign-off"
permalink: /pages/process/prd-review-and-signoff/
---

# Phase 5: PRD Review & Sign-off

The final phase is a human review of the generated PRD, followed by stakeholder sign-off. This ensures the document accurately captures the legacy application before it is used for implementation planning.

## Review Process

The team reviews the generated PRD for completeness and accuracy. The PRD is published on GitHub for stakeholder access, and the application product owner reviews and signs off the document.

## What to Look for During Review

### Completeness

Are all known features, workflows, and business rules captured? Cross-reference the PRD against the team's understanding of the application and the original stakeholder interviews.

### Accuracy

Does the PRD match what stakeholders described in interviews and what the code reveals? Pay particular attention to business rules and workflow sequences.

### Hallucination Detection

The AI agents are instructed never to fabricate, but verify that all stated facts are supported by the source material. If a claim in the PRD cannot be traced back to the source code, screenshots, or transcripts, flag it for investigation.

### Missing Areas

Check the "Open Questions" section of the PRD for identified gaps. Consider whether additional interviews or source material could fill them. Some gaps may require follow-up sessions with stakeholders.

### Domain Language

Verify that the ubiquitous language and bounded contexts match the stakeholders' understanding. Terminology should reflect how the business talks about the domain, not how the code happens to name things.

## Outcome

A signed-off PRD that accurately describes the legacy application's behaviour and requirements, ready for implementation planning. This marks the end of the reverse engineering phase.
