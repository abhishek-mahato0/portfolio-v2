# Portfolio v2 — Implementation Plan

Design source: Claude Design handoff bundle (amber-gold editorial-minimal, Framer-template DNA: Fade / Klear / Wynn / Kim).

## Design Summary

- **Dark bg**: `#08080a` | **Accent**: amber-gold `oklch(0.80 0.145 78)`
- **Fonts**: Space Grotesk (display) · Instrument Sans (body) · JetBrains Mono (mono)
- **Motion**: JS-tween reveals (Intersection Observer) + CSS keyframes for marquee/loader/pulse
- **Sections**: Loader → Nav → Hero → Skills Marquee → Work → Experience → Services → Packages → Writing → Contact

## File Structure

```
app/
  layout.tsx          — fonts (Space Grotesk, Instrument Sans, JetBrains Mono) + metadata
  globals.css         — full design system CSS ported from styles.css
  page.tsx            — root page, wires all sections

lib/
  data.ts             — all portfolio content (projects, experience, packages, blogs)
  hooks.ts            — useClock, useReveal (scroll-triggered fade-up), tweenIn

components/
  Icons.tsx           — all SVG icons (arrow, github, linkedin, etc.)
  Loader.tsx          — "A M" initials glow in → amber flash → fade out
  Nav.tsx             — fixed nav, blurs on scroll, hides on scroll-down / shows on scroll-up
  Hero.tsx            — "Hello world, I'm Abhishek Mahato." + grid bg + stats + CTAs
  Marquee.tsx         — dual-row opposing code-chip marquee (<TypeScript/> etc.)
  Work.tsx            — project list rows with floating cursor-follow preview card
  Experience.tsx      — timeline accordion (opens on hover)
  Services.tsx        — capabilities 3-col grid with tech tags
  Packages.tsx        — npm package cards with copy-install button
  Writing.tsx         — blog post list rows
  Contact.tsx         — big "Let's build something that thinks." CTA + contact form + footer
  CommandPalette.tsx  — ⌘K keyboard-navigable site nav overlay
```

## Tasks

- [x] Create PLAN.md
- [x] Update layout.tsx
- [x] Overwrite globals.css
- [x] Create lib/data.ts
- [x] Create lib/hooks.ts
- [x] Create components/Icons.tsx
- [x] Create components/Loader.tsx
- [x] Create components/Nav.tsx
- [x] Create components/Hero.tsx
- [x] Create components/Marquee.tsx
- [x] Create components/Work.tsx
- [x] Create components/Experience.tsx
- [x] Create components/Services.tsx
- [x] Create components/Packages.tsx
- [x] Create components/Writing.tsx
- [x] Create components/Contact.tsx
- [x] Create components/CommandPalette.tsx
- [x] Update app/page.tsx
- [x] Verify dev server renders correctly (build passes ✓)

## Key Design Decisions

1. **All interactive components** use `'use client'` — Next.js 16 server components by default
2. **Fonts via `next/font/google`** — self-hosted, exposed as CSS variables `--font-space-grotesk` etc.
3. **Reveal animations** driven by `useReveal` hook (JS tween, not CSS transitions) — avoids compositor freeze
4. **Contact form** uses `mailto:` draft (no backend required)
5. **Command palette** triggered by `⌘K` / `Ctrl+K`
6. **Grain + vignette** overlays added via layout body wrappers
