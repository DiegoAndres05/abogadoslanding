# Feature Specification: Practice Areas Scroll Motion

**Feature Branch**: `002-practice-areas-scroll`

**Created**: 2026-09-16

**Status**: Draft

**Input**: User description: "me gustaria que en la parte de areas de practicas al hacer scroll le agregaras un efecto de gsap, lo dejo a tu criterio cual es la mejor"

## Clarifications

### Session 2026-09-16

- Q: ¿El revelado al scroll debe aplicarse solo a las 8 filas de servicio, o también al título introductorio de la sección? → A: Solo las 8 filas (recuadro + tarjeta)
- Q: Si el visitante sube y vuelve a bajar, ¿cada fila debe animarse otra vez o quedarse ya revelada? → A: Una vez: al volver, la fila ya se ve revelada

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Recorrer las áreas con un revelado al scroll (Priority: P1)

Un visitante baja por la landing hasta áreas de práctica. El título introductorio de la sección se lee de inmediato. En lugar de ver los ocho bloques de servicio ya estáticos, cada **fila** se revela cuando entra en la vista: primero el recuadro visual y, con un desfase breve, la tarjeta de texto. El movimiento es corto, suave y profesional (desplazamiento ligero hacia arriba y aparición), no un show que quite el control del scroll.

**Why this priority**: Es el único cambio pedido; da percepción de calidad sin rediseñar contenido ni layout.

**Independent Test**: Abrir la home, ir a áreas de práctica y hacer scroll lento. Cada fila debe animarse al entrar; el contenido (título, párrafo, especialidades, CTA) permanece el mismo.

**Acceptance Scenarios**:

1. **Given** un visitante que llega a la sección haciendo scroll hacia abajo, **When** un bloque de área entra en la ventana, **Then** ese bloque se revela con un movimiento de entrada (aparición + ligero desplazamiento vertical), no aparece de golpe como el resto de la página estática.
2. **Given** varios bloques en la sección, **When** el visitante sigue bajando, **Then** cada bloque anima al llegar su turno (uno tras otro según el scroll), no los ocho a la vez al cargar la página.
3. **Given** el recuadro visual y la tarjeta de un mismo bloque, **When** ese bloque entra en vista, **Then** el recuadro se revela un instante antes que la tarjeta, para leerse como un par ordenado.

---

### User Story 2 - Respetar quien prefiere menos movimiento (Priority: P2)

Un visitante con “reducir movimiento” activado en el sistema debe poder leer las ocho áreas sin animación. El layout, textos y CTA no cambian.

**Why this priority**: Accesibilidad y cumplimiento de expectativa de sistema; no bloquea el valor visual para el resto.

**Independent Test**: Activar reduce-motion (o equivalente) y recargar: los bloques son visibles de inmediato al scrollear, sin entrada animada.

**Acceptance Scenarios**:

1. **Given** preferencia de sistema de reducir movimiento, **When** el visitante recorre las áreas, **Then** ve el contenido completo sin revelados ni deslizamientos.
2. **Given** esa misma preferencia, **When** usa “Agenda una consulta” o el menú, **Then** anclas y CTA siguen funcionando igual.

---

### User Story 3 - No perder el control del scroll ni la lectura (Priority: P2)

El visitante sigue siendo dueño del scroll: no hay sección “pegada”, ni línea de tiempo que lo arrastre, ni parallax agresivo que dificulte leer el párrafo. En teléfono el mismo revelado por bloque aplica, sin jank evidente ni contenido que salte de sitio.

**Why this priority**: Ocho bloques largos: un scroll hijacked arruinaría la landing. Hay que acotar el tipo de efecto.

**Independent Test**: Recorrer toda la sección en desktop y ~375px: se puede parar, volver atrás y usar el CTA en cualquier momento.

**Acceptance Scenarios**:

1. **Given** un visitante a mitad de la sección, **When** deja de hacer scroll, **Then** la página se detiene; el efecto no continúa solo ni “pinnea” el bloque.
2. **Given** un visitante que sube de nuevo, **When** un bloque ya visto sale y vuelve a entrar, **Then** permanece revelado: no vuelve a animarse ni se oculta.
3. **Given** un teléfono, **When** recorre las áreas, **Then** el revelado no tapa el título ni provoca desplazamiento horizontal.

---

### Edge Cases

- Si un bloque ya está en pantalla al cargar (pantalla alta o ancla `#areas` / `#{slug}`), ese bloque se muestra visible sin obligar al usuario a scrollear para “desbloquearlo”.
- Si las animaciones no pueden ejecutarse (script bloqueado, error), el contenido permanece visible y usable (degradación: layout actual sin motion).
- El efecto no aplica a otras secciones (hero, equipo, pie).
- El CTA “Agenda una consulta” sigue siendo clicable durante y después de la animación.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Al hacer scroll en áreas de práctica, cada una de las ocho filas de servicio MUST revelarse cuando entra en la ventana de visualización.
- **FR-002**: El revelado MUST ser un movimiento breve y contenido (aparición con desplazamiento vertical ligero), adecuado a un despacho profesional.
- **FR-003**: Dentro de cada bloque, el recuadro visual MUST iniciar su revelado antes que la tarjeta de texto (desfase perceptible pero corto).
- **FR-004**: Los bloques MUST animarse de forma escalonada según el scroll, no todos juntos al cargar la página.
- **FR-005**: El visitante MUST conservar el control del scroll: sin sección fijada, sin arrastre automático y sin parallax que desplace el texto de lectura.
- **FR-006**: Si el sistema indica reducir movimiento, la sección MUST mostrar los bloques ya visibles, sin el revelado.
- **FR-007**: El layout, copy, especialidades y CTA existentes MUST permanecer; este cambio es solo de motion.
- **FR-008**: Un bloque que entra en vista por ancla o que ya está visible al cargar MUST ser legible de inmediato.
- **FR-009**: Si el motion falla, el contenido MUST seguir visible (sin quedar oculto esperando una animación).
- **FR-010**: El encabezado introductorio de la sección (etiqueta, título y subtítulo) MUST permanecer estático: no forma parte del revelado al scroll.
- **FR-011**: Cada fila MUST animar su revelado **una sola vez**. Tras revelarse, MUST permanecer visible si el visitante sube y vuelve a bajar; no se oculta ni se repite el movimiento.

### Key Entities

- **Bloque de área**: Unidad visual ya publicada (recuadro + tarjeta). Atributo nuevo: momento de revelado al entrar en vista.
- **Preferencia de movimiento**: Señal del entorno del visitante (reducir movimiento sí/no) que activa o desactiva el revelado.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: En un scroll lento de escritorio, un revisor ve el revelado de un bloque en menos de un segundo desde que el bloque entra en vista.
- **SC-002**: Las ocho filas de servicio reciben el efecto; el encabezado de sección no anima; ninguna fila queda estática salvo con reducir movimiento o fallo del motion.
- **SC-003**: El 100% del contenido de cada bloque (título, párrafo, especialidades, CTA) sigue accesible; el motion no oculta texto de forma permanente.
- **SC-004**: Con reducir movimiento, un visitante lee cualquier bloque sin esperar animación.
- **SC-006**: Tras el primer revelado, volver a pasar por una fila no dispara un segundo movimiento ni la oculta.

## Assumptions

- El tipo de efecto elegido (criterio de producto) es **revelado al entrar en vista por fila de servicio**, con desfase recuadro → tarjeta. El encabezado de la sección no anima. Se descartan pin/scrub, horizontal scrolljacking y parallax fuerte: peores para lecturas largas y para móvil.
- El visitante pidió explícitamente **GSAP** como motor del movimiento; se trata como restricción de implementación, no como cambio de contenido.
- Se parte del layout ya publicado de las ocho áreas (filas imagen + descripción).
- Cada fila anima **una vez** al entrar; al subir y bajar de nuevo permanece revelada (sin loop ni reverse).
- Duración percibida objetivo: revelado completo de un bloque en torno a 0,5–0,8 s; desfase interno recuadro/tarjeta de unas décimas.
- El efecto se limita a la sección de áreas de práctica.

## Out of Scope

- Rediseño de layout, copy o especialidades.
- Animar el encabezado introductorio de áreas de práctica, hero, trust, equipo u otras secciones.
- Videos, Lottie o fotografías nuevas.
- Scroll horizontal, carrusel o bloques fijados tipo “scrollytelling”.
- Repetir o invertir el revelado cada vez que una fila entra o sale de la vista.
