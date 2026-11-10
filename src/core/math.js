/**
 * Small math helpers shared by the physics, the camera and the UI.
 * Pure functions only — no three.js state lives here.
 */

/** Clamp `x` into the `[a, b]` range. */
export const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

/** Hermite interpolation between two edges; returns 0..1. */
export const smoothstep = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/** Polynomial smooth minimum (used to round the flat bottom of the slime). */
export const smin = (a, b, k) => {
  const h = Math.max(k - Math.abs(a - b), 0) / k;
  return Math.min(a, b) - h * h * k * 0.25;
};

/** Frame-rate independent exponential approach towards `tgt`. */
export const smoothTo = (cur, tgt, rate, dt) =>
  cur + (tgt - cur) * (1 - Math.exp(-rate * dt));
