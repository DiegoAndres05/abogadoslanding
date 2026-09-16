# Research: Practice Areas Layout

## 1. Presentation pattern

**Decision:** Replace the card grid + accordion with a vertical stack of two-column rows (visual panel left, copy card right on large screens; stacked on small screens). Keep `id="areas"` on the section.

**Rationale:** Matches the attached reference and FR-001/FR-002/FR-006. The current 3–4 column grid and “Ver servicios” expander contradict FR-008 and SC-005.

**Alternatives considered:**
- Keep the grid and only enlarge cards — rejected; does not match the sample.
- Alternate image left/right per row — rejected; spec default is image always on the left.
- Tabs or a featured subset — rejected; clarification A requires all eight areas.

## 2. Visual placeholder (v1)

**Decision:** Use CSS-only brand placeholders (navy/gold gradients, geometric overlay, rounded corners). One distinct `visualVariant` per area. No `<img>` stock photos and no remote image URLs.

**Rationale:** Clarification B and FR-010/SC-008. CSS variants are identifiable, lightweight, and can later be swapped for a real photo field without changing the row layout.

**Alternatives considered:**
- Unsplash/stock photographs — rejected in clarify.
- Empty or identical gray boxes — rejected; must be distinguishable per area.
- SVG illustrations as files — extra assets without benefit for v1.

## 3. Data shape

**Decision:** Extend `data/practiceAreas.ts` in place. Add `whyItMatters` (3–5 sentences) and `featuredSpecialties` (1–5 strings). Keep `title`, `slug`, `id`, and the full `services` list for footer/other consumers. Add `visualVariant` (enum of eight tokens). Drop `icon` from the public row UI; icons are optional leftovers, not shown in the new block.

**Rationale:** One source of truth. Footer already maps `practiceAreas` and links to `#${area.slug}`. Curated specialties are explicit data, not `services.slice(0, 5)`, so the five items can be the most representative.

**Alternatives considered:**
- Duplicate a new `practiceAreaBlocks` array — rejected; drift risk.
- Derive featured list as first five services — weaker editorial control.
- CMS — out of scope.

## 4. Consult CTA

**Decision:** Each block’s “Agenda una consulta” is an in-page link to `#contacto` (same as Hero and Navbar).

**Rationale:** FR-007. `FinalCTA` already owns `id="contacto"`. No new form or WhatsApp-only path.

**Alternatives considered:**
- `tel:` or `mailto:` on the image button — inconsistent with primary site CTA.
- Per-area query string — no handler exists.

## 5. Component architecture

**Decision:** Rewrite `components/PracticeAreas.tsx`. Remove expand/collapse state (`useState`, `AnimatePresence`). Keep `FadeIn` for entrance. Prefer a CSS Grid row (`1fr` / `1fr` from `md`/`lg` up). Give each row `id={area.slug}` so footer anchors keep working.

**Rationale:** No interaction besides the CTA, so accordion complexity is unused. Section background becomes navy (FR-009) instead of ivory.

**Alternatives considered:**
- New `PracticeAreaRow` file plus keep old grid behind a flag — unnecessary for a landing with one section.
- Keep client accordion for overflow — contradicts FR-008.

## 6. Copy work

**Decision:** Rewrite each area’s `whyItMatters` from the current one-line `description` into 3–5 Spanish sentences (risk, value, firm approach). Select up to five `featuredSpecialties` from existing `services`, not new invented practice lines. Keep official area titles.

**Rationale:** Clarifications A (long paragraph) and the assumption that the sample is a layout, not a new catalog.

**Alternatives considered:**
- Rename areas to match sample titles (“Tributación Internacional”) — rejected unless they already match.
- Keep one-line descriptions — rejected in clarify.

## 7. Testing approach

**Decision:** No new automated test harness in this cut. Validate with `npm run dev` against `quickstart.md` (desktop + ~375px mobile): eight rows, max five specialties, `#areas` and `#contacto`, no stock images, no accordion.

**Rationale:** The repo has no component test runner configured beyond ESLint/Next build. Spec success criteria are visual and navigational.

**Alternatives considered:**
- Playwright suite — useful later, not required to plan or implement the layout.
