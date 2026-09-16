# Quickstart: Practice Areas Layout

Manual validation after implementation. Data rules: [data-model.md](./data-model.md). UI rules: [contracts/practice-areas-ui.md](./contracts/practice-areas-ui.md).

## Prerequisites

- Node.js and project dependencies (`npm install`).
- Repo on branch `001-practice-areas-layout`.

## Run

```bash
npm run dev
```

Open the local URL shown by Next.js. Go to **Áreas de práctica** (`#areas`).

## Scenarios

### 1. Desktop layout (P1)

Viewport ≥ 1024px.

- Section sits on a dark background.
- Eight rows; no card grid.
- Each row: placeholder panel left, white copy card right.
- Each card has “¿Por qué importa?”, a 3–5 sentence paragraph, “Especialidades:”, and ≤ 5 checked items.
- No accordion. No stock photos.

### 2. Consult CTA (P2)

Click **Agenda una consulta** on any row → page scrolls to `#contacto` (`FinalCTA`).

### 3. Mobile layout (P2)

Viewport ~375px.

- Rows stack: panel then card.
- No horizontal page scroll.
- Title, paragraph, specialties, and CTA remain visible.

### 4. Anchors

- Menu “Áreas de práctica” still lands on `#areas`.
- Footer links to `#{slug}` land on that row.

### 5. Build sanity

```bash
npm run lint
npm run build
```

Expect success with no unused accordion state in `PracticeAreas`.
