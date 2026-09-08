import { defineArrayMember, defineField, defineType } from "sanity";

// Every form on the site posts to app/api/enquiry, which stores one of these
// before emailing. That makes the Studio the submissions dashboard, and means
// an SMTP outage can't lose a lead. ponytail: no database, no form service.
export const enquiry = defineType({
  name: "enquiry",
  title: "Form submission",
  type: "document",
  readOnly: true,
  fields: [
    defineField({ name: "form", title: "Form", type: "string" }),
    defineField({ name: "page", title: "Sent from", type: "string" }),
    defineField({ name: "submittedAt", title: "Received", type: "datetime" }),
    defineField({ name: "email", title: "Reply to", type: "string" }),
    defineField({
      name: "fields",
      title: "Answers",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "field",
          fields: [
            defineField({ name: "label", type: "string" }),
            defineField({ name: "value", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "form", email: "email", date: "submittedAt" },
    prepare: ({ title, email, date }) => ({
      title: title || "Form submission",
      subtitle: [email, date && new Date(date).toLocaleString("en-GB")].filter(Boolean).join(" · "),
    }),
  },
});
