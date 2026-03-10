# replit.md

## Overview

This is a **cashier/point-of-sale (POS) UI application** built as a full-stack TypeScript project. The frontend is a React single-page application that renders a cashier interface (`MainCashierUi`), and the backend is an Express.js server that serves the frontend and provides API endpoints. The project uses a PostgreSQL database with Drizzle ORM for data persistence, though the current storage implementation is in-memory (`MemStorage`). The application appears to be in early development, with a basic user schema and a Figma-derived cashier UI as the main page.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite (dev server with HMR, production builds to `dist/public`)
- **Routing**: Wouter (lightweight React router)
- **State/Data Fetching**: TanStack React Query for server state management
- **UI Components**: shadcn/ui component library (new-york style) built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming (HSL color system)
- **Forms**: React Hook Form with Zod validation via `@hookform/resolvers`
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

The frontend lives in `client/` with the entry point at `client/src/main.tsx`. The main page is `MainCashierUi` which displays a product grid with cashier functionality. Static assets (Figma exports) are served from `client/public/figmaAssets/`.

### Backend
- **Framework**: Express.js running on Node.js with TypeScript (compiled via `tsx` in dev, `esbuild` for production)
- **API Pattern**: All API routes should be prefixed with `/api` and registered in `server/routes.ts`
- **Server Entry**: `server/index.ts` sets up Express middleware, registers routes, then conditionally sets up Vite dev server or serves static files
- **Logging**: Custom middleware logs all `/api` requests with method, path, status, duration, and response body

### Storage Layer
- **Interface**: `IStorage` in `server/storage.ts` defines a contract for data access (currently `getUser`, `getUserByUsername`, `createUser`)
- **Current Implementation**: `MemStorage` (in-memory Map-based storage) — this is a placeholder
- **Target Implementation**: PostgreSQL via Drizzle ORM with `@neondatabase/serverless` driver
- **Schema Location**: `shared/schema.ts` — shared between frontend and backend
- **Schema Push**: `npm run db:push` uses `drizzle-kit push` to sync schema to database

### Database Schema
- **Users table**: `id` (UUID, auto-generated), `username` (text, unique, required), `password` (text, required)
- **Validation**: Insert schemas generated via `drizzle-zod` for type-safe validation with Zod
- Types are exported from `shared/schema.ts` and used across both client and server

### Shared Code
The `shared/` directory contains code shared between frontend and backend, primarily the database schema and Zod validation schemas. This ensures type consistency across the full stack.

### Build & Development
- **Dev**: `npm run dev` — runs Express + Vite dev server with HMR
- **Build**: `npm run build` — Vite builds frontend to `dist/public`, esbuild bundles server to `dist/index.js`
- **Production**: `npm start` — runs the bundled server which serves static frontend files
- **Type Check**: `npm run check` — runs TypeScript compiler in noEmit mode

### Key Design Decisions
1. **Monorepo structure** (`client/`, `server/`, `shared/`) keeps frontend and backend in one repo with shared types — simplifies deployment and type safety
2. **In-memory storage as default** with a prepared Drizzle/PostgreSQL setup — allows development without a database, easy to switch by replacing `MemStorage` with a `DatabaseStorage` class
3. **shadcn/ui components** are copied into the project (not installed as a package) — allows full customization of each component
4. **Session management**: `connect-pg-simple` is included as a dependency, suggesting PostgreSQL-backed sessions are planned

## External Dependencies

### Database
- **PostgreSQL** via `@neondatabase/serverless` (Neon's serverless Postgres driver)
- **ORM**: Drizzle ORM with `drizzle-kit` for schema migrations/push
- **Connection**: Requires `DATABASE_URL` environment variable pointing to a PostgreSQL instance
- **Session Store**: `connect-pg-simple` for Express session storage in PostgreSQL

### Key NPM Packages
- **Frontend**: React, Wouter, TanStack React Query, Radix UI primitives, Tailwind CSS, Recharts (charts), embla-carousel, react-day-picker, vaul (drawer), cmdk (command palette), input-otp
- **Backend**: Express, express-session (implied by connect-pg-simple), Drizzle ORM
- **Shared**: Zod (validation), drizzle-zod (schema-to-zod bridge)

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal` — shows runtime errors in dev
- `@replit/vite-plugin-cartographer` and `@replit/vite-plugin-dev-banner` — development tools (only in non-production on Replit)

### Fonts
- Google Fonts: Architects Daughter, DM Sans, Fira Code, Geist Mono, Inter