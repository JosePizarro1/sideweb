import path from "node:path";
import { pathToFileURL } from "node:url";

const SKILL_DIR = "/Users/parzival/.codex/plugins/cache/openai-primary-runtime/presentations/26.904.11930/skills/presentations";
const workspaceDir = "/Users/parzival/JOse/sideweb";
const candidatePath = path.join(workspaceDir, ".codex-ppt-edit/candidate.pptx");
const finalPath = path.join(workspaceDir, ".codex-ppt-final/Propuesta-TLOC-final-20260905-3-editada.pptx");
const { finalizePresentation } = await import(pathToFileURL(path.join(SKILL_DIR, "container_tools/artifact_tool_utils.mjs")).href);

const result = await finalizePresentation({
  workspaceDir,
  candidatePath,
  finalPath,
  pythonExecutable: "/Users/parzival/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3",
  integrityValidatorPath: path.join(SKILL_DIR, "container_tools/inspect_presentation_package_integrity.py"),
  layoutValidatorPath: path.join(SKILL_DIR, "container_tools/inspect_presentation_layout_geometry.py"),
  layoutArgs: [
    "--expected-slide-size-emu", "12192000,6858000",
    "--validate-bullet-geometry",
    "--validate-heading-fit",
  ],
  requiredNativeTableOwnerSlides: [],
  sourceTemplatePath: path.join(workspaceDir, "output/propuesta-tloc/Propuesta-TLOC-final-20260905-3.pptx"),
  requiredTemplateReferenceSlides: [1, 2, 3, 4, 5, 6, 7],
  minimumTemplateCoverageRatio: 0.85,
  verifyArtifactToolImport: true,
  receiptPath: path.join(workspaceDir, ".codex-ppt-edit/Propuesta-TLOC-final-20260905-3-editada.validation.json"),
});
console.log(JSON.stringify(result));
