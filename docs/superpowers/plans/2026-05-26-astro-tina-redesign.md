# Astro Tina Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio as a light-theme Astro site with TinaCMS-managed content and a modern portfolio layout inspired by Hugo Pradier's site.

**Architecture:** Replace the Hugo/PaperMod runtime with Astro pages, typed content collections, reusable components, and TinaCMS schemas for homepage, projects, and contact content. Keep existing portfolio content, CV, and public links while making future edits possible from `/admin`.

**Tech Stack:** Astro, TinaCMS, TypeScript, plain CSS, Markdown/MDX content, Git-based publishing.

---

### Task 1: Scaffold Astro/Tina Project

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `tina/config.ts`
- Create: `src/content/config.ts`
- Create: `src/styles/global.css`

- [ ] Add Astro and Tina project configuration at the repo root.
- [ ] Define content collections for projects and editable home/contact data.
- [ ] Keep the generated site static and deployable by a normal `npm run build`.

### Task 2: Migrate Content

**Files:**
- Create: `src/content/site/home.json`
- Create: `src/content/site/contact.json`
- Create: `src/content/projects/recipe-data-platform.md`
- Create: `src/content/projects/world-cup-ai-platform.md`
- Copy: `static/files/Fayssal_Zeggar_CV.pdf`

- [ ] Move current homepage facts, profile copy, links, stats, skills, and project summaries into structured editable files.
- [ ] Move existing project pages into Astro content collections with clean frontmatter.
- [ ] Preserve SEO descriptions and public URLs.

### Task 3: Build Light Portfolio UI

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/Header.astro`
- Create: `src/components/Footer.astro`
- Create: `src/components/Hero.astro`
- Create: `src/components/ProjectCard.astro`
- Create: `src/components/SectionHeader.astro`
- Create: `src/pages/index.astro`
- Create: `src/pages/projects/index.astro`
- Create: `src/pages/projects/[slug].astro`
- Create: `src/pages/contact.astro`

- [ ] Build a clean light theme only.
- [ ] Use restrained cards, slim borders, large whitespace, and subtle hover transitions.
- [ ] Remove all dark theme behavior and theme toggles.
- [ ] Keep navigation simple: Home, Projects, Contact, Resume, GitHub, Tastagram.

### Task 4: Tina Editing Experience

**Files:**
- Modify: `tina/config.ts`
- Create/ensure: `public/admin/index.html`

- [ ] Configure Tina collections for homepage, contact, and projects.
- [ ] Add fields for hero copy, buttons, stats, skills, links, project metadata, and long project content.
- [ ] Make `/admin` available for editing through Tina.

### Task 5: Verify

**Commands:**
- Run: `npm install`
- Run: `npm run build`
- Run: `npm run dev`

- [ ] Confirm the site builds.
- [ ] Open the local site and inspect the home, projects, project detail, contact, and admin route.
- [ ] Fix layout issues on desktop and mobile.
