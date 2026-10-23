# Implementation Plan: Three Practice Pillars

**Branch**: `003-three-practice-pillars` | **Date**: 2026-10-23 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/003-three-practice-pillars/spec.md`

## Summary

Reorganize the marketing site around three primary practice pillars: corporate and business law, public procurement and contractual disputes, and tax law and fiscal defense. The implementation will centralize practice content in typed data, expose stable App Router pages for each pillar plus legal pages, simplify the home page summaries, and reuse one contextual consultation flow across home and detail pages. Site identity and metadata will be centralized around `https://getlegalandtax.com`, while team data will be expanded to support approved photographs, education, experience, and leadership areas.

## Technical Context

**Language/Version**: TypeScript 5, React 19, Next.js 16.3.4 App Router

**Primary Dependencies**: Existing Framer Motion, GSAP, Lucide React, Next Image, Tailwind CSS 4; no new dependency required

**Storage**: N/A; editorial content remains typed local data and static route content

**Testing**: ESLint, `next build`, `git diff --check`, route/metadata inspection, and manual responsive/accessibility checks from [quickstart.md](./quickstart.md)

**Target Platform**: Public marketing site on desktop and mobile browsers

**Project Type**: Single Next.js web application

**Performance Goals**: First viewport must expose the three pillars without waiting for animation; detail pages and contact CTA should be usable on a 375 px viewport; metadata and static routes must render without client JavaScript

**Constraints**: Preserve existing visual language and motion unless it conflicts with hierarchy or readability; keep content available if images or animations fail; do not publish invented legal/profile facts; production URLs must use `https://getlegalandtax.com`

**Scale/Scope**: One home page, three practice detail pages, two legal pages, one shared practice data model, one contextual form flow, two team profiles, and shared SEO/contact identity

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The constitution file is an unratified template and contains no enforceable project-specific gates. The plan remains within the existing single Next.js application, uses the current local-data pattern, and adds no unnecessary service or dependency.

**Gate result (pre-research): PASS**

## Project Structure

### Documentation (this feature)

```text
specs/003-three-practice-pillars/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── practice-pages.md
│   └── consultation-and-seo.md
└── spec.md
```

### Source Code (repository root)

```text
app/
├── page.tsx                         # home JSON-LD and page composition
├── layout.tsx                       # global metadata and canonical identity
├── practicas/
│   ├── corporativo/page.tsx
│   ├── contratacion-publica/page.tsx
│   └── tributario/page.tsx
├── privacidad/page.tsx
├── terminos/page.tsx
├── robots.ts
└── sitemap.ts
components/
├── Hero.tsx                         # exact three-pillar hero message
├── PracticeAreas.tsx                # primary/complementary hierarchy
├── PracticePillarCard.tsx           # concise summary and detail CTA
├── PracticePillarPage.tsx           # shared detail-page presentation
├── ConsultationForm.tsx             # three-pillar options and preselection
├── FinalCTA.tsx                     # WhatsApp, email, and contextual contact
├── Team.tsx                         # approved profile fields and photos
└── Footer.tsx                       # real legal links and corporate contact
data/
├── practiceAreas.ts                 # normalized three pillars and complements
└── team.ts                          # education, experience, leadership, images
lib/
├── consultation.ts                  # typed area context and contact routing
└── site.ts                          # canonical URL, email, phone, WhatsApp
public/
└── team/                            # approved profile images, if supplied
```

**Structure Decision**: Keep the current single-project App Router structure. Typed data remains the source of truth for home cards, detail pages, form options, footer links, and structured data. Shared components prevent the three detail routes from duplicating layout and contact behavior.

## Phase 0 & Phase 1

- [research.md](./research.md)
- [data-model.md](./data-model.md)
- [contracts/practice-pages.md](./contracts/practice-pages.md)
- [contracts/consultation-and-seo.md](./contracts/consultation-and-seo.md)
- [quickstart.md](./quickstart.md)

## Implementation Sequence

1. Confirm editorial inputs: corporate mailbox, approved team biographies/photos, and reviewed privacy/terms copy. Keep explicit placeholders out of production UI.
2. Normalize the practice data into the three primary pillars plus complementary services, preserving existing complementary coverage.
3. Centralize domain, email, phone, WhatsApp, canonical URL, and primary service labels in `lib/site.ts`; update layout metadata and home JSON-LD.
4. Add the three static practice routes with shared detail rendering, navigation between pillars, contextual CTAs, metadata, and sitemap entries.
5. Update the home hero, practice hierarchy, concise summaries, complementary area treatment, and differentiated “Nosotros”/“Por qué elegirnos” copy.
6. Extend the consultation request type and client form so pillar CTAs preselect the area and WhatsApp messages retain that context; add visible WhatsApp/email alternatives.
7. Replace team photo placeholders with approved images and profile fields, then wire real privacy and terms routes into the footer.
8. Validate content requirements, accessibility, responsive layout, route generation, canonical metadata, domain references, lint, and production build.

## Constitution Check (Post-Design)

The design still uses one Next.js application, local typed editorial data, shared components, and no new backend or dependency. The only external inputs are content approvals explicitly called out in the specification.

**Gate result (post-design): PASS**

## Complexity Tracking

No constitution violations or extra architectural complexity.
