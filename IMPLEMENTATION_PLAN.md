# Portfolio Redesign Implementation Plan

## Goal

Stabilize the Astro + TinaCMS foundation first, then redesign the portfolio into a polished, light-theme, recruiter-friendly data engineering portfolio. Work must happen in small phases on the current `astro-tina-redesign` branch.

## Ground Rules

- Keep Astro pinned at `6.3.7`.
- Keep `legacy.collectionsBackwardsCompat` until the content config migration is intentionally scheduled.
- Use local Tina builds with `tinacms build --local --skip-cloud-checks --datalayer-port 9001 -c "astro build"` until TinaCloud is fully configured.
- Do not commit `.env` or `.env.local`.
- After each phase, run the relevant check and update this plan with status notes.

## Phase 1: Project Structure Cleanup

- Confirm the Astro app is the active site root.
- Keep legacy Hugo/PaperMod files untouched unless a later cleanup phase explicitly removes them.
- Ensure generated folders are ignored: `public/`, `dist/`, `node_modules/`, `.astro/`, and `static/admin/`.
- Check: `npm.cmd run build`.

## Phase 2: Content Model

- Review Tina schemas in `tina/config.ts`.
- Make homepage, contact, and project fields match the real editing workflow.
- Add missing fields only when they are needed by a visible page.
- Check: create or edit one local content field, then run `npm.cmd run build`.

## Phase 3: Homepage

- Build a first-screen homepage inspired by Hugo Pradier's clarity: light background, simple navigation, large name, direct value proposition, strong project proof.
- Keep copy focused on data engineering, regulated manufacturing data, Snowflake, Python, SQL, and practical delivery.
- Check: inspect `http://localhost:4321/` on desktop and mobile widths.

## Phase 4: Projects Page

- Create a scannable project index with project type, summary, tech stack, and clear links.
- Prioritize Tastagram / TikTok Recipe Intelligence and World Cup AI Platform.
- Check: inspect `http://localhost:4321/projects/`.

## Phase 5: Individual Project Pages

- Build project pages that tell the story clearly: problem, architecture, what was built, tradeoffs, and proof links.
- Keep long technical details readable with cards, lists, and architecture sections.
- Check: inspect each `/projects/<slug>/` route.

## Phase 6: Skills Section

- Add a skills surface organized by practical capability, not generic keyword lists.
- Suggested groups: data platforms, orchestration, modeling, API/product delivery, cloud/devops, quality.
- Check: make sure skill labels are reflected in Tina content if they need future editing.

## Phase 7: Resume And Contact Section

- Make contact direct and professional.
- Keep resume link, GitHub, LinkedIn, email, location, work authorization, and languages visible.
- Check: inspect `http://localhost:4321/contact/` and verify `/files/Fayssal_Zeggar_CV.pdf`.

## Phase 8: SEO

- Add stable titles, descriptions, canonical URLs, Open Graph basics, and structured metadata where useful.
- Keep the portfolio domain as `https://portfolio.fayssal-zeggar.com`.
- Check: inspect generated HTML after `npm.cmd run build`.

## Phase 9: Deployment

- Confirm build command for local and hosting.
- Add TinaCloud environment variables only in local `.env` and hosting settings, not in Git.
- Check: deployment preview builds on the hosting provider.

## Phase 10: Interview And Storytelling Polish

- Tighten copy so every section helps a recruiter or hiring manager understand the work.
- Emphasize decisions, constraints, tradeoffs, and proof over tool lists.
- Check: read the site top-to-bottom as a hiring reviewer and remove weak or repetitive claims.
