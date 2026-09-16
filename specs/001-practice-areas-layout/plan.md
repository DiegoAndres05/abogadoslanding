# Implementation Plan: Practice Areas Layout

**Branch**: `001-practice-areas-layout` | **Date**: 2026-09-16 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-practice-areas-layout/spec.md`

## Summary

Replace the practice-areas card grid and accordion with eight full-width rows: a brand visual placeholder (title + “Agenda una consulta”) beside a light card (“¿Por qué importa?” + up to five specialties). Dark section background. CTA goes to `#contacto`. v1 uses CSS placeholders, not photographs. Extend `data/practiceAreas.ts` and rewrite `components/PracticeAreas.tsx`; keep `id="areas"` and per-area `id={slug}` for existing nav/footer.

## Technical Context

**Language/Version**: TypeScript 5, React 19, Next.js 16 (App Router)

**Primary Dependencies**: Tailwind CSS 4, existing `FadeIn` / Framer Motion (entrance only), Lucide (optional CTA icon)

**Storage**: Static module `data/practiceAreas.ts` (N/A for DB)

**Testing**: ESLint + `next build`; manual checks in [quickstart.md](./quickstart.md)

**Target Platform**: Marketing landing, desktop and mobile browsers

**Project Type**: Single Next.js web app (frontend-only landing)

**Performance Goals**: Section usable on first paint; no remote images; no accordion JS

**Constraints**: No stock photos; max five specialties; no new CMS/routes; reuse `#contacto`

**Scale/Scope**: 8 rows, 1 section, ~2 files changed as primary (`data/practiceAreas.ts`, `components/PracticeAreas.tsx`) plus small CSS if needed

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

`.specify/memory/constitution.md` is still the unratified template (placeholder principles). No enforceable project gates apply.

- Library-first / CLI / TDD-from-constitution: N/A (landing page, constitution not adopted).
- Scope stays inside existing app folders; no new service or package.
- Post-design: still a single-section UI change; Complexity Tracking empty.

**Gate result:** PASS

## Project Structure

### Documentation (this feature)

```text
specs/001-practice-areas-layout/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── practice-areas-ui.md
└── spec.md
```

### Source Code (repository root)

```text
app/
├── page.tsx                 # already mounts <PracticeAreas />
├── globals.css              # brand tokens (navy, gold, ivory)
└── layout.tsx
components/
├── PracticeAreas.tsx        # rewrite: row layout, no accordion
├── FadeIn.tsx               # reuse
├── Footer.tsx               # already links #areas and #{slug}
└── FinalCTA.tsx             # id="contacto"
data/
└── practiceAreas.ts         # whyItMatters, featuredSpecialties, visualVariant
```

**Structure Decision:** Single Next.js app. No backend. Change the existing practice-areas module and component; do not add `src/` or a second package.

## Complexity Tracking

> No constitution violations.

## Phase 0 & Phase 1

Completed in this command:

- [research.md](./research.md) — layout, placeholders, data, CTA, architecture
- [data-model.md](./data-model.md)
- [contracts/practice-areas-ui.md](./contracts/practice-areas-ui.md)
- [quickstart.md](./quickstart.md)

## Implementation sketch (for `/speckit-tasks`)

1. Extend `PracticeArea` type and all eight records (`whyItMatters`, `featuredSpecialties`, `visualVariant`).
2. Rewrite `PracticeAreas`: navy section, stacked rows, CSS placeholder map, copy card, `#contacto` CTA, `id={slug}` on each row.
3. Remove accordion state and grid cards.
4. Validate with quickstart (desktop, mobile, anchors, lint/build).

`tasks.md` is **not** created here.
