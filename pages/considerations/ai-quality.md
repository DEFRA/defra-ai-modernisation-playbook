---
title: AI Output Quality & Hallucination Risks
permalink: /pages/considerations/ai-quality/
---

- LLM outputs may contain hallucinations — statements that sound plausible but are not supported by the source material. **Human review is essential at every stage.**
- The agents are explicitly instructed never to fabricate domain knowledge, business rules, or technical details. They document only what is evidenced in the inputs. However, verification remains the team's responsibility.
- The PRD includes an "Open Questions" section where the AI flags ambiguities, contradictions, or gaps. Treat these as genuine signals — they often highlight areas where additional stakeholder input is needed.
- **Quality depends on input quality** — invest time in gathering comprehensive source material:
  - More screenshots = better screen inventory and workflow coverage
  - Longer, more detailed interviews = richer domain analysis
  - Complete source code = more accurate technical analysis
- Common quality issues:
  - Missing screens or workflows (incomplete screenshots)
  - Thin domain analysis (too few or too short interviews)
  - Incorrect technical details (partial source code provided)
