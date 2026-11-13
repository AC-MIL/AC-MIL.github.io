import { cpSync, mkdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "dist");
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
for (const entry of ["index.html", "static", ".nojekyll"]) {
  cpSync(path.join(root, entry), path.join(output, entry), { recursive: true });
}
console.log("Static site prepared in dist/");
