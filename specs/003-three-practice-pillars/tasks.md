# Tasks: Three Practice Pillars

**Input**: Design documents from `/specs/003-three-practice-pillars/`

**Prerequisites**: [plan.md](./plan.md), [spec.md](./spec.md), [research.md](./research.md), [data-model.md](./data-model.md), [contracts/](./contracts/)

**Tests**: No new automated test framework is required by the specification. Validation tasks use the existing lint/build commands plus focused route, content, responsive, accessibility, and SEO checks.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm release inputs and establish the shared route/data boundaries.

- [ ] T001 Confirm the approved corporate mailbox under `getlegalandtax.com`, approved team photographs/biographies, and reviewed privacy/terms copy before publication; record the approved values in the implementation work without inventing missing facts. (Mailbox in use: `contacto@getlegalandtax.com`. Photographs, bios, and final legal copy remain pending editorial approval.)
- [x] T002 [P] Inspect the current practice, team, contact, metadata, sitemap, robots, and footer implementations in `data/practiceAreas.ts`, `data/team.ts`, `lib/consultation.ts`, `lib/site.ts`, `app/layout.tsx`, `app/page.tsx`, `app/sitemap.ts`, `app/robots.ts`, and `components/Footer.tsx`; preserve unrelated existing behavior.
- [x] T003 [P] Verify the active feature directory in `.specify/feature.json` is `specs/003-three-practice-pillars` and keep all implementation notes aligned with the contracts in `specs/003-three-practice-pillars/contracts/`.

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared typed content and identity used by every user story.

**⚠️ CRITICAL**: No user story implementation should be considered complete until this phase is finished.

- [x] T004 Refactor `data/practiceAreas.ts` into typed primary and complementary practice records, with exactly three primary records in the required order and all required service coverage from `spec.md`.
- [x] T005 [P] Extend `data/team.ts` with verified education, experience, leadership areas, public-procurement experience when applicable, and approved image paths; keep unverified fields out of public content.
- [x] T006 Centralize the canonical origin, approved corporate email, phones, WhatsApp number, primary service labels, and legal route links in `lib/site.ts`; remove production contact/domain literals from other modules.
- [x] T007 Update `app/layout.tsx` and `app/page.tsx` metadata/JSON-LD contracts to derive canonical, Open Graph, Twitter, image, email, telephone, and primary service values from `lib/site.ts` and `https://getlegalandtax.com`.
- [x] T008 Create the shared practice detail model and rendering boundary in `components/PracticePillarPage.tsx`, including H1, introduction, grouped services, contextual contact CTA, and links to the other primary pillars.

**Checkpoint**: Typed content, identity, metadata source of truth, and shared detail rendering are ready; user stories can proceed.

## Phase 3: User Story 1 - Identificar la propuesta central desde la portada (Priority: P1) 🎯 MVP

**Goal**: Make the three pillars and the requested audience/value proposition immediately understandable from the first viewport.

**Independent Test**: At desktop and mobile widths, load `/` without scrolling and verify the exact hero title/description are legible and both hero CTAs navigate to areas/contact.

### Implementation for User Story 1

- [x] T009 [US1] Replace the hero title and description in `components/Hero.tsx` with the exact approved three-pillar copy from FR-001 and FR-002, preserving readable contrast over the image.
- [x] T010 [US1] Update the hero CTA labels and destinations in `components/Hero.tsx` so one reaches the primary practice section and one reaches the consultation flow without depending on animation.
- [x] T011 [US1] Adjust `components/Navbar.tsx` and the home section anchors if needed so the hero, practice section, and contact navigation remain usable on desktop, mobile, keyboard, and reduced-motion settings.

**Checkpoint**: A first-time visitor can identify the three pillars and reach practices or contact from the first viewport.

## Phase 4: User Story 2 - Comparar y ampliar los tres pilares (Priority: P1)

**Goal**: Present the three primary practices first with concise content, then keep complementary services accessible with less emphasis and provide detail pages.

**Independent Test**: Inspect the home practice section, verify order/content/visual hierarchy, then open each primary detail URL and verify its required service content and contextual CTA.

### Implementation for User Story 2

- [x] T012 [P] [US2] Create `components/PracticePillarCard.tsx` for a concise title, description, concrete service list, detail-page CTA, and consultation CTA carrying the pillar context.
- [x] T013 [US2] Rework `components/PracticeAreas.tsx` to render the three primary records first in the required order, then complementary records with reduced visual prominence and concise descriptions; preserve usable existing anchors where applicable.
- [x] T014 [P] [US2] Create `app/practicas/corporativo/page.tsx` with page metadata and the shared corporate pillar detail content, including all eight required corporate topics and shareholder disputes.
- [x] T015 [P] [US2] Create `app/practicas/contratacion-publica/page.tsx` with page metadata and the shared public-procurement detail content covering before/during/after contract support, supplies, services, consulting, infrastructure, and disputes.
- [x] T016 [P] [US2] Create `app/practicas/tributario/page.tsx` with page metadata and the shared tax detail content unifying DIAN defense, transfer pricing, tax planning, audits, appeals, litigation, and coercive collection.
- [x] T017 [US2] Add primary practice URLs and legal URLs to `app/sitemap.ts`, using `siteUrl` and stable last-modified metadata without introducing alternate domains.
- [x] T018 [US2] Simplify and differentiate `components/About.tsx` and `components/WhyUs.tsx` so they do not repeat the same long value proposition already communicated by the hero and practice pillars.

**Checkpoint**: The home and all three pillar pages independently communicate the prioritized service architecture.

## Phase 5: User Story 3 - Contactar con contexto y confianza (Priority: P1)

**Goal**: Let visitors contact the firm through a primary practice CTA with the selected area preserved.

**Independent Test**: Open contact from each primary pillar, verify preselection, submit a valid form, and verify the selected area is included in the WhatsApp/email contact path.

### Implementation for User Story 3

- [x] T019 [US3] Define a typed primary-practice identifier/display-label mapping in `lib/consultation.ts` and update `ConsultationRequest` so only the three primary context values are preselected while complementary choices remain intentionally supported if required by the existing catalog.
- [x] T020 [US3] Update `components/ConsultationForm.tsx` to accept optional initial practice context, prioritize the three primary options, preserve editable selection, retain validation, and initialize correctly when no context is supplied.
- [x] T021 [US3] Update `components/FinalCTA.tsx` and all home/detail consultation CTAs to pass the selected practice context into the form using the shared typed mechanism.
- [x] T022 [US3] Update `lib/consultation.ts` so WhatsApp messages include the selected primary practice label and use the centralized WhatsApp/contact identity; surface failures through the existing visible error state.
- [x] T023 [US3] Add visible WhatsApp and approved corporate email alternatives to `components/FinalCTA.tsx`, `components/Footer.tsx`, and the consultation success state while retaining verified telephone alternatives.

**Checkpoint**: Each primary pillar produces a contextual, usable contact journey on desktop and mobile.

## Phase 6: User Story 4 - Validar credenciales, legalidad y confianza técnica (Priority: P2)

**Goal**: Show complete verified profiles, real legal routes, and consistent technical identity.

**Independent Test**: Review every team profile, open both legal routes from the footer, and inspect canonical/social/JSON-LD/sitemap/robots values for the production domain.

### Implementation for User Story 4

- [x] T024 [US4] Replace the `[Fotografía]` fallback in `components/Team.tsx` with approved `next/image` portraits or an approved editorial fallback, and render verified education, experience, leadership areas, and public-procurement experience without inventing credentials.
- [x] T025 [P] [US4] Create `app/privacidad/page.tsx` with the firm-approved privacy content, page metadata, accessible headings, and a clear reviewed-content status if approval is still pending.
- [x] T026 [P] [US4] Create `app/terminos/page.tsx` with the firm-approved terms content, page metadata, accessible headings, and a clear reviewed-content status if approval is still pending.
- [x] T027 [US4] Replace `#` privacy and terms links in `components/Footer.tsx` with `/privacidad` and `/terminos`; use the centralized corporate email and canonical contact values.
- [x] T028 [US4] Audit all production source references for `getlegalcol.com`, `getlegalcol@gmail.com`, `href="#"`, and `[Fotografía]`; replace only in-scope references and preserve unrelated external documentation links.

**Checkpoint**: Profiles, legal navigation, and public identity meet the trust and technical requirements.

## Phase 7: Polish & Cross-Cutting Validation

**Purpose**: Validate all stories together and prevent regressions.

- [x] T029 [P] Run content checks against `specs/003-three-practice-pillars/spec.md`: exact hero copy, primary order, all mandatory service terms, unified tax/DIAN practice, and complementary-area visibility.
- [x] T030 [P] Verify responsive and accessibility behavior at approximately 375 px and desktop widths: no horizontal overflow, visible focus, keyboard navigation, descriptive links, usable form controls, and content available with reduced motion or blocked images.
- [x] T031 [P] Inspect rendered canonical, Open Graph, Twitter, JSON-LD, `/sitemap.xml`, and `/robots.txt` values to confirm every public URL derives from `https://getlegalandtax.com`.
- [x] T032 Run `git diff --check` and `npm run lint`; fix only errors introduced by this feature.
- [x] T033 Run `npm run build` and verify all three practice routes plus `/privacidad` and `/terminos` build successfully with no TypeScript, metadata, or route-generation errors.
- [x] T034 Update `README.md` only if the new routes, editorial inputs, or production environment configuration require developer/deployer documentation; do not add planning notes.

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No implementation dependency, but T001 is a release-content prerequisite.
- **Foundational (Phase 2)**: Depends on T001–T003 and blocks user-story completion.
- **User Story 1 (Phase 3)**: Depends on T004, T006, and T007.
- **User Story 2 (Phase 4)**: Depends on T004, T007, and T008.
- **User Story 3 (Phase 5)**: Depends on T006, T019, and the shared detail/card CTAs from User Story 2.
- **User Story 4 (Phase 6)**: Depends on T005, T006, and T007; legal pages also depend on T001.
- **Polish (Phase 7)**: Depends on all implementation phases.

### Parallel Opportunities

- T002 and T003 can run in parallel during setup.
- T005, T006, and T008 can be developed in parallel after the editorial inputs and current-structure review are complete.
- T012, T014, T015, and T016 can be developed in parallel after the practice model and shared detail boundary are defined.
- T025 and T026 can be developed in parallel once approved legal content is available.
- T029, T030, and T031 can be performed in parallel after implementation; T032 and T033 are final gates.

## Implementation Strategy

### MVP First

1. Complete T001–T008 foundational work.
2. Complete T009–T011 for the first-viewport message.
3. Complete T012–T018 for the primary practice hierarchy and detail pages.
4. Validate the home and three practice pages before continuing to contact/profile polish.

### Incremental Delivery

1. **Foundation**: typed practices, identity, metadata, and shared detail rendering.
2. **P1 content discovery**: exact hero and prioritized practice architecture.
3. **P1 conversion**: contextual form, WhatsApp, email, and phone alternatives.
4. **P2 trust/technical**: profiles, legal pages, footer routes, and domain audit.
5. **Release validation**: responsive/accessibility/content/SEO checks, lint, and build.
