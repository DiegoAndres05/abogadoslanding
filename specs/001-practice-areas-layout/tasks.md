---
description: "Task list for practice areas layout implementation"
---

# Tasks: Practice Areas Layout

**Input**: Design documents from `/specs/001-practice-areas-layout/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Not requested in the spec. Validation is manual via `specs/001-practice-areas-layout/quickstart.md`.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

Landing Next.js app at repo root: `app/`, `components/`, `data/`.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the existing app is the implementation surface; no new packages.

- [x] T001 Confirm `app/page.tsx` still mounts `components/PracticeAreas.tsx` and that `#areas` / `#contacto` exist (`components/PracticeAreas.tsx` section, `components/FinalCTA.tsx`) per `specs/001-practice-areas-layout/contracts/practice-areas-ui.md`
- [x] T002 Confirm brand tokens `--navy`, `--gold`, `--ivory` in `app/globals.css` are available for the dark section and light copy card (no new theme files)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Content model and CSS-only visual tokens that every story uses.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T003 Extend `PracticeArea` in `data/practiceAreas.ts` with `whyItMatters` (string, 3–5 sentences, Spanish), `featuredSpecialties` (string[] length 1–5), and `visualVariant` (enum of eight unique tokens: `navy-gold-diag`, `gold-mesh`, `navy-bars`, `charcoal-arc`, `navy-grid`, `gold-wash`, `navy-split`, `ivory-edge`); keep `id` unique 1–8, `slug` unique kebab-case, and `services` as the unpublished full catalog
- [x] T004 Fill all **exactly eight** records in `data/practiceAreas.ts` with editorial `whyItMatters` (3–5 sentence-ending periods) and curated `featuredSpecialties` (subset of `services`, max five, min one); assign a distinct `visualVariant` per row
- [x] T005 [P] Add CSS-only placeholder class map (no `<img>` photographs) for the eight `visualVariant` tokens in `components/practiceAreaVisuals.ts`

**Checkpoint**: Foundation ready — eight complete content records and eight brand placeholders

---

## Phase 3: User Story 1 - Recorrer cada área con imagen y explicación (Priority: P1) 🎯 MVP

**Goal**: Replace the card grid with eight dark-section rows: brand panel + “¿Por qué importa?” + up to five specialties. No accordion. No stock photos.

**Independent Test**: Open `/`, go to `#areas`. Eight rows, panel left / card right on desktop, overlay title, check list ≤ 5, no “Ver servicios”.

### Implementation for User Story 1

- [x] T006 [US1] Rewrite `components/PracticeAreas.tsx` as a vertical stack of eight rows (not a 3–4 column grid), section `id="areas"`, dark navy background (FR-009), intro heading adapted for dark background
- [x] T007 [US1] Render each row in `components/PracticeAreas.tsx` with `id={area.slug}` (footer contract), visual panel using `components/practiceAreaVisuals.ts` + superimposed `title`, and a light copy card with headings “¿Por qué importa?” and “Especialidades:”
- [x] T008 [US1] Bind `whyItMatters` and `featuredSpecialties` only in `components/PracticeAreas.tsx`; MUST NOT render `services`; MUST NOT show more than five specialties; MUST NOT use expand/collapse (`useState` / `AnimatePresence` / “Ver servicios”)
- [x] T009 [US1] Remove unused accordion imports (`ChevronDown`, expand state) from `components/PracticeAreas.tsx` once the static list is in place

**Checkpoint**: User Story 1 is demoable: eight branded rows matching the sample layout (placeholders, not photos)

---

## Phase 4: User Story 2 - Agendar consulta desde un área concreta (Priority: P2)

**Goal**: Each visual panel has “Agenda una consulta” linking to the existing contact section.

**Independent Test**: Click the CTA on any row → scroll/jump to `#contacto` (`components/FinalCTA.tsx`). Exploring without click still works.

### Implementation for User Story 2

- [x] T010 [US2] Add the overlay control labeled `Agenda una consulta` as a link `href="#contacto"` on each visual panel in `components/PracticeAreas.tsx` (shared ConsultCallToAction; no per-area form, tel, or mailto on this button)
- [x] T011 [US2] Match CTA affordance to site language (rounded control, readable on the dark panel) in `components/PracticeAreas.tsx` without changing `components/FinalCTA.tsx` destination `id="contacto"`

**Checkpoint**: User Stories 1 and 2 work: layout plus consult jump

---

## Phase 5: User Story 3 - Leer las áreas en un teléfono (Priority: P2)

**Goal**: Narrow viewports stack panel then card; no horizontal page scroll; all copy remains visible.

**Independent Test**: Viewport ~375px: each area is visual then card; title, paragraph, specialties, CTA visible; desktop still two columns with visual on the left.

### Implementation for User Story 3

- [x] T012 [US3] Implement stacked layout on small screens and two-column (`visual` left, `card` right) from `md`/`lg` up in `components/PracticeAreas.tsx` (CSS Grid/Flex; no alternating sides)
- [x] T013 [US3] Check long titles and five specialties wrap inside the card/panel in `components/PracticeAreas.tsx` so `specs/001-practice-areas-layout/quickstart.md` scenario 3 passes (no horizontal overflow)

**Checkpoint**: All three stories independently checkable on desktop and mobile

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Anchors, lint, and quickstart

- [x] T014 Verify `components/Footer.tsx` `href={\`#${area.slug}\`}` still lands on row `id`s in `components/PracticeAreas.tsx`
- [x] T015 Confirm Navbar/Hero `#areas` still targets the rewritten section in `components/PracticeAreas.tsx`
- [x] T016 Run `npm run lint` and `npm run build` at repo root
- [x] T017 Execute `specs/001-practice-areas-layout/quickstart.md` scenarios 1–5 (desktop, CTA, mobile, anchors, build)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies
- **Foundational (Phase 2)**: Depends on Setup — BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational — MVP
- **User Story 2 (Phase 4)**: Depends on US1 row markup in `components/PracticeAreas.tsx` (same file; sequential)
- **User Story 3 (Phase 5)**: Depends on US1 row markup (responsive rules on the same component)
- **Polish (Phase 6)**: After stories 1–3

### User Story Dependencies

- **User Story 1 (P1)**: After Phase 2
- **User Story 2 (P2)**: After US1 skeleton (CTA sits on the panel)
- **User Story 3 (P2)**: After US1 skeleton (breakpoints on the same rows)
- US2 and US3 do not depend on each other, but they share `components/PracticeAreas.tsx` — do not parallelize those files

### Parallel Opportunities

- T005 can run in parallel with T004 (different files: `components/practiceAreaVisuals.ts` vs `data/practiceAreas.ts`) after T003
- US2 vs US3: not parallel (same file)
- T014 and T015 are read/verify; T016 after code is stable

---

## Parallel Example: Foundational

```bash
# After T003 (type exists):
Task: "Fill eight records in data/practiceAreas.ts"
Task: "Add CSS placeholder map in components/practiceAreaVisuals.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Phase 1 Setup
2. Phase 2 Foundational (data + visual tokens)
3. Phase 3 User Story 1
4. **STOP and VALIDATE**: eight rows, no grid, no accordion, no stock photos
5. Demo

### Incremental Delivery

1. Setup + Foundational
2. US1 → layout MVP
3. US2 → consult CTA
4. US3 → mobile stack
5. Polish / quickstart

### Parallel Team Strategy

Single-file UI (`PracticeAreas.tsx`) — one implementer after T003–T005. A second person can draft copy in `data/practiceAreas.ts` (T004) while visuals are built (T005).

---

## Notes

- [P] tasks = different files, no incomplete dependencies
- Do not render `services` in the section
- v1 placeholders are CSS-only; no stock `<img>`
- CTA is only `#contacto`
- Commit after each phase if desired
