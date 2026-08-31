# Studio — Online Marketing Help

The blog editor. It is a standalone Sanity Studio with its own dependencies and
build; it is not part of the Next.js app, it just lives in the same repo.

Project `8wl45ar9`, dataset `production`.

## Running it locally

```bash
cd studio
npm install
npm run dev          # http://localhost:3333
```

First time on a machine: `npx sanity login`.

## After changing anything in schemaTypes/

```bash
npm run deploy-schema   # registers the schema with Sanity
npm run deploy          # updates the hosted Studio the client uses
```

If a new field should also appear on the website, add it to the GROQ projection
in `../lib/sanity/insights.ts` and render it in the relevant component.

## How content reaches the website

The Next.js app queries Sanity directly (`lib/sanity/`) and caches each page for
60 seconds. Publishing a post makes it appear within about a minute — there is
no rebuild or deploy step, and no content is stored in this repo.

Some imported posts keep their body in a single **Raw HTML (legacy)** block.
That is deliberate: their original WordPress markup did not survive conversion
to rich text unchanged, so it was preserved verbatim to keep those pages looking
exactly as they did. Newly written posts always use the normal rich text editor.
