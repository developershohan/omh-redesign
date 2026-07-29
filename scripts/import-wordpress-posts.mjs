import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const sourceFile = resolve("onlinemarketinghelp.WordPress.2026-07-29.xml");
const fullOutputFile = resolve("content/insights-posts.json");
const indexOutputFile = resolve("content/insights-index.json");

const xml = readFileSync(sourceFile, "utf8");

const featuredSlugs = new Set([
  "zero-click-searches-ai-overviews-and-featured-snippets",
  "how-to-redesign-your-website-without-impacting-seo",
  "writing-effective-ad-copy-tips-and-strategies",
]);

const namedEntities = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  nbsp: " ",
  quot: '"',
};

function decodeEntities(value) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (entity, name) => namedEntities[name.toLowerCase()] ?? entity);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function readTag(block, tagName) {
  const tag = escapeRegExp(tagName);
  const match = block.match(
    new RegExp(`<${tag}(?:\\s[^>]*)?>\\s*(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([\\s\\S]*?))\\s*</${tag}>`),
  );
  return match ? decodeEntities(match[1] ?? match[2] ?? "") : "";
}

function cleanText(value) {
  return decodeEntities(value.replace(/<[^>]+>/g, " "))
    .replace(/\u00a0/g, " ")
    .replace(/\bMarkrting\b/g, "Marketing")
    .replace(/\s+/g, " ")
    .trim();
}

function readTaxonomy(block) {
  const terms = [];
  const categoryPattern = /<category\s+([^>]*)>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([\s\S]*?))<\/category>/g;
  let match;

  while ((match = categoryPattern.exec(block))) {
    const attributes = match[1];
    const domain = attributes.match(/\bdomain="([^"]+)"/)?.[1] ?? "";
    const slug = attributes.match(/\bnicename="([^"]+)"/)?.[1] ?? "";
    const name = cleanText(match[2] ?? match[3] ?? "");
    if (domain && slug && name) terms.push({ domain, slug, name });
  }

  return terms;
}

function readMeta(block) {
  const meta = new Map();
  const metaPattern = /<wp:postmeta>([\s\S]*?)<\/wp:postmeta>/g;
  let match;

  while ((match = metaPattern.exec(block))) {
    const key = readTag(match[1], "wp:meta_key");
    const value = readTag(match[1], "wp:meta_value");
    if (key) meta.set(key, value);
  }

  return meta;
}

function safeUrl(value, { allowHash = false } = {}) {
  const trimmed = decodeEntities(value).trim();
  if (!trimmed) return "";
  if (allowHash && trimmed.startsWith("#")) return trimmed;
  if (trimmed.startsWith("/")) return trimmed;

  try {
    const url = new URL(trimmed);
    return ["http:", "https:", "mailto:", "tel:"].includes(url.protocol) ? trimmed : "";
  } catch {
    return "";
  }
}

function escapeAttribute(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function parseAttributes(value) {
  const attributes = new Map();
  const attributePattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let match;
  while ((match = attributePattern.exec(value))) {
    attributes.set(match[1].toLowerCase(), match[2] ?? match[3] ?? match[4] ?? "");
  }
  return attributes;
}

function sanitizeHtml(value) {
  const allowedTags = new Set([
    "a",
    "b",
    "blockquote",
    "br",
    "code",
    "em",
    "figcaption",
    "figure",
    "h2",
    "h3",
    "h4",
    "h5",
    "hr",
    "i",
    "img",
    "li",
    "ol",
    "p",
    "pre",
    "strong",
    "table",
    "tbody",
    "td",
    "th",
    "thead",
    "tr",
    "ul",
  ]);
  const voidTags = new Set(["br", "hr", "img"]);

  let html = value
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style|noscript|form|iframe)\b[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<(input|button)\b[^>]*\/?\s*>/gi, "")
    .replace(/\[(?:\/?caption|\/?vc_[^\]]+|\/?et_[^\]]+)\]/gi, "")
    .replace(/\bShare This Post\b/gi, "")
    .replace(/\bMore To Explore\b/gi, "")
    .replace(/<\/?(?:html|head|body)\b[^>]*>/gi, "");

  html = html.replace(/<\/?([a-z][\w:-]*)\b([^>]*)>/gi, (original, rawTag, rawAttributes) => {
    const sourceTag = rawTag.toLowerCase();
    const tag = sourceTag === "h1" ? "h2" : sourceTag;
    const isClosing = original.startsWith("</");
    if (!allowedTags.has(tag)) return "";
    if (isClosing) return voidTags.has(tag) ? "" : `</${tag}>`;

    const attributes = parseAttributes(rawAttributes);
    const kept = [];

    if (tag === "a") {
      let href = safeUrl(attributes.get("href") ?? "", { allowHash: true });
      if (/^https?:/i.test(href)) {
        const url = new URL(href);
        if (url.hostname === "onlinemarketinghelp.co.uk" || url.hostname === "www.onlinemarketinghelp.co.uk") {
          href = `${url.pathname}${url.search}${url.hash}`;
        }
      }
      if (href) kept.push(`href="${escapeAttribute(href)}"`);
      const title = cleanText(attributes.get("title") ?? "");
      if (title) kept.push(`title="${escapeAttribute(title)}"`);
      if (attributes.get("target") === "_blank") {
        kept.push('target="_blank"', 'rel="noopener noreferrer"');
      }
    }

    if (tag === "img") {
      const src = safeUrl(attributes.get("src") ?? "");
      if (!src) return "";
      kept.push(`src="${escapeAttribute(src)}"`);
      kept.push(`alt="${escapeAttribute(cleanText(attributes.get("alt") ?? ""))}"`);
      const title = cleanText(attributes.get("title") ?? "");
      if (title) kept.push(`title="${escapeAttribute(title)}"`);
      for (const dimension of ["width", "height"]) {
        const number = attributes.get(dimension) ?? "";
        if (/^\d{1,5}$/.test(number)) kept.push(`${dimension}="${number}"`);
      }
      kept.push('loading="lazy"', 'decoding="async"');
    }

    if (tag === "td" || tag === "th") {
      for (const span of ["colspan", "rowspan"]) {
        const number = attributes.get(span) ?? "";
        if (/^\d{1,2}$/.test(number)) kept.push(`${span}="${number}"`);
      }
    }

    return `<${tag}${kept.length ? ` ${kept.join(" ")}` : ""}>`;
  });

  return html
    .replace(/<h[2-5]>\s*Table of Contents\s*<\/h[2-5]>/gi, "")
    .replace(/\s*Subscribe To Our Newsletter\s*(?:<p>)?\s*Get updates and learn from the best(?:<br>)?\s*(?:<\/p>)?/gi, "")
    .replace(/\u00a0/g, " ")
    .replace(/<p>\s*<\/p>/gi, "")
    .replace(/(?:\s*<br>\s*){3,}/gi, "<br><br>")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function toIsoUtc(value) {
  const trimmed = value.trim();
  return trimmed ? `${trimmed.replace(" ", "T")}Z` : null;
}

function readingTime(html) {
  const words = cleanText(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

function displayTopic(categories) {
  const value = categories.map((category) => `${category.slug} ${category.name}`).join(" ").toLowerCase();
  if (/\bseo\b|search.engine/.test(value)) return { slug: "seo", name: "SEO" };
  if (/google.ads|\bppc\b|paid.advert/.test(value)) return { slug: "paid-advertising", name: "Paid Advertising" };
  if (/wordpress|web.des|website|shopify|ecommerce|etsy/.test(value)) return { slug: "websites-ecommerce", name: "Websites & Ecommerce" };
  if (/social|content|email.marketing/.test(value)) return { slug: "social-content", name: "Social & Content" };
  if (/\bagency\b/.test(value)) return { slug: "agency-news", name: "Agency News" };
  return { slug: "strategy-measurement", name: "Strategy & Measurement" };
}

function usableSeoValue(value) {
  const cleaned = cleanText(value ?? "");
  return cleaned && !/%[a-z_]+%/i.test(cleaned) ? cleaned : null;
}

const itemBlocks = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((match) => match[1]);
const attachments = new Map();

for (const block of itemBlocks) {
  if (readTag(block, "wp:post_type") !== "attachment") continue;
  const meta = readMeta(block);
  const metadata = meta.get("_wp_attachment_metadata") ?? "";
  const id = readTag(block, "wp:post_id");
  const src = safeUrl(readTag(block, "wp:attachment_url"));
  if (!id || !src || /\.zip(?:\?|$)/i.test(src)) continue;

  attachments.set(id, {
    id,
    src,
    alt: cleanText(meta.get("_wp_attachment_image_alt") ?? ""),
    title: cleanText(readTag(block, "title")),
    width: Number(metadata.match(/s:5:"width";i:(\d+)/)?.[1] ?? 0) || null,
    height: Number(metadata.match(/s:6:"height";i:(\d+)/)?.[1] ?? 0) || null,
  });
}

const posts = [];

for (const block of itemBlocks) {
  if (readTag(block, "wp:post_type") !== "post" || readTag(block, "wp:status") !== "publish") continue;

  const meta = readMeta(block);
  const taxonomy = readTaxonomy(block);
  const categories = taxonomy.filter((term) => term.domain === "category").map(({ slug, name }) => ({ slug, name }));
  const tags = taxonomy.filter((term) => term.domain === "post_tag").map(({ slug, name }) => ({ slug, name }));
  const title = cleanText(readTag(block, "title"));
  const slug = cleanText(readTag(block, "wp:post_name"));
  const contentHtml = sanitizeHtml(readTag(block, "content:encoded"));
  const exportedExcerpt = cleanText(readTag(block, "excerpt:encoded"));
  const seoDescription = usableSeoValue(meta.get("rank_math_description"));
  const summary = (seoDescription ?? exportedExcerpt ?? cleanText(contentHtml)).slice(0, 320).trim();
  const topic = displayTopic(categories);
  const thumbnail = attachments.get(cleanText(meta.get("_thumbnail_id") ?? ""));
  const featuredImage = thumbnail
    ? {
        ...thumbnail,
        alt: thumbnail.alt || thumbnail.title || title,
      }
    : null;

  posts.push({
    id: readTag(block, "wp:post_id"),
    slug,
    status: "published",
    title,
    publishedAt: toIsoUtc(readTag(block, "wp:post_date_gmt")),
    modifiedAt: toIsoUtc(readTag(block, "wp:post_modified_gmt")),
    author: { id: "5", name: cleanText(readTag(block, "dc:creator")) || "Melissa Cross" },
    summary,
    excerpt: exportedExcerpt || summary,
    contentHtml,
    topic,
    categories,
    tags,
    readingTime: readingTime(contentHtml),
    featured: featuredSlugs.has(slug),
    featuredImage,
    seo: {
      title: usableSeoValue(meta.get("rank_math_title")),
      description: seoDescription ?? (exportedExcerpt || null),
      focusKeywords: cleanText(meta.get("rank_math_focus_keyword") ?? "")
        .split(",")
        .map((keyword) => keyword.trim())
        .filter(Boolean),
      score: Number(meta.get("rank_math_seo_score") ?? 0) || null,
    },
    legacyUrl: safeUrl(readTag(block, "link")),
  });
}

posts.sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));

const source = {
  format: "wordpress-wxr",
  file: "onlinemarketinghelp.WordPress.2026-07-29.xml",
  exportedAt: new Date(readTag(xml, "pubDate")).toISOString(),
  siteUrl: readTag(xml, "wp:base_site_url"),
};

const topicMap = new Map();
for (const post of posts) {
  const current = topicMap.get(post.topic.slug) ?? { ...post.topic, postCount: 0 };
  current.postCount += 1;
  topicMap.set(post.topic.slug, current);
}
const categories = [...topicMap.values()].sort((a, b) => b.postCount - a.postCount || a.name.localeCompare(b.name));

const fullDataset = {
  version: 1,
  source,
  authors: [{ id: "5", name: "Melissa Cross" }],
  categories,
  posts,
};

const indexDataset = {
  version: 1,
  source,
  categories,
  posts: posts.map((post) => {
    const indexPost = { ...post };
    delete indexPost.contentHtml;
    delete indexPost.seo;
    delete indexPost.tags;
    return indexPost;
  }),
};

writeFileSync(fullOutputFile, `${JSON.stringify(fullDataset, null, 2)}\n`);
writeFileSync(indexOutputFile, `${JSON.stringify(indexDataset, null, 2)}\n`);

console.log(`Imported ${posts.length} published posts.`);
console.log(`Wrote ${fullOutputFile}`);
console.log(`Wrote ${indexOutputFile}`);
