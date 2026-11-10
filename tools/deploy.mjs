import fs from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { buildProduction } from './build.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [mode, ...args] = process.argv.slice(2);
if (!['new', 'update'].includes(mode) || args.some((arg) => arg.startsWith('-') && arg !== '--dry-run')) {
  throw new Error('Use npm run deploy:update -- APP_ID [--dry-run].');
}
const dryRun = args.includes('--dry-run');
const ids = args.filter((arg) => arg !== '--dry-run');
if (ids.length > 1) throw new Error('Passe apenas um ID de aplicacao.');
const configPath = path.join(root, 'squarecloud.app');
const config = await fs.readFile(configPath, 'utf8');
const configuredId = config.match(/^ID\s*=\s*(\S+)\s*$/m)?.[1];
const id = ids[0] || process.env.SQUARECLOUD_APP_ID || configuredId;
if (id && !/^[A-Za-z0-9_-]+$/.test(id)) throw new Error('ID de aplicacao invalido.');
if (mode === 'update' && !id && !dryRun) {
  throw new Error('Informe o ID da aplicacao: npm run deploy:update -- APP_ID.');
}
if (mode === 'new' && (id || configuredId)) {
  throw new Error('A aplicacao ja tem um ID. Use deploy:update para atualiza-la.');
}
for (const script of ['check-imports.mjs', 'check-i18n.mjs']) {
  const result = spawnSync(process.execPath, [path.join(root, 'tools', script)], { cwd: root, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
const output = await buildProduction();
// O build nao publica configuracao de hospedagem; a CLI da Square Cloud
// espera o arquivo na raiz do diretorio que ela envia.
await fs.copyFile(configPath, path.join(output, 'squarecloud.app'));
const cliArgs = mode === 'new' ? ['upload'] : ['commit', id || 'APP_ID', '--restart'];
if (dryRun) {
  console.log(`\nSimulacao: squarecloud ${cliArgs.join(' ')}\nDiretorio enviado: ${output}\nNenhum arquivo enviado.`);
} else {
  // The CLI zips its working directory. --path is a REMOTE path, not a local one.
  const result = spawnSync('squarecloud', cliArgs, {
    cwd: output,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
  if (result.error) throw new Error('Instale a CLI com npm install -g @squarecloud/cli e faca squarecloud auth login.', { cause: result.error });
  if (result.status !== 0) process.exit(result.status ?? 1);
  if (mode === 'new') {
    const updated = await fs.readFile(path.join(output, 'squarecloud.app'), 'utf8');
    const newId = updated.match(/^ID\s*=\s*([A-Za-z0-9_-]+)\s*$/m)?.[1];
    if (newId) await fs.writeFile(configPath, `${config.trimEnd()}\nID=${newId}\n`);
  }
}
