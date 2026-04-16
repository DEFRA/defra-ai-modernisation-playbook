---
title: Troubleshooting
permalink: /pages/considerations/troubleshooting/
---

### Content curation stalls on large file sets

The `digital-content-curator` agent processes files within a single AI session. When there are many screenshots or transcripts (50+), the session may exhaust its turn budget before finishing.

**Solution**: bypass the agent and invoke each skill directly from a bash loop. Because each invocation processes a single file, this avoids the turn-budget limit entirely. The skip logic checks for existing output files, so you can safely re-run the script and it picks up where it left off.

```bash
#!/usr/bin/env bash
CLAUDE="claude --plugin-dir /path/to/plugin --model claude-sonnet-4-20250514 --dangerously-skip-permissions"

for img in screenshots/*.{png,jpg,jpeg,gif,bmp,webp}; do
  [ -f "$img" ] || continue
  name="${img##*/}"; name="${name%.*}"
  [ -f "output/html/${name}.html" ] && echo "Skipping $img (already done)" && continue
  echo "Processing $img..."
  $CLAUDE -p "/image-to-html $img" --allowedTools "Read,Write,Bash(mkdir*)"
done

for txt in transcripts/*.txt; do
  [ -f "$txt" ] || continue
  [[ "$txt" == *_curated.txt ]] && continue
  name="${txt##*/}"; name="${name%.txt}"
  [ -f "output/transcripts/${name}_curated.txt" ] && echo "Skipping $txt (already done)" && continue
  echo "Processing $txt..."
  $CLAUDE -p "/curate-transcript $txt" --allowedTools "Read,Edit,Bash(mkdir*;cp*)"
done
```

### Mermaid diagram validation failures

The analysis agents produce Mermaid diagrams that may occasionally have syntax errors. The `validate-mermaid` skill is invoked automatically by the agents to catch and fix these, but some may slip through.

**Solution**: run the validate-mermaid skill manually on the affected output file:
```
/validate-mermaid output/interaction-analysis.md
```

### Agent stops before completing analysis

If an agent runs out of turns before finishing, the output file may be incomplete.

**Solution**: re-run the agent. Analysis agents regenerate their output from scratch on each run — there is no risk of corrupted partial output. For the content curation agent, which processes many files individually, use the resumable bash script described [above](#content-curation-stalls-on-large-file-sets) instead.

### Plugin or extension not loading

If skills or agents are not available in your AI coding assistant session:
- Verify the plugin or extension is correctly installed and configured. See the [Tooling]({{ '/pages/reverse-engineering/tooling/' | relative_url }}) section for tool-specific setup instructions.
- Start a new session — configuration changes are typically picked up on session start, not mid-session.
