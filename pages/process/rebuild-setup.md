---
title: "Phase 7: Rebuild Setup"
permalink: /pages/process/rebuild-setup/
---

# Phase 7: Rebuild Setup

With feature specifications in hand, the team sets up a new project to rebuild the legacy application feature by feature. This phase prepares the workspace, feature specs, project guardrails, and a sandboxed development environment before any code is written.

## Create the target project

Create a new Git repository for the rebuilt application. This is a greenfield project — it has no connection to the legacy codebase.

```bash
mkdir my-app && cd my-app
git init
```

## Initialise the workspace

Use the `ralph` CLI to scaffold the workspace:

```bash
ralph init
```

This creates:

| File / directory | Purpose |
|------------------|---------|
| `specs/` | Directory for feature specifications |
| `IMPLEMENTATION_PLAN.md` | Prioritised task list maintained by ralph between iterations |
| `PROGRESS.md` | Append-only log of what each iteration did, learned, and broke |

## Copy feature specifications

Copy the feature specs from the reverse engineering project into the new project's `specs/` directory:

```bash
cp /path/to/legacy-project/output/features/FT-*.md specs/
```

These specs drive everything that follows. Each one describes a single deliverable feature with user stories, acceptance criteria, and wireframes — exactly what the autonomous build loop needs.

## Prepare CLAUDE.md

Create a `CLAUDE.md` file in the project root. This is a file you write by hand, tailored to the specific technology stack and conventions of the project you are building. It contains the operational guardrails that every ralph iteration reads before making changes — build commands, test commands, coding conventions, and project-specific rules. Without it, the agent has no context about how your project works.

Invest time in getting this right. A well-crafted `CLAUDE.md` is the difference between an agent that produces consistent, idiomatic code and one that fights the codebase on every iteration.

> **Tip:** Get `CLAUDE.md` right early. It is the single most important file for steering the autonomous build. If the agent keeps making the same mistake, the fix is almost always a new rule in `CLAUDE.md`.

See the [Ralph tooling page]({{ '/pages/tooling/ralph/' | relative_url }}) for a [worked example]({{ '/pages/tooling/ralph/#example-claudemd' | relative_url }}).

## Enter the sandbox

Ralph runs Claude Code in headless mode with `--dangerously-skip-permissions` enabled, which bypasses all tool approval prompts. This is necessary for autonomous operation but means Claude has unrestricted access to the shell, filesystem, and network.

**Always run ralph inside the sandbox.** The sandbox is a devcontainer that isolates the agent from your host machine. If the agent does something unexpected, the blast radius is contained to the container.

```bash
ralph sandbox
```

This drops you into a shell inside the devcontainer. From here, run all subsequent ralph commands.

> **Tip:** If you run ralph outside the sandbox, it will print a prominent warning on every iteration. Treat this as a strong signal to stop and use `ralph sandbox` instead.

## Outcome

A new project repository with feature specs in `specs/`, a `CLAUDE.md` defining the project's guardrails, and a sandboxed environment ready for the autonomous build loop.
