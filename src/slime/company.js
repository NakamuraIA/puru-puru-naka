import { createCreature } from './creature.js';
import { reduceMotion } from '../core/media.js';

/** One optional companion, with bounded collision response and a finite hug. */
export function createCompany(main, { scene, camera, store, creatureOptions, onCreate, onRemove, counter, sfx }) {
  let friend = null, hugUntil = 0, nextPlay = 0, lastContact = 0;
  function setEnabled(enabled) {
    if (Boolean(friend) === Boolean(enabled)) return;
    if (enabled) {
      friend = createCreature(scene, camera, {
        ...creatureOptions, detail: creatureOptions.coarse ? 10 : 14, radius: 0.78, floor: main.geometry.FLOOR,
        isActive: () => creatureOptions.isFriendActive(friend),
      });
      friend.world.body.y = 0; friend.world.body.air = false;
      friend.world.body.x = Math.min(main.world.bounds.xR - friend.geometry.HALFW, main.world.body.x + 1.9);
      friend.world.body.z = main.world.body.z;
      friend.setFlavor(7); // Honey: a calm contrast to an energetic main pururu.
      friend.expression.started = true;
      friend.physics.writeGeometry();
      onCreate(friend);
    } else {
      onRemove(friend); friend.dispose(); friend = null; hugUntil = 0;
    }
    store.update({ companion: enabled });
  }
  function hug() {
    if (!friend) return false;
    main.grabCtl.release('cancel'); friend.grabCtl.release('cancel');
    main.expression.feel('affection', 3); friend.expression.feel('affection', 3);
    main.world.body.vx = friend.world.body.vx = 0;
    main.world.body.vz = friend.world.body.vz = 0;
    hugUntil = performance.now() / 1000 + 2.8;
    const p = main.fx.slimeScreenTop(); main.fx.hearts(p.x + 30, p.y + 35, 6);
    counter.bump(); sfx.flavor(); return true;
  }
  function update(dt, now) {
    if (!friend) return;
    Object.assign(friend.world.bounds, main.world.bounds);
    const a = main.world.body, b = friend.world.body;
    if (main.expression.ex.pose || friend.expression.ex.pose) return;
    if (now < hugUntil && !main.world.grab.on && !friend.world.grab.on) {
      const distance = (main.geometry.HALFW + friend.geometry.HALFW) * 0.72;
      const x = (a.x + b.x) / 2;
      const rate = 1 - Math.exp(-dt * 4);
      a.x += (x - distance / 2 - a.x) * rate;
      b.x += (x + distance / 2 - b.x) * rate;
      b.z += (a.z - b.z) * rate;
      main.world.sqTarget = friend.world.sqTarget = -0.025;
      return;
    }
    const dx = b.x - a.x, dz = b.z - a.z, distance = Math.hypot(dx, dz);
    const minimum = (main.geometry.HALFW + friend.geometry.HALFW) * 0.82;
    if (distance < minimum && Math.abs(a.y - b.y) < 1) {
      const nx = distance > 0.001 ? dx / distance : 1, nz = distance > 0.001 ? dz / distance : 0;
      const overlap = Math.min(0.18, minimum - distance);
      if (!main.world.grab.on) { a.x -= nx * overlap * 0.4; a.z -= nz * overlap * 0.4; }
      if (!friend.world.grab.on) { b.x += nx * overlap * 0.6; b.z += nz * overlap * 0.6; }
      if (now - lastContact > 1.5) {
        lastContact = now;
        main.expression.ex.happyUntil = friend.expression.ex.happyUntil = now + 1;
        main.world.sqv -= 0.5; friend.world.sqv -= 0.5;
      }
    }
    if (now > nextPlay && !reduceMotion && !b.air && !friend.world.grab.on) {
      nextPlay = now + 5 + Math.random() * 3;
      if (distance > 3) friend.physics.hop(3.4, -dx / distance * 2.8, -dz / distance * 2.8);
      else if (a.air) { friend.physics.hop(3.6); friend.expression.ex.happyUntil = now + 1; }
    }
  }
  return { setEnabled, hug, update, get friend() { return friend; }, get enabled() { return Boolean(friend); } };
}
