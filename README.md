# Analytic Genie

Premium marketing site for Analytic Genie built with Next.js 14, TypeScript, Tailwind, and Framer Motion.

## Getting started

1) Install deps  
```bash
npm install
```

2) Run dev server  
```bash
npm run dev
```

3) Lint  
```bash
npm run lint
```

## Structure
- `app/` — App Router pages & layout
- `components/` — Reusable UI blocks
- `lib/` — SEO + shared constants
- `styles/` — Global styles (Tailwind)
- `public/` — Static assets

## Brand
- Tagline: “Turn data into decisions — instantly.”
- Personality: intelligent, magical, precise, confident, clean.

## GitHub Pages
- Static export via `output: "export"` (see `next.config.mjs`).
- For a project page (e.g. `username.github.io/analytic_genie`), set `NEXT_PUBLIC_BASE_PATH=analytic_genie` during build (already configured in the workflow).
- Build locally: `NEXT_PUBLIC_BASE_PATH=analytic_genie npm run build` → deploy `out/`.
- GitHub Action: `.github/workflows/deploy.yml` builds and pushes `out/` to Pages.