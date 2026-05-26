import { defineConfig } from "tinacms";

const branch =
  process.env.HEAD ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.BRANCH ||
  "astro-tina-redesign";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "site",
        label: "Site Pages",
        path: "src/data/site",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "eyebrow", label: "Eyebrow" },
          { type: "string", name: "headline", label: "Headline", required: true },
          { type: "string", name: "lead", label: "Lead", ui: { component: "textarea" } },
          { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
          {
            type: "object",
            name: "actions",
            label: "Actions",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "URL" },
              { type: "boolean", name: "primary", label: "Primary" },
            ],
          },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            fields: [
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
            ],
          },
          { type: "string", name: "tags", label: "Tags", list: true },
          { type: "string", name: "profile", label: "Profile Facts", list: true },
          {
            type: "object",
            name: "sections",
            label: "Sections",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "links",
            label: "Links",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "URL" },
            ],
          },
        ],
      },
      {
        name: "project",
        label: "Projects",
        path: "src/content/projects",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "description", label: "SEO Description", ui: { component: "textarea" } },
          { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
          { type: "boolean", name: "featured", label: "Featured" },
          { type: "number", name: "weight", label: "Weight" },
          { type: "string", name: "projectType", label: "Project Type" },
          { type: "string", name: "github", label: "GitHub URL" },
          { type: "string", name: "demo", label: "Demo URL" },
          { type: "string", name: "technical", label: "Technical Page URL" },
          { type: "string", name: "problem", label: "Problem", ui: { component: "textarea" } },
          { type: "string", name: "solution", label: "Solution", ui: { component: "textarea" } },
          { type: "string", name: "result", label: "Result", ui: { component: "textarea" } },
          { type: "string", name: "tech", label: "Tech Stack", list: true },
          { type: "string", name: "architectureTitle", label: "Architecture Title" },
          { type: "string", name: "architectureSummary", label: "Architecture Summary", ui: { component: "textarea" } },
          { type: "string", name: "architecture", label: "Architecture Steps", list: true },
          {
            type: "object",
            name: "skills",
            label: "Skills",
            list: true,
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "detail", label: "Detail", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "links",
            label: "Links",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "URL" },
            ],
          },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
    ],
  },
});
