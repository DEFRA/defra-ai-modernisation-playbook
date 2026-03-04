# AI-Enabled Legacy Modernisation Playbook

**Live site:** [defra.github.io/defra-ai-modernisation-playbook](https://defra.github.io/defra-ai-modernisation-playbook/)

A step-by-step guide to using AI-assisted reverse engineering to produce Product Requirements Documents from legacy application artefacts, developed by Defra's Legacy Application Programme.

## Prerequisites

- Ruby 3.3+
- Bundler (`gem install bundler`)

## Local Development

Setup and serve scripts are provided in `scripts/local-dev/`:

```bash
# First-time setup
./scripts/local-dev/setup.sh

# Build the site
./scripts/local-dev/build.sh

# Serve locally with live reload
./scripts/local-dev/serve.sh
```

Or run manually:

```bash
bundle install
bundle exec jekyll serve --livereload
```

The site will be available at `http://localhost:4000/defra-ai-modernisation-playbook/`.

## Contributing

See the [Contributing](pages/contributing/) section for guidance on adding and maintaining content.

## Licence

All content is available under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/), except where otherwise stated.
