---
name: run-of-show
description: Design system and information architecture for Roshan's Run of Show portfolio.
---

# Run of Show

## Concept

The homepage is a cue sheet. Roshan is the host. The visitor is the audience. Each segment covers a major area: Business, System, Stage, Bench, House Lights. The metaphor is structural, not decorative. No theatre gimmicks.

## Information Architecture

- `/` : Run of Show homepage (6 segments)
- `/work/[slug]` : Case study pages
- `/life` : Personal page (guitar, reading, interests, outdoors)

## Design Tokens

Colors: stage (#0A0A0A), stage-2 (#141414), light (#F5EFE0), dim (light at 48%), faint (light at 22%), amber (#E9A23B). No other colors. No gradients, blur, glow, shadows.

Fonts: Big Shoulders Display (titles), Courier Prime (cues/timecodes), Geist Sans (body). No serif. No Geist Mono.

Radii: 0 everywhere. Borders: 1px faint. Selection: amber bg + stage text. Focus: 2px amber ring offset 2px.

## Content Preservation

Never delete useful content without migrating it first. The redesign changes presentation, not information. Inspect before demolishing.

## Image Slots

Never use broken URLs or fake images. For missing assets, use CSS-only temporary frames that preserve dimensions, aspect ratio, and caption placement. The frame should contain: TEMP IMAGE, subject description, REPLACE WITH REAL ASSET.

## Accessibility

Skip link, keyboard nav, visible focus, semantic sections, aria-labelledby, alt text on images, focus trap on mobile overlay, Escape closes, body scroll lock. Respect prefers-reduced-motion.

## What Not To Do

No serif, paper, terracotta, editorial identity, theatre decorations, microphones, curtains, spotlights, gradients, blur, glow, shadows, noise, status dots, pills, tags, badges, magnetic buttons, cursor effects, parallax, scroll reveals, fake metrics, fake clients, fake images, em dashes.

## Visual QA

After implementation: run dev server, inspect every section at 375px/768px/1024px/1440px. Check: no horizontal overflow, readable body, working image slots, cue highlighting, contrast, no old visual residue.
