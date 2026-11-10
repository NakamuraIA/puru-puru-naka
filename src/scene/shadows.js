import * as THREE from 'three';

/**
 * Two soft shadow blobs plus a colored light pool on the counter. They
 * follow the slime footprint and fade out as it lifts off the surface.
 *
 * `setup` and `update` are kept verbatim from the original build.
 */
export function createShadows(scene, bodyColor, floorY) {
  /* ---------- floor shadow + tinted light pool ---------- */
  function radialTexture(stops) {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const g = c.getContext('2d');
    const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    for (const [o, a] of stops) gr.addColorStop(o, `rgba(255,255,255,${a})`);
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.NoColorSpace; return t;
  }
  const shadowTex = radialTexture([[0, 1], [0.45, 0.55], [0.75, 0.15], [1, 0]]);
  const SHADOW = new THREE.Color('#3A414B');
  const mkFlat = (color, opacity) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ color, alphaMap: shadowTex, transparent: true, depthWrite: false, opacity, toneMapped: false }));
    m.rotation.x = -Math.PI / 2; scene.add(m); return m;
  };
  const shadowSoft = mkFlat(SHADOW, 0.1);
  const shadowCore = mkFlat(SHADOW, 0.3);
  const pool = mkFlat(bodyColor, 0.5);

  /** Positions and fades the blobs. Called every frame. */
  function update(body, sq, rainbow) {
    // shadows follow the footprint
    const s1 = 1 + sq;
    const lift = Math.max(0, body.y);
    const spread = 1 / Math.sqrt(s1);
    const fy = floorY + 0.004;
      const shade = 1 / (1 + lift * 0.8);
      shadowCore.position.set(body.x + 0.05, fy, body.z - 0.05);
      shadowCore.scale.set(2.1 * spread * (1 + lift * 0.15), 1.3 * spread * (1 + lift * 0.15), 1);
      shadowCore.material.opacity = 0.3 * shade;
      shadowSoft.position.set(body.x - 0.15, fy - 0.001, body.z - 0.2);
      shadowSoft.scale.set(3.4 * spread * (1 + lift * 0.2), 2.0 * spread, 1);
      shadowSoft.material.opacity = 0.09 * shade;
      pool.position.set(body.x + 0.1, fy + 0.001, body.z + 0.35);
      pool.scale.set(2.5 * spread, 1.4 * spread, 1);
      pool.material.opacity = 0.5 * shade * (1 - 0.5 * rainbow);

  }

  function dispose() {
    for (const mesh of [shadowSoft, shadowCore, pool]) {
      scene.remove(mesh); mesh.geometry.dispose(); mesh.material.dispose();
    }
    shadowTex.dispose();
  }
  return { shadowSoft, shadowCore, pool, update, dispose };
}
