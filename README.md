# Defra AI SDLC Playbook

A Jekyll site providing guidance on best practices for using AI in the Software Development Lifecycle (SDLC), tailored to Defra's needs and challenges.

**Live site:** [defra.github.io/defra-ai-sdlc](https://defra.github.io/defra-ai-sdlc)

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

The site will be available at `http://localhost:4000/defra-ai-sdlc/`.

## Contributing

We welcome contributions from the Defra community. See the [Contributing](pages/appendix/CONTRIBUTING.md) page for guidance.

## Licence

All content is available under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/), except where otherwise stated.
