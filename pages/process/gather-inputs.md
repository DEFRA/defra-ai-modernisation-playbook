---
title: "Phase 1: Gather Inputs"
permalink: /pages/process/gather-inputs/
---

# Phase 1: Gather Inputs

The first step is to collect the three mandatory input types that feed every subsequent phase. All three are required — omitting any one will result in an incomplete analysis.

## Input Types

### 1. Screenshots

Stakeholders provide UI screenshots of the legacy application. These should cover all screens and key states, including error screens, confirmation dialogs, and admin views. Place all screenshots in the `screenshots/` directory.

Supported formats: PNG, JPG, JPEG, GIF, BMP, or WebP.

### 2. Source Code

Stakeholders provide access to the codebase. The plugin currently supports .NET applications (`.sln`, `.vbproj`, `.csproj`, `.vb`, `.cs`, `.aspx`, `.ascx`, `.config`, `.sql`, `.sqlproj`, etc.) but the overall process applies to any technology stack — plugin extension is needed for other languages. Place all source code in the `src/` directory.

### 3. Transcripts

Recorded stakeholder interviews are auto-transcribed to plain text (`.txt`). Transcripts must be purged of all personally identifiable information (PII) before processing. Place all transcript files in the `transcripts/` directory.

## Format Requirements

| Input | Formats | Directory | Provider |
|-------|---------|-----------|----------|
| Screenshots | .png, .jpg, .jpeg, .gif, .bmp, .webp | `screenshots/` | Application stakeholders |
| Source code | .sln, .vbproj, .csproj, .vb, .cs, .aspx, .sql, etc. | `src/` | Application stakeholders |
| Transcripts | .txt (PII-free) | `transcripts/` | Delivery team (from recorded interviews) |

## Tips for Gathering Good Inputs

### Screenshots

- Capture every screen, including error states and admin views.
- Walk through the application systematically — do not rely on memory to identify screens.
- Include different user roles if the application has role-based views.
- Capture both populated and empty states where relevant.

### Source Code

- Include the complete solution — partial code leads to incomplete analysis.
- Ensure database projects, SQL scripts, and configuration files are included alongside application code.
- If the codebase spans multiple repositories, consolidate them under `src/`.

### Transcripts

- Record walkthroughs where users demonstrate the application, not just abstract discussions.
- Ask stakeholders to narrate what they are doing and why as they step through workflows.
- Ensure all PII is removed from transcripts before placing them in the `transcripts/` directory.
- Separate recordings by topic or user role for clearer curation downstream.
