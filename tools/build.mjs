import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { build } from 'esbuild';
import { checkDist } from './check-dist.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const dist = path.join(root, 'dist');
const require = createRequire(import.meta.url);
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex').slice(0, 12);

/** Generate only the files needed by the static production site. */
export async function buildProduction() {
  let html = await fs.readFile(path.join(root, 'index.html'), 'utf8');
  const importMapTag = /<script\b[^>]*type="importmap"[^>]*>([\s\S]*?)<\/script>/;
  const importMap = html.match(importMapTag);
  if (!importMap) throw new Error('index.html precisa do importmap usado em desenvolvimento.');
  const threeURL = JSON.parse(importMap[1]).imports.three;
  const threeDir = path.dirname(path.dirname(require.resolve('three')));
  const threePackage = JSON.parse(await fs.readFile(path.join(threeDir, 'package.json'), 'utf8'));
  if (!threeURL.includes(`/three@${threePackage.version}/`)) {
    throw new Error('A versao instalada do Three.js difere da versao do importmap.');
  }

  // Read the CSS list from HTML so its cascade order stays the same as in dev.
  const styleTags = [...html.matchAll(/<link\b[^>]*>/g)].filter((match) =>
    /rel="stylesheet"/.test(match[0]) && /href="\.\/styles\//.test(match[0]));
  if (!styleTags.length) throw new Error('Nenhuma folha de estilos local encontrada.');
  const cssImports = styleTags.map(([tag]) => {
    const href = tag.match(/href="([^"]+)"/)[1];
    const file = path.resolve(root, href);
    if (!file.startsWith(path.join(root, 'styles') + path.sep)) {
      throw new Error(`Folha de estilos fora de styles/: ${href}`);
    }
    return `@import ${JSON.stringify(href)};`;
  }).join('\n');

  const [js, css, license, threeLicense, notFound] = await Promise.all([
    build({
      absWorkingDir: root,
      entryPoints: ['src/main.js'],
      outfile: path.join(dist, 'assets', 'app.js'),
      bundle: true,
      platform: 'browser',
      format: 'esm',
      target: 'es2020',
      minify: true,
      sourcemap: false,
      legalComments: 'none', // Full project and Three.js licenses are copied below.
      write: false,
    }),
    build({
      absWorkingDir: root,
      stdin: { contents: cssImports, resolveDir: root, loader: 'css' },
      outfile: path.join(dist, 'assets', 'styles.css'),
      bundle: true,
      minify: true,
      sourcemap: false,
      legalComments: 'none',
      write: false,
    }),
    fs.readFile(path.join(root, 'LICENSE')),
    fs.readFile(path.join(threeDir, 'LICENSE')),
    fs.readFile(path.join(root, '404.html'), 'utf8'),
  ]);
  if (js.outputFiles.length !== 1 || css.outputFiles.length !== 1) {
    throw new Error('O build precisa gerar exatamente um JavaScript e um CSS.');
  }
  const jsBytes = js.outputFiles[0].contents;
  const cssBytes = css.outputFiles[0].contents;
  const jsName = `app-${digest(jsBytes)}.js`;
  const cssName = `styles-${digest(cssBytes)}.css`;
  for (const [index, [tag]] of styleTags.entries()) {
    html = html.replace(tag, index === 0 ? `<link rel="stylesheet" href="./assets/${cssName}">` : '');
  }
  const entryTag = /<script\b[^>]*type="module"[^>]*src="\.\/src\/main\.js"[^>]*><\/script>/;
  if (!entryTag.test(html)) throw new Error('Entrada src/main.js nao encontrada em index.html.');
  html = html.replace(importMapTag, '')
    .replace(entryTag, `<script type="module" src="./assets/${jsName}"></script>`)
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\n\s*\n/g, '\n');

  // Clean a fixed generated directory only, and refuse a redirected output root.
  if (path.dirname(dist) !== root || path.basename(dist) !== 'dist') {
    throw new Error('Diretorio de saida fora do projeto.');
  }
  const oldDist = await fs.lstat(dist).catch((error) => {
    if (error.code !== 'ENOENT') throw error;
  });
  if (oldDist?.isSymbolicLink()) throw new Error('dist/ nao pode ser um link simbolico.');
  await fs.rm(dist, { recursive: true, force: true });
  await fs.mkdir(path.join(dist, 'assets'), { recursive: true });
  await Promise.all([
    fs.writeFile(path.join(dist, 'assets', jsName), jsBytes),
    fs.writeFile(path.join(dist, 'assets', cssName), cssBytes),
    fs.writeFile(path.join(dist, 'index.html'), html),
    fs.writeFile(path.join(dist, '404.html'), notFound.replace(/<!--[\s\S]*?-->/g, '')),
    fs.writeFile(path.join(dist, 'LICENSE.txt'), license),
    fs.writeFile(path.join(dist, 'THIRD_PARTY_LICENSES.txt'), `Three.js ${threePackage.version}\n\n${threeLicense}`),
  ]);
  await checkDist(dist);
  console.log(`\nBuild pronto em dist/: JS ${(jsBytes.length / 1024).toFixed(1)} KiB, CSS ${(cssBytes.length / 1024).toFixed(1)} KiB.`);
  return dist;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await buildProduction();
}
