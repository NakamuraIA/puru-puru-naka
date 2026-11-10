/**
 * Guards i18n integrity:
 *   1. every locale must have exactly the same keys as the reference (ja)
 *   2. no translation may be left empty
 *   3. every `data-i18n` / `data-i18n-attr` in index.html must exist as a key
 *   4. every flavor must have a name in every language
 *
 * Run with: node tools/check-i18n.mjs
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const root = process.cwd();
const localeDir = path.join(root, "src/i18n/locales");
const files = fs.readdirSync(localeDir).filter((f) => f.endsWith(".js"));

const dicts = new Map();
for (const f of files) {
  const mod = await import(url.pathToFileURL(path.join(localeDir, f)).href);
  dicts.set(path.basename(f, ".js"), mod.default);
}

const REFERENCE = "ja";

// keys resolved from JS rather than from data-i18n (ui/hint.js, audio/sfx.js)
const INDIRECT = new Set([
  'a11y.counter', 'flavors.aria', 'hint.touch.tap',
  'hint.touch.pinch', 'hint.touch.pinchDo', 'sound.on',
]);

let problems = 0;
const fail = (msg) => { console.log("  ✗ " + msg); problems++; };

// 1 + 2: key parity and empty strings
const ref = dicts.get(REFERENCE);
const refKeys = Object.keys(ref).sort();
for (const [code, dict] of dicts) {
  const keys = Object.keys(dict).sort();
  const missing = refKeys.filter((k) => !keys.includes(k));
  const extra = keys.filter((k) => !refKeys.includes(k));
  for (const k of missing) fail(`${code}: falta a chave "${k}"`);
  for (const k of extra) fail(`${code}: chave a mais "${k}" (não existe em ${REFERENCE})`);
  for (const [k, v] of Object.entries(dict)) {
    if (typeof v !== "string" || v.trim() === "") fail(`${code}: "${k}" está vazio`);
  }
}

// 3: markup keys must exist
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const used = new Set();
for (const m of html.matchAll(/data-i18n="([^"]+)"/g)) used.add(m[1]);
for (const m of html.matchAll(/data-i18n-attr="([^"]+)"/g)) {
  for (const pair of m[1].split(",")) used.add(pair.split(":")[1].trim());
}
// Controls also resolve literal catalogue keys in JS (emotions, toys and personalities).
function collectSourceKeys(folder) {
  for (const entry of fs.readdirSync(folder, { withFileTypes: true })) {
    const file = path.join(folder, entry.name);
    if (entry.isDirectory()) { if (entry.name !== 'i18n') collectSourceKeys(file); }
    else if (entry.name.endsWith('.js')) {
      const source = fs.readFileSync(file, 'utf8');
      for (const match of source.matchAll(/['"]((?:play|photo|emotion|action|toy|personality)\.[A-Za-z]+)['"]/g)) used.add(match[1]);
    }
  }
}
collectSourceKeys(path.join(root, 'src'));
for (const k of used) if (!refKeys.includes(k)) fail(`index.html usa "${k}" que não existe em nenhum locale`);
for (const k of refKeys) if (!used.has(k) && !INDIRECT.has(k)) fail(`chave "${k}" não é usada em lado nenhum`);

// 4: flavor names
const flavors = (await import(url.pathToFileURL(path.join(root, "src/data/flavors.js")).href)).FLAVORS;
const themes = (await import(url.pathToFileURL(path.join(root, "src/data/themes.js")).href)).THEMES;
const codes = [...dicts.keys()];
for (const f of flavors) {
  for (const c of codes) {
    if (!f.name?.[c]) fail(`sabor "${f.id}" não tem nome em "${c}"`);
  }
}
for (const theme of themes) {
  for (const code of codes) if (!theme.name?.[code]) fail(`tema "${theme.id}" nao tem nome em "${code}"`);
}

console.log(problems === 0
  ? `\nOK  ${dicts.size} idiomas · ${refKeys.length} chaves · ${flavors.length} sabores — tudo em paridade`
  : `\n${problems} problema(s)`);
process.exit(problems ? 1 : 0);
