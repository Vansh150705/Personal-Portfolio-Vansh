# Engineering Dossier — Portfolio Redesign

**Date:** 2026-06-25
**Owner:** Vansh Mahajan
**Status:** Approved — in build

## Goal

Transform the existing portfolio (a violet/magenta glassmorphism React site — the
quintessential "AI-generated" look) into a distinctive, premium, immersive
**technical/engineering blueprint** experience. The content stays; the entire
visual language, structure, motion, and 3D layer are rebuilt.

## Art Direction

The site reads like a **classified engineering schematic / system manifest** —
precise, instrument-like, expensive. Every element looks functional, not
decorative.

### Color (one signal, used sparingly — ~5% of pixels)

| Token | Value | Use |
|---|---|---|
| `void` | `#0A0B0D` | base canvas |
| `panel` / `panel-2` | `#111317` / `#15181D` | elevated surfaces |
| `hairline` | `rgba(255,255,255,.08)` | borders |
| `grid` | `rgba(120,140,160,.05)` | blueprint grid lines |
| `text` | `#E6E8EA` | primary text |
| `muted` | `#7E858E` | mono meta / labels |
| `signal` | `#FFB000` | amber — accents, cursor, status |

### Typography (deliberately not Inter/Outfit/Poppins)

- **Clash Display** (Fontshare) — architectural headlines
- **Satoshi** (Fontshare) — body copy
- **JetBrains Mono** — labels, coordinates, readouts (the "instrument" voice)

## Global Chrome ("the instrument frame")

- **Boot preloader** — terminal sequence (`initializing systems… 00→100`) wiping to reveal.
- **Custom crosshair cursor** — registration reticle that locks onto interactive elements.
- Fixed **blueprint grid** + **corner crop marks** framing the viewport.
- Fixed **HUD** corner readouts (clock, build/version) in mono.
- **Scroll progress** rail + live `%`.
- Subtle **film grain**; amber custom scrollbar.
- Section headers numbered `00`–`07` with mono kicker labels.
- **Lenis** smooth scroll. Full `prefers-reduced-motion` + mobile fallbacks (lighter/disabled 3D).

## Sections (reimagined, same content)

| # | Section | Treatment |
|---|---|---|
| `00` | INDEX / Hero | R3F mouse-reactive wireframe/particle centerpiece, typed role-cycler, CTAs, status readout. |
| `01` | PROFILE / About | Monospace spec sheet + manifesto + duotone blueprint photo plate. |
| `02` | CAPABILITIES / Skills | Interactive 3D node-constellation; mobile static matrix. |
| `03` | DEPLOYMENTS / Experience | Vertical engineering-log dossier timeline. |
| `04` | SYSTEMS / Projects | Large alternating system-module cards, blueprint thumbnails, mono stack readouts, depth-tilt. |
| `05` | FOUNDATION / Education | Compact dossier entries. |
| `06` | FIELD WORK / Volunteering + Extracurricular | Combined human-side grid. |
| `07` | TRANSMISSION / Contact | Terminal-style form (keeps EmailJS), socials as readouts. |
| — | Footer | Registration marks, mono colophon, build stamp, back-to-top. |

## Tech

- Add: `three`, `@react-three/fiber` (v8, React-18 compatible), `@react-three/drei`, `lenis`.
- Keep: React 18 / Vite / Tailwind / Framer Motion / EmailJS / react-icons.
- Single shared R3F canvas where practical; reduced particle counts on mobile.

## Delivery / Git

- Many small, meaningful conventional commits (tokens → fonts → chrome → hero → each section).
- Authored as Vansh (`Vansh150705`); **no AI co-author trailer**.
- Build + commit locally, confirm before pushing to `origin/main`.

## Non-Goals

- No backend/CMS changes. No new content. No routing changes beyond the single page.
