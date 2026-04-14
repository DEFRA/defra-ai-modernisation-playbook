---
title: HTML Mockups
permalink: /pages/reverse-engineering/output-reference/html-mockups/
---

## What this artefact is

Semantic, unstyled HTML files that represent the user interface of the legacy application. Each screenshot of the legacy system produces one HTML file. These mockups serve as a structured, machine-readable representation of the UI that downstream analysis agents can reference directly.

## How it's produced

HTML mockups are produced by the `image-to-html` skill, invoked either via the `digital-content-curator` agent or directly. The skill takes a screenshot image as input and outputs a single HTML5 document.

## What it contains

Each HTML mockup is a standalone HTML5 document containing:

- **Semantic elements** — `header`, `nav`, `main`, `section`, `form`, `table`, and other appropriate HTML5 elements
- **All visible text** — every piece of text visible in the original screenshot is preserved
- **PII replacements** — any personally identifiable information is replaced with realistic fake equivalents
- **No styling** — no CSS, inline styles, or presentational markup; the document is purely structural
- **Correct input types** — form inputs use appropriate types (`text`, `date`, `select`, `checkbox`, etc.)
- **Proper table structure** — tables use `thead` and `tbody` with appropriate header cells

## Quality criteria

- Faithfully represents the original screenshot layout
- All visible text captured accurately
- PII replaced with realistic fake data
- Semantic HTML elements used appropriately
- Tables use proper `thead`/`tbody` structure
- Form inputs use correct types (`text`, `date`, `select`, etc.)

## Example

The following snippet shows a mockup for a search screen in a fictional sample tracking system.

```html
<!DOCTYPE html>
<html lang="en">
<head><title>Field Sample Tracker — Search</title></head>
<body>
  <header>
    <h1>Field Sample Tracker</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">Search Repository</a>
      <a href="#">Reports</a>
    </nav>
  </header>
  <main>
    <h2>Search Repository</h2>
    <form>
      <label for="ref-number">Reference Number</label>
      <input type="text" id="ref-number" name="ref-number">
      <label for="sample-type">Sample Type</label>
      <select id="sample-type" name="sample-type">
        <option value="">-- Select --</option>
        <option>Tissue</option>
        <option>Fluid</option>
      </select>
      <button type="submit">Search</button>
      <button type="reset">Clear</button>
    </form>
  </main>
</body>
</html>
```
