---
description: "Task list for practice areas GSAP scroll reveal"
---

# Tasks: Practice Areas Scroll Motion

**Input**: Design documents from `/specs/002-practice-areas-scroll/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Not requested. Validate with `specs/002-practice-areas-scroll/quickstart.md`.

**Organization**: Tasks are grouped by user story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: US1 / US2 / US3
- Include exact file paths

## Path Conventions

Repo root: `components/`, `package.json`.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Add GSAP to the Next.js app.

- [x] T001 Install `gsap` and record it in `package.json` / `package-lock.json` (GSAP 3 + ScrollTrigger plugin)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Client motion shell that never hides content before JS.

**⚠️ CRITICAL**: No user story work until this phase is complete

- [x] T002 Create `"use client"` component `components/PracticeAreaRowMotion.tsx` that registers GSAP `ScrollTrigger` once, wraps children, and uses `gsap.context()` in `useLayoutEffect` with revert on unmount
- [x] T003 Keep default CSS fully visible in `components/PracticeAreaRowMotion.tsx` (no `opacity: 0` in stylesheet); if GSAP init throws, skip animation so rows stay readable (FR-009)

**Checkpoint**: Motion wrapper exists; rows would still show if GSAP never runs

---

## Phase 3: User Story 1 - Recorrer las áreas con un revelado al scroll (Priority: P1) 🎯 MVP

**Goal**: Each of the eight service rows reveals on enter-view (panel then card). Intro heading does not use this scroll reveal.

**Independent Test**: Slow-scroll `#areas`: intro is already readable; each row animates as it enters; rows below the fold do not all fire on load.

### Implementation for User Story 1

- [x] T004 [US1] In `components/PracticeAreaRowMotion.tsx`, animate the visual panel then the copy card (`fromTo` opacity + `y` ~24–32px, panel duration ~0.55s, card delay ~0.12–0.18s, ease `power2.out`); ScrollTrigger `start` ~`"top 82%"`, `once: true` (`hasPlayed` never returns to pending — FR-011 / data-model)
- [x] T005 [US1] Wire `components/PracticeAreaRowMotion.tsx` around each `<article>` in `components/PracticeAreas.tsx`; do **not** wrap the section intro; remove row-level `FadeIn` so Framer does not compete with GSAP (`components/FadeIn.tsx` remains on the intro only — FR-010)

**Checkpoint**: Eight rows reveal on scroll; heading stays off the GSAP timeline

---

## Phase 4: User Story 2 - Respetar quien prefiere menos movimiento (Priority: P2)

**Goal**: `prefers-reduced-motion: reduce` shows all row content with no reveal.

**Independent Test**: Emulate reduce-motion, reload: no fade/slide; CTA still works.

### Implementation for User Story 2

- [x] T006 [US2] In `components/PracticeAreaRowMotion.tsx`, read `window.matchMedia("(prefers-reduced-motion: reduce)")` (`MotionPreference.reduceMotion`); if true, skip GSAP entirely so all rows behave as already `revealed`
- [x] T007 [US2] Confirm `href="#contacto"` in `components/PracticeAreas.tsx` stays clickable when motion is skipped (no overlay/pointer-events trap in `components/PracticeAreaRowMotion.tsx`)

**Checkpoint**: Reduced-motion path is a no-op besides visible content

---

## Phase 5: User Story 3 - No perder el control del scroll ni la lectura (Priority: P2)

**Goal**: No pin/scrub; play once; in-view-on-load rows readable; mobile no horizontal overflow.

**Independent Test**: Stop mid-section; scroll back — no replay; `/#corporativo-ma` readable immediately; ~375px stacked layout still ok.

### Implementation for User Story 3

- [x] T008 [US3] In `components/PracticeAreaRowMotion.tsx`, do **not** set ScrollTrigger `pin` or `scrub`; `once: true` only (no reverse on leave)
- [x] T009 [US3] Treat rows already intersecting the viewport on load (anchors / tall screens) as immediately complete in `components/PracticeAreaRowMotion.tsx` so they are not stuck waiting for a scroll (FR-008)
- [x] T010 [US3] Confirm stacked `md:grid-cols-2` layout in `components/PracticeAreas.tsx` is unchanged (no extra overflow wrappers that cause horizontal scroll)

**Checkpoint**: Scroll remains native; replay-free; anchors work

---

## Phase 6: Polish & Cross-Cutting Concerns

- [x] T011 Run `npm run lint` and `npm run build` at repo root
- [x] T012 Execute `specs/002-practice-areas-scroll/quickstart.md` scenarios 1–5

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup** → **Foundational** (blocks stories) → **US1** → **US2** / **US3** (same file `PracticeAreaRowMotion.tsx`, sequential) → **Polish**

### User Story Dependencies

- **US1**: After T002–T003
- **US2**: After US1 skeleton (same client file)
- **US3**: After US1 skeleton (same client file)
- Do not parallelize T004–T010 (shared files)

### Parallel Opportunities

- None after T001: `PracticeAreaRowMotion.tsx` and `PracticeAreas.tsx` are sequential
- T007 is a verify pass on T006

---

## Parallel Example

```bash
# Not applicable — single motion module
```

---

## Implementation Strategy

### MVP First (User Story 1)

1. T001 install gsap
2. T002–T003 wrapper + fail-safe
3. T004–T005 row reveal
4. **STOP** and scroll-test `#areas`

### Incremental Delivery

1. MVP reveal
2. Reduced motion
3. once / no pin / anchors
4. lint, build, quickstart

---

## Notes

- Transform/opacity only
- Never CSS-hide rows before GSAP
- Intro `FadeIn` is load-in, not scroll reveal
