# Playbook Template

A reusable Jekyll playbook template for building team guidance, standards, and documentation sites. Fork this repository and customise it to create your own playbook.

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

The site will be available at `http://localhost:4000/playbook/`.

## Contributing

See the [Contributing](pages/contributing/) section for guidance on adding and maintaining content.

## Licence

All content is available under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/), except where otherwise stated.
