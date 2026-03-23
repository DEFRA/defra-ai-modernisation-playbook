---
title: GitHub Copilot
permalink: /pages/tooling/copilot/
---

# GitHub Copilot

This page covers the GitHub Copilot plugin that powers the reverse engineering process. The plugin provides a set of skills (slash commands) and agents (autonomous subagents) that together analyse legacy applications and produce structured deliverables.

The plugin source is available at: [https://github.com/DEFRA/claude-legacy-reveng-plugin](https://github.com/DEFRA/claude-legacy-reveng-plugin)

## Prerequisites

You must have GitHub Copilot installed and authenticated in VSCode before using the plugin.

See the official setup guide: [https://code.visualstudio.com/docs/copilot/setup](https://code.visualstudio.com/docs/copilot/setup)

Once installed, enable the following VSCode settings (search for each in **Settings** and tick the checkbox):

- `chat.customAgentInSubagent.enabled`
- `chat.useAgentSkills`

## Installing the plugin

The plugin repository includes an installer script that configures everything for you. From the root of your legacy application:

```bash
# Download the installer script
curl -O https://raw.githubusercontent.com/DEFRA/claude-legacy-reveng-plugin/main/scripts/install-as-copilot-plugin.sh

# Run it
chmod +x install-as-copilot-plugin.sh
./install-as-copilot-plugin.sh
```

This pulls down the plugin configuration into your project. You can remove the installer script afterwards:

```bash
rm install-as-copilot-plugin.sh
```

## Running with the plugin

Open a new GitHub Copilot chat window in VSCode. Using the dropdowns beneath the prompt area:

1. Select **digital-content-curator** as the agent
2. Select **Claude Sonnet 4** as the agent model

Proceed with the playbook instructions on curating the data.

When moving onto PRD generation, select the **product-manager** agent before running the prompt from the playbook.

## Further information

Refer to the [plugin repository](https://github.com/DEFRA/claude-legacy-reveng-plugin) for full documentation, including detailed agent and skill definitions.
