import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const required = ['index.html', '404.html', 'LICENSE.txt', 'THIRD_PARTY_LICENSES.txt'];
const assetPattern = /^assets\/(?:app-[a-f0-9]{12}\.js|styles-[a-f0-9]{12}\.css)$/;

/** A deploy gate: source files, maps and unexpected files cannot enter the artifact. */
export async function checkDist(directory = path.join(root, 'dist')) {
  const output = await fs.lstat(directory);
  assert(output.isDirectory() && !output.isSymbolicLink(), 'dist/ precisa ser um diretorio real.');
  const files = [];
  async function walk(folder) {
    for (const entry of await fs.readdir(folder, { withFileTypes: true })) {
      const file = path.join(folder, entry.name);
      assert(!entry.isSymbolicLink(), `Link simbolico nao permitido: ${file}`);
      const relative = path.relative(directory, file).split(path.sep).join('/');
      if (entry.isDirectory()) {
        assert.equal(relative, 'assets', `Diretorio fora do site: ${relative}`);
        await walk(file);
      } else {
        assert(entry.isFile(), `Arquivo irregular: ${relative}`);
        files.push(relative);
      }
    }
  }
  await walk(directory);
  for (const file of required) assert(files.includes(file), `Falta ${file} em dist/.`);
  // Configuracao de hospedagem nunca vai para o site publico.
  for (const file of files) {
    assert(!/^squarecloud\.(?:app|config|ignore)$/.test(file),
      `Configuracao de hospedagem nao pode ser publicada: ${file}`);
  }
  for (const file of files) assert(required.includes(file) || assetPattern.test(file), `Arquivo fora do site: ${file}`);
  const js = files.filter((file) => file.endsWith('.js'));
  const css = files.filter((file) => file.endsWith('.css'));
  assert.equal(js.length, 1, 'Esperado um unico JavaScript de producao.');
  assert.equal(css.length, 1, 'Esperado um unico CSS de producao.');
  for (const file of ['index.html', ...js, ...css]) {
    const contents = await fs.readFile(path.join(directory, file), 'utf8');
    assert(!/sourceMappingURL\s*=/.test(contents), `Source map encontrado em ${file}.`);
  }
  const html = await fs.readFile(path.join(directory, 'index.html'), 'utf8');
  assert(!/type="importmap"|(?:src|href)="\.\/(?:src|styles)\//.test(html), 'HTML ainda aponta para fontes de desenvolvimento.');
  for (const file of [...js, ...css]) assert(html.includes(`./${file}`), `HTML nao referencia ${file}.`);
  const scripts = [...html.matchAll(/<script\b[^>]*src="([^"]+)"/g)];
  assert.equal(scripts.length, 1, 'Esperado um unico script de producao.');
  assert.equal(scripts[0][1], `./${js[0]}`, 'Script externo inesperado no HTML.');
  console.log(`OK  dist/: ${files.length} arquivos, sem src/, styles/ ou source maps.`);
  return files.sort();
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await checkDist();
}
