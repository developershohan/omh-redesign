/*
  Emit a compact hash set of a locally rendered page's visible text, so the live
  page can report which of its own blocks we do NOT have — without shipping the
  whole text across.
*/
const url = process.argv[2];
const html = await (await fetch(url)).text();
const mainMatch =
  html.match(/<main[^>]*>([\s\S]*?)<\/main>/i) || html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
const body = mainMatch ? mainMatch[1] : html;

export function norm(s) {
  return s
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/[ \s]+/g, " ")
    .replace(/[^\w\s£$%&'".,?!:;()\/+-]/g, "")
    .trim()
    .toLowerCase();
}
export function fnv(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(36);
}

const blocks = [];
const re =
  /<(h1|h2|h3|h4|h5|p|li|td|th|summary|figcaption|legend|label|blockquote)\b[^>]*>([\s\S]*?)<\/\1>/gi;
for (const m of body.matchAll(re)) {
  const text = m[2]
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&hellip;/g, "...")
    .replace(/&pound;/g, "£")
    .replace(/&[a-z]+;/gi, " ")
    .trim();
  const n = norm(text);
  if (n.length > 6) blocks.push(n);
}
const set = [...new Set(blocks)];
// also index every sentence, so a live paragraph we split across two <p> still matches
const sentences = new Set();
for (const b of set) for (const s of b.split(/(?<=[.?!])\s+/)) if (norm(s).length > 12) sentences.add(norm(s));
const all = [...new Set([...set, ...sentences])];
console.log(JSON.stringify(all.map(fnv)));
