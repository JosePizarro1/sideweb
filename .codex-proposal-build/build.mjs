import fs from 'node:fs/promises';
import path from 'node:path';
import { Presentation, PresentationFile } from '@oai/artifact-tool';
import sharp from 'sharp';
import { resolvePresentationFont, finalizePresentation } from '/Users/parzival/.codex/plugins/cache/openai-primary-runtime/presentations/26.904.11930/skills/presentations/container_tools/artifact_tool_utils.mjs';

const root = '/Users/parzival/JOse/sideweb';
const build = path.join(root, '.codex-proposal-build');
const out = path.join(root, 'output/propuesta-tloc');
const skill = '/Users/parzival/.codex/plugins/cache/openai-primary-runtime/presentations/26.904.11930/skills/presentations';
const font = resolvePresentationFont();
const deck = Presentation.create({ slideSize: { width: 1280, height: 720 } });
const C = { blue: '#2D5FBE', dark: '#14223C', muted: '#596579', pink: '#F6ACCA', cream: '#FBF8F2', white: '#FFFFFF', pale: '#E9EFFB' };
const textLog = [];

function text(slide, value, left, top, width, height, fontSize = 26, color = C.dark, bold = false, align = 'left') {
  const shape = slide.shapes.add({ geometry: 'textbox', position: { left, top, width, height }, fill: 'none', line: { fill: 'none', width: 0 } });
  shape.text = value;
  shape.text.style = { typeface: font, fontSize, color, bold, autoFit: 'none', align };
  textLog.push(value);
  return shape;
}

function box(slide, left, top, width, height, fill = C.pale, radius = 18) {
  return slide.shapes.add({ geometry: 'roundRect', position: { left, top, width, height }, fill, line: { fill: fill, width: 0 }, borderRadius: radius });
}

function base(title, { blue = false, note = '' } = {}) {
  const slide = deck.slides.add();
  slide.background.fill = blue ? C.blue : C.cream;
  text(slide, 'TLOC / PROPUESTA WEB', 64, 31, 640, 26, 15, blue ? '#DCE8FF' : C.blue, true);
  if (title) text(slide, title, 64, 86, 1140, 70, 45, blue ? C.white : C.dark, true);
  text(slide, String(deck.slides.items.length).padStart(2, '0'), 1170, 666, 45, 22, 15, blue ? '#DCE8FF' : C.muted);
  slide.speakerNotes.textFrame.setText(note || 'Propuesta comercial de TLOC. Septiembre de 2026. Confirmar contenidos, disponibilidad y condiciones antes de publicar.');
  return slide;
}

async function photo(slide, file, left, top, width, height, fit = 'cover', alt = 'Imagen de referencia de TLOC') {
  const bytes = await sharp(path.join(root, 'public/tlock', file)).png().toBuffer();
  slide.images.add({ blob: new Uint8Array(bytes), contentType: 'image/png', alt, fit, position: { left, top, width, height } });
}

function kicker(slide, value, left, top, color = C.blue) { text(slide, value.toUpperCase(), left, top, 460, 24, 15, color, true); }

// 1. Portada
{
  const slide = base('', { blue: true, note: 'Portada de una propuesta de landing para TLOC. Imagen proveniente de los recursos de marca disponibles en public/tlock.' });
  await photo(slide, '01-hero-principal-menu.webp', 738, 0, 542, 720, 'cover', 'Caja TLOC con cookies, café y croissant');
  text(slide, 'tloc', 64, 128, 630, 96, 92, C.white, true);
  text(slide, 'Propuesta de landing page', 64, 285, 650, 88, 54, C.white, true);
  text(slide, 'Una solución para ganar visibilidad,\nordenar la marca y facilitar el contacto.', 68, 424, 620, 82, 27, '#EDF2FE');
  text(slide, 'Septiembre de 2026', 68, 642, 580, 26, 18, '#DCE8FF');
}

// 2. Necesidad comercial
{
  const slide = base('Una presencia que trabaje por TLOC');
  kicker(slide, 'La oportunidad', 64, 189);
  text(slide, 'TLOC ya tiene un producto\nque merece verse mejor.', 64, 226, 620, 105, 40, C.dark, true);
  text(slide, 'Una landing clara convierte la atención de redes\nen una marca más visible, confiable y fácil de contactar.', 64, 364, 650, 88, 25, C.muted);
  text(slide, 'La competencia ya comunica en digital.\nTLOC puede dar el siguiente paso.', 64, 500, 620, 78, 28, C.blue, true);
  await photo(slide, 'tloc-community-v2.webp', 830, 176, 370, 420, 'cover', 'Personas compartiendo una experiencia TLOC');
  text(slide, 'Producto + marca + contacto', 830, 616, 370, 25, 16, C.muted);
}

// 3. Web y móvil
{
  const slide = base('La propuesta se ve bien en cualquier pantalla');
  kicker(slide, 'Experiencia web y móvil', 64, 177);
  text(slide, 'Una misma marca.\nDos formas de verla.', 64, 215, 390, 103, 39, C.dark, true);
  text(slide, 'Presentamos la landing en escritorio y celular\npara que TLOC se vea profesional donde descubren la marca.', 64, 355, 445, 86, 23, C.muted);
  box(slide, 552, 190, 500, 297, '#DCE6F7', 16);
  await photo(slide, '01-hero-principal-menu.webp', 570, 207, 464, 245, 'cover', 'Vista de referencia de la landing en escritorio');
  text(slide, 'VERSIÓN WEB', 575, 463, 150, 22, 14, C.blue, true);
  box(slide, 1070, 207, 132, 274, C.dark, 22);
  await photo(slide, 'tloc-how-store.webp', 1080, 220, 112, 236, 'cover', 'Vista de referencia de la landing en celular');
  text(slide, 'MÓVIL', 1080, 492, 120, 22, 14, C.blue, true, 'center');
  box(slide, 64, 574, 1160, 58, C.pale, 12);
  text(slide, 'Aquí dejaré el enlace del prototipo para que lo revises con TLOC:', 88, 591, 620, 24, 17, C.dark, true);
  text(slide, '[ PEGAR LINK AQUÍ ]', 842, 590, 342, 26, 18, C.blue, true, 'center');
}

// 4. Alcance
{
  const slide = base('Qué recibe TLOC');
  kicker(slide, 'Una landing completa', 64, 178);
  await photo(slide, '11-formas-disfrutar-regala-tloc.webp', 64, 224, 415, 375, 'cover', 'Presentación TLOC para compartir o regalar');
  text(slide, '01', 540, 230, 50, 24, 18, C.blue, true);
  text(slide, 'Portada que presenta la marca', 594, 228, 560, 34, 26, C.dark, true);
  text(slide, '02', 540, 329, 50, 24, 18, C.blue, true);
  text(slide, 'Sabores, boxes y promociones', 594, 327, 560, 34, 26, C.dark, true);
  text(slide, '03', 540, 428, 50, 24, 18, C.blue, true);
  text(slide, 'WhatsApp, redes, ubicación y horarios', 594, 426, 600, 34, 26, C.dark, true);
  text(slide, 'Diseño adaptable a laptop y celular, con contenido que TLOC podrá actualizar mediante soporte.', 540, 529, 625, 67, 22, C.muted);
}

// 5. Cronograma + inversión
{
  const slide = base('Tiempo e inversión');
  kicker(slide, 'Máximo 2 semanas', 64, 180);
  box(slide, 64, 221, 550, 302, C.pale, 18);
  text(slide, 'SEMANA 1', 94, 250, 220, 28, 17, C.blue, true);
  text(slide, 'Contenido y diseño', 94, 291, 470, 48, 34, C.dark, true);
  text(slide, 'SEMANA 2', 94, 407, 220, 28, 17, C.blue, true);
  text(slide, 'Desarrollo y entrega', 94, 448, 470, 48, 34, C.dark, true);
  await photo(slide, 'tloc-cookie-macro.webp', 662, 221, 226, 302, 'cover', 'Cookie TLOC en primer plano');
  box(slide, 916, 221, 300, 302, C.blue, 18);
  text(slide, 'S/ 499', 944, 258, 255, 94, 66, C.white, true);
  text(slide, 'Landing page', 946, 360, 220, 27, 20, C.white);
  text(slide, '★★★★★★', 946, 414, 230, 28, 26, C.pink, true);
  text(slide, '60 % de descuento', 946, 456, 240, 27, 18, C.pink, true);
  text(slide, 'Más visibilidad.\nMás confianza para la marca.', 64, 584, 800, 56, 25, C.blue, true);
  text(slide, 'Precio final de la landing. El dominio y el soporte mensual se detallan en la siguiente propuesta.', 64, 645, 1000, 24, 15, C.muted);
}

// 6. Dominio + soporte
{
  const slide = base('Dominio y soporte');
  kicker(slide, 'Costos claros', 64, 180);
  await photo(slide, 'tloc-how-gift.webp', 64, 226, 314, 342, 'cover', 'Caja TLOC para regalar');
  text(slide, 'USD 15 a 20', 435, 235, 440, 68, 48, C.blue, true);
  text(slide, 'Dominio anual estimado', 438, 311, 390, 30, 22, C.dark, true);
  text(slide, 'Nombre a conversar\nsegún disponibilidad.', 438, 355, 390, 65, 24, C.muted);
  box(slide, 850, 226, 366, 342, C.blue, 18);
  text(slide, 'S/ 19', 885, 262, 285, 74, 55, C.white, true);
  text(slide, 'al mes', 888, 339, 220, 32, 24, C.white);
  text(slide, 'Soporte para cambios pequeños', 888, 398, 285, 54, 23, C.pink, true);
  text(slide, 'Horarios, textos, precios, fotos y promociones.\nCon material de TLOC.\nCada cambio se coordina con su plazo.', 888, 472, 285, 82, 15, '#EDF2FE');
  text(slide, 'El dominio se paga aparte. El soporte comienza cuando se publique la landing.', 64, 620, 1080, 29, 16, C.muted);
}

// 7. Próximo paso + futuro
{
  const slide = base('El siguiente paso');
  kicker(slide, 'Una base para crecer', 64, 180);
  text(slide, 'Primero hacemos visible la marca.\nDespués ampliamos la operación.', 64, 220, 660, 96, 38, C.dark, true);
  text(slide, 'La landing puede evolucionar a un sistema de pedidos,\nfacturación, boletas e impresión según la necesidad de TLOC.', 64, 353, 700, 74, 24, C.muted);
  await photo(slide, 'tloc-mascot-scene.webp', 855, 191, 350, 274, 'cover', 'Escena de marca TLOC');
  box(slide, 64, 506, 1142, 84, C.blue, 14);
  text(slide, 'Link del prototipo', 93, 528, 260, 28, 19, C.white, true);
  text(slide, '[ PEGAR LINK AQUÍ ]', 620, 527, 530, 30, 20, C.pink, true, 'center');
  text(slide, 'Propuesta inicial: S/ 499 · Plazo: 2 semanas · Soporte: S/ 19 al mes', 64, 641, 1120, 26, 17, C.blue, true);
}

await fs.mkdir(build, { recursive: true });
await fs.writeFile(path.join(build, 'content-v2.txt'), textLog.join('\n\n'));
const candidate = path.join(build, 'candidate-final-3.pptx');
await (await PresentationFile.exportPptx(deck)).save(candidate);
const finalPath = path.join(out, 'Propuesta-TLOC-final-20260905-3.pptx');
const validation = await finalizePresentation({
  workspaceDir: root,
  candidatePath: candidate,
  finalPath,
  pythonExecutable: '/Users/parzival/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3',
  integrityValidatorPath: path.join(skill, 'container_tools/inspect_presentation_package_integrity.py'),
  layoutValidatorPath: path.join(skill, 'container_tools/inspect_presentation_layout_geometry.py'),
  layoutArgs: ['--expected-slide-size-emu', '12192000,6858000', '--validate-bullet-geometry', '--validate-heading-fit'],
  fontPolicy: { basis: 'design', families: [font] },
  verifyArtifactToolImport: true,
  receiptPath: path.join(build, 'validation-final-3.json'),
});
console.log(JSON.stringify(validation));
for (let i = 0; i < deck.slides.items.length; i++) {
  const png = await deck.export({ slide: deck.slides.items[i], format: 'png', scale: 1 });
  await fs.writeFile(path.join(build, `slide-v2-${i + 1}.png`), new Uint8Array(await png.arrayBuffer()));
}
console.log('Rendered', deck.slides.items.length, 'slides');
