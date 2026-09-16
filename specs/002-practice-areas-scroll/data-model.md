# Data Model: Practice Areas Scroll Motion

No persistence. Motion is session-only on existing `PracticeArea` rows.

## PracticeArea (unchanged)

Existing records in `data/practiceAreas.ts` (eight rows). This feature does not add fields.

## RowReveal (runtime, not stored)

| Field | Rules |
|-------|--------|
| `rowId` | Matches `PracticeArea.slug` / `id` |
| `hasPlayed` | Boolean; after first enter-view reveal, stays `true` for the page session |
| `panelState` | `pending` → `playing` → `revealed` |
| `cardState` | Same; starts after panel |

**Invariant:** `hasPlayed` never returns to `pending` on scroll up (FR-011).

## MotionPreference (environment)

| Field | Rules |
|-------|--------|
| `reduceMotion` | From the visitor’s system (`prefers-reduced-motion: reduce`) |

If `reduceMotion` is true: all rows behave as `revealed` with no `playing` state.

## Relationships

```text
PracticeArea 1 --- 1 RowReveal (client session)
MotionPreference 1 --- * RowReveal (disables all if reduce)
```
