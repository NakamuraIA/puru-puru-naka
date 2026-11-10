import * as THREE from 'three';

/**
 * Water droplets left on the counter. They fade out on their own, and get
 * slurped up faster when the slime rolls over them.
 *
 * Bodies are pooled: 30 meshes exist up front and are recycled.
 */
export function createDroplets(scene, { floorY, HALFW, attenColor }) {
  const dropGeo = new THREE.SphereGeometry(1, 20, 12);
  const dropMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, roughness: 0.02, metalness: 0, transmission: 1, thickness: 0.12, ior: 1.33,
    clearcoat: 1, envMapIntensity: 1.5, attenuationColor: attenColor.clone(), attenuationDistance: 0.35,
  });
  const drops = [];
  for (let i = 0; i < 30; i++) {
    const d = new THREE.Mesh(dropGeo, dropMat);
    d.visible = false; d.userData = { life: 0, max: 1, r: 0.05 };
    scene.add(d); drops.push(d);
  }
  let dropCursor = 0;
  /** Spawns one droplet, reusing the oldest pooled mesh. */
  function addDrop(x, z, r, life = 10 + Math.random() * 8) {
    const d = drops[dropCursor]; dropCursor = (dropCursor + 1) % drops.length;
    d.userData = { life, max: life, r };
    d.position.set(x, floorY + r * 0.28, z);
    d.visible = true;
  }
  /** Scatters droplets in a ring around the slime. */
  function splashDrops(n, body, spread = 1) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const rr = HALFW * (1.02 + Math.random() * 0.45 * spread);
      addDrop(body.x + Math.cos(a) * rr, body.z + Math.sin(a) * rr * 0.85, 0.025 + Math.random() * 0.055);
    }
  }
  /** Ages the droplets; called every frame. */
  function update(dt, body) {
      // droplets: fade out, and get slurped up when the slime rolls over them
      for (const d of drops) {
        if (!d.visible) continue;
        const u = d.userData;
        const under = Math.hypot(d.position.x - body.x, d.position.z - body.z) < HALFW * 0.9 && body.y < 0.3;
        u.life -= dt * (under ? 8 : 1);
        if (u.life <= 0) { d.visible = false; continue; }
        const k = Math.min(1, u.life / Math.min(2.5, u.max));
        d.scale.set(u.r * k, u.r * 0.45 * k, u.r * k);
        d.position.y = floorY + u.r * 0.18 * k;
      }

  }

  return { addDrop, splashDrops, update, dropMat };
}
