// Long-form posts run to 10+ minutes, so the article body earns a contents rail.
// The imported WordPress HTML has no ids, so they are added here at render time
// and the same pass returns the list the rail renders from. Each heading also
// gets a hover anchor link so readers can share a section.

export type TocItem = { id: string; text: string };

export function withContents(html: string) {
  const items: TocItem[] = [];
  const used = new Set<string>();

  const withIds = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/g, (match, attrs: string, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (!text) return match;

    const base =
      text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 60) || "section";
    let id = base;
    for (let n = 2; used.has(id); n += 1) id = `${base}-${n}`;
    used.add(id);
    items.push({ id, text });

    return `<h2${attrs.replace(/\s*id="[^"]*"/g, "")} id="${id}">${inner}<a class="heading-anchor" href="#${id}" aria-label="Link to this section">#</a></h2>`;
  });

  return { html: withIds, items };
}

// Splits the body in front of the middle heading so a call-to-action can sit
// between the halves. Short posts (under four sections) stay in one piece.
export function splitAtMiddle(html: string, items: TocItem[]): [string, string | null] {
  if (items.length < 4) return [html, null];
  const middle = items[Math.floor(items.length / 2)];
  const at = html.indexOf(`id="${middle.id}"`);
  const start = at === -1 ? -1 : html.lastIndexOf("<h2", at);
  return start === -1 ? [html, null] : [html.slice(0, start), html.slice(start)];
}
