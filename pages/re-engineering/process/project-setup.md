---
title: "Phase 4: Project Setup"
permalink: /pages/re-engineering/process/project-setup/
---

# Phase 4: Project Setup

Before the first [Autonomous Build]({{ '/pages/re-engineering/process/autonomous-build/' | relative_url }}) iteration runs, the target project needs to be set up so the AI coding agent has everything it needs to work autonomously: the right tooling installed, an `AGENTS.md` (or `CLAUDE.md`) that tells the agent how to operate in this project, and a `rules/` directory that describes what good looks like for the application being built.

Doing this well is the single biggest lever on autonomous build quality. The agent is only as good as the guardrails you give it.

## Tooling prerequisites

- **Docker** (rootful) — required for the sandbox
- **devcontainer CLI** — install with `npm install -g @devcontainers/cli`
- **ralph** — install from [github.com/marc0der/ralph](https://github.com/marc0der/ralph)
- **AI backend** — Claude Code or OpenAI Codex CLI installed and authenticated

See the [ralph README](https://github.com/marc0der/ralph#install) for full installation instructions.

## `AGENTS.md` / `CLAUDE.md`

The agent file is the operational guardrail for the AI backend — it is loaded into every iteration's context and tells the agent how to work in this specific project. `AGENTS.md` and `CLAUDE.md` are functionally equivalent; pick whichever convention your backend prefers and stick to one.

Keep it concise. Anything that can be derived from reading the code does not belong here — this file is for things the agent cannot infer, or would waste iterations discovering.

### Expected sections

- **Project summary** — one or two sentences describing what the application is, who it's for, and its current stage (POC, production, etc.). Frames every decision the agent makes.
- **Commands** — the exact commands the agent should run to install dependencies, start the app, run tests, lint, type-check, and interact with the database. Include both host-level commands and any that must run inside containers. If the agent has to guess how to run tests, it will guess wrong.
- **Detailed rules index** — a list of pointers into `rules/` (see below). The agent file stays short; the detail lives in `rules/`.
- **Ports / environment** — any fixed ports, environment variables, or service dependencies the agent needs to know about.
- **Git workflow** — commit style, branch conventions, and any skills or scripts the agent should prefer (e.g. a `/commit` slash command).
- **Gotchas** — the non-obvious traps the agent will otherwise hit: container quirks, hot-reload issues, migration ordering, port conflicts, permission issues. Every gotcha listed here is an iteration saved.

> **You don't have to write this yourself.** Work with your AI agent to write this. Claude already has a `claude init` command to assist with this.

### What to leave out

- Code patterns and conventions that are already evident from reading the codebase
- Ephemeral task state (that belongs in `IMPLEMENTATION_PLAN.md` / `PROGRESS.md`)
- Long-form explanations of architecture decisions — link to `rules/architecture.md` instead

## The `rules/` directory

`rules/` is where "what good looks like" lives. Each file is a focused, standalone rules document for one topic — a language, a framework, a cross-cutting concern, or a design system. The agent consults these when it needs to make a judgment call that the short `AGENTS.md` doesn't cover.

Typical rules files for a modernised web app include:

- Architectural guidance - e.g. `architecture.md`
- One per language / runtime — e.g. `typescript-rules.md`
- One per framework — e.g. `react-rules.md`, `nestjs.md`, `vite.md`
- Cross-cutting practices — e.g. `clean-code.md`, `domain-driven-design.md`, `acceptance-testing.md`
- Infrastructure — e.g. `docker-setup.md`, `postgresql.md`
- Design system / UX — e.g. `gds-design-system.md`

Start with the topics the agent will need on day one; add more as gaps surface during early build iterations.

### Rules file template

Each file in `rules/` should follow a consistent structure so the agent can parse them reliably. The template below is from the [sdkman prompt-library](https://github.com/sdkman/prompt-library/blob/main/templates/00-rules-template.md) and is the recommended shape:

```markdown
# [Rules Topic/Domain Name]

Brief description of the rules domain and its scope. What aspect of development, architecture, or methodology do these rules govern? Keep this concise and focused on the purpose and boundaries of these rules.

## Context

Provide the situational context where these rules apply. This helps the LLM understand when and why to apply these rules.

*Applies to:* [Project types, layers, components, or scenarios where these rules are relevant]
*Level:* [Strategic/Tactical/Operational - helps prioritize rule application]
*Audience:* [Developers/Architects/Product Team - who should follow these rules]

## Core Principles

List the fundamental principles that underpin all the detailed rules. These are the "why" behind the rules and help with decision-making when specific rules don't cover a scenario.

1. *Principle Name:* Brief explanation of the principle and its importance
2. *Principle Name:* Brief explanation of the principle and its importance
3. *Principle Name:* Brief explanation of the principle and its importance

## Rules

### Must Have (Critical)
Non-negotiable rules that must always be followed. Violation of these rules should block progress.

- *RULE-001:* Description of the rule with clear, actionable guidance
- *RULE-002:* Description of the rule with clear, actionable guidance
- *RULE-003:* Description of the rule with clear, actionable guidance

### Should Have (Important)
Strong recommendations that should be followed unless there's a compelling reason not to.

- *RULE-101:* Description of the rule with clear, actionable guidance
- *RULE-102:* Description of the rule with clear, actionable guidance
- *RULE-103:* Description of the rule with clear, actionable guidance

### Could Have (Preferred)
Best practices and preferences that improve quality but are not blocking.

- *RULE-201:* Description of the rule with clear, actionable guidance
- *RULE-202:* Description of the rule with clear, actionable guidance
- *RULE-203:* Description of the rule with clear, actionable guidance

## Patterns & Anti-Patterns

### ✅ Do This
Concrete examples of what good implementation looks like

// Example of good practice in code block
// Clear, concise code example

### ❌ Don't Do This
Concrete examples of what to avoid

// Example of anti-pattern in code block
// Clear example of what not to do

## Decision Framework

Provide guidance for making decisions when rules conflict or when faced with novel situations

*When rules conflict:*
1. Step 1 for resolution
2. Step 2 for resolution
3. Step 3 for resolution

*When facing edge cases:*
- Guideline 1
- Guideline 2
- Guideline 3

## Exceptions & Waivers

Define when and how these rules can be broken

*Valid reasons for exceptions:*
- Reason 1 (with approval process if needed)
- Reason 2 (with approval process if needed)
- Reason 3 (with approval process if needed)

*Process for exceptions:*
1. Document the exception and rationale
2. [Additional approval steps if needed]
3. [Time-bound review if applicable]

## Quality Gates

Define how adherence to these rules should be verified

- *Automated checks:* What can be validated through tooling
- *Code review focus:* What reviewers should specifically look for
- *Testing requirements:* How rule compliance should be tested

## Related Rules

Reference other rules files that complement or interact with these rules

- rules/related-rules-1.md - Brief description of relationship
- rules/related-rules-2.md - Brief description of relationship
- rules/related-rules-3.md - Brief description of relationship

## References

Links to external resources, standards, or documentation that inform these rules

- [Resource 1](url) - Brief description
- [Resource 2](url) - Brief description
- [Resource 3](url) - Brief description

---

## TL;DR

Ultra-concise summary of the most critical rules and principles. This section should be scannable in under 30 seconds and capture the essence of all rules above.

*Key Principles:*
- Principle 1 in one sentence
- Principle 2 in one sentence
- Principle 3 in one sentence

*Critical Rules:*
- Must do X
- Must not do Y
- Always ensure Z

*Quick Decision Guide:*
When in doubt: [Simple decision heuristic or single guiding principle]
```

### Using the template well

You don't have to fill this template in by hand. Give it to an AI agent along with the topic you want to cover, and let the agent produce the first draft — then review and refine it. A prompt like the following works well:

> Generate a rules file for **Clean Code** using the following template.
>
> ```markdown
> [paste the template above]
> ```

Repeat for each topic you want covered in `rules/` (TypeScript, React, testing, the design system, and so on), then reference each generated file from `AGENTS.md` so the agent knows when to consult it.

## Ready to build

Once the tooling is installed, `AGENTS.md` describes how to operate in the project, and `rules/` describes what good looks like, you are ready to begin [Autonomous Build]({{ '/pages/re-engineering/process/autonomous-build/' | relative_url }}).
