---
title: About This Playbook
permalink: /pages/overview/
---

## What is LAP?

LAP is Defra's **Legacy Application Programme** — a programme to understand, document, and modernise legacy systems across Defra's estate. The programme exists because Defra maintains a large number of ageing applications that are costly to support, difficult to change, and increasingly risky to operate. LAP provides a structured approach to moving these applications forward.

## What this playbook covers

This playbook describes an **AI-enabled modernisation process** that covers two distinct phases of legacy application modernisation:

1. **[Reverse Engineering]({{ "/pages/reverse-engineering/" | relative_url }})** — uses generative AI to analyse legacy application artefacts (source code, UI screenshots, and stakeholder interview transcripts) and produce a comprehensive Product Requirements Document (PRD) that captures what the application does, why it does it, and what a modern replacement would need to deliver.

2. **[Re-engineering]({{ "/pages/re-engineering/" | relative_url }})** — takes the signed-off PRD and uses it to design, build, and deploy a modern replacement for the legacy application.

The two phases are designed to be used independently or together. A team may use only the reverse engineering phase to document an application, or pick up at the re-engineering phase if a PRD already exists.

## Scope

This playbook covers the full modernisation lifecycle — from **gathering inputs** and producing a **signed-off PRD** through to **building a modern replacement**.

The [Reverse Engineering]({{ "/pages/reverse-engineering/" | relative_url }}) phase is fully documented. The [Re-engineering]({{ "/pages/re-engineering/" | relative_url }}) phase is under active development.

## Audience

This playbook is written for:

- **Defra internal delivery teams** working on legacy modernisation projects
- **Third-party suppliers** engaged by Defra to carry out modernisation work

It assumes readers are familiar with agile delivery practices and have access to the tooling described in the [Tooling]({{ "/pages/reverse-engineering/tooling/" | relative_url }}) section.

## How to read this playbook

We recommend reading the playbook in the following order:

1. **Start here** — read the rest of the [Overview]({{ "/pages/overview/" | relative_url }}) section for context on the team, stakeholders, and approach
2. **Follow the relevant phase** — work through the [Reverse Engineering]({{ "/pages/reverse-engineering/" | relative_url }}) or [Re-engineering]({{ "/pages/re-engineering/" | relative_url }}) section depending on where you are in the modernisation lifecycle
3. **Use reference material** — consult the output reference and tooling sections within each phase as needed
4. **Review considerations** — read the [Considerations]({{ "/pages/considerations/" | relative_url }}) section before starting a project, so you are aware of risks, limitations, and practical advice from previous engagements
