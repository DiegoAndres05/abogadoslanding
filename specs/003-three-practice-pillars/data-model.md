# Data Model: Three Practice Pillars

## Practice pillar

Canonical editorial record for a primary practice.

| Field | Type | Rules |
|---|---|---|
| `id` | string | Stable unique identifier |
| `slug` | string | Stable route segment |
| `title` | string | Public title |
| `shortDescription` | string | Home summary; concise |
| `description` | string | Detail-page introduction |
| `stageSummary` | string[] | Optional before/during/after coverage |
| `services` | string[] | Concrete services; required coverage from spec |
| `specialties` | string[] | Curated specialties, including transfer pricing under tax |
| `image` | string | Approved asset or brand fallback |
| `isPrimary` | boolean | `true` for exactly three records |
| `complementaryAreaIds` | string[] | Optional related services |

Primary records and required coverage:

1. `corporativo`: companies, commercial contracts, shareholder agreements, governance, reorganizations/splits, M&A, foreign investment, shareholder disputes.
2. `contratacion-publica`: tender documents/proposals, consortiums/temporary unions, execution, payments, modifications, sanctions, liquidation, disputes; supplies, services, consulting, infrastructure.
3. `tributario`: transfer pricing, tax planning, audits/investigations, administrative appeals, litigation, DIAN defense, coercive collection.

## Complementary practice

Existing non-primary services remain discoverable with:

| Field | Type | Rules |
|---|---|---|
| `id` | string | Stable unique identifier |
| `slug` | string | Existing or migrated stable anchor |
| `title` | string | Public title |
| `shortDescription` | string | Brief home text |
| `services` | string[] | Existing catalog, summarized in home |
| `isPrimary` | `false` | Must not be promoted above primary records |

## Team member

| Field | Type | Rules |
|---|---|---|
| `id` | string | Stable unique identifier |
| `name` | string | Public name |
| `role` | string | Public role |
| `image` | string | Approved portrait or approved editorial fallback |
| `education` | string[] | Verified formation |
| `experience` | string | Verified professional experience |
| `leadershipAreas` | string[] | Links to primary/complementary practice IDs |
| `publicProcurementExperience` | string | Required when applicable |
| `phone` | string | Existing contact channel |

## Consultation request

| Field | Type | Rules |
|---|---|---|
| `fullName` | string | Required |
| `organization` | string | Optional |
| `email` | string | Required and validated |
| `phone` | string | Required and validated |
| `interestArea` | `PrimaryPracticeId \| ""` | Required on submit; initialized from CTA when present |
| `description` | string | Optional |

The serialized WhatsApp message must include the display label corresponding to `interestArea`.

## Site identity

| Field | Type | Rules |
|---|---|---|
| `siteUrl` | URL | Production default `https://getlegalandtax.com` |
| `siteName` | string | `GET Legal & Tax` |
| `corporateEmail` | string | Domain `getlegalandtax.com`; supplied before release |
| `whatsappNumber` | string | Canonical international digits |
| `phoneNumbers` | string[] | Existing verified numbers |
| `primaryServiceTypes` | string[] | The three primary pillars |

## Legal page

| Field | Type | Rules |
|---|---|---|
| `slug` | `"privacidad" \| "terminos"` | Stable public route |
| `title` | string | Page title |
| `content` | editorial blocks | Approved by the firm before publication |
| `lastReviewed` | date | Visible or metadata value where appropriate |
