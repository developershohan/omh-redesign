// Long-form posts run to 10+ minutes, so the article body earns a contents rail.
// The imported WordPress HTML has no ids, so they are added here at render time
// and the same pass returns the list the rail renders from.

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

    return `<h2${attrs.replace(/\s*id="[^"]*"/g, "")} id="${id}">${inner}</h2>`;
  });

  return { html: withIds, items };
}
