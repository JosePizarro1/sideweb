# Guía de identidad visual y UI/UX — TLOC Cookies

## Personalidad

TLOC se comunica como una marca joven, alegre, cercana y orgullosamente tacneña. La experiencia debe sentirse apetecible y divertida, pero cuidada y profesional. La mascota funciona como firma visual secundaria; nunca debe competir con la cookie o el botón de pedido.

## Paleta

| Uso | Color | Código |
|---|---|---|
| Azul principal | Marca, botones y fondos | `#1268D5` |
| Azul oscuro | Contraste y fondos intensos | `#084EAA` |
| Crema | Fondo principal cálido | `#FFFCE7` |
| Celeste | Secciones alternas | `#DCEEFF` |
| Azul tinta | Textos principales | `#112039` |
| Rosa | Acentos emocionales | `#FF9FBD` |
| Gris azulado | Textos secundarios | `#59647A` |

## Tipografías

- Títulos: **Archivo Black**.
- Textos, navegación y botones: **Manrope Variable**.
- Los títulos usan peso alto, interlineado compacto y mayúsculas.
- El texto de lectura evita mayúsculas sostenidas y mantiene una altura de línea amplia.

Las fuentes están declaradas como dependencias locales mediante `@fontsource`, por lo que no dependen de Google Fonts.

## Componentes

- Botón principal: azul, texto blanco y forma tipo píldora.
- Botón secundario: fondo transparente o crema, borde oscuro.
- Tarjetas: fondo blanco, borde suave y radio entre 20 y 22 px.
- Bloques grandes: radio entre 24 y 32 px.
- Iconos sociales: colores oficiales de Instagram, TikTok, Facebook y WhatsApp.
- WhatsApp flotante: círculo verde fijo en la esquina inferior derecha.

## Uso de imágenes

- Priorizar primeros planos de cookies, rellenos y cajas azules.
- Mantener iluminación cálida y fondos crema.
- Reservar el rosa para detalles pequeños.
- No colocar texto importante dentro de imágenes.
- Usar la mascota como sello de marca, no como protagonista en todas las secciones.
- Conservar formato WebP para carga rápida.

## Movimiento

- Carrusel continuo y pausado.
- Flotación lenta solamente en la mascota.
- Zoom muy suave en imágenes al pasar el cursor.
- En dispositivos táctiles se eliminan transformaciones de hover.
- Se respeta `prefers-reduced-motion`.

## Responsive

- Escritorio: composición editorial en dos columnas.
- Tablet: bloques apilados y grillas de dos columnas.
- Móvil: una columna, botones de ancho completo y áreas táctiles de 44 px o más.
- Breakpoints principales: `960px`, `620px` y `380px`.
- Los títulos reducen su tamaño con `clamp()` y nunca deben generar desplazamiento horizontal.
- El encabezado se mantiene accesible en móvil.
- El botón flotante respeta el área segura inferior del dispositivo.
- Las animaciones de entrada se desactivan en móvil para evitar contenido invisible en navegadores incompatibles.

## Principio de conversión

La acción principal es **Pedir por WhatsApp**. Las acciones secundarias son **Ver sabores** y **Cómo llegar**. No se deben introducir más llamados principales que compitan entre sí.

