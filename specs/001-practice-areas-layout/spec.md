# Feature Specification: Practice Areas Layout

**Feature Branch**: `001-practice-areas-layout`

**Created**: 2026-09-16

**Status**: Draft

**Input**: User description: "En la parte de las areas de practicas, quiero que cambies eso e implementes un componente donde se muestre una imagen y al lado la descripcion del servicio correspondiente" (referencia visual adjunta: fila con foto + título superpuesto y CTA, y tarjeta de texto con “¿Por qué importa?” y “Especialidades”).

## Clarifications

### Session 2026-09-16

- Q: ¿Cuántas especialidades debe ver el visitante en cada bloque, para que la tarjeta no quede mucho más alta que la foto? → A: Lista corta (unas 5, como en la muestra)
- Q: ¿El texto de “¿Por qué importa?” debe ser un párrafo largo como en la muestra, o se deja la descripción corta que ya tiene cada área? → A: Párrafo largo (3–5 frases), al estilo de la muestra
- Q: ¿Este layout (foto grande + tarjeta) debe usarse en las 8 áreas actuales, o solo en un grupo destacado? → A: Las 8 áreas actuales, todas con este layout
- Q: ¿Para la primera versión usamos fotos profesionales de archivo (como en la muestra) o recuadros de reserva hasta que el despacho entregue fotos propias? → A: Reservas de marca (color/forma) hasta tener fotos propias

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Recorrer cada área con imagen y explicación (Priority: P1)

Un visitante de la landing llega a la sección de áreas de práctica para entender qué ofrece el despacho. En lugar de una grilla de tarjetas compactas, ve una lista de bloques. Cada bloque muestra, lado a lado, un recuadro visual de marca (reserva hasta tener foto propia) y la descripción del servicio (por qué importa y especialidades).

**Why this priority**: Es el cambio pedido y el núcleo de la sección; sin este layout la landing no cumple el brief visual.

**Independent Test**: Abrir la página de inicio, ir a “Áreas de práctica” y comprobar que cada área publicada aparece como un bloque imagen + descripción, no como tarjeta de grilla.

**Acceptance Scenarios**:

1. **Given** un visitante en la página principal, **When** llega a la sección de áreas de práctica, **Then** ve un bloque por cada área vigente del despacho, con imagen a un lado y texto del servicio al otro (en pantallas amplias).
2. **Given** un bloque de área, **When** el visitante lo observa, **Then** identifica el nombre del área sobre o junto a la imagen, un párrafo de 3–5 frases que explica por qué el servicio importa, y una lista corta de especialidades (unas 5, como en la referencia).
3. **Given** el diseño de referencia, **When** se compara con la sección, **Then** el patrón general coincide: recuadro visual con esquinas redondeadas, título superpuesto, acción para agendar consulta, y tarjeta de contenido con “¿Por qué importa?” y “Especialidades” (en v1 el recuadro es de marca, no una fotografía de archivo).

---

### User Story 2 - Agendar consulta desde un área concreta (Priority: P2)

El visitante que se reconoce en un área (por ejemplo, tributación o defensa fiscal) quiere pasar a contacto sin perder el contexto. Cada bloque incluye una acción visible “Agenda una consulta” que lo lleva al canal de contacto ya usado en el sitio.

**Why this priority**: El mock incluye el CTA en la imagen; convierte exploración de servicios en lead. Es valioso pero la sección sigue siendo útil aunque el CTA se valide después del layout.

**Independent Test**: Desde un bloque de área, activar “Agenda una consulta” y comprobar que llega al mismo destino de consulta que el resto de la landing.

**Acceptance Scenarios**:

1. **Given** un visitante leyendo un área, **When** activa “Agenda una consulta” en ese bloque, **Then** es llevado a solicitar una consulta (mismo destino que los demás llamados a la acción del sitio).
2. **Given** un visitante que solo explora, **When** no pulsa el CTA, **Then** puede seguir leyendo el resto de áreas sin interrupciones.

---

### User Story 3 - Leer las áreas en un teléfono (Priority: P2)

En una pantalla estrecha el visitante sigue pudiendo ver imagen y descripción de cada servicio, apiladas de forma clara (primero la imagen, debajo el texto), sin tener que interpretar una grilla densa.

**Why this priority**: Gran parte del tráfico de una landing de servicios profesionales llega desde el móvil; el mock es de escritorio y hay que definir el comportamiento estrecho.

**Independent Test**: Ver la sección en un ancho típico de teléfono y comprobar que cada área se lee en orden vertical y que título, texto, especialidades y CTA siguen visibles.

**Acceptance Scenarios**:

1. **Given** un visitante en un teléfono, **When** recorre las áreas, **Then** cada bloque se apila (imagen y luego descripción) y el contenido no se recorta de forma ilegible.
2. **Given** un visitante en escritorio, **When** ve la misma sección, **Then** imagen y descripción quedan en la misma fila, como en la referencia.

---

### Edge Cases

- En v1 no hay fotografía de archivo ni foto del despacho: el recuadro visual es una reserva de marca (color y forma), distinta por área, con título y CTA; no se deja un hueco vacío ni se usan fotos de stock.
- Si un área tiene un catálogo interno más largo, en el bloque público solo aparecen hasta cinco especialidades curadas; no hay control de “ver más” ni se vuelca la lista completa.
- Si falta el texto “por qué importa” de un área, no se publica un bloque incompleto: cada área debe tener imagen, título, un párrafo de 3–5 frases y al menos una especialidad destacada.
- La sección no debe romper el ancla de navegación existente hacia áreas de práctica: quien llega desde el menú debe caer en esta misma sección.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: La landing MUST reemplazar la presentación actual en grilla de tarjetas de áreas de práctica por una secuencia vertical de bloques “imagen + descripción”.
- **FR-002**: Cada bloque MUST mostrar, en pantallas amplias, la imagen del servicio a un lado y la descripción al otro, alineadas como una sola unidad visual.
- **FR-003**: El recuadro visual MUST incluir el nombre del área de forma destacada (superpuesto o integrado, como en la referencia) y un control “Agenda una consulta”.
- **FR-004**: La descripción MUST incluir un encabezado equivalente a “¿Por qué importa?”, un párrafo editorial de 3–5 frases (no un eslogan de una línea), un encabezado “Especialidades:” y una lista curada de hasta cinco especialidades con marcas de verificación.
- **FR-005**: El sitio MUST publicar este layout en las ocho áreas de práctica vigentes del despacho; no se recorta el catálogo a un subconjunto destacado.
- **FR-006**: En pantallas estrechas el bloque MUST apilar imagen y descripción para lectura vertical, conservando título, texto, especialidades y CTA.
- **FR-007**: El CTA de cada bloque MUST llevar al mismo flujo de agendamiento o contacto que ya usa la landing.
- **FR-008**: El visitante MUST ver las especialidades del bloque de forma inmediata, sin expandir/colapsar y sin un control para revelar el resto del catálogo.
- **FR-009**: La sección MUST conservar un fondo oscuro de marca que haga contrastar los recuadros visuales y las tarjetas claras de texto, siguiendo la referencia.
- **FR-010**: Cada área MUST tener un recuadro visual propio. En la primera versión ese recuadro MUST ser una reserva de marca (color y forma), identificable por área, no una fotografía de archivo. Las fotos propias del despacho podrán sustituirlo más adelante.
- **FR-011**: Cada bloque MUST mostrar como máximo cinco especialidades, seleccionadas para equilibrar la altura de la tarjeta con la imagen de referencia.

### Key Entities

- **Área de práctica**: Servicio del despacho que el visitante explora. Atributos: nombre, recuadro visual (reserva de marca en v1), párrafo de por qué importa (3–5 frases), hasta cinco especialidades destacadas, acción de consulta.
- **Especialidad**: Ítem concreto dentro de un área (por ejemplo, planeación fiscal transfronteriza). Relación: un área puede tener un catálogo interno más amplio; en la landing solo se publican hasta cinco especialidades destacadas por área.
- **Llamado a consulta**: Acción de contacto asociada a un área concreta, con el mismo destino que el resto del sitio.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Un visitante en escritorio identifica en menos de 5 segundos, para cualquier área visible, tanto el recuadro visual como el nombre y el texto de “por qué importa”.
- **SC-002**: Las ocho áreas vigentes aparecen en el nuevo patrón (ninguna queda solo en la grilla antigua ni se omite).
- **SC-003**: En un teléfono de ancho típico, un visitante puede leer título, párrafo y especialidades de un área sin desplazamiento horizontal de la página.
- **SC-004**: Desde cualquier bloque, un visitante llega al flujo de consulta en un solo gesto sobre “Agenda una consulta”.
- **SC-005**: Un revisor comparando con la imagen de muestra reconoce el mismo esquema: recuadro visual con título y botón, tarjeta blanca con “¿Por qué importa?” y lista de especialidades (el recuadro de v1 no tiene que ser una fotografía).
- **SC-008**: Ningún bloque de v1 usa una fotografía de archivo; todos usan una reserva de marca distinta.
- **SC-006**: Ningún bloque muestra más de cinco especialidades visibles.
- **SC-007**: Cada bloque incluye un párrafo de “¿Por qué importa?” de 3 a 5 frases, comparable en densidad a la muestra.

## Assumptions

- La referencia adjunta define el **patrón visual y de contenido por bloque**, no un catálogo distinto: se mantienen las áreas ya publicadas en la landing, no se sustituyen por “Tributación Internacional” / “Defensa fiscal” salvo que el copy actual ya corresponda a esas líneas.
- Las descripciones cortas actuales sirven de base, pero MUST ampliarse a un párrafo de 3–5 frases al tono de la muestra (riesgo, valor y enfoque del despacho). Las especialidades del bloque son un subconjunto curado (hasta cinco) del listado de servicios existente, no el listado completo.
- El encabezado general de la sección (título y subtítulo introductorios) puede adaptarse al fondo oscuro, pero no es obligatorio copiar el fragmento “en clínicas estratégicas” de la captura.
- No se exige que las filas alternen (imagen izquierda / imagen derecha); la referencia muestra imagen a la izquierda en todos los bloques visibles y ese es el default.
- No hay páginas interiores por área en este alcance: todo ocurre en la landing.
- En v1 no se usan fotos de archivo. El recuadro izquierdo es una reserva de marca (color y forma) por área. Las fotografías propias del despacho quedan fuera de este corte y podrán reemplazar la reserva después.
- El destino del CTA es el ya existente (contacto / WhatsApp / ancla de agenda), no un formulario nuevo por área.
- Idioma de la sección: español, alineado al resto del sitio.

## Out of Scope

- Rediseño de otras secciones (equipo, proceso, testimonios, pie de página).
- Nuevo CMS o panel para editar áreas.
- Filtros, buscador o pestañas entre áreas.
- Páginas de detalle por especialidad.
- Cambio del número o nombres oficiales de las áreas salvo corrección de copy menor para encajar en el nuevo bloque.
- Recortar el catálogo a un subconjunto destacado o mantener un segundo formato compacto para las áreas no principales.
- Publicar en esta sección el catálogo completo de servicios/especialidades de cada área.
- Dejar “¿Por qué importa?” como un eslogan de una o dos frases.
- Fotografías de archivo o sesión fotográfica del despacho en esta primera versión.
