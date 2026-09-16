# Data Model: Practice Areas Layout

Static content in `data/practiceAreas.ts`. No persistence, auth, or lifecycle.

## PracticeArea

Published legal service line on the landing.

| Field | Type | Rules |
|-------|------|--------|
| `id` | number | Unique, stable, 1–8 |
| `slug` | string | Unique kebab-case; used as in-page `id` on the row (`#slug`) |
| `title` | string | Official area name; shown on the visual panel |
| `whyItMatters` | string | 3–5 sentences; Spanish; shown under “¿Por qué importa?” |
| `featuredSpecialties` | string[] | Length 1–5; items shown with check marks |
| `services` | string[] | Full internal catalog; not rendered in the new section |
| `visualVariant` | enum | One of eight brand placeholder tokens (see below) |
| `icon` | optional component | Unused in the new section; may remain for other UI |

**Count:** exactly eight records. All eight MUST be rendered.

**Uniqueness:** `id`, `slug`, and `visualVariant` are unique.

## Specialty (embedded)

A short label, not a separate table.

| Field | Type | Rules |
|-------|------|--------|
| value | string | Non-empty; Spanish; no nested markup |

`featuredSpecialties` is a curated subset of `services` (same meaning, possibly shorter wording). The section MUST NOT render `services`.

## ConsultCallToAction

Not stored per row. Shared destination:

| Field | Value |
|-------|--------|
| label | `Agenda una consulta` |
| href | `#contacto` |

## visualVariant tokens

Eight distinct CSS tokens, e.g. `navy-gold-diag`, `gold-mesh`, `navy-bars`, `charcoal-arc`, `navy-grid`, `gold-wash`, `navy-split`, `ivory-edge`. Each maps to gradient/overlay classes only (no photograph).

## Validation (content)

- Reject publishing a row missing `title`, `whyItMatters`, `visualVariant`, or `featuredSpecialties.length < 1`.
- Reject `featuredSpecialties.length > 5`.
- `whyItMatters` should contain 3–5 sentence-ending periods (editorial check in implementation, not a runtime schema).

## Relationships

```text
PracticeArea 1 --- 1..5 featuredSpecialties (displayed)
PracticeArea 1 --- * services (not displayed in this section)
PracticeArea * --- 1 ConsultCallToAction (shared #contacto)
Footer        * --- PracticeArea.slug (existing links)
```
