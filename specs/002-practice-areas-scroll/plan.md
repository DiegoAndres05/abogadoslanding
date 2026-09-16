# Implementation Plan: Practice Areas Scroll Motion

**Branch**: `002-practice-areas-scroll` | **Date**: 2026-09-16 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-practice-areas-scroll/spec.md`

## Summary

Add a GSAP + ScrollTrigger enter-view reveal on the eight practice-area **rows** only (panel, then card). Play once; never pin/scrub. Honor `prefers-reduced-motion`. Keep rows visible if GSAP fails. Remove Framer `FadeIn` from rows; leave the section intro as-is (not part of scroll reveal).

## Technical Context

**Language/Version**: TypeScript 5, React 19, Next.js 16 (App Router)

**Primary Dependencies**: GSAP 3 + ScrollTrigger; existing Tailwind layout; Lucide CTAs unchanged

**Storage**: N/A (runtime reveal flags only)

**Testing**: ESLint, `next build`, manual [quickstart.md](./quickstart.md)

**Target Platform**: Marketing landing, desktop and mobile browsers

**Project Type**: Single Next.js web app

**Performance Goals**: Transform/opacity only; no scrolljacking; eight independent triggers

**Constraints**: User-requested GSAP; `once`; no pin; content visible without JS animation; do not hide via CSS before hydrate

**Scale/Scope**: 8 rows, 1 section, ~1 new client module + `package.json` `gsap`

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Constitution file is still an unratified template. No extra libraries-as-packages or TDD gates apply.

**Gate result:** PASS (post-design: still one client motion helper, no new app)

## Project Structure

### Documentation (this feature)

```text
specs/002-practice-areas-scroll/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/scroll-reveal-ui.md
└── spec.md
```

### Source Code (repository root)

```text
package.json                         # add gsap
components/
├── PracticeAreas.tsx                # drop FadeIn on rows; mark panel/card hooks
├── PracticeAreaRowMotion.tsx        # NEW client: GSAP ScrollTrigger once
└── FadeIn.tsx                       # intro only
```

**Structure Decision:** Single Next.js app. Isolate GSAP in one client component so `PracticeAreas` can remain a server list.

## Complexity Tracking

> No constitution violations.

## Phase 0 & Phase 1

- [research.md](./research.md)
- [data-model.md](./data-model.md)
- [contracts/scroll-reveal-ui.md](./contracts/scroll-reveal-ui.md)
- [quickstart.md](./quickstart.md)

## Implementation sketch (for `/speckit-tasks`)

1. `npm install gsap`
2. Client wrapper: register ScrollTrigger, `gsap.context`, `once: true`, reduced-motion short-circuit, no CSS hide-by-default
3. Wire panel then card refs; stagger ~0.15s; duration ~0.55s
4. Remove row-level `FadeIn`
5. Validate quickstart (scroll, reduce-motion, anchors, lint/build)

`tasks.md` is **not** created here.
