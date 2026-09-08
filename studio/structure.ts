import type { StructureResolver } from "sanity/structure";

// Puts blog posts first and groups the supporting lists underneath, so the
// client lands on the thing they actually edit.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("post").title("Blog posts"),
      S.divider(),
      S.documentTypeListItem("topic").title("Topics"),
      S.documentTypeListItem("term").title("Categories & tags"),
      S.documentTypeListItem("author").title("Authors"),
    ]);
