---
title: Model Selection
permalink: /pages/considerations/model-selection/
---

- The choice of model affects both quality and cost. Select a model that balances these for the task at hand.
- **General guidance**:
  - For most tasks (content curation, standard analysis), a mid-tier model provides a good balance of quality, speed, and cost
  - For complex analysis or when quality is paramount, consider a higher-capability model (higher cost, best quality)
  - For simple or high-volume tasks like image-to-html conversion, a mid-tier model is typically sufficient
- **How to override the model** depends on your AI coding assistant. For example, in Claude Code, pass the `--model` flag at launch. Consult the [Tooling]({{ '/pages/tooling/' | relative_url }}) section for tool-specific instructions.
- Model availability and pricing vary by provider — consult your provider's documentation for current options.
