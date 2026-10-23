# Feature Specification: Three Practice Pillars

**Feature Branch**: `003-three-practice-pillars`

**Created**: 2026-10-23

**Status**: Draft

**Input**: User description: "1. Cambiar el mensaje de portada. Los tres pilares deben aparecer desde el primer pantallazo. Proponemos: “Derecho corporativo, contratación pública y estrategia tributaria”. Como descripción: “Acompañamos a empresas, inversionistas y contratistas del Estado en la estructuración de negocios, la ejecución de contratos y la gestión de riesgos jurídicos y fiscales”. 2. Reorganizar las áreas de práctica. Presentar primero tres bloques protagonistas, en este orden: Derecho corporativo y negocios; Contratación pública y controversias contractuales; Derecho tributario y defensa fiscal. Las demás áreas deben quedar como servicios complementarios, con menor protagonismo. 3. Ampliar el contenido corporativo. Incluir expresamente constitución de sociedades, contratos comerciales, acuerdos de accionistas, gobierno corporativo, reorganizaciones y escisiones, fusiones y adquisiciones, inversión extranjera y conflictos societarios. 4. Dar mayor visibilidad a contratación pública. Actualmente aparece quinta. Debe mostrar acompañamiento antes, durante y después del contrato: revisión de pliegos y propuestas, consorcios y uniones temporales, ejecución, pagos, modificaciones, sanciones, liquidación y controversias. Incluir suministros, servicios y consultoría, además de infraestructura. 5. Unificar la práctica tributaria. Integrar los bloques actuales de tributario y defensa ante DIAN bajo una misma área principal. Precios de transferencia debe figurar como una especialidad dentro de ella, junto con planeación tributaria, fiscalizaciones, recursos, litigios y cobro coactivo. 6. Reducir extensión y repeticiones. En la página principal, cada práctica debe tener una descripción breve, servicios concretos y un botón para ampliar información. Crear una página propia por cada pilar y simplificar los textos repetidos de “Nosotros” y “Por qué elegirnos”. 7. Completar los perfiles del equipo. Reemplazar los marcadores de fotografía e incluir formación, experiencia y áreas que lidera cada socio. La experiencia en contratación pública también debe quedar visible. 8. Facilitar el contacto. Reordenar el formulario alrededor de las tres prácticas principales, identificar el área elegida al pulsar cada botón de consulta y ofrecer acceso claro a WhatsApp. Incorporar correo corporativo del dominio. 9. Corregir detalles técnicos. La página está en getlegalandtax.com, pero varias referencias del código apuntan a getlegalcol.com. Unificar dominio principal, canonical, metadatos sociales y datos estructurados. Los enlaces de privacidad y términos actualmente apuntan a “#”; deben llevar a sus páginas correspondientes. La prioridad es que cualquier visitante entienda rápidamente cuáles son nuestras tres prácticas centrales, qué problemas atendemos y cómo contactarnos."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Identificar la propuesta central desde la portada (Priority: P1)

Una persona que llega por primera vez a la página entiende, sin desplazarse, que GET Legal & Tax concentra su propuesta en derecho corporativo, contratación pública y estrategia tributaria. También reconoce a quién acompaña la firma y puede pasar directamente a conocer las áreas o solicitar contacto.

**Why this priority**: La comprensión inmediata de los tres pilares es el objetivo principal de la landing y determina si el visitante continúa explorando.

**Independent Test**: Abrir la home en escritorio y móvil, sin hacer scroll, y comprobar que los tres pilares y la descripción propuesta son legibles, que no quedan ocultos por la imagen y que los CTA llevan a áreas y contacto.

**Acceptance Scenarios**:

1. **Given** un visitante en la parte superior de la home, **When** observa el hero, **Then** lee el titular exacto “Derecho corporativo, contratación pública y estrategia tributaria”.
2. **Given** el mismo visitante, **When** lee la descripción del hero, **Then** encuentra el texto “Acompañamos a empresas, inversionistas y contratistas del Estado en la estructuración de negocios, la ejecución de contratos y la gestión de riesgos jurídicos y fiscales”.
3. **Given** un visitante que pulsa el CTA de áreas o contacto, **When** la navegación ocurre, **Then** llega a la sección correspondiente sin perder la posibilidad de volver al inicio.

### User Story 2 - Comparar y ampliar los tres pilares (Priority: P1)

Una persona que evalúa contratar la firma ve primero tres bloques protagonistas, en el orden corporativo, contratación pública y tributario. Cada bloque resume el problema que atiende, enumera servicios concretos y ofrece un botón para abrir una página propia. Las demás prácticas siguen disponibles como servicios complementarios, pero no compiten visualmente con los pilares.

**Why this priority**: La jerarquía de servicios permite que el visitante identifique rápidamente la oferta prioritaria y evita que el catálogo actual diluya el posicionamiento.

**Independent Test**: Ir a la sección de prácticas y verificar el orden, la diferencia visual de protagonismo, el contenido breve de cada bloque y que cada CTA abre la página del pilar correcto.

**Acceptance Scenarios**:

1. **Given** un visitante en la sección de prácticas de la home, **When** recorre los bloques principales, **Then** aparecen primero “Derecho corporativo y negocios”, “Contratación pública y controversias contractuales” y “Derecho tributario y defensa fiscal”, en ese orden.
2. **Given** el bloque corporativo, **When** lo lee, **Then** identifica constitución de sociedades, contratos comerciales, acuerdos de accionistas, gobierno corporativo, reorganizaciones y escisiones, fusiones y adquisiciones, inversión extranjera y conflictos societarios.
3. **Given** el bloque de contratación pública, **When** lo lee, **Then** identifica acompañamiento antes, durante y después del contrato: pliegos y propuestas, consorcios y uniones temporales, ejecución, pagos, modificaciones, sanciones, liquidación y controversias; también reconoce suministros, servicios, consultoría e infraestructura.
4. **Given** el bloque tributario, **When** lo lee, **Then** encuentra una sola práctica que integra tributario y defensa ante DIAN, con precios de transferencia, planeación tributaria, fiscalizaciones, recursos, litigios y cobro coactivo como servicios o especialidades.
5. **Given** una práctica complementaria, **When** el visitante la compara con un pilar, **Then** permanece accesible pero usa un tratamiento secundario y una descripción más breve.
6. **Given** un visitante que selecciona “Conocer más” en un pilar, **When** se activa el enlace, **Then** llega a una página propia que amplía ese pilar y conserva un CTA de contacto contextual.

### User Story 3 - Contactar con contexto y confianza (Priority: P1)

Una persona con una necesidad jurídica puede elegir una de las tres prácticas centrales desde el formulario o desde un CTA de servicio. La elección queda identificada en la solicitud, y el visitante puede usar WhatsApp o un correo corporativo del dominio sin buscar esos datos en otra parte.

**Why this priority**: Un contacto fácil y contextual convierte la comprensión de la oferta en una oportunidad comercial medible.

**Independent Test**: Abrir el formulario desde cada pilar, confirmar que la práctica queda preseleccionada, completar una solicitud válida y verificar que los canales de WhatsApp y correo corporativo son visibles y funcionales.

**Acceptance Scenarios**:

1. **Given** un visitante que pulsa consultar desde un pilar, **When** se abre el formulario, **Then** el campo de área queda preseleccionado con ese pilar y puede modificarse.
2. **Given** una solicitud válida, **When** el visitante la envía, **Then** el mensaje de contacto conserva el área elegida junto con sus datos y descripción.
3. **Given** un visitante que prefiere mensajería, **When** pulsa WhatsApp, **Then** se abre un enlace de WhatsApp con un mensaje inicial que identifica el área seleccionada cuando exista.
4. **Given** un visitante que prefiere correo, **When** pulsa el correo corporativo, **Then** se abre un enlace `mailto` con un buzón del dominio `getlegalandtax.com`.

### User Story 4 - Validar credenciales, legalidad y confianza técnica (Priority: P2)

Una persona que está por contactar puede revisar quién lidera cada servicio, qué formación y experiencia tiene cada socio y cuál es su experiencia en contratación pública. También puede acceder a privacidad y términos, mientras los buscadores y redes reciben URLs coherentes con el dominio público.

**Why this priority**: Los perfiles completos y las señales técnicas reducen fricción y mejoran la confianza, pero dependen de los datos editoriales que la firma debe validar.

**Independent Test**: Revisar la sección de equipo, abrir las páginas legales desde el footer y comprobar que canonical, Open Graph, Twitter, JSON-LD, sitemap y robots usan únicamente `https://getlegalandtax.com`.

**Acceptance Scenarios**:

1. **Given** un visitante en la sección de equipo, **When** observa cada socio, **Then** ve una fotografía real o aprobada, formación, experiencia, áreas que lidera y, cuando aplique, experiencia en contratación pública; no aparece ningún marcador de fotografía.
2. **Given** un visitante en el footer, **When** pulsa privacidad o términos, **Then** llega a una ruta de página real y no a `#`.
3. **Given** un rastreador o una red social, **When** solicita los metadatos del sitio, **Then** canonical, URL, Open Graph, Twitter y JSON-LD usan el dominio `getlegalandtax.com` y describen los tres pilares.

### Edge Cases

- Si un CTA de pilar se activa sin JavaScript, el enlace debe conservar una ruta de página válida y el formulario debe seguir siendo accesible.
- Si no se ha entregado una fotografía aprobada de un socio, no se debe mostrar “[Fotografía]” ni inventar una imagen identificable como retrato; se debe usar una alternativa editorial aprobada y accesible.
- Si un visitante llega a una página de pilar por URL directa, debe encontrar el título, servicios, CTA de contacto y navegación hacia los otros pilares.
- Si el formulario se abre sin pilar de origen, el área debe iniciar sin selección y exigir una elección antes del envío.
- Si WhatsApp está bloqueado o no está disponible, el sitio debe mantener visibles teléfono y correo como alternativas.
- Las prácticas complementarias no deben desaparecer: su tratamiento secundario no implica eliminar sus rutas o servicios existentes.
- Los textos de privacidad y términos deben ser revisados por la firma antes de publicarse; no se debe presentar contenido legal inventado como versión definitiva.
- La canonicalización debe normalizar variantes con o sin `www`, rutas y barras finales sin generar URLs hacia `getlegalcol.com`.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: La home MUST mostrar en el primer pantallazo el titular exacto “Derecho corporativo, contratación pública y estrategia tributaria”.
- **FR-002**: La home MUST mostrar en el hero la descripción exacta “Acompañamos a empresas, inversionistas y contratistas del Estado en la estructuración de negocios, la ejecución de contratos y la gestión de riesgos jurídicos y fiscales”.
- **FR-003**: La sección principal de prácticas MUST presentar primero, y en este orden, los tres pilares: derecho corporativo y negocios; contratación pública y controversias contractuales; derecho tributario y defensa fiscal.
- **FR-004**: Cada pilar MUST tener una descripción breve, una lista de servicios concretos y un CTA para ampliar información.
- **FR-005**: El contenido corporativo MUST incluir constitución de sociedades, contratos comerciales, acuerdos de accionistas, gobierno corporativo, reorganizaciones y escisiones, fusiones y adquisiciones, inversión extranjera y conflictos societarios.
- **FR-006**: El contenido de contratación pública MUST cubrir las etapas anterior, durante y posterior al contrato, incluyendo revisión de pliegos y propuestas, consorcios y uniones temporales, ejecución, pagos, modificaciones, sanciones, liquidación y controversias.
- **FR-007**: La práctica de contratación pública MUST mencionar contratos de suministros, servicios, consultoría e infraestructura.
- **FR-008**: El sitio MUST consolidar tributario y defensa ante DIAN en un único pilar principal.
- **FR-009**: El pilar tributario MUST incluir precios de transferencia, planeación tributaria, fiscalizaciones, recursos, litigios y cobro coactivo.
- **FR-010**: Las prácticas restantes MUST permanecer accesibles como servicios complementarios con menor jerarquía visual y textos resumidos.
- **FR-011**: El sitio MUST publicar una página propia para cada pilar principal, con contenido ampliado, servicios agrupados, navegación entre pilares y CTA contextual de contacto.
- **FR-012**: Las páginas de pilar MUST ser accesibles mediante URLs estables, legibles y enlazables directamente desde la home.
- **FR-013**: La home MUST evitar repeticiones extensas entre las secciones “Nosotros” y “Por qué elegirnos”; cada una debe tener un propósito editorial diferenciado y una descripción concisa.
- **FR-014**: Cada perfil de socio MUST mostrar fotografía aprobada, formación, experiencia y áreas lideradas; la experiencia en contratación pública MUST aparecer cuando corresponda.
- **FR-015**: El formulario MUST priorizar como opciones las tres prácticas principales y permitir preseleccionar el área al llegar desde un CTA de pilar.
- **FR-016**: La solicitud enviada MUST conservar el área seleccionada en el mensaje o destino de contacto.
- **FR-017**: El sitio MUST ofrecer un CTA visible de WhatsApp y un correo corporativo con dominio `getlegalandtax.com`, además de alternativas telefónicas existentes.
- **FR-018**: El dominio canónico del sitio MUST ser `https://getlegalandtax.com`; ninguna referencia pública de dominio MUST apuntar a `getlegalcol.com`.
- **FR-019**: Canonical, Open Graph, Twitter Cards, JSON-LD, sitemap y robots MUST derivar del mismo dominio principal.
- **FR-020**: El JSON-LD MUST describir la firma como servicio legal y reflejar corporativo, contratación pública y tributario como servicios principales.
- **FR-021**: Privacidad y términos MUST tener páginas o rutas reales y los enlaces del footer MUST apuntar a ellas, nunca a `#`.
- **FR-022**: Todos los CTA, páginas y formularios MUST conservar navegación usable en móvil, teclado y lectores de pantalla, incluyendo nombres accesibles para iconos y enlaces.
- **FR-023**: El contenido debe degradar de forma segura: si no carga una animación o imagen, los textos, servicios y CTAs deben seguir disponibles.

### Key Entities

- **Pilar de práctica**: Una de las tres áreas centrales; tiene slug estable, título, descripción breve, problema que atiende, servicios, especialidades, imagen aprobada, CTA y página ampliada.
- **Servicio complementario**: Área existente fuera de los tres pilares, con título, resumen, servicios y enlace, presentada con menor protagonismo sin eliminarse.
- **Perfil de socio**: Persona que lidera servicios; incluye nombre, cargo, fotografía aprobada, formación, experiencia, áreas lideradas, experiencia en contratación pública cuando corresponda y canal de contacto.
- **Solicitud de consulta**: Datos de contacto, organización, teléfono, correo, área seleccionada y descripción de la necesidad; el área debe conservarse al enviar o derivar a WhatsApp.
- **Página legal**: Documento público de privacidad o términos con ruta estable, título, contenido revisado y enlace desde el footer.
- **Identidad de sitio**: Dominio, nombre, correo corporativo, teléfonos, URLs canónicas, metadatos sociales y datos estructurados compartidos por toda la aplicación.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: En una prueba de cinco segundos sobre la home, al menos 90% de participantes identifica los tres pilares y a quién acompaña la firma sin desplazarse.
- **SC-002**: En una prueba guiada, 100% de los tres bloques protagonistas aparece en el orden requerido y cada uno ofrece un CTA que llega a su página propia.
- **SC-003**: En una revisión de contenido, 100% de los servicios obligatorios de corporativo, contratación pública y tributario están presentes, sin separar nuevamente tributario y defensa DIAN en bloques principales.
- **SC-004**: En una prueba con cada pilar, 3 de 3 CTAs preseleccionan correctamente el área en el formulario y el área llega al mensaje de contacto.
- **SC-005**: En móvil de 375 px de ancho, 100% de títulos, servicios, botones, WhatsApp, correo y enlaces legales permanecen visibles y operables sin desplazamiento horizontal.
- **SC-006**: Una auditoría de referencias públicas encuentra cero URLs o metadatos que usen `getlegalcol.com` y cero enlaces de privacidad o términos que apunten a `#`.
- **SC-007**: En una auditoría de perfiles, cada socio tiene fotografía aprobada, formación, experiencia y áreas lideradas, y los datos faltantes están identificados explícitamente antes de publicación.
- **SC-008**: Una persona puede llegar desde la home a una página de pilar y a contacto en un máximo de dos interacciones desde cualquier bloque protagonista.

## Assumptions

- `https://getlegalandtax.com` es el dominio público y canónico definitivo; `NEXT_PUBLIC_SITE_URL` puede configurarlo por entorno, pero su valor de producción debe ser ese dominio.
- Los slugs sugeridos para los pilares serán legibles y estables, por ejemplo `/practicas/corporativo`, `/practicas/contratacion-publica` y `/practicas/tributario`; pueden ajustarse en planificación sin cambiar la jerarquía.
- El correo exacto del dominio será definido por la firma antes de implementar (`[NEEDS CLARIFICATION: confirmar el buzón corporativo, por ejemplo contacto@getlegalandtax.com]`); la especificación no autoriza sustituirlo por `getlegalcol@gmail.com`.
- La firma entregará o aprobará fotografías, formación, trayectoria y áreas lideradas de cada socio (`[NEEDS CLARIFICATION: confirmar las fuentes editoriales y fotografías autorizadas para los perfiles]`).
- La firma entregará o aprobará el contenido definitivo de privacidad y términos (`[NEEDS CLARIFICATION: confirmar el texto legal y responsable de su aprobación]`).
- Las prácticas complementarias actuales se conservarán, pero se resumirán y se mostrarán después de los tres pilares.
- WhatsApp seguirá siendo un canal de salida del formulario en la primera versión; no se requiere persistencia propia ni un CRM para cumplir esta especificación.
- La accesibilidad existente, el sistema visual y las animaciones de la landing se conservarán salvo cuando interfieran con jerarquía, lectura, contacto o degradación segura.
