---
title: Domain Analysis
permalink: /pages/output-reference/domain-analysis/
---

## What this artefact is

A strategic Domain-Driven Design analysis extracted from curated transcripts and HTML mockups. It captures the language, boundaries, and rules of the problem domain without reference to implementation details.

## How it's produced

The domain analysis is produced by the `business-analyst` agent, which reads all curated transcripts and HTML mockups to identify domain concepts, their relationships, and the rules that govern them.

## What it contains

The domain analysis has six mandatory sections:

### 1. Ubiquitous Language

An alphabetised glossary table of domain terms with definitions and the source material they were drawn from. Every term must be evidenced from the transcripts or mockups — no terms are fabricated.

### 2. Bounded Contexts

Named subsections describing each bounded context, including its responsibility, key terms, and transcript references. These represent genuine domain boundaries rather than technical module boundaries.

### 3. Subdomains

Each bounded context is classified as **core**, **supporting**, or **generic**, with a rationale explaining the classification.

### 4. Context Map

A relationship table and accompanying Mermaid flowchart showing how bounded contexts interact. Relationships use standard DDD patterns (e.g. upstream/downstream, shared kernel, conformist).

### 5. Actors and Stakeholders

Human and organisational roles that interact with the system, drawn from transcript descriptions and mockup evidence.

### 6. Domain Rules and Invariants

Numbered rules (DR-xxx format) capturing business constraints that must always hold true, with references to source material.

## Quality criteria

- All domain terms evidenced from transcripts or mockups (no fabrication)
- Bounded contexts reflect genuine domain boundaries
- Context map accurately represents system relationships
- Domain rules are traceable to source material
- Mermaid diagrams render correctly

## Example

The following snippet shows a portion of the Ubiquitous Language glossary for a fictional sample tracking system.

| Term | Definition | Source |
|------|-----------|--------|
| Reference Number | Unique identifier for sample submissions, format FS######-## | transcripts/demo_curated.txt (line 20) |
| Submission | A collection of one or more samples received from external laboratories | transcripts/demo_curated.txt (line 92) |
| Sample | Individual biological material within a submission | transcripts/demo_curated.txt (line 504) |
| Sender Laboratory | The external laboratory that dispatched the submission | transcripts/walkthrough_curated.txt (line 38) |
| Registration | The process of recording a new submission in the system | transcripts/demo_curated.txt (line 145) |
