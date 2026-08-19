#!/usr/bin/env node
/*
  Take the images the site actually uses out of a WordPress uploads export and
  drop the live host for good.

    node scripts/import-uploads.mjs <uploads.zip | uploads-folder>
    node scripts/import-uploads.mjs ~/Downloads/uploads.zip --dry-run

  A WordPress export is mostly noise — 17k files of generated thumbnails, plugin
  logs, Shortpixel backups, revslider junk. This copies only the files that are
  referenced, and files them by the page that uses them rather than by the
  year/month folders WordPress happens to store them in:

    public/images/blog/<post-slug>/<file>     one folder per article
    public/images/website-designs/<file>      the 38 theme screenshots

  Then it rewrites every onlinemarketinghelp.co.uk image URL in the content to a
  local path and switches the design gallery on. Nothing is rewritten unless every
  file is present, and re-running is safe.
*/

import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync, statSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join, resolve, basename } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [sourceArg, ...flags] = process.argv.slice(2);
const dryRun = flags.includes("--dry-run");

if (!sourceArg) {
  console.error("usage: node scripts/import-uploads.mjs <uploads.zip|folder> [--dry-run]");
  process.exit(1);
}
const source = resolve(sourceArg);
if (!existsSync(source)) {
  console.error(`Not found: ${source}`);
  process.exit(1);
}
const isZip = statSync(source).isFile();

/* ------------------------------------------------------------------ what we need */

const jsonFiles = ["content/insights-posts.json", "content/insights-index.json"];
const wanted = []; // { upload: "2022/01/x.png", dest: "public/images/blog/slug/x.png" }

function collect(slug, blob) {
  for (const m of blob.matchAll(/https:\/\/onlinemarketinghelp\.co\.uk\/wp-content\/uploads\/([^"'\\)\s]+)/g)) {
    const upload = m[1];
    const dest = join("public/images/blog", slug, basename(upload));
    if (!wanted.some((w) => w.upload === upload)) wanted.push({ upload, dest });
  }
}
for (const rel of jsonFiles) {
  const data = JSON.parse(readFileSync(join(root, rel), "utf8"));
  const list = Array.isArray(data) ? data : data.posts || Object.values(data)[0];
  for (const post of list) collect(post.slug, JSON.stringify(post));
}

const wd = readFileSync(join(root, "lib/content/website-designs.ts"), "utf8");
for (const m of wd.matchAll(/file: "([^"]+)"/g)) {
  wanted.push({ upload: `2023/10/${m[1]}`, dest: join("public/images/website-designs", m[1]) });
}

console.log(`files referenced by the site : ${wanted.length}`);

/* ------------------------------------------------------------------ fetch them */

const missing = [];
let copied = 0;

if (isZip) {
  // One unzip pass, extracting only the entries we want, then move into place.
  const staging = join(root, ".uploads-staging");
  if (!dryRun) {
    rmSync(staging, { recursive: true, force: true });
    mkdirSync(staging, { recursive: true });
  }
  const listing = new Set(
    execFileSync("unzip", ["-Z1", source], { maxBuffer: 1 << 28 })
      .toString()
      .split(/\r?\n/),
  );
  const present = wanted.filter((w) => listing.has(`uploads/${w.upload}`));
  for (const w of wanted) if (!listing.has(`uploads/${w.upload}`)) missing.push(w.upload);

  if (!dryRun && present.length) {
    // unzip in batches so the argument list stays sane
    for (let i = 0; i < present.length; i += 40) {
      const batch = present.slice(i, i + 40).map((w) => `uploads/${w.upload}`);
      execFileSync("unzip", ["-qq", "-o", source, ...batch, "-d", staging], { maxBuffer: 1 << 28 });
    }
    for (const w of present) {
      const from = join(staging, "uploads", w.upload);
      const to = join(root, w.dest);
      mkdirSync(dirname(to), { recursive: true });
      copyFileSync(from, to);
      copied++;
    }
    rmSync(staging, { recursive: true, force: true });
  }
} else {
  for (const w of wanted) {
    const from = join(source, w.upload);
    if (!existsSync(from)) {
      missing.push(w.upload);
      continue;
    }
    if (!dryRun) {
      const to = join(root, w.dest);
      mkdirSync(dirname(to), { recursive: true });
      copyFileSync(from, to);
    }
    copied++;
  }
}

console.log(`copied                       : ${copied}${dryRun ? " (dry run — nothing written)" : ""}`);
console.log(`missing from the export      : ${missing.length}`);

if (missing.length) {
  console.log("\nNot in the uploads export:");
  for (const m of missing.slice(0, 20)) console.log("  " + m);
  if (missing.length > 20) console.log(`  … and ${missing.length - 20} more`);
  console.log("\nNothing was rewritten.");
  process.exit(1);
}
if (dryRun) {
  console.log("\nDry run complete — every referenced file is in the export.");
  process.exit(0);
}

/* ------------------------------------------------------------------ drop the host */

const localFor = new Map(wanted.map((w) => [w.upload, "/" + w.dest.replace(/\\/g, "/").replace(/^public\//, "")]));
for (const rel of jsonFiles) {
  const path = join(root, rel);
  const after = readFileSync(path, "utf8").replace(
    /https:\/\/onlinemarketinghelp\.co\.uk\/wp-content\/uploads\/([^"'\\)\s]+)/g,
    (whole, upload) => localFor.get(upload) ?? whole,
  );
  writeFileSync(path, after);
  console.log(`rewrote ${rel}`);
}

writeFileSync(
  join(root, "lib/content/website-designs.ts"),
  readFileSync(join(root, "lib/content/website-designs.ts"), "utf8").replace("galleryReady: false", "galleryReady: true"),
);
console.log("enabled the /website-designs gallery");
console.log("\nDone. `npx next build`, then the live site is no longer needed.");
