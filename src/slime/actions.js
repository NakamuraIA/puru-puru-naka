import { EMOTIONS, ACTIONS } from '../data/playground.js';
import { reduceMotion } from '../core/media.js';

/** Finite actions share the normal solver; they never start another frame loop. */
export function createActions(world, { expression, physics, counter, sfx, fx }) {
  let action = null;
  let pokes = [];
  let rotationY = 0, rotationZ = 0;
  function hearts() {
    const p = fx.slimeScreenTop();
    fx.hearts(p.x, p.y + 25, 4);
  }
  function emote(id) {
    if (!EMOTIONS.some(item => item.id === id)) return;
    expression.feel(id);
    if (id === 'affection') { pokes = []; expression.ex.angryUntil = 0; hearts(); }
  }
  function pet() { emote('affection'); expression.ex.strokeLevel = 1.5; counter.bump(); sfx.wobble(); }
  function onPoke(now) {
    pokes = [...pokes.filter(time => now - time < 4), now];
    if (pokes.length >= expression.personality().tolerance) {
      expression.ex.moodUntil = 0;
      expression.ex.angryUntil = now + 4;
      expression.ex.happyUntil = 0;
    }
  }
  function run(id) {
    if (!ACTIONS.some(item => item.id === id) || id === 'hug' || world.grab.on) return false;
    const now = performance.now() / 1000;
    expression.touch(now, { wakeHop: false });
    if (id === 'jump') {
      if (!physics.hop(reduceMotion ? 4 : 6.8)) return false;
      expression.feel('happy', 1.2); sfx.jump(); counter.bump(); return true;
    }
    if (id === 'nap') {
      action = null; expression.feel('sleep'); sfx.wobble(); counter.bump(); return true;
    }
    action = { id, start: now, until: now + (id === 'sneeze' ? 1.4 : 2.8), fired: false };
    expression.feel(id === 'sneeze' ? 'surprise' : 'happy', 3);
    sfx.wobble(); counter.bump();
    return true;
  }
  function update(t, now) {
    rotationY = rotationZ = 0;
    if (!action || now >= action.until || world.grab.on || expression.ex.pose) { action = null; return; }
    const age = now - action.start;
    if (action.id === 'dance') {
      world.sqTarget += (reduceMotion ? 0.015 : 0.09) * Math.sin(age * 13);
      rotationZ = (reduceMotion ? 0.015 : 0.12) * Math.sin(age * 7);
    } else if (action.id === 'spin') {
      const u = Math.min(1, age / 2.8);
      rotationY = reduceMotion ? 0 : Math.PI * 4 * (u * u * (3 - 2 * u));
      world.sqTarget += (reduceMotion ? 0.01 : 0.04) * Math.sin(age * 10);
    } else if (action.id === 'sneeze') {
      if (age < 0.55) world.sqTarget -= 0.1 * Math.sin(age / 0.55 * Math.PI);
      else if (!action.fired) {
        action.fired = true; world.sqv -= reduceMotion ? 0.4 : 2.8;
        expression.feel('happy', 0.8); sfx.poke();
        if (!reduceMotion) physics.hop(3.5);
      }
    }
  }
  return {
    run, emote, pet, onPoke, onStroke: () => { pokes = []; }, update,
    get rotationY() { return rotationY; }, get rotationZ() { return rotationZ; },
    get current() { return action?.id ?? null; },
  };
}
