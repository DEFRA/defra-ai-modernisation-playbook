---
title: About This Playbook
permalink: /pages/overview/
---

## What is LAP?

LAP is Defra's **Legacy Application Programme** — a programme to understand, document, and modernise legacy systems across Defra's estate. The programme exists because Defra maintains a large number of ageing applications that are costly to support, difficult to change, and increasingly risky to operate. LAP provides a structured approach to moving these applications forward.

## What this playbook covers

This playbook describes an **AI-enabled modernisation process** that uses generative AI to reverse-engineer legacy applications and rebuild them. The process starts by producing Product Requirements Documents (PRDs) from legacy application artefacts, then uses an autonomous build loop to implement the replacement. Those artefacts include:

- **Source code** — the application's codebase, which the AI tooling analyses to extract structure, logic, and behaviour
- **UI screenshots** — captured screens from the running application, which the AI tooling interprets to document user-facing functionality
- **Stakeholder interview transcripts** — recorded conversations with application users and product owners, which provide business context, workflows, and tacit knowledge

The process brings these inputs together and produces a comprehensive PRD that captures what the legacy application does, why it does it, and what a modern replacement would need to deliver.

## Scope

This playbook covers everything from **gathering inputs** through to a **signed-off PRD**, its **decomposition into feature specifications**, and the **autonomous rebuild** of the application feature by feature. It is a complete guide to the reverse engineering, requirements capture, and re-engineering phases of legacy modernisation.

## Audience

This playbook is written for:

- **Defra internal delivery teams** working on legacy modernisation projects
- **Third-party suppliers** engaged by Defra to carry out modernisation work

It assumes readers are familiar with agile delivery practices and have access to the tooling described in the [Tooling]({{ "/pages/tooling/" | relative_url }}) section.

## How to read this playbook

We recommend reading the playbook in the following order:

1. **Start here** — read the rest of the [Overview]({{ "/pages/overview/" | relative_url }}) section for context on the team, stakeholders, and approach
2. **Follow the process** — work through the [Process]({{ "/pages/process/" | relative_url }}) guide step by step, from gathering inputs through to the autonomous build
3. **Use reference material** — consult the [Output Reference]({{ "/pages/output-reference/" | relative_url }}) and [Tooling]({{ "/pages/tooling/" | relative_url }}) sections as needed while running the process
4. **Review considerations** — read the [Considerations]({{ "/pages/considerations/" | relative_url }}) section before starting a project, so you are aware of risks, limitations, and practical advice from previous engagements
