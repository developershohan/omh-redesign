import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";

export default defineConfig({
  name: "omh",
  title: "Online Marketing Help",
  projectId: "8wl45ar9",
  dataset: "production",
  plugins: [structureTool({ structure }), visionTool()],
  schema: { types: schemaTypes },
});
