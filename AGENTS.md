# FizzyHost — AGENTS.md

This document provides an overview of the FizzyHost game server hosting website for developers and AI agents.

## Project Overview

A full-featured, animated game server hosting website. Built with TanStack Start and deployed on Netlify.

## Key Architecture

### Routes (src/routes/)
- `__root.tsx` — Root layout with animated NavBar, mobile menu, Google Fonts
- `index.tsx` — Homepage: Hero, Stats, Plans preview, Features, Node status, Testimonials, FAQ, Footer (Footer exported for reuse)
- `plans.tsx` — Full plans page with monthly/yearly toggle (Copper→Obsidian)
- `features.tsx` — Features grid + Pterodactyl panel details + game list
- `status.tsx` — Node status table (18 nodes) with CPU/RAM progress bars
- `about.tsx` — About, team, values
- `contact.tsx` — Contact form (mailto) + Discord/ticket channels
- `terms.tsx` — Terms of Service
- `privacy.tsx` — Privacy Policy
- `refund.tsx` — No-refund policy (strict: no refunds after deployment)
- `knowledge-base.tsx` — Searchable KB with category filtering
- `faq.tsx` — Redirect stub → /knowledge-base
- `login.tsx` — Email/password + Google OAuth via @netlify/identity
- `admin.tsx` — Protected admin panel (Dashboard, Plans, Announcements, Settings)

### Design System (src/styles.css)
- Dark theme: `--color-bg: #050a14`, green `#22c55e`, purple `#a855f7`
- CSS keyframe animations: fadeInUp, pulse-glow, float, particle-float, count-up
- Utility classes: `.card`, `.card-highlight`, `.btn-primary`, `.btn-secondary`, `.gradient-text`, `.status-dot`
- Footer is a shared export from `index.tsx` — imported in all pages

### Auth (Netlify Identity)
- `@netlify/identity` for login/signup/logout/google oauth
- Admin panel protected client-side: `getUser()` on mount, redirect to `/login` if null
- First admin must be set via Netlify Dashboard → Identity → Invite → set `admin` role
- Admin emails: shopdaksh@gmail.com, mat576907@gmail.com

### Admin Panel Notes
- Plans and announcements are in-memory React state (refresh resets them)
- To persist: add Netlify Database + Drizzle ORM schema in `db/schema.ts`

## Development

```bash
npm install && netlify dev
```

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + custom components |
| Content | Content Collections (type-safe markdown) |
| AI | TanStack AI with multi-provider support |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── favicon.ico
│   ├── tanstack-circle-logo.png
│   └── tanstack-word-logo-white.svg  # TanStack wordmark logo (white) used in header/nav.
├── src
│   ├── components
│   │   ├── Header.tsx  # Header with nav links.
│   │   └── HeaderNav.tsx  # Navigation sidebar template: mobile menu, Home link, add-on routes; EJS-driven for dynamic route generation.
│   ├── routes
│   │   ├── __root.tsx  # Root layout: Header, styles.
│   │   ├── faq.tsx  # FAQ page: accordion with Acme SaaS Q&A.
│   │   └── index.tsx  # Landing page: hero, pricing, features.
│   ├── router.tsx  # TanStack Router setup: creates router from generated routeTree with scroll restoration.
│   └── styles.css  # Global styles: Tailwind import plus base body/code font styling.
├── .gitignore  # Template for .gitignore: node_modules, dist, .env, .netlify, .tanstack, etc.
├── AGENTS.md  # This document provides an overview of the project structure for developers and AI agents working on this codebase.
├── netlify.toml  # Netlify deployment config: build command (vite build), publish directory (dist/client), and dev server settings (port 8888, target 3000).
├── package.json  # Project manifest with TanStack Start, React 19, Vite 7, Tailwind CSS 4, and Netlify plugin dependencies; defines dev and build scripts.
├── pnpm-lock.yaml
├── tsconfig.json  # TypeScript config: ES2022 target, strict mode, @/* path alias for src/*, bundler module resolution.
└── vite.config.ts  # Vite config template: TanStack Start, React, Tailwind, Netlify plugin, and optional add-on integrations; processed by EJS.
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are defined by files in `src/routes/`:

- `__root.tsx` - Root layout wrapping all pages
- `index.tsx` - Route for `/`
- `api.*.ts` - Server API endpoints (e.g., `api.resume-chat.ts` → `/api/resume-chat`)

### Component Architecture

**UI Primitives** (`src/components/ui/`):
- Radix UI-based, Tailwind-styled
- Card, Badge, Checkbox, Separator, HoverCard

**Feature Components** (`src/components/`):
- Header, HeaderNav, ResumeAssistant

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind, Content Collections |
| `tsconfig.json` | TypeScript config with `@/*` path alias for `src/*` |
| `netlify.toml` | Build command, output directory, dev server settings |
| `content-collections.ts` | Zod schemas for jobs and education frontmatter |
| `styles.css` | Tailwind imports + CSS custom properties (oklch colors) |

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Conventions

### Naming
- Components: PascalCase
- Utilities/hooks: camelCase
- Routes: kebab-case files

### Styling
- Tailwind CSS utility classes
- `cn()` helper for conditional class merging
- CSS variables for theme tokens in `styles.css`

### TypeScript
- Strict mode enabled
- Import paths use `@/` alias
- Zod for runtime validation
- Type-only imports with `type` keyword

### State Management
- React hooks for local state
- Zustand if you need it for global state
### SaaS Landing Page

Landing page with pricing tiers, features section, and FAQ accordion.

**Routes:** / (hero, pricing, features), /faq (accordion Q&A)

**FAQ:** ChevronDown accordion with expand/collapse; pricing tiers: Starter (free), Pro, Enterprise

No special dependencies or environment variables beyond base TanStack Start.

## Application Name

This starter uses "Application Name" as a placeholder throughout the UI and metadata. Replace it with the user's desired application name in the following locations:

### UI Components
- `src/components/Header.tsx` — app name displayed in the header
- `src/components/HeaderNav.tsx` — app name in the mobile navigation header

### SEO Metadata
- `src/routes/__root.tsx` — the `title` field in the `head()` configuration

Search for all occurrences of "Application Name" in the `src/` directory and replace with the user's application name.
