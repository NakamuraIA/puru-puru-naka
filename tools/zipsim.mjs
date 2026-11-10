// Simulates what the Square Cloud CLI would zip, honouring squarecloud.ignore.`r`n// Run with: node tools/zipsim.mjs
import fs from "node:fs"; import path from "node:path";
const root = process.cwd();
const IGNORE = [".git/","tools/","chk/","_t/","node_modules/",".vscode/",".idea/","package.json","package-lock.json","README.md","*.log","*.tgz"];

const skip = (rel) => IGNORE.some((pat) => {
  if (pat.endsWith("/")) return rel === pat.slice(0,-1) || rel.startsWith(pat);
  if (pat.startsWith("*")) return rel.endsWith(pat.slice(1));
  return rel === pat;
});

const out = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = path.relative(root, path.join(dir, e.name)).replace(/\\/g, "/");
    if (skip(rel)) continue;
    if (e.isDirectory()) walk(path.join(dir, e.name));
    else out.push(rel);
  }
})(root);

console.log("FICHEIROS NO ZIP: " + out.length);
for (const f of out.sort()) console.log("  " + f);
console.log();
console.log(out.includes("squarecloud.app") ? "squarecloud.app na raiz: OK" : "squarecloud.app AUSENTE -> MISSING_CONFIG");
console.log(out.includes("index.html") ? "index.html na raiz: OK" : "index.html AUSENTE");
for (const leak of ["package.json","README.md","tools/check-i18n.mjs"]) {
  console.log((out.includes(leak) ? "  VAZOU: " : "  excluido ok: ") + leak);
}
