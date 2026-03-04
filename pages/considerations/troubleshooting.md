---
title: Troubleshooting
permalink: /pages/considerations/troubleshooting/
---

### Content curation stalls on large file sets

The `digital-content-curator` agent processes files within a single AI session. When there are many screenshots or transcripts (50+), the session may exhaust its turn budget before finishing.

**Solution**: bypass the agent and invoke skills directly from a bash loop. See [Content Curation]({{ "/pages/process/content-curation/" | relative_url }}) for the script.

### Mermaid diagram validation failures

The analysis agents produce Mermaid diagrams that may occasionally have syntax errors. The `validate-mermaid` skill is invoked automatically by the agents to catch and fix these, but some may slip through.

**Solution**: run the validate-mermaid skill manually on the affected output file:
```
/validate-mermaid output/interaction-analysis.md
```

### Agent stops before completing analysis

If an agent runs out of turns before finishing, the output file may be incomplete.

**Solution**: re-run the agent. All agents regenerate their output from scratch on each run — there is no risk of corrupted partial output.

### Plugin or extension not loading

If skills or agents are not available in your AI coding assistant session:
- Verify the plugin or extension is correctly installed and configured. See the [Tooling]({{ '/pages/tooling/' | relative_url }}) section for tool-specific setup instructions.
- Start a new session — configuration changes are typically picked up on session start, not mid-session.
