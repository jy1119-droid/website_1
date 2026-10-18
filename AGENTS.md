<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## WowMade.AI — project notes

A single-page, scroll-driven marketing/showcase landing page recreating the wowmade.ai
experience. No routing — one route (`app/page.tsx`) composed of anchored sections.

### Commands
- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build (also runs the Next.js TypeScript check)
- `npx tsc --noEmit` — typecheck only
- `npx eslint .` — lint

### Stack
Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 ·
Framer Motion · Lucide React · HTML5 Canvas.

### Architecture
- `app/page.tsx` — assembles all sections; the only route.
- `components/AmbientBackground.tsx` — fixed canvas of drifting radial gradients
  (decorative, `pointer-events-none`).
- `components/Navbar.tsx` — sticky header with hover dropdowns + mobile accordion.
- `components/sections/*` — one file per page section. `sections/showcase/` holds
  the tab panels and the draggable `CompareSlider`.
- `lib/data.ts` — all section content (nav, plans, tools, gallery, etc.). Prefer
  editing data here over hard-coding strings in components.
- `lib/site.ts` — company/legal constants.
- `lib/cn.ts` — className joiner.

### Conventions & gotchas
- Design tokens live in `app/globals.css`: `.text-gradient`, `.glass`,
  `.animate-gradient-pan`, `.mask-fade-x`, and keyframes. Tailwind v4 uses
  `@theme` / `@layer utilities`, not a `tailwind.config.js`.
- Dark theme only (`#09090b` / `bg-zinc-950`); no light mode.
- Cache Components is enabled (`next.config.ts`). Reading `new Date()` (or other
  current-time / random values) during render of a client component fails the
  build. Compute such values at module scope (see `lib/site.ts`) or inside
  `useEffect`/event handlers.
- Framer Motion components require `"use client"`. Server components (`Footer`)
  can compose client children (`CookieToggle`).
- Decorative gradient art stands in for real media; there are no image assets.

