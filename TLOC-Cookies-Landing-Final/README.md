# TLOC Cookies Tacna — Landing final

Landing responsive de una sola página para TLOC Cookies, preparada con React, Next.js/Vinext y estilos CSS propios.

## Requisitos

- Node.js 22.13 o superior.
- npm.

## Instalación

```bash
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
npm run start
```

## Contenido principal

- `app/page.tsx`: contenido y estructura de la landing.
- `app/globals.css`: identidad visual, animaciones y responsive.
- `app/layout.tsx`: metadatos SEO y vista previa social.
- `public/images/`: fotografías, mascota y recursos visuales.
- `public/og.png`: portada para compartir el enlace en redes.
- `GUIA_IDENTIDAD_UI_UX.md`: reglas visuales y responsive.
- `IMAGENES_USADAS.md`: inventario de imágenes conectadas a la web.

## Personalización rápida

- WhatsApp: modificar `whatsappUrl` en `app/page.tsx`.
- Dirección y horario: sección `visit` de `app/page.tsx`.
- Redes sociales: sección `social-section` y pie de página.
- Colores: variables de `:root` al inicio de `app/globals.css`.
- Productos: arreglo `favorites` al inicio de `app/page.tsx`.

Las imágenes se sirven directamente desde `public/images` para evitar fallos de transformación o rutas rotas.

