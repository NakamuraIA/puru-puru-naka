import assert from 'node:assert/strict';
import test from 'node:test';
import { createStore, normalizeSave, STORAGE_KEY } from '../src/core/storage.js';
import { createSlimeGeometry } from '../src/slime/geometry.js';
import { createPhysics } from '../src/slime/physics.js';
import { createLoop } from '../src/core/loop.js';

function memoryStorage() {
  const values = new Map();
  return { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) };
}

test('plocs and choices survive reload and increments from another tab', () => {
  const storage = memoryStorage();
  const first = createStore(storage), second = createStore(storage);
  first.update({ flavor: 'coffee', theme: 'garden', companion: true, toy: 'ice' });
  assert.equal(first.increment(), 1);
  const reload = createStore(storage);
  assert.deepEqual(reload.state, { version: 1, plocs: 1, flavor: 'coffee', theme: 'garden', companion: true, toy: 'ice' });
  assert.equal(second.increment(), 2);
  assert.equal(createStore(storage).state.flavor, 'coffee');
  assert.equal(createStore(storage).state.theme, 'garden');
  assert.equal(first.increment(), 3);
  first.refresh(); assert.equal(first.state.plocs, 3);
});

test('invalid saves and unavailable storage never corrupt the counter', () => {
  const storage = memoryStorage(); storage.setItem(STORAGE_KEY, '{broken');
  assert.equal(createStore(storage).state.plocs, 0);
  assert.deepEqual(normalizeSave({ version: 1, plocs: -2, flavor: 'missing', theme: 'missing', companion: 'yes', toy: 'unknown' }),
    { version: 1, plocs: 0, flavor: 'soda', theme: 'bathroom', companion: false, toy: 'none' });
  const blocked = createStore({ getItem() { throw new Error('blocked'); }, setItem() { throw new Error('quota'); } });
  assert.equal(blocked.increment(), 1); assert.equal(blocked.increment(), 2);
  blocked.update({ plocs: Infinity }); assert.equal(blocked.state.plocs, 2);
  blocked.refresh(); assert.equal(blocked.state.plocs, 2);
  const maximum = normalizeSave({ version: 1, plocs: Number.MAX_SAFE_INTEGER });
  storage.setItem(STORAGE_KEY, JSON.stringify(maximum));
  assert.equal(createStore(storage).increment(), Number.MAX_SAFE_INTEGER);
});

test('the smaller companion has independent buffers and stays on the same floor', () => {
  const main = createSlimeGeometry(false, { detail: 3 });
  const geometry = createSlimeGeometry(true, { detail: 3, radius: 0.78, floor: main.FLOOR });
  assert.equal(geometry.FLOOR, main.FLOOR);
  assert(geometry.HALFW < main.HALFW); assert.notEqual(geometry.disp, main.disp);
  const world = { body: { x: 0, y: 3, z: 0, vx: 0, vy: 0, vz: 0, air: true }, grab: { on: false },
    bounds: { xL: -5, xR: 5, zMin: -3, zMax: 3, yMax: 5 }, events: [], sq: 0, sqv: 0, sqTarget: 0 };
  const physics = createPhysics(world, geometry);
  for (let i = 0; i < 600; i++) physics.step(1 / 240);
  physics.writeGeometry();
  assert(world.body.y < 0.02); assert(world.body.y >= 0);
  assert([...geometry.pos].every(Number.isFinite));
  for (let i = 0; i < geometry.N; i++) assert(geometry.pos[i * 3 + 1] >= main.FLOOR - 0.0001);
  physics.dispose(); geometry.geo.dispose(); main.geo.dispose();
});

test('the animation clock measures one second at either 30 or 60 frames per second', t => {
  const originalRequest = globalThis.requestAnimationFrame, originalCancel = globalThis.cancelAnimationFrame;
  t.after(() => { globalThis.requestAnimationFrame = originalRequest; globalThis.cancelAnimationFrame = originalCancel; });
  function elapsed(fps) {
    let callback, total = 0;
    globalThis.requestAnimationFrame = fn => { callback = fn; return 1; };
    globalThis.cancelAnimationFrame = () => {};
    const loop = createLoop(dt => { total += dt; }); loop.start();
    for (let i = 0; i <= fps; i++) callback(i * 1000 / fps);
    loop.stop(); return total;
  }
  assert(Math.abs(elapsed(30) - 1) < 1e-9);
  assert(Math.abs(elapsed(60) - 1) < 1e-9);
});
