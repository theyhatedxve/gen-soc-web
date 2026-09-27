# Gender Roles: Tradition to Contemporary Philippines

Vite + React scaffold for the interactive site. This drop is **Phase 1 — Foundation** only, per the development plan.

## What's in this phase

- Vite + React project structure (no CSS framework — plain CSS with custom properties)
- Global styles: reset, base typography, focus states, reduced-motion handling
- Design tokens: color palette, type scale, spacing/gutter, breakpoints (`src/index.css :root`)
- Typography system: **Fraunces** (display/headings) + **IBM Plex Sans** (body/UI), loaded via Google Fonts
- Navbar: fixed header, wordmark, links to all 8 sections, mobile toggle, scroll-aware background
- Full page skeleton: Hero + all 8 sections mounted in scroll order, each as a structural stub
- Responsive breakpoints: mobile (≤640px) / tablet (641–1024px) / desktop (1025px+)

Section stubs (`src/sections/*.jsx`) intentionally hold no real content yet — each renders a placeholder
line naming the phase that fills it in (Phases 3–8), so the scroll order and spacing can be reviewed now.

## Design tokens

| Role | Value |
| --- | --- |
| Primary — Burgundy | `#641E2A` |
| Secondary — Cream | `#F5EFE6` |
| Dark — Charcoal | `#1B1B1B` |
| Accent — Gold | `#C6A15B` |
| Supporting — Dusty Rose | `#C98F91` |
| Display type | Fraunces |
| Body / UI type | IBM Plex Sans |

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (typically `http://localhost:5173`).

## Project structure

```text
src/
├── components/   # Navbar, Hero, SectionShell, Footer (shared UI)
├── sections/     # One file per top-level section (currently stubs)
├── data/         # sections.js — shared nav/section metadata
├── assets/       # historical/, contemporary/, icons/, images/ (empty, ready for Phase 4+)
├── App.jsx       # Assembles the full page skeleton
├── main.jsx      # React entry point
└── index.css     # Tokens, typography system, reset, layout primitives
```

## Next phase

**Phase 2 — Hero & Navigation:** build the real hero composition (split historical/contemporary
imagery, entrance animation), the numbered section-navigator interaction described in the plan, and
scroll-based page transitions.
