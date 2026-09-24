import { FileBlob, PresentationFile } from "@oai/artifact-tool";
const p = await PresentationFile.importPptx(await FileBlob.load("output/propuesta-tloc/Propuesta-TLOC-final-20260905-3.pptx"));
const im = p.resolve("im/vmlojqd0");
console.log(Object.keys(im));
console.log(Object.keys(im.data));
console.log(im.data);
console.log({frame: im.frame, fit: im.fit, alt: im.alt, geometry: im.geometry});
