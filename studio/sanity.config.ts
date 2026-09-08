import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { enquiry } from "./schemaTypes/enquiry";
import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";

// Two workspaces, because they hold different kinds of data. `production` is a
// public dataset — anyone can read it without a token, which is what lets the
// site fetch the blog. Form submissions carry names, emails and phone numbers,
// so they live in a private dataset instead, readable only when signed in here.
export default defineConfig([
  {
    name: "omh",
    title: "Online Marketing Help",
    basePath: "/content",
    projectId: "8wl45ar9",
    dataset: "production",
    plugins: [structureTool({ structure }), visionTool()],
    schema: { types: schemaTypes },
  },
  {
    name: "enquiries",
    title: "Form submissions",
    basePath: "/enquiries",
    projectId: "8wl45ar9",
    dataset: "enquiries",
    plugins: [structureTool()],
    schema: { types: [enquiry] },
  },
]);
