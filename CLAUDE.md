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
- `o-nas/` (About), `zakres-uslug/` (Services), `realizacje/` (Gallery), `kontakt/` (Contact)
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
- **SEO takes precedence** every new feature, page, image, text, needs to be adjusted to fit SEO best practices
- **Forms:** Honeypot bot trap field, client-side validation, react-toastify for feedback
- **Path alias:** `@/*` maps to project root

## Environment Variables

See `.env.example` — requires Gmail SMTP credentials, Vercel Blob token, and admin password.
