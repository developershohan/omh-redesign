import { defineField, defineType } from "sanity";
import { post } from "./post";

const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
  ],
  preview: { select: { title: "name" } },
});

const topic = defineType({
  name: "topic",
  title: "Topic",
  type: "document",
  description: "The top-level groupings used to filter the Insights page.",
  fields: [
    defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
  ],
});

// Categories and tags are the same shape, so they share a type rather than
// duplicating one. ponytail: split them only if they ever need different fields.
const term = defineType({
  name: "term",
  title: "Category / tag",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
  ],
});

// `enquiry` is deliberately absent: it belongs to the private enquiries
// workspace in sanity.config.ts, not the public content dataset.
export const schemaTypes = [post, author, topic, term];
