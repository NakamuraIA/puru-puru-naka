import { clamp, smoothstep } from '../core/math.js';
import { updateNormals } from './normals.js';
import {
  GRAVITY, FRICTION, K_SPRING, C_DAMP, K_NEIGHBOR, C_NEIGHBOR, COUPLE,
  K_SQUASH, C_SQUASH, K_FOLLOW, C_FOLLOW, WALL_Z,
} from './constants.js';

export const FIXED_STEP = 1 / 240;   // physics runs at a constant rate

/**
 * The soft-body solver: a rigid body (position, gravity, friction,
 * collisions) driving a mass-spring mesh where every vertex is pulled back
 * to its rest position and towards its neighbours.
 *
 * The original solver is preserved; geometry normals use the equivalent
 * calculation directly on typed buffers to reduce the per-frame CPU cost.
 */
export function createPhysics(world, geometry) {
  const { body, grab, bounds, events } = world;
  const {
    N, unit, rest, disp, vel, mob, outX, outZ, gw,
    nbStart, nbList, invDeg, geo, pos, restSqY, HALFW, FLOOR,
  } = geometry;
  let hopTimer = null;

  /** Calls fn(i, weight) for every vertex within `sigma` of vertex `g`. */
  function forEachNear(g, sigma, fn) {
    const gj = g * 3, gx = rest[gj], gy = rest[gj + 1], gz = rest[gj + 2];
    const inv = 1 / (2 * sigma * sigma), lim = 9 * sigma * sigma;
    for (let i = 0; i < N; i++) {
      const j = i * 3;
      const dx = rest[j] - gx, dy = rest[j + 1] - gy, dz = rest[j + 2] - gz;
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < lim) fn(i, Math.exp(-d2 * inv));
    }
  }

  /** Press a dent into the surface around vertex `g`. */
  function poke(g, strength = 4.2) {
    forEachNear(g, 0.36, (i, w) => {
      const j = i * 3;
      vel[j] -= unit[j] * strength * w;
      vel[j + 1] -= unit[j + 1] * strength * w;
      vel[j + 2] -= unit[j + 2] * strength * w;
    });
    world.sqv -= 1.2;
  }

  /** Drag a patch of surface along `v`. */
  function stroke(g, v, speed) {
    const k = Math.min(speed, 1);
    forEachNear(g, 0.32, (i, w) => {
      const j = i * 3;
      vel[j] += v.x * 0.16 * w - unit[j] * 0.3 * w * k;
      vel[j + 1] += v.y * 0.16 * w - unit[j + 1] * 0.3 * w * k;
      vel[j + 2] += v.z * 0.16 * w - unit[j + 2] * 0.3 * w * k;
    });
  }

  /** Small hop; a short delay gives the squash time to read. */
  function hop(vy, vx = 0, vz = 0) {
    if (body.air || grab.on || hopTimer !== null) return false;
    world.sqv -= 2.2;
    hopTimer = setTimeout(() => {
      hopTimer = null;
      if (grab.on) return;
      body.vy = vy; body.vx += vx; body.vz += vz;
      body.air = true; body.y = 0.0001;
      for (let i = 0; i < N; i++) vel[i * 3 + 1] -= vy * mob[i] * 0.55;
    }, 90);
    return true;
  }

  /** Horizontal shove (trackpad swipe, arrow keys). */
  function push(vx, vz, cap = 9) {
    body.vx = clamp(body.vx + vx, -cap, cap);
    body.vz = clamp(body.vz + vz, -cap, cap);
  }

  /** Advances the simulation by a fixed timestep. */
function step(h) {
  const pvx = body.vx, pvy = body.vy, pvz = body.vz;
  let grav = 0;
  if (grab.on) {
    body.vx += (K_FOLLOW * (grab.target.x - body.x) - C_FOLLOW * body.vx) * h;
      body.vy += (K_FOLLOW * (grab.target.y - body.y) - C_FOLLOW * body.vy) * h;
      body.vz += (K_FOLLOW * (grab.target.z - body.z) - C_FOLLOW * body.vz) * h;
      body.air = body.y > 0.02;
    } else if (body.air) {
      body.vy += GRAVITY * h; grav = GRAVITY * h;
    } else {
      const f = Math.exp(-FRICTION * h);
      body.vx *= f; body.vz *= f;
    }
    body.x += body.vx * h; body.y += body.vy * h; body.z += body.vz * h;

    // floor
    if (body.y <= 0 && (body.air || grab.on)) {
      const impact = -body.vy;
      body.y = 0;
      if (!grab.on && impact > 2.8) { body.vy = impact * 0.3; body.air = true; }
      else { body.vy = Math.max(0, body.vy); body.air = false; }
      if (impact > 0.5) { world.sqv -= impact * 0.62; events.push({ type: 'land', impact }); }
    }
    if (body.y > bounds.yMax) { body.y = bounds.yMax; if (body.vy > 0) body.vy *= -0.3; }
    // screen edges and the wall
    const xMin = bounds.xL + HALFW, xMax = bounds.xR - HALFW;
    if (body.x < xMin) { body.x = xMin; if (body.vx < 0) { events.push({ type: 'wall', impact: -body.vx }); body.vx *= -0.42; } }
    if (body.x > xMax) { body.x = xMax; if (body.vx > 0) { events.push({ type: 'wall', impact: body.vx }); body.vx *= -0.42; } }
    if (body.z < bounds.zMin) { body.z = bounds.zMin; if (body.vz < 0) { events.push({ type: 'wall', impact: -body.vz }); body.vz *= -0.42; } }
    if (body.z > bounds.zMax) { body.z = bounds.zMax; if (body.vz > 0) { events.push({ type: 'wall', impact: body.vz }); body.vz *= -0.42; } }

    const dvx = body.vx - pvx, dvy = (body.vy - pvy) - grav, dvz = body.vz - pvz;

    world.sqv += (-K_SQUASH * (world.sq - world.sqTarget) - C_SQUASH * world.sqv) * h;
    world.sq = clamp(world.sq + world.sqv * h, -0.5, 0.95);

    for (let i = 0; i < N; i++) {
      const j = i * 3;
      let sx = 0, sy = 0, sz = 0, wx = 0, wy = 0, wz = 0;
      for (let k = nbStart[i], e = nbStart[i+1]; k < e; k++) {
        const n3 = nbList[k] * 3;
        sx += disp[n3]; sy += disp[n3+1]; sz += disp[n3+2];
        wx += vel[n3];  wy += vel[n3+1];  wz += vel[n3+2];
      }
      const id = invDeg[i], m = mob[i] * COUPLE;
      const dx = disp[j], dy = disp[j+1], dz = disp[j+2];
      const vx = vel[j],  vy = vel[j+1],  vz = vel[j+2];
      vel[j]   += (-K_SPRING * dx - C_DAMP * vx + K_NEIGHBOR * (sx * id - dx) + C_NEIGHBOR * (wx * id - vx)) * h - dvx * m;
      vel[j+1] += (-K_SPRING * dy - C_DAMP * vy + K_NEIGHBOR * (sy * id - dy) + C_NEIGHBOR * (wy * id - vy)) * h - dvy * m;
      vel[j+2] += (-K_SPRING * dz - C_DAMP * vz + K_NEIGHBOR * (sz * id - dz) + C_NEIGHBOR * (wz * id - vz)) * h - dvz * m;
    }

    if (grab.on) {
      const L = grab.list, W = grab.weights, dx = grab.desired.x, dy = grab.desired.y, dz = grab.desired.z;
      for (let k = 0; k < L.length; k++) {
        const j = L[k] * 3, w = W[k];
        const kg = 1300 * w, cg = 16 * w;
        vel[j]   += (kg * (dx * w - disp[j])   - cg * vel[j])   * h;
        vel[j+1] += (kg * (dy * w - disp[j+1]) - cg * vel[j+1]) * h;
        vel[j+2] += (kg * (dz * w - disp[j+2]) - cg * vel[j+2]) * h;
      }
      // held in the air: the rest of the body droops like a drop of honey
      const sag = 26 * smoothstep(0.0, 0.7, body.y);
      if (sag > 0) for (let i = 0; i < N; i++) vel[i*3+1] -= sag * (1 - gw[i]) * mob[i] * h;
    }

    const s1 = 1 + world.sq, is = 1 / Math.sqrt(s1);
    const xl = bounds.xL - body.x, xr = bounds.xR - body.x, zb = WALL_Z - body.z;
    for (let i = 0; i < N; i++) {
      const j = i * 3;
      disp[j] += vel[j] * h; disp[j+1] += vel[j+1] * h; disp[j+2] += vel[j+2] * h;
      const wy = body.y + restSqY(i, s1) + disp[j+1];
      if (wy < FLOOR) {
        const pen = FLOOR - wy;
        disp[j+1] += pen;
        if (vel[j+1] < 0) vel[j+1] = 0;
        disp[j] += outX[i] * pen * 0.65; disp[j+2] += outZ[i] * pen * 0.65;
        vel[j] *= 0.94; vel[j+2] *= 0.94;
      }
      // screen edges / wall: a soft cushion, so it flattens into a smooth splat
      const lx = rest[j] * is + disp[j];
      if (lx > xr) { const pen = lx - xr; vel[j] -= pen * 900 * h; if (vel[j] > 0) vel[j] *= 0.8; }
      else if (lx < xl) { const pen = xl - lx; vel[j] += pen * 900 * h; if (vel[j] < 0) vel[j] *= 0.8; }
      const lz = rest[j+2] * is + disp[j+2];
      if (lz < zb) { const pen = zb - lz; vel[j+2] += pen * 900 * h; if (vel[j+2] < 0) vel[j+2] *= 0.8; }
    }
  }

  /** Writes the simulated positions into the renderable geometry. */
  function writeGeometry() {
    const s1 = 1 + world.sq, is = 1 / Math.sqrt(s1);
    for (let i = 0; i < N; i++) {
      const j = i * 3;
      pos[j]   = rest[j] * is + disp[j];
      pos[j+1] = restSqY(i, s1) + disp[j+1];
      pos[j+2] = rest[j+2] * is + disp[j+2];
    }
    geo.attributes.position.needsUpdate = true;
    updateNormals(geo.index.array, pos, geo.attributes.normal.array);
    geo.attributes.normal.needsUpdate = true;
  }

  function cancelHop() { if (hopTimer !== null) clearTimeout(hopTimer); hopTimer = null; }
  return { step, writeGeometry, forEachNear, poke, stroke, hop, push,
    cancelHop, dispose: cancelHop, FIXED_STEP: 1 / 240 };
}
