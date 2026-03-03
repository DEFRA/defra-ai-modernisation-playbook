---
title: First Steps
permalink: /pages/getting-started/first-steps/
---

# First Steps

Every page in this playbook is a Markdown file with a short front matter block at the top. Here is the minimum you need:

```yaml
---
title: Your Page Title
---
```

The layout is applied automatically — you just write content in Markdown below the front matter.

## Creating a page

1. Add a new `.md` file under the `pages/` directory (or a subdirectory)
2. Include the `title` front matter shown above
3. Add an entry in `_data/navigation.yml` so it appears in the sidebar

## Linking between pages

Use standard Markdown links with relative paths:

```markdown
See the [Example Guide](../guides/example-guide.md) for a worked example.
```

Continue to [Next Steps]({{ "/pages/getting-started/next-steps/" | relative_url }}) to learn about adding sections and configuring navigation.
