import { EMOTIONS } from '../data/playground.js';

export function createPhotoMode({ renderer, scene, camera, canvas, i18n, getActors, store }) {
  const toolbar = document.querySelector('#photo-controls');
  const poseSelect = document.querySelector('#photo-pose');
  const take = document.querySelector('#photo-take');
  const status = document.querySelector('#photo-status');
  const output = document.querySelector('#photo-output');
  const preview = document.querySelector('#photo-preview');
  const download = document.querySelector('#photo-download');
  let active = false, busy = false;
  let currentUrl = null;
  for (const emotion of EMOTIONS) {
    const option = document.createElement('option'); option.value = emotion.id;
    option.dataset.i18n = emotion.key; poseSelect.appendChild(option);
  }
  i18n.apply(toolbar);
  function setPose(id) {
    if (!EMOTIONS.some(item => item.id === id)) return;
    poseSelect.value = id;
    for (const actor of getActors()) {
      actor.grabCtl.release('cancel'); actor.expression.ex.pose = id;
      actor.physics.cancelHop();
      actor.world.body.y = 0; actor.world.body.air = false;
      actor.world.body.vx = actor.world.body.vy = actor.world.body.vz = 0;
      actor.world.sq = actor.world.sqv = 0;
      actor.geometry.disp.fill(0); actor.geometry.vel.fill(0); actor.physics.writeGeometry();
      actor.slime.position.set(actor.world.body.x, 0, actor.world.body.z); actor.slime.rotation.set(0, 0, 0);
      actor.face.eye.set(1, id === 'happy' || id === 'affection' ? 1 : 0, 0, id === 'sleep' ? 1 : 0);
      actor.face.surprise.value = id === 'surprise' ? 1 : 0; actor.face.angry.value = id === 'angry' ? 1 : 0;
      actor.face.affection.value = id === 'affection' ? 1 : 0; actor.face.wink.value = id === 'wink' ? 1 : 0;
      actor.face.look.set(0, 0);
    }
  }
  function open() {
    active = true; status.textContent = ''; output.hidden = true;
    const actors = getActors();
    actors.forEach((actor, index) => { actor.world.body.x = actors.length === 1 ? 0 : index === 0 ? -0.65 : 1.05; actor.world.body.z = 0; });
    document.querySelector('#app').classList.add('photo-mode'); toolbar.hidden = false;
    setPose('happy'); take.focus();
  }
  function close() {
    active = false;
    for (const actor of getActors()) { actor.expression.ex.pose = ''; actor.expression.touch(performance.now() / 1000, { wakeHop: false }); }
    document.querySelector('#app').classList.remove('photo-mode'); toolbar.hidden = true;
    document.querySelector('#play-open').focus();
  }
  async function capture() {
    if (busy) return;
    busy = true; take.disabled = true; status.textContent = i18n.t('photo.busy');
    try {
      renderer.render(scene, camera);
      const blob = await new Promise((resolve, reject) => canvas.toBlob(value => value ? resolve(value) : reject(new Error('Empty photo')), 'image/png'));
      if (currentUrl) URL.revokeObjectURL(currentUrl);
      currentUrl = URL.createObjectURL(blob);
      preview.src = currentUrl; download.href = currentUrl;
      download.download = `pururu-${store.state.flavor}-${store.state.theme}.png`;
      output.hidden = false;
      const link = document.createElement('a');
      link.href = currentUrl; link.download = download.download;
      document.body.appendChild(link); link.click(); link.remove();
      status.textContent = i18n.t('photo.done');
    } catch (error) { console.error('[pururu] photo:', error); status.textContent = i18n.t('photo.error'); }
    finally { busy = false; take.disabled = false; }
  }
  poseSelect.addEventListener('change', () => setPose(poseSelect.value));
  take.addEventListener('click', capture);
  document.querySelector('#photo-exit').addEventListener('click', close);
  addEventListener('pagehide', () => { if (currentUrl) URL.revokeObjectURL(currentUrl); });
  addEventListener('keydown', event => { if (active && event.key === 'Escape') close(); });
  return { open, close, setPose, get active() { return active; } };
}
