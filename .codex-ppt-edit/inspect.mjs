import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const sourcePath = path.resolve("output/propuesta-tloc/Propuesta-TLOC-final-20260905-3.pptx");
const presentation = await PresentationFile.importPptx(await FileBlob.load(sourcePath));
const snapshot = await presentation.inspect({
  kind: "slide,textbox,shape,image,notes,layout",
  maxChars: 30000,
});
await fs.writeFile(".codex-ppt-edit/inspect.ndjson", snapshot.ndjson);
for (let i = 0; i < presentation.slides.items.length; i++) {
  const slide = presentation.slides.items[i];
  const preview = await slide.export({ format: "png", scale: 1.5 });
  await fs.writeFile(`.codex-ppt-edit/before-${i + 1}.png`, new Uint8Array(await preview.arrayBuffer()));
}
console.log(`slides=${presentation.slides.items.length}`);
console.log(snapshot.ndjson);
