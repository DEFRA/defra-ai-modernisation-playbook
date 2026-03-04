# Copilot Instructions for AI-Enabled Legacy Modernisation Playbook

## Project Overview

This is a **Jekyll-based documentation site** (GitHub Pages) for Defra's AI-enabled legacy application modernisation playbook. It provides step-by-step guidance on using AI-assisted reverse engineering to produce Product Requirements Documents from legacy application artefacts.

**Key facts:**
- Jekyll theme: `jekyll-theme-minimal`
- Base URL: `/defra-ai-modernisation-playbook`

## Architecture & Structure

```
pages/               # Main content organized by topic
  overview/          # About the playbook, the team, stakeholders
  process/           # Step-by-step reverse engineering process
  tooling/           # AI tooling guidance (Claude Code, Copilot, Cursor)
  output-reference/  # Reference for each output artefact
  considerations/    # Governance, PII, quality, cost caveats
  glossary/          # Terminology
  contributing/      # How to add and maintain content
_layouts/            # Jekyll layouts (default.html is main layout)
_sass/               # SCSS styles (defra-styles.scss has GOV.UK colours)
assets/css/          # Main stylesheet importing theme + defra-styles
```

## Writing Style & Voice

- **Plain English**: Common words, sentences under 25 words, British English
- **Active voice**: "Configure the API" not "The API should be configured"
- **Address readers as "you"**, avoid "please", "simply", "just"

## Local Development

```bash
# First time setup (from repo root)
./scripts/local-dev/setup.sh

# Start dev server with live reload
./scripts/local-dev/serve.sh

# Build for production
./scripts/local-dev/build.sh
```

Server runs at `http://localhost:4000/defra-ai-modernisation-playbook/`

## Content Conventions

### Markdown files
- Use Jekyll front matter with at least a `title`
- Add a `permalink` to control the page URL
- Internal links: use `{{ "/pages/section/page/" | relative_url }}` syntax

### Adding new pages
1. Create `.md` file in appropriate `pages/` subdirectory
2. Add navigation entry in `_data/navigation.yml`
3. Add `permalink` front matter matching the navigation URL

## Styling

- GOV.UK colour palette defined in `_sass/defra-styles.scss`
- Key colours: `--defra-green: #00a33b`, `--govuk-blue: #1d70b8`
- Supports light/dark theme via `data-theme` attribute
- Max content width: 1400px with responsive breakpoints

## Key Files to Reference

- `_config.yml` - Site config, version, plugins, excluded directories
- `_data/navigation.yml` - Sidebar navigation structure
- `pages/contributing/README.md` - How to contribute
