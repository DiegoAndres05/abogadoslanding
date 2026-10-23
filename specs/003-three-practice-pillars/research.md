# Research: Three Practice Pillars

## Decision 1: Keep editorial content in typed local data

- **Decision**: Extend `data/practiceAreas.ts` and `data/team.ts` rather than introducing a CMS or API.
- **Rationale**: The current site is a static marketing landing with all content in local TypeScript. The requested pages are a small, finite set and need build-time reliability.
- **Alternatives rejected**:
  - CMS/API: adds operational and deployment complexity not required by the brief.
  - Duplicated copy in each page: increases repetition and makes home/detail drift likely.

## Decision 2: Use static App Router routes for the three pillars

- **Decision**: Add `/practicas/corporativo`, `/practicas/contratacion-publica`, and `/practicas/tributario` as server-rendered routes backed by shared data and a shared detail component.
- **Rationale**: Stable readable URLs support direct linking, SEO, sitemap generation, and no-JavaScript navigation.
- **Alternatives rejected**:
  - Hash-only detail sections: cannot satisfy the requested own page per pillar or provide independent metadata.
  - One dynamic route with unvalidated arbitrary slugs: weaker type safety and easier accidental 404/content mismatch.

## Decision 3: Centralize site identity and contact channels

- **Decision**: Store canonical origin, corporate email, telephone numbers, WhatsApp number, and primary service labels in `lib/site.ts`.
- **Rationale**: Existing `siteUrl` is already shared by layout, sitemap, robots, and JSON-LD. Extending that source prevents `getlegalcol.com` and personal Gmail references from persisting in separate components.
- **Alternatives rejected**:
  - Inline strings in each component: current source of domain/contact drift.
  - Environment-only identity: production still needs a safe default and consistent static metadata.

## Decision 4: Pass consultation context through a typed initial value

- **Decision**: Give `ConsultationForm` an optional primary-area prop and use the same canonical area values in CTA links/query state and WhatsApp message construction.
- **Rationale**: The form is client-side, while practice pages and home cards can remain server-rendered. A typed context is more reliable than parsing display labels throughout the app.
- **Alternatives rejected**:
  - Separate form per practice: duplicates validation and submission behavior.
  - Unstructured query strings only: permits invalid labels and loses a single source of truth.

## Decision 5: Treat missing editorial assets as a release gate

- **Decision**: Do not invent biographies, legal text, or portraits. Implement typed fields and approved-image references, and block final publication of incomplete profiles/legal pages until content is supplied.
- **Rationale**: The specification explicitly requires factual profile information and real legal pages; placeholder text would create a trust and compliance defect.
- **Alternatives rejected**:
  - Keep `[Fotografía]`: visibly fails the requirement.
  - Generate or infer credentials/photos: unsafe and factually unverifiable.

## Decision 6: Reuse existing motion with safe content defaults

- **Decision**: Keep Framer Motion/GSAP effects as progressive enhancement. Never make pillar copy, CTAs, or form controls dependent on animation completion.
- **Rationale**: Existing `MotionConfig` honors reduced motion, and the specification requires usable content when motion or images fail.
- **Alternatives rejected**:
  - Add a new animation system: unnecessary dependency and coordination cost.
  - Hide content before hydration: risks blank content and harms accessibility/SEO.
