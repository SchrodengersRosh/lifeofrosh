# CLAUDE.md

## Project

Roshan's personal portfolio. Built with Next.js 16, App Router, TypeScript, Tailwind CSS v4, React.

## Design Language: Run of Show

The homepage is a cue sheet for a live show. Roshan is the host. The visitor is the audience.

### Colors
- `--color-stage`: #0A0A0A (background)
- `--color-stage-2`: #141414 (elevated surface)
- `--color-light`: #F5EFE0 (primary text)
- `--color-dim`: rgba(245,239,224,0.48) (secondary text)
- `--color-faint`: rgba(245,239,224,0.22) (borders, tertiary)
- `--color-amber`: #E9A23B (accent, active cue, links)

No gradients, blur, glow, shadows, glassmorphism, noise textures.

### Fonts
- **Big Shoulders Display** (700, 900): display titles, uppercase
- **Courier Prime** (regular, italic): cue numbers, timecodes, stage directions, credits
- **Geist Sans**: body, spoken voice, supporting copy

### Architecture
- `/` homepage with segments: OPEN, BUSINESS, SYSTEM, STAGE, BENCH, HOUSE LIGHTS
- `/work/[slug]` case studies
- `/life` personal page

### Content source of truth
- `content/show.ts` for homepage segments
- `content/work.ts` for case studies
- `content/site.ts` for site config
- `content/life.ts` for life page
- `content/campus.ts` for campus data
- `content/building.ts` for current projects

## Engineering Rules

- TypeScript strict mode
- No `any` types
- All images must have alt text
- No broken image URLs, use temporary image slots instead
- Semantic HTML with proper aria attributes
- Keep skip link, keyboard navigation, visible focus rings
- Respect prefers-reduced-motion

## Content Rules

- Never invent content, metrics, clients, testimonials, outcomes, credentials
- Never invent event dates, audience sizes, titles, responsibilities
- Never expose client names when siteConfig.flags.showClientNames is false
- Mark draft content with `// DRAFT:` comments
- Mark unverified facts with `// VERIFY:` comments
- No em dash character anywhere, use commas, colons or periods

## Banned Phrases

"passionate", "real-world problems", "things people actually use", "leveraging",
"results-driven", "Build / Grow / Speak", "Builder · Digital strategist",
"cutting-edge", "innovative solutions", "digital transformation",
"end-to-end solutions", "passion for technology", "turning ideas into reality",
"crafting digital experiences", "bringing ideas to life", "where technology meets..."

## Workflow

- Run `npm run lint` and `npm run build` before considering work complete
- Zero errors, zero warnings required
- Never commit or push unless explicitly instructed
