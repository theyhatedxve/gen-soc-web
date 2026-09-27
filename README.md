# Gender Roles: Tradition to Contemporary Philippines

Vite + React scaffold for the interactive site. Current drop covers **Phase 1 — Foundation** and **Phase 2 — Hero & Navigation**, per the development plan.

## Phase 2 — Hero & Navigation

- **Hero**: full split composition — intro copy + CTA on one side, a drawn SVG timeline running
  Pre-colonial → Spanish Colonial → American Period → Post-war → **Contemporary Philippines** on the
  other. No historical photography is used yet (none has been supplied); the drawn line stands in for
  it until real imagery lands in a later phase.
- **Entrance animation**: title/subtitle/CTA rise in on load, the timeline line draws itself via
  `stroke-dashoffset`, and each period staggers in — all skipped in favor of the final state under
  `prefers-reduced-motion`.
- **Interactive section navigator** (`SectionNavigator.jsx`): replaces static nav links. Hovering or
  focusing an item enlarges its number, tints the title and the navbar toward that section's accent
  color, and reveals a one-line description. Used inline in the desktop navbar and as a full-screen
  list on mobile (tap/focus takes the place of hover).
- **Scroll navigation**: `useActiveSection` tracks which section is on screen via
  `IntersectionObserver` and highlights the matching navigator item as the visitor scrolls.
- **Page transitions**: `SectionShell` now rises and fades in the first time each section enters the
  viewport (`useInView`), a single consistent transition rather than per-element scatter, again
  skipped under reduced motion.

New files: `src/hooks/useInView.js`, `src/hooks/useActiveSection.js`,
`src/components/SectionNavigator.jsx` (+ `.css`). `Hero.jsx`, `Navbar.jsx`, `Navbar.css`, and
`SectionShell.jsx/.css` were rebuilt; `data/sections.js` gained `description` and `accent` per section.

## What's in Phase 1

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
├── components/   # Navbar, SectionNavigator, Hero, SectionShell, Footer (shared UI)
├── hooks/        # useInView (reveal/entrance), useActiveSection (scroll spy)
├── sections/     # One file per top-level section (still content stubs — Phase 3+)
├── data/         # sections.js — shared nav/section metadata, descriptions, accents
├── assets/       # historical/, contemporary/, icons/, images/ (empty, ready for Phase 4+)
├── App.jsx       # Assembles the full page skeleton
├── main.jsx      # React entry point
└── index.css     # Tokens, typography system, reset, layout primitives
```

## Next phase

**Phase 3 — Understanding:** the gender-roles explanation, the Sex vs. Gender comparison, and the
"Why study gender roles?" interactive cards.
