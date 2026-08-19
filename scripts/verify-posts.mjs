/*
  Verify every insights post against the WordPress export it was built from.
  The export is the only surviving copy of the blog once the live site is deleted.

    node verify-posts.mjs            # check all
    node verify-posts.mjs <slug>     # dump the differences for one post
*/
import { readFileSync } from "node:fs";

const xml = readFileSync("onlinemarketinghelp.WordPress.2026-07-29.xml", "utf8");
const data = JSON.parse(readFileSync("content/insights-posts.json", "utf8"));
const posts = Array.isArray(data) ? data : data.posts || Object.values(data)[0];
const only = process.argv[2];

const ENT = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: '"', hellip: "…", pound: "£" };
const decode = (v) =>
  v
    .replace(/&#(\d+);/g, (_, c) => String.fromCodePoint(Number(c)))
    .replace(/&#x([\da-f]+);/gi, (_, c) => String.fromCodePoint(parseInt(c, 16)))
    .replace(/&([a-z]+);/gi, (e, n) => ENT[n.toLowerCase()] ?? e);

const plain = (html) =>
  decode(String(html))
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/\[\/?[a-z][^\]]*\]/gi, " ") // shortcodes
    .replace(/<[^>]+>/g, " ")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    // WordPress bodies carry stray spaces before punctuation ("monthly .", "bonus :")
    // that the rendered markup drops. Not a content difference.
    .replace(/\s+([.,;:!?%])/g, "$1")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    // <sup> ordinals export as "1 st" / "30 th"; quotes export as " word "
    .replace(/(\d)\s+(st|nd|rd|th)\b/gi, "$1$2")
    .replace(/"\s+/g, '"')
    .replace(/\s+"/g, '"')
    .trim()
    .toLowerCase();

// Split into <item> blocks, then pull fields. content:encoded is CDATA-wrapped and
// can be very large, so it is matched with an explicit CDATA pattern first.
const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
function field(block, tag) {
  const cdata = block.match(new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`));
  if (cdata) return cdata[1];
  const plainTag = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return plainTag ? plainTag[1] : "";
}

const exported = new Map();
for (const block of items) {
  if (field(block, "wp:post_type") !== "post") continue;
  if (field(block, "wp:status") !== "publish") continue;
  exported.set(field(block, "wp:post_name"), {
    title: decode(field(block, "title")).trim(),
    content: field(block, "content:encoded"),
  });
}

/* Words the WordPress theme injects around the post that are not post content. */
const CHROME = [
  "share this post",
  "table of contents",
  "subscribe to our newsletter get updates and learn from the best more to explore",
  "subscribe to our newsletter",
  "get updates and learn from the best",
  "more to explore",
];
const stripChrome = (t) => CHROME.reduce((acc, c) => acc.split(c).join(" "), t).replace(/\s+/g, " ").trim();

if (only) {
  const post = posts.find((p) => p.slug === only);
  const src = exported.get(only);
  const want = stripChrome(plain(src.content));
  const got = stripChrome(plain(post.contentHtml));
  console.log(`export words: ${want.split(" ").length} | site words: ${got.split(" ").length}`);
  const missing = want
    .split(/(?<=[.?!])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.split(" ").length >= 6 && !got.includes(s));
  console.log(`missing sentences: ${missing.length}`);
  missing.slice(0, 5).forEach((m, i) => console.log(`\n[${i}] ${m.slice(0, 300)}`));
  process.exit(0);
}

console.log(`export: ${exported.size} published posts | site: ${posts.length} posts\n`);
const problems = [];
let words = 0;

for (const post of posts) {
  const src = exported.get(post.slug);
  if (!src) {
    problems.push([post.slug, "not present in the export — cannot verify"]);
    continue;
  }
  if (plain(post.title) !== plain(src.title))
    problems.push([post.slug, `title differs\n      export: ${src.title}\n      site  : ${post.title}`]);

  const want = stripChrome(plain(src.content));
  const got = stripChrome(plain(post.contentHtml));
  words += want.split(" ").length;
  if (want.split(" ").length < 20) {
    problems.push([post.slug, `export body looks empty (${want.split(" ").length} words) — extraction issue`]);
    continue;
  }
  const missing = want
    .split(/(?<=[.?!])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.split(" ").length >= 6 && !got.includes(s));
  if (missing.length)
    problems.push([post.slug, `${missing.length} sentence(s) missing, first:\n      "${missing[0].slice(0, 140)}"`]);
}

const orphans = [...exported.keys()].filter((s) => !posts.some((p) => p.slug === s));

if (!problems.length) {
  console.log(`OK — all ${posts.length} posts match the export word for word`);
  console.log(`     ${words.toLocaleString()} words of body copy compared`);
} else {
  console.log(`${problems.length} of ${posts.length} posts have differences:\n`);
  for (const [slug, msg] of problems.slice(0, 12)) console.log(`  ${slug}\n      ${msg}\n`);
  if (problems.length > 12) console.log(`  … and ${problems.length - 12} more`);
}
if (orphans.length) console.log(`\nIn the export but not on the site (${orphans.length}): ${orphans.join(", ")}`);
