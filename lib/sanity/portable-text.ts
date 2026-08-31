import { toHTML, type PortableTextHtmlComponents } from "@portabletext/to-html";

// Serialises a post body to the bare tags .insight-prose styles, matching the
// markup the site rendered before Sanity so article pages are unchanged.
// The TOC builder (lib/content/insight-toc) parses this HTML, so the tag set
// here and the CSS there have to stay in step.

const escape = (value: unknown) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const components: Partial<PortableTextHtmlComponents> = {
  block: {
    normal: ({ children }) => `<p>${children}</p>`,
    h2: ({ children }) => `<h2>${children}</h2>`,
    h3: ({ children }) => `<h3>${children}</h3>`,
    h4: ({ children }) => `<h4>${children}</h4>`,
    h5: ({ children }) => `<h5>${children}</h5>`,
    blockquote: ({ children }) => `<blockquote>${children}</blockquote>`,
  },
  marks: {
    strong: ({ children }) => `<strong>${children}</strong>`,
    em: ({ children }) => `<em>${children}</em>`,
    link: ({ children, value }) => {
      const rel = value?.newTab ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a href="${escape(value?.href)}"${rel}>${children}</a>`;
    },
  },
  types: {
    image: ({ value }) =>
      `<img src="${escape(value.src)}" alt="${escape(value.alt)}" loading="lazy" decoding="async">`,
    // Posts whose original WordPress markup did not survive conversion to rich
    // text are stored verbatim, so those pages render exactly as they always did.
    rawHtml: ({ value }) => value?.html ?? "",
  },
  list: {
    bullet: ({ children }) => `<ul>${children}</ul>`,
    number: ({ children }) => `<ol>${children}</ol>`,
  },
  listItem: {
    bullet: ({ children }) => `<li>${children}</li>`,
    number: ({ children }) => `<li>${children}</li>`,
  },
};

export const toArticleHtml = (blocks: unknown) =>
  Array.isArray(blocks) ? toHTML(blocks, { components }) : "";
