---
title: Contributing
permalink: /pages/contributing/
---

# Contributing

This page explains how to add content to the playbook and keep it well maintained.

## Adding a new page

1. Create a Markdown file in the appropriate `pages/` subdirectory
2. Add front matter with at least a `title`
3. Write your content using standard Markdown
4. Add a navigation entry in `_data/navigation.yml`

## Adding a new section

1. Create a new subdirectory under `pages/`
2. Add a `README.md` as the section overview
3. Add child pages as separate `.md` files
4. Update `_data/navigation.yml` with the section and its children

## Style guidelines

- Use clear, concise language
- Structure pages with headings (`##`, `###`) for scannability
- Link to related pages using relative Markdown links
- Keep front matter minimal — `title` is usually sufficient

## Running locally

Preview the site on your machine:

```bash
bundle install
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000/playbook/`.

## Questions

If you have questions about contributing, open an issue on the repository or contact the playbook maintainers.
