import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const sourcePath = path.resolve("output/propuesta-tloc/Propuesta-TLOC-final-20260905-3.pptx");
const finalPath = path.resolve(".codex-ppt-final/Propuesta-TLOC-final-20260905-3-editada.pptx");
const presentation = await PresentationFile.importPptx(await FileBlob.load(sourcePath));

const W = 1280;
const H = 720;
const navy = "#13213D";
const blue = "#2D67D2";
const bluePale = "#EAF2FF";
const ivory = "#FFFCF7";
const muted = "#5D6B83";
const manrope = "Manrope";

function addText(slide, text, position, style = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position,
    fill: "none",
    line: { fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = {
    typeface: manrope,
    fontSize: style.fontSize ?? 18,
    color: style.color ?? navy,
    bold: style.bold ?? false,
    italic: style.italic ?? false,
    autoFit: "shrinkTextOnOverflow",
    ...style,
  };
  return shape;
}

function addBackground(slide, index) {
  slide.background.fill = ivory;
  const topBlob = slide.shapes.add({
    geometry: "ellipse",
    name: `Decoración azul superior ${index}`,
    position: { left: 1120, top: -175, width: 360, height: 360 },
    fill: bluePale,
    line: { fill: "none", width: 0 },
  });
  topBlob.sendToBack();
  const bottomBlob = slide.shapes.add({
    geometry: "ellipse",
    name: `Decoración azul inferior ${index}`,
    position: { left: -150, top: 620, width: 260, height: 260 },
    fill: "#F4F8FF",
    line: { fill: "none", width: 0 },
  });
  bottomBlob.sendToBack();
}

for (let i = 0; i < presentation.slides.items.length; i++) addBackground(presentation.slides.items[i], i + 1);

const slide = presentation.slides.items[2];

// Cover the original slide-3 composition while keeping its original objects underneath,
// then rebuild the requested composition with native editable text and shapes.
const cover = slide.shapes.add({
  geometry: "rect",
  name: "Fondo editable de reconstrucción",
  position: { left: 0, top: 0, width: W, height: H },
  fill: ivory,
  line: { fill: "none", width: 0 },
});

addText(slide, "TLOC / PROPUESTA WEB", { left: 64, top: 31, width: 310, height: 26 }, { fontSize: 17, bold: true, color: blue });
addText(slide, "Una presencia que trabaja por TLOC", { left: 64, top: 83, width: 1080, height: 70 }, { fontSize: 42, bold: true, color: navy });
const rule = slide.shapes.add({
  geometry: "line",
  name: "Acento azul",
  position: { left: 64, top: 170, width: 42, height: 0 },
  fill: "none",
  line: { style: "solid", fill: blue, width: 4 },
});

addText(slide, "LA EXPERIENCIA", { left: 64, top: 194, width: 300, height: 25 }, { fontSize: 17, bold: true, color: blue });
addText(slide, "Una landing clara, profesional y responsive para que TLOC se vea bien en cualquier pantalla.", { left: 64, top: 235, width: 430, height: 110 }, { fontSize: 25, bold: true, color: navy });

const benefits = [
  ["01", "VISIBILIDAD", "TLOC presente 24/7"],
  ["02", "CONFIANZA", "Imagen profesional"],
  ["03", "CONVERSIÓN", "Contacto directo con tus clientes"],
];
benefits.forEach(([number, title, body], index) => {
  const top = 382 + index * 76;
  const circle = slide.shapes.add({
    geometry: "ellipse",
    name: `Beneficio ${number}`,
    position: { left: 70, top, width: 44, height: 44 },
    fill: bluePale,
    line: { style: "solid", fill: "#D7E5FF", width: 1 },
  });
  addText(slide, number, { left: 70, top: top + 11, width: 44, height: 22 }, { fontSize: 12, bold: true, color: blue, align: "center" });
  addText(slide, title, { left: 136, top: top + 2, width: 270, height: 24 }, { fontSize: 17, bold: true, color: blue });
  addText(slide, body, { left: 136, top: top + 28, width: 300, height: 25 }, { fontSize: 13, color: muted });
});

const webSurface = slide.shapes.add({
  geometry: "roundRect",
  name: "Marco editable versión web",
  position: { left: 550, top: 190, width: 535, height: 310 },
  fill: bluePale,
  line: { style: "solid", fill: "#D5E4FA", width: 1 },
  borderRadius: 24,
  shadow: "shadow-md",
});
const webBytes = await fs.readFile(".codex-ppt-edit/media/image2.png");
slide.images.add({
  blob: webBytes,
  contentType: "image/png",
  alt: "Captura real de la landing web de TLOC",
  fit: "contain",
  position: { left: 564, top: 204, width: 507, height: 268 },
});
addText(slide, "VERSIÓN WEB", { left: 575, top: 475, width: 180, height: 22 }, { fontSize: 15, bold: true, color: blue });

const mobileSurface = slide.shapes.add({
  geometry: "roundRect",
  name: "Marco editable versión móvil",
  position: { left: 1090, top: 215, width: 150, height: 320 },
  fill: bluePale,
  line: { style: "solid", fill: "#D5E4FA", width: 1 },
  borderRadius: 24,
  shadow: "shadow-md",
});
const mobileBytes = await fs.readFile(".codex-ppt-edit/media/image3.png");
slide.images.add({
  blob: mobileBytes,
  contentType: "image/png",
  alt: "Captura real de la versión móvil de TLOC",
  fit: "contain",
  position: { left: 1098, top: 222, width: 134, height: 302 },
});
addText(slide, "MÓVIL", { left: 1110, top: 540, width: 100, height: 22 }, { fontSize: 15, bold: true, color: blue });

const linkSurface = slide.shapes.add({
  geometry: "roundRect",
  name: "Enlace editable del prototipo",
  position: { left: 64, top: 610, width: 1080, height: 54 },
  fill: bluePale,
  line: { fill: "none", width: 0 },
  borderRadius: 18,
});
addText(slide, "Prototipo disponible para revisión", { left: 88, top: 625, width: 360, height: 22 }, { fontSize: 15, bold: true, color: navy });
addText(slide, "https://sideweb-mu.vercel.app/tloc", { left: 790, top: 624, width: 330, height: 24 }, { fontSize: 15, bold: true, color: blue });
addText(slide, "03", { left: 1170, top: 666, width: 45, height: 22 }, { fontSize: 15, color: muted, align: "right" });

const preview = await slide.export({ format: "png", scale: 1.5 });
await fs.writeFile(".codex-ppt-edit/after-3.png", new Uint8Array(await preview.arrayBuffer()));
const montage = await presentation.export({ format: "webp", montage: true, scale: 1 });
await fs.writeFile(".codex-ppt-edit/after-montage.webp", new Uint8Array(await montage.arrayBuffer()));

const draftPath = path.resolve(".codex-ppt-edit/candidate.pptx");
await (await PresentationFile.exportPptx(presentation)).save(draftPath);
console.log(draftPath);
