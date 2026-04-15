---
title: Ralph
permalink: /pages/re-engineering/tooling/ralph/
---

# Ralph

[Ralph](https://github.com/marc0der/ralph) is an autonomous AI coding agent loop runner that implements the [Ralph Wiggum pattern](https://github.com/ghuntley/how-to-ralph-wiggum). It runs iterative plan/build cycles in headless mode, with shared artifacts as handoffs between iterations.

## Installation

```bash
git clone git@github.com:marc0der/ralph.git
cd ralph
./install.sh
```

## Prerequisites

- **Docker** (rootful) — required for the sandbox
- **devcontainer CLI** — `npm install -g @devcontainers/cli`
- **AI backend** — Claude Code or OpenAI Codex CLI installed and authenticated

See the [ralph README](https://github.com/marc0der/ralph#install) for full details.

## Key commands

| Command | Purpose |
|---------|---------|
| `ralph sandbox` | Enter the devcontainer (required for safe execution) |
| `ralph init` | Initialise workspace artifacts |
| `ralph plan` | Run the planning loop — analyse specs vs codebase, produce implementation plan (default: 3 iterations) |
| `ralph build` | Run the build loop — implement, test, commit, push, one item per iteration (default: 50 iterations) |
| `ralph archive` | Archive loop artifacts before starting the next feature |

See the [ralph README](https://github.com/marc0der/ralph#commands) for the full command reference.

## Always run inside the sandbox

**Always start a session with `ralph sandbox`.** Ralph runs its AI backends in non-interactive mode with permission-bypass flags enabled, which means the agent can execute any tool without prompting for approval. The devcontainer's isolation is the safety boundary that makes this acceptable.

Running `ralph plan` or `ralph build` outside the sandbox gives an unrestricted agent direct access to your host machine. Ralph will print a prominent warning in this case, but it will not stop you — the discipline is yours to maintain.

## Options

The `plan` and `build` commands accept the following flags:

| Flag | Purpose |
|------|---------|
| `-n`, `--iterations` | Override the default iteration count |
| `-g`, `--goal` | Goal injected into the prompt template |
| `-m`, `--model` | Model override (default depends on backend) |
| `-b`, `--backend` | Backend to use: `claude` (default) or `codex` |
| `--skip-push` | Don't push after each iteration |
| `--dry-run` | Print what would be executed without running |

## Iteration behaviour

By default, `ralph build` suggests the number of iterations it estimates are required to complete the current plan and waits for the human to approve before kicking off the loop. This gives you a sanity check on scope before any code is written.

During the build loop, ralph watches for **two consecutive no-op iterations** — iterations where no additional changes are committed to git — and exits automatically. This prevents the loop from spinning when the agent has run out of useful work or is stuck.

Passing `-n` overrides both behaviours: ralph skips the approval step and runs the exact iteration count you specify, regardless of no-ops. Use `-n` when you want a fixed, unattended budget; omit it when you want ralph's own estimate and the built-in stall guard.

## Backends

Ralph supports two backends: **Claude Code** (the default, and the path this playbook assumes throughout) and **OpenAI Codex** as an alternative. Select a backend with `-b codex`. The default model differs per backend — `opus` for `claude`, `gpt-5.2-codex` for `codex` — and can be overridden with `-m`.

## Prompt customisation

Ralph resolves prompts in this order:

1. **Project-local** — `PROMPT_plan.md` / `PROMPT_build.md` in the working directory
2. **Installed defaults** — `~/.config/ralph/prompts/plan.md` / `build.md`

To customise a prompt, run `ralph init --prompts` to copy the defaults into your project, then edit the local copies. This is especially useful when running a non-Claude backend, as the default prompts reference Anthropic model names for subagent selection. See [Prompt resolution](https://github.com/marc0der/ralph#prompt-resolution) in the ralph README.
