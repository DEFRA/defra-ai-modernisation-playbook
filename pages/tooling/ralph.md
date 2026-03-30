---
title: Ralph
permalink: /pages/tooling/ralph/
---

# Ralph

Ralph is a CLI tool that runs Claude Code in autonomous loops to build software feature by feature. It implements the [Ralph Wiggum pattern](https://ghuntley.com/ralph/) — a technique for running AI coding agents in repeated iterations where each one picks up where the last left off.

## Prerequisites

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed and authenticated
- [Docker](https://docs.docker.com/get-docker/) (rootful — rootless Docker is not supported)
- [devcontainer CLI](https://github.com/devcontainers/cli) — install with `npm install -g @devcontainers/cli`

## Installation

```bash
git clone https://github.com/marc0der/ralph.git
cd ralph
./install.sh
```

This places `ralph` in `~/.local/bin/`, default prompts in `~/.config/ralph/prompts/`, workspace templates in `~/.config/ralph/templates/`, and the devcontainer config in `~/.config/ralph/container/`.

Ensure `~/.local/bin` is in your PATH:

```bash
export PATH="$HOME/.local/bin:$PATH"
```

## Commands

| Command | Description |
|---------|-------------|
| `ralph init` | Scaffold workspace (`PROGRESS.md`, `IMPLEMENTATION_PLAN.md`, `specs/`) |
| `ralph sandbox` | Enter a devcontainer shell for the current project |
| `ralph sandbox --rebuild` | Rebuild the container image from scratch |
| `ralph sandbox clean` | Remove the devcontainer for the current project |
| `ralph plan` | Analyse specs and source, create/update `IMPLEMENTATION_PLAN.md` (default: 3 iterations) |
| `ralph build` | Pick the next item, implement, test, commit, push (default: 50 iterations) |
| `ralph archive` | Move `IMPLEMENTATION_PLAN.md` and `PROGRESS.md` to `.ralph/<timestamp>/` |
| `ralph clean` | Delete `IMPLEMENTATION_PLAN.md` and `PROGRESS.md` |

### Options (plan and build)

| Flag | Description |
|------|-------------|
| `-n`, `--iterations` | Maximum iterations |
| `-g`, `--goal` | Goal injected into the prompt template |
| `-m`, `--model` | Claude model (default: `opus`) |

## Key files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Operational guardrails — build commands, conventions, project rules. You maintain this file; ralph does not modify it |
| `IMPLEMENTATION_PLAN.md` | Prioritised task list — shared state between iterations |
| `PROGRESS.md` | Append-only log of what each iteration did, learned, and broke |
| `specs/` | Feature specifications driving the work |

## Prompt customisation

Ralph resolves prompts in this order:

1. **Project-local** — `PROMPT_plan.md` / `PROMPT_build.md` in the working directory
2. **Installed defaults** — `~/.config/ralph/prompts/plan.md` / `build.md`

Run `ralph init --prompts` to copy the defaults into your project for customisation.

## Example CLAUDE.md

The following example shows a `CLAUDE.md` for a fictional sample tracking application being rebuilt as a TypeScript/React service.

```markdown
# CLAUDE.md

Operational guardrails for the Field Sample Tracker rebuild.

## Project overview

Field Sample Tracker is a TypeScript application with a React frontend
and a Node.js/Express backend. It manages the submission, assignment,
and tracking of field samples for laboratory analysis. It replaces a
legacy ASP.NET WebForms application.

## Build and run

- **Run dev server:** `npm run dev` (starts frontend on port 3000, backend on port 4000)
- **Run with Docker:** `docker compose up`

## Validation

Run after every implementation:

- **Full chain:** `npm run check` (tsc, eslint, test)
- **Type check:** `npm run typecheck`
- **Tests only:** `npm test`
- **Lint only:** `npm run lint`
- **Lint auto-fix:** `npm run lint:fix`

## Database

The application requires PostgreSQL. For development:

    docker compose up -d postgres

Prisma manages migrations under `prisma/migrations/`.

## Commit

Use conventional commit format. One logical change per commit.

## Key conventions

- TypeScript throughout (strict mode enabled)
- React with React Router for the frontend
- Express with Prisma ORM for the backend
- Vitest for unit tests, Playwright for end-to-end tests
- Feature tests go in `tests/features/`
- British English in user-facing strings
```

## Further information

Refer to the [ralph repository](https://github.com/marc0der/ralph) for full documentation, including devcontainer internals, troubleshooting, and prompt templates.
