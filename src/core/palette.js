import * as THREE from 'three';
import { FLAVORS } from '../data/flavors.js';

/**
 * Owns the animated palette. `current` is what three.js reads each frame,
 * `target` is where the selected flavor wants to go; the main loop lerps
 * between them so switching flavors is a glide, not a jump.
 */
export function createPalette() {
  const current = {};
  const target = {};
  for (const k of ['body', 'atten', 'glow']) {
    current[k] = new THREE.Color(FLAVORS[0][k]);
    target[k] = new THREE.Color(FLAVORS[0][k]);
  }

  // material params that are also interpolated
  const material = { trans: 1, irid: 0.2, rainbow: 0, rough: 0.14 };
  const materialTarget = { ...material };

  // shader-only uniforms
  const shader = { uRainbow: { value: 0 }, uTime: { value: 0 } };

  return { index: 0, current, target, material, materialTarget, shader };
}
