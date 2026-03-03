---
title: Home
---

# Playbook Template

Version {{ site.version }}

This is a reusable playbook template for building team guidance, standards, and documentation sites. It comes with Defra branding, a responsive sidebar navigation, dark mode support, and a GovUK-style footer out of the box.

## How to use this template

1. Fork this repository
2. Update `_config.yml` with your playbook's title, description, and author
3. Replace the placeholder pages under `pages/` with your own content
4. Update `_data/navigation.yml` to reflect your page structure

Each page uses simple Markdown with a `title` in the front matter. The layout and navigation are handled automatically.

## Sections

- [Getting Started]({{ "/pages/getting-started/" | relative_url }}) — start here to understand the playbook structure
- [Guides]({{ "/pages/guides/" | relative_url }}) — example guide pages to use as templates
- [Contributing]({{ "/pages/contributing/" | relative_url }}) — how to add and maintain content

See the [Contributing]({{ "/pages/contributing/" | relative_url }}) guide for details on adding new pages and sections.
