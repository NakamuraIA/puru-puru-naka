import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { execFileSync, spawn } from 'node:child_process';
import { once } from 'node:events';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { checkDist } from '../tools/check-dist.mjs';
import { productionBranch, publishDist } from '../tools/publish-dist.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist');
async function temporary(t) {
  const folder = await fs.mkdtemp(path.join(os.tmpdir(), 'pururu-production-test-'));
  t.after(async () => {
    assert.equal(path.dirname(folder), path.resolve(os.tmpdir()));
    assert(path.basename(folder).startsWith('pururu-production-test-'));
    await fs.rm(folder, { recursive: true, force: true });
  });
  return folder;
}

test('production preview serves the bundle and returns 404 for source files', async (t) => {
  const server = spawn(process.execPath, ['bin/pururu.mjs', '--dist'], {
    cwd: root, env: { ...process.env, PORT: '0', HOST: '127.0.0.1' }, stdio: ['ignore', 'pipe', 'pipe'],
  });
  t.after(async () => {
    if (server.exitCode === null) { server.kill(); await once(server, 'exit'); }
  });
  const url = await new Promise((resolve, reject) => {
    let stdout = '';
    const timeout = setTimeout(() => reject(new Error('Preview did not start.')), 10000);
    server.on('error', (error) => { clearTimeout(timeout); reject(error); });
    server.on('exit', (code) => { clearTimeout(timeout); reject(new Error(`Preview exited: ${code}`)); });
    server.stdout.on('data', (chunk) => {
      stdout += chunk;
      const found = stdout.match(/http:\/\/127\.0\.0\.1:\d+/);
      if (found) { clearTimeout(timeout); resolve(found[0]); }
    });
  });
  const page = await fetch(url);
  assert.equal(page.status, 200);
  assert.equal(page.headers.get('cache-control'), 'no-cache');
  const html = await page.text();
  const js = html.match(/src="\.\/(assets\/app-[a-f0-9]{12}\.js)"/)[1];
  const css = html.match(/href="\.\/(assets\/styles-[a-f0-9]{12}\.css)"/)[1];
  for (const file of [js, css]) {
    const asset = await fetch(`${url}/${file}`);
    assert.equal(asset.status, 200);
    assert.match(asset.headers.get('cache-control'), /immutable/);
    assert.match(asset.headers.get('content-type'), file.endsWith('.js') ? /javascript/ : /text\/css/);
    await asset.text();
  }
  for (const file of ['src/main.js', 'src/app.js', 'styles/responsive.css', 'package.json',
    'bin/pururu.mjs', '.git/config', 'squarecloud.app', `${js}.map`]) {
    const response = await fetch(`${url}/${file}`);
    assert.equal(response.status, 404, file);
    await response.text();
  }
  const head = await fetch(`${url}/${js}`, { method: 'HEAD' });
  assert.equal(head.status, 200);
  assert.equal(await head.text(), '');
  assert.equal((await fetch(url, { method: 'POST' })).status, 405);
});

test('artifact gate rejects source files and source maps', async (t) => {
  const folder = path.join(await temporary(t), 'dist');
  await fs.cp(output, folder, { recursive: true });
  await checkDist(folder);
  await fs.mkdir(path.join(folder, 'src'));
  await fs.writeFile(path.join(folder, 'src', 'main.js'), 'console.log("source");');
  await assert.rejects(checkDist(folder), /fora do site/);
  await fs.unlink(path.join(folder, 'src', 'main.js'));
  await fs.rmdir(path.join(folder, 'src'));
  await fs.writeFile(path.join(folder, 'app.js.map'), '{}');
  await assert.rejects(checkDist(folder), /Arquivo fora do site/);
  await fs.unlink(path.join(folder, 'app.js.map'));
  const files = await checkDist(folder);
  await fs.appendFile(path.join(folder, files.find((file) => file.endsWith('.js'))), '\n//# sourceMappingURL=private.map');
  await assert.rejects(checkDist(folder), /Source map encontrado/);
});

async function repository(t) {
  const folder = await temporary(t);
  const checkout = path.join(folder, 'source');
  const remote = path.join(folder, 'remote.git');
  await fs.mkdir(checkout);
  const env = { ...process.env, GIT_AUTHOR_NAME: 'Test', GIT_AUTHOR_EMAIL: 'test@example.invalid',
    GIT_COMMITTER_NAME: 'Test', GIT_COMMITTER_EMAIL: 'test@example.invalid' };
  const git = (args) => execFileSync('git', args, { cwd: checkout, env, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
  git(['init', '--bare', remote]);
  git(['init', '-b', 'master']);
  await fs.writeFile(path.join(checkout, '.gitignore'), 'dist/\n');
  await fs.writeFile(path.join(checkout, 'source.js'), '// private source structure');
  git(['add', '.']);
  git(['commit', '-m', 'source fixture']);
  git(['remote', 'add', 'origin', remote]);
  await fs.cp(output, path.join(checkout, 'dist'), { recursive: true });
  return { checkout, git };
}

test('deploy branch contains only dist and updates without changing the source index', async (t) => {
  const { checkout, git } = await repository(t);
  const before = git(['status', '--porcelain']);
  await publishDist(checkout);
  const ref = `refs/heads/${productionBranch}`;
  const first = git(['ls-remote', '--heads', 'origin', ref]).split(/\s+/)[0];
  git(['fetch', 'origin', ref]);
  const files = git(['ls-tree', '-r', '--name-only', 'FETCH_HEAD']).split('\n').sort();
  assert.deepEqual(files, await checkDist(output));
  assert.equal(git(['status', '--porcelain']), before);
  await publishDist(checkout);
  assert.equal(git(['ls-remote', '--heads', 'origin', ref]).split(/\s+/)[0], first);
  await fs.appendFile(path.join(checkout, 'dist', 'index.html'), '\n<!-- new build -->\n');
  await publishDist(checkout);
  git(['fetch', 'origin', ref]);
  assert.equal(git(['rev-parse', 'FETCH_HEAD^']), first);
  assert.equal(git(['status', '--porcelain']), before);
});

test('deploy branch refuses to replace unrelated work', async (t) => {
  const { checkout, git } = await repository(t);
  const ref = `refs/heads/${productionBranch}`;
  git(['switch', '-c', productionBranch]);
  await fs.writeFile(path.join(checkout, 'manual.js'), '// independent release change');
  git(['add', '.']);
  git(['commit', '-m', 'manual release work']);
  git(['push', 'origin', `HEAD:${ref}`]);
  const original = git(['rev-parse', 'HEAD']);
  git(['switch', 'master']);
  await assert.rejects(publishDist(checkout), /contem trabalho manual/);
  assert.equal(git(['ls-remote', '--heads', 'origin', ref]).split(/\s+/)[0], original);
});

test('the first release preserves existing source history and publishes only dist', async (t) => {
  const { checkout, git } = await repository(t);
  const ref = `refs/heads/${productionBranch}`;
  const previous = git(['rev-parse', 'HEAD']);
  git(['push', 'origin', `HEAD:${ref}`]);
  await fs.appendFile(path.join(checkout, 'source.js'), '\n// new source build');
  git(['add', '.']);
  git(['commit', '-m', 'ready for dist migration']);
  const source = git(['rev-parse', 'HEAD']);
  await publishDist(checkout);
  git(['fetch', 'origin', ref]);
  assert.equal(git(['rev-parse', 'FETCH_HEAD^']), previous);
  assert.deepEqual(git(['ls-tree', '-r', '--name-only', 'FETCH_HEAD']).split('\n').sort(), await checkDist(output));
  assert.equal(git(['rev-parse', 'master']), source);
  assert.equal(git(['branch', '--show-current']), 'master');
  assert.equal(git(['status', '--porcelain']), '');
});
