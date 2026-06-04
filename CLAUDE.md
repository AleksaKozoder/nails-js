# Project: Payload CMS Boilerplate

## Project Overview

This is a **reusable boilerplate** built on **Payload CMS 3.x** and **Next.js 16**, using **PostgreSQL** as the database. The goal is to have a well-structured starting point for future client web projects — pre-configured with collections, globals, a block-based page builder system, and a component architecture that maps directly to the CMS schema.

The project uses `pnpm` as the package manager and Docker for local database management.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **CMS**: Payload CMS 3.84.x
- **Database**: PostgreSQL (via `@payloadcms/db-postgres`)
- **Rich Text**: Lexical editor (`@payloadcms/richtext-lexical`)
- **Styling**: SCSS modules + global SCSS (`src/scss/`)
- **Icons**: FontAwesome, Lucide React, Simple Icons
- **Animations**: Framer Motion
- **Slider**: Swiper
- **Testing**: Vitest (integration), Playwright (e2e)
- **Package Manager**: pnpm

---

## Project Structure

```
src/
├── app/
│   ├── (frontend)/          # Public-facing Next.js pages
│   │   ├── layout.tsx
│   │   ├── page.tsx         # Homepage
│   │   └── [slug]/page.tsx  # Dynamic pages
│   └── (payload)/           # Payload admin panel routes
├── blocks/                  # Page builder blocks
│   ├── BlockHolder/         # Grid/layout wrapper block
│   ├── Tabs/
│   ├── Accordion/
│   ├── Section/
│   ├── Slider/
│   ├── BlockRenderer.tsx    # Renders correct block by type
│   └── block-registry.ts   # Maps block slugs to components
├── collections/
│   ├── Pages.ts
│   ├── Users.ts
│   ├── Media.ts
│   └── Menus.ts
├── globals/
│   ├── Colors.ts
│   ├── Header.ts
│   ├── SiteSettings.ts
│   └── index.ts
├── components/
│   └── atoms/               # Reusable UI components
│       ├── Button/
│       ├── Heading/
│       ├── Image/
│       ├── Menu/
│       └── RichText/
├── scss/
│   ├── main.scss
│   ├── _variables.scss
│   └── _mixins.scss
├── utils/
│   └── generateMeta.ts
├── migrations/              # PostgreSQL migrations
└── payload.config.ts        # Main Payload configuration
```

---

## Architecture Conventions

### Blocks

Each block lives in `src/blocks/[BlockName]/` and consists of:
- `config.ts` — Payload field config (used in CMS schema)
- `index.tsx` — React component (frontend render)
- `style.module.scss` — Scoped styles

Blocks are registered in `block-registry.ts` and rendered via `BlockRenderer.tsx`. When adding a new block, always create all three files and register it in both files.

### Components (Atoms)

Each atom in `src/components/atoms/[Name]/` follows the same pattern:
- `config.ts` — Reusable Payload field group config (imported into collections/blocks)
- `index.tsx` — React component
- `style.module.scss` — Scoped styles

### Collections & Globals

- Collections: `Pages`, `Users`, `Media`, `Menus`
- Globals: `Colors`, `Header`, `SiteSettings`
- All are registered in `src/payload.config.ts`

### SCSS

- Global variables go in `src/scss/_variables.scss`
- Global mixins go in `src/scss/_mixins.scss`
- Component styles use CSS Modules (`*.module.scss`)
- Import global variables/mixins at the top of each module with `@use`

---

## Development Commands

```bash
pnpm dev           # Start dev server
pnpm devsafe       # Clear .next cache and start dev server
pnpm build         # Production build
pnpm generate:types  # Regenerate payload-types.ts after schema changes
pnpm generate:importmap  # Regenerate import map
pnpm test          # Run all tests (vitest + playwright)
pnpm test:int      # Run integration tests only (vitest)
pnpm test:e2e      # Run e2e tests only (playwright)
```

### Docker (PostgreSQL)

```bash
docker-compose up -d   # Start PostgreSQL in background
docker-compose down    # Stop
```

### Database Migrations

After any schema change in collections or globals:
```bash
pnpm payload migrate:create  # Create new migration file
pnpm payload migrate         # Apply pending migrations
```

Migration files are in `src/migrations/` — never edit them manually after they've been applied.

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```
DATABASE_URL=postgresql://...  # PostgreSQL connection string
PAYLOAD_SECRET=...             # Secret key for Payload
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

---

## Key Rules & Guidelines

1. **Always regenerate types** (`pnpm generate:types`) after modifying any collection, global, or block config
2. **Always regenerate importmap** (`pnpm generate:importmap`) after adding new custom components to Payload admin
3. **Use `pnpm`** — do not use npm or yarn
4. **Block configs are shared** between frontend and CMS — changes to `config.ts` affect both
5. **SCSS modules** for component-level styles; global SCSS only for truly global styles
6. **TypeScript strict** — always use generated types from `payload-types.ts`, never write manual type duplicates
7. **Migrations are immutable** — never modify an already-applied migration file; create a new one instead
8. **Page builder pattern** — all page content is composed via blocks inside `BlockHolder`; avoid hardcoded page layouts

---

## Payload CMS Skill Reference

Detailed Payload CMS patterns and API reference are available in:
- `.claude/skills/payload/SKILL.md` — Quick reference
- `.claude/skills/payload/reference/` — Detailed documentation
