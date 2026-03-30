---
title: Tooling
permalink: /pages/tooling/
---

# Tooling

The modernisation process uses AI coding assistants with specialised plugins or extensions. The reverse engineering phases use the Claude Code plugin to analyse legacy applications. The rebuild phases use ralph to run autonomous build loops.

Currently supported:

- **Claude Code** with the legacy reverse engineering plugin
- **GitHub Copilot** with the legacy reverse engineering plugin
- **Ralph** — autonomous Claude Code loop runner for the rebuild phases

Future tooling (to be documented):

- Cursor equivalent

This section covers the plugin, the ralph CLI, how to run them, and the project directory structure.

## Pages in this section

- [Claude Code Plugin]({{ '/pages/tooling/claude-code/' | relative_url }}) — the plugin that powers the reverse engineering process, including skills, agents, and how to run it
- [GitHub Copilot]({{ '/pages/tooling/copilot/' | relative_url }}) — using the plugin with GitHub Copilot in VSCode
- [Cursor]({{ '/pages/tooling/cursor/' | relative_url }}) — planned support for Cursor (not yet available)
- [Ralph]({{ '/pages/tooling/ralph/' | relative_url }}) — autonomous build loop runner for the rebuild phases
- [Project Directory Structure]({{ '/pages/tooling/directory-structure/' | relative_url }}) — the expected directory layout for input and output files
