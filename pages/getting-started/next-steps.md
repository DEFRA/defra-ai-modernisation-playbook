---
title: Next Steps
permalink: /pages/getting-started/next-steps/
---

# Next Steps

Once you are comfortable creating individual pages, you can organise them into sections and configure the sidebar navigation.

## Adding a section

Create a subdirectory under `pages/` with a `README.md` file as the section overview:

```
pages/
  your-section/
    README.md              — section overview
    page-one.md            — child page
    page-two.md            — child page
```

## Configuring navigation

Edit `_data/navigation.yml` to add your section and its children:

```yaml
- title: "5. Your Section"
  url: /pages/your-section/
  children:
    - title: "5.1. Page One"
      url: /pages/your-section/page-one/
    - title: "5.2. Page Two"
      url: /pages/your-section/page-two/
```

## Deploying

This playbook is a standard Jekyll site. Deploy it to GitHub Pages, or any static hosting platform, by pushing to your repository's configured branch.

## Customising the site

Update `_config.yml` to change the title, description, and other site-wide settings. Branding assets live in `assets/` and styles in `_sass/`.

See the [Contributing]({{ "/pages/contributing/" | relative_url }}) guide for details on how to maintain and extend the playbook.
