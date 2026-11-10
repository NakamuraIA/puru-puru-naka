import * as THREE from 'three';
import { fxLayer, reduceMotion } from '../core/media.js';

/**
 * Overlay effects drawn in the DOM on top of the canvas: hearts when it is
 * happy, little z's when it falls asleep. Both self-remove when their CSS
 * animation ends.
 */
export function createFx(camera, slime, geometry) {
  const { FLOOR, TOP } = geometry;
  const _sp = new THREE.Vector3();
  let getSq = () => 0;

  const HEART_SVG = '<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.2 0 3.7 1.3 4.3 2.6h2c.6-1.3 2.1-2.6 4.3-2.6 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" fill="currentColor" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>';
  function hearts(x, y, n = 4) {
    if (reduceMotion) n = Math.min(n, 1);
    for (let i = 0; i < n; i++) {
      const el = document.createElement('span');
      el.className = 'fx-heart';
      el.innerHTML = HEART_SVG;
      el.style.color = i % 2 ? 'var(--accent-deep)' : '#FF6F9E';
      el.style.left = x + 'px'; el.style.top = y + 'px';
      const a = -Math.PI / 2 + (Math.random() - 0.5) * 2.2;
      const r = 60 + Math.random() * 70;
      el.style.setProperty('--dx', (Math.cos(a) * r).toFixed(1) + 'px');
      el.style.setProperty('--dy', (Math.sin(a) * r).toFixed(1) + 'px');
      el.style.setProperty('--rot', ((Math.random() - 0.5) * 60).toFixed(1) + 'deg');
      el.style.setProperty('--s', (14 + Math.random() * 12).toFixed(0) + 'px');
      el.style.setProperty('--d', (0.9 + Math.random() * 0.6).toFixed(2) + 's');
      fxLayer.appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    }
  }
  /** Screen position of the top of the slime, in CSS pixels. */
  function slimeScreenTop() {
    slime.localToWorld(_sp.set(0, FLOOR + (TOP - FLOOR) * (1 + getSq()), 0));
    _sp.project(camera);
    return { x: (_sp.x * 0.5 + 0.5) * innerWidth, y: (-_sp.y * 0.5 + 0.5) * innerHeight };
  }
  /** Sleepy z, floating up from the top of the head. */
  function zzz() {
    const p = slimeScreenTop();
    const el = document.createElement('span');
    el.className = 'fx-z'; el.textContent = 'z';
    el.style.left = (p.x + 40) + 'px'; el.style.top = (p.y + 10) + 'px';
    el.style.setProperty('--s', (18 + Math.random() * 12).toFixed(0) + 'px');
    fxLayer.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }

  return { hearts, zzz, slimeScreenTop, useSquash: (fn) => { getSq = fn; } };
}
