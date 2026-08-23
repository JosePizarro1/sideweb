# Guía de identidad visual y UI/UX

## Focus Club Fitness Tacna

Esta guía reúne las decisiones visuales, de experiencia de usuario y de implementación utilizadas en la landing. Su objetivo es mantener una identidad consistente cuando se cambien textos, imágenes, productos o se agreguen nuevas secciones.

---

## 1. Objetivo de la experiencia

La landing debe comunicar en pocos segundos que Focus es un gimnasio cercano, enérgico y profesional. La conversión principal es iniciar una conversación por WhatsApp; las conversiones secundarias son consultar la ubicación, llamar y visitar Facebook.

Principios:

1. Mostrar energía sin sacrificar claridad.
2. Dar prioridad a la ubicación, servicios y contacto.
3. Mantener un solo llamado principal por bloque.
4. Evitar datos, marcas, precios o promociones no confirmados.
5. Diseñar primero para lectura móvil y luego ampliar a escritorio.

---

## 2. Personalidad de marca

| Atributo | Aplicación visual |
| --- | --- |
| Energía | Amarillo intenso, diagonales, rayos y movimiento breve. |
| Disciplina | Retícula firme, numeración y tipografía condensada. |
| Cercanía | Mensajes directos, dirección visible y WhatsApp permanente. |
| Confianza | Fotografías realistas, información verificable y jerarquía clara. |
| Progreso | Verbos de acción: entrenar, avanzar, superar y construir. |

Tono de comunicación: directo, motivador, breve y sin exageraciones. Se recomienda hablar en segunda persona: “tu objetivo”, “tu próxima sesión”, “empieza a tu ritmo”.

---

## 3. Paleta de colores

### Colores principales

| Token | Hexadecimal | Uso recomendado |
| --- | --- | --- |
| `--yellow` | `#FFC400` | CTA, palabras clave, índices y elementos de energía. |
| `--yellow-bright` | `#FFDB36` | Estado hover y foco destacado. |
| `--ink` | `#080808` | Fondo principal y texto sobre amarillo. |
| `--charcoal` | `#121212` | Tarjetas, footer y superficies secundarias. |
| `--paper` | `#F4F3EF` | Secciones claras y descanso visual. |
| Blanco | `#FFFFFF` | Titulares y contenido prioritario sobre negro. |

Neutros de apoyo:

- Texto secundario oscuro: `#555555`.
- Texto secundario claro: `#8F8F8F`.
- Línea clara: `rgba(255,255,255,.14)`.
- Línea oscura: `rgba(0,0,0,.16)`.

Proporción recomendada: 60 % negro/carbón, 25 % blanco cálido, 10 % amarillo y 5 % grises/transparencias. El amarillo debe guiar la mirada, no ocupar todos los fondos ni párrafos extensos.

```css
:root {
  --ink: #080808;
  --charcoal: #121212;
  --paper: #f4f3ef;
  --yellow: #ffc400;
  --yellow-bright: #ffdb36;
  --line: rgba(255, 255, 255, 0.14);
}
```

---

## 4. Tipografía

### Titulares

- Familia: **Barlow Condensed**.
- Pesos: 800 y 900.
- Uso: títulos, botones, indicadores y nombres de productos.
- Tratamiento: mayúsculas, interletraje ligeramente negativo y altura de línea compacta.

### Texto de lectura

- Familia: **Manrope**.
- Pesos: 400, 500, 600 y 700.
- Uso: párrafos, dirección, descripciones y textos auxiliares.
- Altura de línea: entre 1.6 y 1.75.

| Nivel | Escritorio | Móvil | Uso |
| --- | ---: | ---: | --- |
| H1 | 78–154 px | 68–94 px | Promesa principal del hero. |
| H2 | 58–116 px | 56–76 px | Título de sección. |
| H3 | 28–39 px | 28–34 px | Servicios y productos. |
| Body | 15–18 px | 14–16 px | Lectura principal. |
| Label | 9–12 px | 9–11 px | Categorías, índices y ayudas. |

No utilizar más de dos familias tipográficas. Si las fuentes externas no cargan, los fallbacks son `Impact` para títulos y `Arial` para cuerpo.

---

## 5. Logotipo

Archivo recomendado para la interfaz: `public/focus-logo-transparent.png`.

El archivo `public/focus-logo.png` se conserva como fuente original. Para encabezado, pie de página e icono se usa la versión transparente, evitando el rectángulo negro sobre fondos oscuros.

- Usar preferentemente sobre fondo negro o carbón.
- Mantener siempre la proporción original.
- No deformar, rotar, recolorear ni añadir nuevos efectos.
- Dejar un área libre equivalente, como mínimo, a la altura de la letra “F”.
- Tamaño aproximado: 168 px en escritorio y 140 px en móvil.
- Comprobar que el símbolo permanezca legible en formatos pequeños.

---

## 6. Espaciado y composición

Escala base de 8 px: `8 · 16 · 24 · 32 · 40 · 56 · 72 · 96 · 120 · 150`.

- Padding lateral: `clamp(24px, 8.5vw, 150px)`.
- Separación vertical de secciones: 90–150 px en escritorio.
- Padding lateral mínimo en móvil: 24 px.
- Los párrafos no deben superar aproximadamente 60–70 caracteres por línea.
- Evitar títulos pegados a imágenes, bordes o botones.
- El espacio vacío debe reforzar la jerarquía, no interrumpir el recorrido.

---

## 7. Componentes principales

### Cabecera

- Transparente sobre el hero.
- Logotipo a la izquierda, navegación al centro y CTA a la derecha.
- La navegación se oculta por debajo de 900 px.
- El CTA sigue visible en móvil.

### Hero

- Fotografía a pantalla completa con degradado oscuro para asegurar contraste.
- El H1 debe reconocerse antes de cualquier animación.
- CTA primario: promociones por WhatsApp.
- CTA secundario: desplazamiento hacia entrenamientos.
- La persona de la fotografía no debe quedar tapada por el texto ni sufrir un recorte extraño.

### Cintillo animado

- Palabras cortas: fuerza, disciplina, energía, resultados y Focus.
- Movimiento continuo, uniforme y lento.
- No incluir información imprescindible dentro del carrusel.

### Encabezados de sección

- Número sobre rectángulo amarillo.
- Etiqueta breve en mayúsculas.
- Título condensado de alto impacto.
- Secuencia actual: 01 experiencia, 02 entrenamiento, 03 productos y 04 ubicación.

### Tarjetas de entrenamiento

- Fondo negro, borde fino e icono lineal.
- Hover discreto: elevar hasta 6 px y aclarar el fondo.
- El texto explica el beneficio, no solo el nombre del servicio.

### Tarjetas de producto

- Imagen cuadrada optimizada en WebP.
- Etiqueta funcional, nombre, descripción breve y CTA de disponibilidad.
- Las imágenes son referenciales; marcas, precios y stock se confirman por WhatsApp.
- 3 columnas en escritorio, 2 en tablet y 1 en móvil.

### Sección motivacional

- Imagen panorámica con sujeto hacia un lateral.
- Degradado oscuro bajo el texto para mantener contraste.
- En móvil, el texto baja y la fotografía conserva visibles rostro y ejercicio.

### Ubicación

- Fondo amarillo para marcar el paso del interés a la visita.
- Dirección completa, referencia, teléfono y botón a Google Maps.
- Como existe una sola sede, no utilizar selectores de sucursal.

### WhatsApp flotante

- Visible en escritorio y móvil.
- Altura táctil mínima: 48 px.
- Extremo inferior derecho en escritorio; ancho casi completo en móvil.
- No debe tapar botones ni contenido importante.

### Footer y redes

- Mostrar enlaces con iconos reconocibles.
- Enlaces confirmados: Facebook, WhatsApp y Google Maps.
- No inventar la URL de Instagram; agregarla cuando se confirme el usuario oficial.

---

## 8. Iconografía

- Estilo lineal y consistente.
- Grosor de trazo aproximado: 1.8 px.
- Tamaño general: 20–24 px.
- Área táctil mínima: 44 × 44 px.
- Los iconos sin texto visible requieren `aria-label`.
- WhatsApp, Facebook y ubicación se implementan como SVG en línea para evitar dependencias.

---

## 9. Fotografía e imágenes

Dirección visual:

- Gimnasio realista, luces negras y amarillas, alto contraste y textura natural.
- Personas en acción, con anatomía, equipamiento y postura coherentes.
- Evitar apariencia plástica, músculos irreales, manos defectuosas o texto generado.
- Reservar espacio negativo cuando la fotografía lleve texto superpuesto.

Formatos:

- Hero: horizontal amplio, preferentemente WebP.
- Franja motivacional: 16:9 con sujeto en el tercio izquierdo.
- Productos: 1:1, fondo carbón y objeto centrado.
- Vista social: 1200 × 630 px.

Optimización:

- WebP para fotografías y productos.
- SVG para iconos simples.
- PNG cuando se requiere transparencia o compatibilidad social.
- `loading="lazy"` en imágenes debajo del primer viewport.
- Evitar imágenes mayores de 250–350 KB salvo justificación visual.

| Archivo | Función |
| --- | --- |
| `focus-logo-transparent.png` | Logotipo principal optimizado para la interfaz, con transparencia real. |
| `focus-logo.png` | Fuente original del logotipo, conservada como respaldo. |
| `focus-hero.webp` | Fotografía principal optimizada. |
| `focus-statement-v2.webp` | Franja motivacional responsive. |
| `product-whey-isolate.webp` | Producto referencial: proteína. |
| `product-creatine.webp` | Producto referencial: creatina. |
| `product-preworkout.webp` | Producto referencial: preentreno. |
| `focus-og.png` | Vista previa al compartir el enlace. |

---

## 10. Movimiento y animaciones

Las animaciones expresan energía sin impedir la lectura.

| Animación | Duración | Criterio |
| --- | ---: | --- |
| Entrada del hero | 0.7 s | Escalonada y suave. |
| Respiración de imagen | 12 s | Zoom mínimo y continuo. |
| Destello eléctrico | 3.8 s | Intermitente y decorativo. |
| Cintillo | 18 s | Desplazamiento lineal. |
| Hover de botones | 0.25 s | Elevación máxima de 2 px. |
| Hover de tarjetas | 0.3–0.55 s | Elevación y zoom sutil. |

Respetar `prefers-reduced-motion`: cuando el usuario reduce movimiento, las animaciones deben detenerse o durar prácticamente cero.

---

## 11. Responsive

### Escritorio: más de 900 px

- Navegación completa.
- Grillas de tres columnas.
- Fotografía y copy comparten el espacio horizontal.
- WhatsApp flotante en el extremo inferior derecho.

### Tablet: 561–900 px

- Navegación simplificada.
- Secciones de dos columnas cuando hay espacio.
- Servicios en una columna para evitar texto comprimido.
- Productos en dos columnas.

### Móvil: hasta 560 px

- Una columna y padding lateral de 24 px.
- Botones principales a ancho completo.
- Productos apilados.
- Hero con punto de enfoque ajustado al sujeto.
- Franja motivacional con imagen arriba y mensaje abajo.
- WhatsApp fijo, ancho y fácilmente pulsable.

Comprobar como mínimo los anchos: 360, 390, 768, 1024, 1366 y 1920 px.

---

## 12. Accesibilidad

- Mantener contraste alto entre texto y fondo.
- No comunicar estados únicamente mediante color.
- Usar texto alternativo en imágenes informativas.
- Dejar vacío el `alt` de imágenes puramente decorativas.
- Agregar etiquetas accesibles en iconos y enlaces sin texto visible.
- Conservar el enlace “Ir al contenido”.
- Mantener un foco visible amarillo de 3 px.
- Asegurar controles táctiles de al menos 44 × 44 px.
- Evitar párrafos completos en mayúsculas.

---

## 13. UX y conversión

Flujo recomendado:

1. Reconocer la marca y la promesa.
2. Entender los tipos de entrenamiento.
3. Conocer productos complementarios.
4. Recibir un refuerzo motivacional.
5. Confirmar dirección y sede.
6. Contactar por WhatsApp.

Reglas de contenido:

- Repetir WhatsApp en puntos de alta intención sin saturar cada párrafo.
- Los botones comienzan con un verbo: conocer, consultar, hablar, llegar.
- Mantener visibles la única sede, distrito y teléfono.
- No afirmar resultados garantizados.
- No publicar propiedades médicas o nutricionales sin sustento.
- Marcas, presentaciones, promociones y stock deben actualizarse fácilmente.

---

## 14. SEO y presencia digital

- Título principal: Focus Club Fitness Tacna.
- Incluir naturalmente “gimnasio en Tacna” y “Gregorio Albarracín”.
- Mantener una sola etiqueta H1.
- Usar H2 para secciones y H3 para tarjetas.
- Conservar descripción de sede, dirección, teléfono y enlaces.
- Actualizar `app/layout.tsx` si cambia el nombre, mensaje o imagen social.
- Incorporar Instagram solo con el enlace oficial confirmado.

---

## 15. Estructura técnica

```text
focus-club-fitness-tacna/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── focus-logo-transparent.png
│   ├── focus-logo.png
│   ├── focus-hero.webp
│   ├── focus-og.png
│   ├── focus-statement-v2.webp
│   └── product-*.webp
├── scripts/
├── worker/
├── .openai/hosting.json
├── package.json
├── package-lock.json
├── README.md
└── GUIA_IDENTIDAD_UI_UX.md
```

---

## 16. Habilidades y metodología utilizadas

- **Sites building:** estructura, implementación responsive, accesibilidad, validación y publicación.
- **Image generation:** fotografía motivacional y mockups referenciales de suplementos.
- **Library:** preparación y entrega persistente del paquete ZIP.
- **UI/UX responsive:** jerarquía visual, diseño orientado a conversión, sistema de componentes y adaptación por breakpoints.

Remotion fue utilizado para el video promocional, pero no es una dependencia del sitio incluido en este ZIP.

---

## 17. Checklist antes de publicar cambios

- [ ] El número 930 792 693 continúa vigente.
- [ ] La dirección y referencia son correctas.
- [ ] Los enlaces de WhatsApp, Facebook y Maps funcionan.
- [ ] Los productos y su disponibilidad están confirmados.
- [ ] No se inventaron precios, promociones ni marcas.
- [ ] La fotografía no corta rostros en escritorio o móvil.
- [ ] Todos los botones son legibles y pulsables.
- [ ] No existe desplazamiento horizontal accidental.
- [ ] Las imágenes están comprimidas.
- [ ] El sitio fue revisado en los anchos recomendados.
- [ ] `npm run build` finaliza correctamente.
