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
- **Forms**: `@payloadcms/plugin-form-builder` (adds `forms` / `form-submissions` collections; do not hand-roll a Form collection)
- **Styling**: SCSS modules + global SCSS (`src/scss/`), all `@use`-based (no `@import`)
- **Icons**: FontAwesome, Lucide React, Simple Icons
- **Animations**: Framer Motion
- **Slider**: Swiper
- **Testing**: Vitest (integration), Playwright (e2e)
- **Package Manager**: pnpm
- **Tooling**: Prettier + Husky/lint-staged pre-commit hook (run `pnpm format` to format manually)

---

## Project Structure

```
src/
├── app/
│   ├── (frontend)/          # Public-facing Next.js pages
│   │   ├── layout.tsx
│   │   ├── page.tsx         # Homepage
│   │   ├── [slug]/page.tsx  # Dynamic pages
│   │   └── blocks-preview/  # Internal tool: every Header/atom/block rendered with dummy data
│   └── (payload)/           # Payload admin panel routes
├── blocks/                  # Page builder blocks
│   ├── BlockHolder/         # Grid/layout wrapper block
│   ├── Tabs/
│   ├── Accordion/
│   ├── Section/
│   ├── Slider/
│   ├── PostsBlock/
│   ├── CTA/
│   ├── Testimonials/
│   ├── Stats/
│   ├── Team/
│   ├── FormBlock/           # Contact form (@payloadcms/plugin-form-builder)
│   ├── Divider/
│   ├── BlockRenderer.tsx    # Renders correct block by type
│   ├── block-manifest.ts   # Single source of truth: slug + config + lazy component per nestable block/atom
│   └── block-registry.ts   # Maps block slugs to components (derived from block-manifest.ts)
├── fields/                  # Shared, reusable Payload field-groups
│   ├── constants.ts         # SPACING_OPTIONS (none/xs/sm/md/lg/xl)
│   ├── spacing/config.ts    # paddingTop/Bottom + marginTop/Bottom
│   ├── background/config.ts # color/gradient/image + overlay
│   ├── advanced/config.ts   # htmlId + customClassName
│   └── layoutBlocks/config.ts # blocks field for Header/Footer (Section + BlockHolder)
├── collections/
│   ├── Pages.ts
│   ├── Users.ts
│   ├── Media.ts
│   ├── Posts.ts
│   ├── Categories.ts
│   └── Menus.ts
├── globals/
│   ├── Colors.ts
│   ├── Header.ts
│   ├── Footer.ts
│   ├── SiteSettings.ts
│   └── index.ts
├── components/
│   ├── layout/              # Header/Footer — render the `blocks` a global resolves to
│   │   ├── Header/
│   │   └── Footer/
│   └── atoms/               # Reusable UI components
│       ├── BackgroundLayer/ # Renders a background field group's color/gradient/image/video layer
│       ├── Button/
│       ├── Heading/
│       ├── Icon/
│       ├── Image/
│       ├── Menu/
│       ├── RichText/
│       └── Video/           # Upload or URL (YouTube/Vimeo/direct file) source
├── scss/
│   ├── main.scss
│   ├── _variables.scss
│   └── _mixins.scss
├── utils/
│   ├── generateMeta.ts
│   └── getSpacingClasses.ts # Builds padding/margin class names from a `spacing` field group
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

Blocks (and atoms usable as page-builder blocks) are registered in one place: `src/blocks/block-manifest.ts`. Each entry has a `slug`, a `config` (the `Block` field config), and a `component` — the component must be `React.lazy`-imported (never statically imported), since a static import would pull the block's `style.module.scss` into `BlockHolder/config.ts`'s import chain, which Payload's config loader can't resolve. `nestableBlocks` (derived from the manifest) is spread into `BlockHolder`'s `atoms`/`blocks` arrays automatically, and `blockComponents` in `block-registry.ts` is built from the manifest too — so adding a block/atom to the manifest is enough to make it available everywhere and rendered via `BlockRenderer.tsx`. The one exception is `blockHolder0/1/2` and `section`, which stay hand-wired in `block-registry.ts` and `BlockHolder/config.ts`/`Section/config.ts` — putting them in the manifest would create a circular import (`BlockHolder/config.ts` is recursive and `Section/config.ts` imports it, while the manifest is itself imported by `BlockHolder/config.ts`).

### Shared Field Groups (`src/fields/`)

Don't hand-roll padding, background, or HTML-ID/custom-class fields on a new block — spread the shared groups into its `fields` array instead:

```ts
import { advancedFields } from '@/fields/advanced/config'
import { spacingFields } from '@/fields/spacing/config'
import { backgroundFields } from '@/fields/background/config'

fields: [
  // ...block-specific content fields
  ...advancedFields, // htmlId + customClassName
  ...spacingFields, // spacing.paddingTop/paddingBottom/marginTop/marginBottom
  ...backgroundFields, // background.type/colorTheme/gradientTheme/image/video/overlay
]
```

On the frontend, apply `htmlId`/`customClassName` to the block's root element, and build spacing classes with `getSpacingClasses(spacing)` from `src/utils/getSpacingClasses.ts` (produces `padding-top-*`, `padding-bottom-*`, `margin-top-*`, `margin-bottom-*`, backed by utility classes in `src/scss/main.scss`). See `src/blocks/CTA/index.tsx` or `src/blocks/Testimonials/index.tsx` for the full pattern including background color/gradient/image + overlay rendering.

### Components (Atoms)

Each atom in `src/components/atoms/[Name]/` follows the same pattern:

- `config.ts` — Reusable Payload field group config (imported into collections/blocks)
- `index.tsx` — React component
- `style.module.scss` — Scoped styles

### Collections & Globals

- Collections: `Pages`, `Users`, `Media`, `Menus`, `Posts`, `Categories` (plus `forms` / `form-submissions` added automatically by `@payloadcms/plugin-form-builder`)
- Globals: `Colors`, `Header`, `Footer`, `SiteSettings`
- All are registered in `src/payload.config.ts`

### Header & Footer (layout globals)

`Header` and `Footer` compose their content the same way a Page does: their `blocks` field (`src/fields/layoutBlocks/config.ts`) accepts `Section` blocks alongside `BlockHolder`. Each row is its own `Section`, so it independently controls a full-width background that breaks out of the boxed content column — `Header`/`Footer` themselves render `<BlockRenderer blocks={blocks} />` with **no shared container wrapping all rows**. Don't reintroduce a shared `containerType` field on Header/Footer; if a row needs to be boxed, wrap it in a `Section` with `widthType: 'boxed'` instead.

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
9. **Reuse shared field groups** (`src/fields/spacing`, `background`, `advanced`) on new blocks instead of duplicating padding/background/ID fields — see the "Shared Field Groups" section above
10. **SCSS uses `@use`, never `@import`** — reference `@/scss/mixins`/`@/scss/variables` with `as mixins`/`as vars` namespaces (see any existing block's `style.module.scss` for the pattern)

---

## Payload CMS Skill Reference

Detailed Payload CMS patterns and API reference are available in:

- `.claude/skills/payload/SKILL.md` — Quick reference
- `.claude/skills/payload/reference/` — Detailed documentation
