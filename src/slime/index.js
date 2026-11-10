import * as THREE from 'three';
import { createSlimeGeometry } from './geometry.js';
import { createSlimeMaterial } from './material.js';

/**
 * Assembles the slime: geometry buffers + material + a group holding the
 * mesh and the little bubbles that drift inside it.
 */
export function createSlime(scene, palette, coarse, options) {
  const geometry = createSlimeGeometry(coarse, options);
  const { material, face } = createSlimeMaterial(palette);

  const slime = new THREE.Group();
  scene.add(slime);

  const mesh = new THREE.Mesh(geometry.geo, material);
  mesh.frustumCulled = false;
  slime.add(mesh);

  // air bubbles trapped in the jelly
  const bubbleMat = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
  const bubbles = [];
  for (let i = 0; i < 7; i++) {
    const b = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 8), bubbleMat);
    b.userData = {
      phase: Math.random(),
      speed: 0.04 + Math.random() * 0.05,
      ang: Math.random() * Math.PI * 2,
      rad: 0.25 + Math.random() * 0.45,
      size: 0.016 + Math.random() * 0.028,
    };
    bubbles.push(b);
    slime.add(b);
  }

  function dispose() {
    scene.remove(slime);
    geometry.geo.dispose(); material.dispose(); bubbleMat.dispose();
    for (const bubble of bubbles) bubble.geometry.dispose();
  }
  return { slime, mesh, material, face, geometry, bubbles, dispose };
}
