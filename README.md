# Online Marketing Help — website

Marketing site for Online Marketing Help, a UK digital marketing and WordPress
agency. Next.js App Router, Tailwind CSS, and Sanity for the blog.

Production: https://onlinemarketinghelp.co.uk
Preview: https://omh-redesign.vercel.app

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js (App Router, React Server Components) |
| Styling | Tailwind CSS v4 + a small set of custom utilities in `app/globals.css` |
| Blog content | Sanity (`studio/`), queried at build/ISR time |
| Page content | TypeScript modules in `lib/content/` |
| Email | Resend HTTP API (no SDK) via `app/api/enquiry` |
| Hosting | Vercel |

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in the Sanity values
npm run dev
```

The site runs at http://localhost:3000.

## Environment variables

See `.env.example`. The two `NEXT_PUBLIC_SANITY_*` values are required for the
build — without them page data collection fails. `RESEND_API_KEY` is required
for contact forms to actually send. `SANITY_REVALIDATE_SECRET` is required for
the publish webhook.

## Commands

```bash
npm run dev     # development server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint (the studio/ folder is linted by its own toolchain)
```

## Content model

Two different sources, deliberately:

- **Marketing pages** — content lives in `lib/content/*.ts` as typed modules and
  is compiled into the build. These pages change rarely and benefit from being
  reviewable in pull requests.
- **Blog / Insights** — content lives in Sanity and is fetched through
  `lib/sanity/`. Queries are cached under the `posts` tag; publishing calls
  `/api/revalidate`, which clears that tag so the change appears without a
  redeploy.

## The Studio

`studio/` is a standalone Sanity Studio with its own `package.json`. It is not
part of the Next.js build — it just lives in the same repository.

```bash
cd studio
npm install
npm run dev            # http://localhost:3333
npm run deploy-schema  # register schema changes with Sanity
npm run deploy         # publish the hosted Studio for the client
```

See `studio/README.md` for details, including why some imported posts keep their
body as a raw HTML block.

## Architecture notes

- `app/` — routes only. Pages stay thin and delegate to a section component.
- `components/` — grouped by feature (`services/`, `insights/`, `case-studies/`)
  with shared primitives in `components/ui/`.
- `lib/content/` — page copy and data, one module per page or feature.
- `lib/sanity/` — Sanity client, cached queries, Portable Text serialisation.
- `lib/schema.tsx` — JSON-LD builders. Every JSON-LD block escapes `<` so CMS or
  page copy cannot break out of the `<script>` tag.

Most components are Server Components. `"use client"` is used only where there
is real interactivity — forms, the header, theme toggle, search, and the
insights archive filter.
