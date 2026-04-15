---
title: "Phase 4: Autonomous Build"
permalink: /pages/re-engineering/process/autonomous-build/
---

# Phase 4: Autonomous Build

Each signed-off feature specification is implemented using an autonomous coding loop powered by [ralph](https://github.com/marc0der/ralph). Ralph runs an AI coding agent in repeated plan/build iterations — each iteration picks up where the last left off, working through the feature specification until it is fully implemented and passing tests.

## How it works

Ralph implements the [Ralph Wiggum pattern](https://github.com/ghuntley/how-to-ralph-wiggum) — a technique where an AI coding agent runs in a loop, performing one task per iteration. Each iteration starts a fresh agent session, avoiding context window exhaustion on complex features.

The loop has two phases:

1. **Plan** — the agent reads the feature specification in `specs/`, compares it against the current codebase, and produces a prioritised implementation plan (`IMPLEMENTATION_PLAN.md`). No code is written during planning.
2. **Build** — the agent picks the highest-priority incomplete item from the plan, implements it fully, runs tests, commits, and pushes. One item per iteration.

A shared `IMPLEMENTATION_PLAN.md` acts as the handoff between iterations, giving each fresh session the context it needs to continue. An append-only `PROGRESS.md` log captures what each iteration did, what it learned, and what broke.

## Prerequisites

- **Docker** (rootful) — required for the sandbox
- **devcontainer CLI** — install with `npm install -g @devcontainers/cli`
- **ralph** — install from [github.com/marc0der/ralph](https://github.com/marc0der/ralph)
- **AI backend** — Claude Code or OpenAI Codex CLI installed and authenticated

See the [ralph README](https://github.com/marc0der/ralph#install) for full installation instructions.

## Workflow per feature

Work through features in build layer order (lowest layers first), one feature at a time:

### 1. Prepare the workspace

Copy the signed-off feature specification into the target project's `specs/` directory:

```bash
cp output/features/FT-001-feature-name.md your-project/specs/
```

Initialise ralph workspace artifacts if not already present:

```bash
cd your-project
ralph init
```

### 2. Enter the sandbox

Ralph runs with permission bypass to enable unattended operation. The sandbox (devcontainer) provides the isolation boundary that makes this safe.

```bash
ralph sandbox
```

> **The sandbox is required.** Running ralph outside a devcontainer bypasses tool approval with no isolation. Always use `ralph sandbox` for autonomous builds.

### 3. Run the planning loop

```bash
ralph plan
```

The agent reads the feature specification and the codebase, then produces or updates `IMPLEMENTATION_PLAN.md` with a prioritised list of tasks. Planning runs for 3 iterations by default.

### 4. Run the build loop

```bash
ralph build
```

The agent works through the implementation plan one item at a time — implementing, testing, committing, and pushing each change. Build runs for up to 50 iterations by default.

Adjust iterations based on feature complexity:

```bash
ralph build -n 10        # smaller feature
ralph build -n 100       # larger feature
```

### 5. Review the results

Once the loop completes, review the implementation — see [Implementation Review]({{ '/pages/re-engineering/process/implementation-review/' | relative_url }}).

### 6. Move to the next feature

Archive the loop artifacts before starting the next feature:

```bash
ralph archive
```

Copy the next feature specification into `specs/`, replacing the previous one, and repeat from step 3.

## Key commands

| Command | Purpose |
|---------|---------|
| `ralph sandbox` | Enter the devcontainer |
| `ralph init` | Initialise workspace artifacts |
| `ralph plan` | Run the planning loop |
| `ralph build` | Run the build loop |
| `ralph archive` | Archive artifacts before the next feature |
| `ralph clean` | Delete artifacts (if history not needed) |

See the [ralph README](https://github.com/marc0der/ralph#commands) for the full command reference, options, and model selection.

## Project artifacts

Ralph creates and maintains these files in the project during each loop:

| File | Purpose |
|------|---------|
| `IMPLEMENTATION_PLAN.md` | Prioritised task list — shared state between iterations |
| `PROGRESS.md` | Append-only log of what each iteration did, learned, and broke |
| `specs/` | Feature specifications driving the work |
| `CLAUDE.md` / `AGENTS.md` | Operational guardrails for the AI backend — build commands, conventions, project rules. You maintain these; ralph does not modify them |

## Resuming after failure

If a build iteration fails or the loop is interrupted, re-run `ralph build`. It picks up from the current state of `IMPLEMENTATION_PLAN.md` — no special recovery step is needed.
