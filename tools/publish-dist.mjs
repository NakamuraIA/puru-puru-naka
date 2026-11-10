import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { checkDist } from './check-dist.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const productionBranch = 'release';

/** Publish dist at the root of the existing Square Cloud branch, without force pushes. */
export async function publishDist(repositoryRoot = root) {
  await checkDist(path.join(repositoryRoot, 'dist'));
  const temporary = await fs.mkdtemp(path.join(os.tmpdir(), 'pururu-git-index-'));
  const env = {
    ...process.env,
    ...(process.env.GITHUB_ACTIONS === 'true' ? {
      GIT_AUTHOR_NAME: 'github-actions[bot]',
      GIT_AUTHOR_EMAIL: '41898282+github-actions[bot]@users.noreply.github.com',
      GIT_COMMITTER_NAME: 'github-actions[bot]',
      GIT_COMMITTER_EMAIL: '41898282+github-actions[bot]@users.noreply.github.com',
    } : {}),
  };
  const git = (args, input, isolatedIndex = false) => execFileSync('git', args, {
    cwd: repositoryRoot,
    env: isolatedIndex ? { ...env, GIT_INDEX_FILE: path.join(temporary, 'index') } : env,
    input, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'],
  }).trim();
  try {
    const sourceCommit = git(['rev-parse', 'HEAD']);
    const workflowSource = process.env.GITHUB_ACTIONS === 'true' &&
      process.env.GITHUB_REF === 'refs/heads/master' &&
      process.env.GITHUB_EVENT_NAME === 'workflow_dispatch' &&
      sourceCommit === process.env.GITHUB_SHA;
    if (git(['branch', '--show-current']) !== 'master' && !workflowSource) {
      throw new Error('Publique a partir da master; a release recebe somente o site gerado.');
    }
    if (git(['status', '--porcelain', '--untracked-files=all'])) {
      throw new Error('Salve as alteracoes em um commit na master antes de publicar.');
    }
    const target = `refs/heads/${productionBranch}`;
    const remoteRef = git(['ls-remote', '--heads', 'origin', target]);
    let parent;
    if (remoteRef) {
      git(['fetch', '--no-tags', 'origin', target]);
      parent = git(['rev-parse', 'FETCH_HEAD']);
      const subject = git(['show', '-s', '--format=%s', parent]);
      if (!subject.startsWith('[pururu-dist] ')) {
        // The first migration can replace source files only after their history
        // has been preserved in master. Divergent release work must be merged first.
        try {
          git(['merge-base', '--is-ancestor', parent, sourceCommit]);
        } catch {
          throw new Error(`A branch ${productionBranch} contem trabalho manual fora da master; publicacao interrompida.`);
        }
      }
    }
    // An isolated index leaves the source checkout and its index untouched.
    git(['read-tree', '--empty'], undefined, true);
    git(['add', '--force', '--', 'dist'], undefined, true);
    const tree = git(['write-tree'], undefined, true);
    const outputTree = git(['rev-parse', `${tree}:dist`]);
    if (parent && git(['rev-parse', `${parent}^{tree}`]) === outputTree) {
      console.log(`${productionBranch} ja corresponde a dist/.`);
      return;
    }
    const source = git(['rev-parse', '--short', sourceCommit]);
    const commit = git(['commit-tree', outputTree, ...(parent ? ['-p', parent] : [])], `[pururu-dist] ${source}\n\nSource: ${sourceCommit}\n`);
    git(['push', 'origin', `${commit}:${target}`]);
    console.log(`dist/ publicado na branch ${productionBranch}.`);
  } finally {
    // Only remove the exact temporary index directory created by this run.
    if (path.dirname(temporary) !== path.resolve(os.tmpdir()) || !path.basename(temporary).startsWith('pururu-git-index-')) {
      throw new Error('Diretorio temporario invalido.');
    }
    await fs.rm(temporary, { recursive: true, force: true });
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (process.env.GITHUB_ACTIONS === 'true' &&
      (process.env.GITHUB_REF !== 'refs/heads/master' || process.env.GITHUB_EVENT_NAME !== 'workflow_dispatch')) {
    throw new Error('No GitHub, a publicacao exige executar o workflow manualmente na master.');
  }
  await publishDist();
}
