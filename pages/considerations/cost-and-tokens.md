---
title: Cost & Token Usage
permalink: /pages/considerations/cost-and-tokens/
---

- The AI processing consumes tokens (the unit of measurement for LLM usage), and costs vary with the volume of input material.
- **Factors affecting cost**:
  - Number and size of screenshots (each image-to-html conversion is a separate LLM call)
  - Length of interview transcripts
  - Size of the source codebase (larger codebases require more tokens for the application and database analysis)
  - Model selection (more capable models cost more per token)
- **General guidance**: a typical project with 20–40 screenshots, 2–3 interview transcripts, and a medium-sized codebase will cost in the range of tens of dollars for the full pipeline.
- **Tips for managing costs**:
  - Use the default model (claude-sonnet-4) for routine processing — it balances quality and cost well
  - Process content incrementally during development and testing rather than running the full pipeline repeatedly
  - Use the bash loop workaround for large file sets to maintain control over processing
  - Review intermediate outputs before running the full analysis pipeline to avoid wasting tokens on poor inputs
