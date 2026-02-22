# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dyskop (dys-kop.pl) is a Next.js 14 business website for a mini-excavator services company in Lublin, Poland. Built with TypeScript, Tailwind CSS, and shadcn/ui components. Content is in Polish.

## Commands

- **Dev server:** `npm run dev` (localhost:3000)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **E2E tests:** `npx playwright test`
- **Single E2E test:** `npx playwright test e2e/app.spec.ts --grep "test name"`

## Architecture

**App Router** (`app/`) — Pages use Next.js App Router with Polish URL slugs:
- `o-nas/` (About), `uslugi-minikoparka-lublin/` (Services), `realizacje/` (Gallery), `kontakt/` (Contact)
- `login/` and `admin/` — Admin dashboard for gallery management
- `api/contact-form/` — Nodemailer-based email endpoint with rate limiting
- `actions/` — Server actions for auth (cookie-based sessions) and gallery CRUD (Vercel Blob storage)

**Components** (`components/`) — Mix of custom components and shadcn/ui (`components/ui/`). `layout-wrapper.tsx` conditionally excludes navbar/footer on admin/login routes.

**Lib** (`lib/`) — Utilities for Vercel Blob storage, session management, cookie consent context, 360° image loading, blur placeholder generation, and rate limiting.

**Middleware** (`middleware.ts`) — Root-level request middleware for rate limiting.

## Key Patterns

- **Server Actions** (`"use server"`) for auth and gallery operations, not API routes
- **Image storage:** Vercel Blob (primary) with filesystem fallback; `sharp`/`plaiceholder` for blur data
- **SEO:** Structured data (`structured-data.tsx`), OpenGraph/Twitter metadata in layout
- **SEO takes precedence** — every new feature, page, image, or text must follow SEO best practices (see SEO section below)
- **Forms:** Honeypot bot trap field, client-side validation, react-toastify for feedback
- **Path alias:** `@/*` maps to project root

## SEO Standards

Every page must follow these rules. When adding new pages or modifying existing ones, apply all of them.

### Image files
- **File names must be SEO-friendly:** descriptive, hyphenated, keyword-rich, 3–7 words. Example: `minitraktor-farmtrac-26-pro.png`, not `Farmtrac-26PRO.png` or `pielegnacyjna.png`
- **No Polish diacritics in file names** — use ASCII equivalents (`plug` not `pług`)
- **Alt text must include location keyword** ("Lublin") naturally. Keep under 125 chars. Describe the image + service context + location. Example: `Kosiarka bijakowa — mulczowanie nieużytków i koszenie Lublin`

### Heading hierarchy
- Each page gets exactly one `<h1>` (page title)
- Section labels use `<h2>` (even if visually small — styling is separate from semantics)
- Items within sections use `<h3>`
- Never skip levels (no `<h1>` → `<h3>` without `<h2>`)

### Semantic HTML
- Service page primary content must be wrapped in `<main>`, not `<div>`
- Use `<article>` for self-contained content blocks (cards, posts)
- Use `<section>` for thematic groupings when appropriate

### Metadata (layout.tsx)
Every page layout must include:
- `title` — with "Lublin" or location + `| Dys-kop` suffix
- `description` — 155–200 chars, include primary keyword and location
- `keywords` — array of 5–10 relevant Polish search terms including location variants
- `alternates.canonical` — full canonical URL (`https://dys-kop.pl/...`)
- `openGraph` — title, description, url, type
- `twitter` — card, title, description

### URL slugs
- Polish, hyphenated, lowercase, include location: `uslugi-minikoparka-lubelskie`, `konstrukcje-sadownicze-lubelskie`

## Environment Variables

See `.env.example` — requires Gmail SMTP credentials, Vercel Blob token, and admin password.
