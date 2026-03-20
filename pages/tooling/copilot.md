---
title: GitHub Copilot
permalink: /pages/tooling/copilot/
---

# GitHub Copilot

This page covers the GitHub Copilot plugin that powers the reverse engineering process. The plugin provides a set of skills (slash commands) and agents (autonomous subagents) that together analyse legacy applications and produce structured deliverables.

## Prerequisites

You must have GitHub Copilot installed and authenticated before using the plugin.
Instructions on how to set this up within VSCode can be found in their official documentation: [https://code.visualstudio.com/docs/copilot/setup](https://code.visualstudio.com/docs/copilot/setup)

We have assumed users will be using GitHub Copilot within VSCode.
Once setup, you will need to enable the following settings:

chat.customAgentInSubagent.enabled
chat.useAgentSkills

Navigate to Settings, search for the above one by one and tick the box to enable to enable each setting.

## Running with the plugin

We've setup a bash script to make life as easy as possible.
Copy the script found in the repository at `scripts/install-as-copilot-plugin.sh` into the root of your legacy application.
Execute the script from within your legacy application. E.g. `./install-as-copilot-plugin.sh`

This will pull down and setup the necessary config to enable this plugin to work with GitHub Copilot.
You can now remove the `install-as-copilot-plugin.sh` from your legacy app folder if you wish.

Open up a new GitHub Copilot chat window within VSCode and:

1. Select digital-content-curator as the agent
2. Select Claude Sonnet 4 as the agent model

This is done via the dropdowns just underneath your prompt area in the chat window.

Proceed with the playbook instructions on curating the data.

When moving onto the PRD generation, ensure to select the product-manager agent before running the prompt from the playbook.
