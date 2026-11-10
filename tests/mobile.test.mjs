import assert from 'node:assert/strict';
import test from 'node:test';
import { createSlimeGeometry } from '../src/slime/geometry.js';
import { createPhysics } from '../src/slime/physics.js';
import { createLoop } from '../src/core/loop.js';

test('optimized normals match Three.js on deformed mobile, desktop and companion meshes', () => {
  for (const detail of [10, 20, 26]) {
    const geometry = createSlimeGeometry(true, { detail });
    const world = { body: {}, grab: {}, bounds: {}, events: [], sq: 0.27 };
    for (let i = 0; i < geometry.disp.length; i++) geometry.disp[i] = Math.sin(i * 0.17) * 0.045;
    const physics = createPhysics(world, geometry);
    physics.writeGeometry();
    const optimized = geometry.geo.attributes.normal.array.slice();
    geometry.geo.computeVertexNormals();
    const reference = geometry.geo.attributes.normal.array;
    for (let i = 0; i < reference.length; i++) {
      assert(Number.isFinite(optimized[i]));
      assert(Math.abs(optimized[i] - reference[i]) < 1e-6, `detail ${detail}, component ${i}`);
    }
    physics.dispose(); geometry.geo.dispose();
  }
});

test('hidden pages stop scheduling frames and resume without accumulated time', t => {
  const request = globalThis.requestAnimationFrame, cancel = globalThis.cancelAnimationFrame;
  t.after(() => { globalThis.requestAnimationFrame = request; globalThis.cancelAnimationFrame = cancel; });
  const queued = new Map(); let id = 0, paused = 0;
  globalThis.requestAnimationFrame = fn => { queued.set(++id, fn); return id; };
  globalThis.cancelAnimationFrame = key => queued.delete(key);
  const page = new EventTarget(); page.hidden = false;
  const deltas = [];
  const loop = createLoop(dt => deltas.push(dt), { page, onPause: () => paused++ });
  const tick = time => { const [key, fn] = queued.entries().next().value; queued.delete(key); fn(time); };
  loop.start(); loop.start(); assert.equal(queued.size, 1);
  tick(100); tick(116); assert.equal(deltas[1], 0.016);
  page.hidden = true; page.dispatchEvent(new Event('visibilitychange'));
  assert.equal(queued.size, 0); assert.equal(paused, 1);
  page.hidden = false; page.dispatchEvent(new Event('visibilitychange'));
  tick(60000); assert.equal(deltas.at(-1), 0);
  tick(60016); assert.equal(deltas.at(-1), 0.016);
  loop.stop(); assert.equal(queued.size, 0);
  page.dispatchEvent(new Event('visibilitychange')); assert.equal(queued.size, 0);
  page.hidden = true; loop.start(); assert.equal(queued.size, 0);
  page.hidden = false; page.dispatchEvent(new Event('visibilitychange'));
  assert.equal(queued.size, 1); loop.stop();
});

test('touch release, pinch and cancelled capture leave no phantom hover or grab', async t => {
  const original = { matchMedia: globalThis.matchMedia, document: globalThis.document, window: globalThis.window };
  t.after(() => {
    for (const [key, value] of Object.entries(original)) {
      if (value === undefined) delete globalThis[key]; else globalThis[key] = value;
    }
  });
  globalThis.matchMedia = () => ({ matches: false });
  globalThis.document = { querySelector: () => null };
  globalThis.window = new EventTarget();
  const { bindPointerEvents } = await import('../src/interaction/pointer.js');
  const canvas = new EventTarget(); canvas.style = {};
  canvas.setPointerCapture = () => {};
  const touches = new Map(), releases = [];
  const grab = { on: false }, pinch = { value: 0, last: -10 };
  const pointer = { has: false };
  const unbind = bindPointerEvents({
    canvas, world: { body: {}, grab, pinch }, geometry: {}, touches,
    raycast: { pointer, setNDC: () => { pointer.has = true; }, hitTest: () => ({}) },
    grabCtl: { begin: (_, id) => { grab.on = true; grab.id = id; }, release: mode => { if (grab.on) releases.push(mode); grab.on = false; } },
    physics: {}, sfx: { unlock() {} }, touch() {}, ex: {}, doJump() {},
  });
  t.after(unbind);
  function send(type, pointerId, x = 100) {
    const event = new Event(type);
    Object.assign(event, { pointerId, pointerType: 'touch', clientX: x, clientY: 100, button: 0 });
    canvas.dispatchEvent(event);
  }
  send('pointerdown', 1); assert(grab.on);
  send('pointerup', 1); assert.equal(releases.at(-1), 'up');
  assert.equal(pointer.has, false); assert.equal(touches.size, 0);
  // Distinct coordinates avoid interpreting this new gesture as a double tap.
  send('pointerdown', 2, 180); send('pointerdown', 3, 240);
  assert.equal(grab.on, false); assert.equal(releases.at(-1), 'cancel');
  send('pointermove', 3, 300); assert(pinch.value > 0);
  send('pointerup', 3, 300); assert.equal(pinch.value, 0);
  send('pointerup', 2, 180); assert.equal(pointer.has, false); assert.equal(touches.size, 0);
  assert.deepEqual(releases, ['up', 'cancel']);
  send('pointerdown', 4, 100); send('pointercancel', 4);
  assert.equal(grab.on, false); assert.equal(pointer.has, false);
  send('pointerdown', 5, 180); send('lostpointercapture', 5, 180);
  assert.equal(grab.on, false); assert.equal(pointer.has, false); assert.equal(touches.size, 0);
});
