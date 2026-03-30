---
title: "Phase 8: Autonomous Build"
permalink: /pages/process/autonomous-build/
---

# Phase 8: Autonomous Build

The autonomous build phase uses a ralph loop to implement the rebuilt application feature by feature. Each iteration spawns a fresh Claude Code session that picks up the next task, implements it, runs quality checks, commits if green, and records what it learned. The loop continues until the implementation plan is complete.

## Plan

From inside the sandbox, run the plan phase:

```bash
ralph plan
```

Ralph analyses the feature specs in `specs/` and the current state of the codebase, then produces a prioritised `IMPLEMENTATION_PLAN.md`. This plan breaks the work into small tasks — each sized to fit within a single context window.

The plan phase runs three iterations by default. Review the resulting `IMPLEMENTATION_PLAN.md` before moving on. If the plan misses something or prioritises incorrectly, edit it directly — ralph treats the file as the source of truth.

## Build

Once the plan looks right, start the build loop:

```bash
ralph build
```

Each iteration:

1. Reads `CLAUDE.md` for project guardrails
2. Reads `IMPLEMENTATION_PLAN.md` to find the next task
3. Implements the task
4. Runs the quality checks defined in `CLAUDE.md` (tests, linting, type checks)
5. Commits and pushes if checks pass
6. Updates `IMPLEMENTATION_PLAN.md` to mark the task as complete
7. Appends learnings to `PROGRESS.md`

The loop runs up to 50 iterations by default. You can adjust this:

```bash
ralph build -n 20
```

### Each iteration is a fresh context

Every iteration spawns a new Claude Code session with no memory of previous iterations. The only continuity between iterations comes from:

- **Git history** — commits from previous iterations
- **`IMPLEMENTATION_PLAN.md`** — which tasks are done, which remain
- **`PROGRESS.md`** — learnings, patterns discovered, gotchas encountered

This is by design. A fresh context avoids the degradation that comes from long-running sessions approaching their context limit.

### When things go wrong

If an iteration fails to produce passing quality checks, it will not commit. The next iteration picks up the same task and tries again with a fresh context. If a task is consistently failing, pause the loop, review `PROGRESS.md` for clues, and consider whether the task needs to be broken down further or `CLAUDE.md` needs a new rule.

## Review

When the loop completes — or at natural checkpoints along the way — raise a pull request and review the output using your team's normal PR review process. The build loop produces working, tested code, but human review remains essential for catching issues that automated checks cannot.

### What to look for

- **Correctness** — does the implementation match the feature specification?
- **Quality** — is the code well-structured and consistent with the project's conventions?
- **Test coverage** — are the acceptance criteria from the feature spec covered by tests?
- **No drift** — has the agent introduced anything that was not in the specification?

## Starting a new feature

When moving on to the next feature, archive the current plan and progress:

```bash
ralph archive
```

This moves `IMPLEMENTATION_PLAN.md` and `PROGRESS.md` to `.ralph/<timestamp>/`. Then run `ralph plan` again to generate a fresh plan for the next feature's specs.

## Outcome

A working, tested implementation of the feature, committed to version control and reviewed by the team. Repeat Phases 7 and 8 for each feature until the rebuilt application is complete.
