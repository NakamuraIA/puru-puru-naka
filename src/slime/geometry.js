import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { smoothstep, smin } from '../core/math.js';

/**
 * Builds the slime mesh and, at the same time, every buffer the soft-body
 * solver writes into. The returned object is the single source of truth for
 * the simulation: geometry.js owns the memory, physics.js owns the motion.
 *
 * @param {boolean} coarse lower tessellation on touch devices
 */
export function createSlimeGeometry(coarse, { detail = coarse ? 20 : 26, radius = 1.16, floor = null } = {}) {
  const DETAIL = detail, RAD = radius;

  let geo = new THREE.IcosahedronGeometry(1, DETAIL);
  geo.deleteAttribute('normal');
  geo.deleteAttribute('uv');
  geo = mergeVertices(geo, 1e-5);

  const N = geo.attributes.position.count;

  // per-vertex simulation buffers
  const unit = new Float32Array(N * 3);   // normalized rest direction (used for face / normals)
  const rest = new Float32Array(N * 3);   // rest position, in slime-local space
  const disp = new Float32Array(N * 3);   // displacement from rest
  const vel = new Float32Array(N * 3);    // displacement velocity
  const mob = new Float32Array(N);        // mobility, 0 at the floor → 1 up top
  const outX = new Float32Array(N);       // outward direction on the XZ plane
  const outZ = new Float32Array(N);
  const gw = new Float32Array(N);         // grab weight per vertex

  {
    const p = geo.attributes.position.array;
    for (let i = 0; i < N; i++) {
      const j = i * 3;
      let x = p[j], y = p[j + 1], z = p[j + 2];
      const l = Math.hypot(x, y, z); x /= l; y /= l; z /= l;
      unit[j] = x; unit[j + 1] = y; unit[j + 2] = z;

      // soft dome with a flat, slightly spreading bottom
      let yy = y < 0 ? y * 0.92 : y * 1.08;
      yy = -smin(-yy, 0.7, 0.2);
      const widen = 1 + 0.11 * smoothstep(0.75, -0.55, y) - 0.05 * smoothstep(0.3, 1.0, y);

      rest[j] = x * RAD * 1.06 * widen;
      rest[j + 1] = yy * RAD;
      rest[j + 2] = z * RAD * 0.98 * widen;

      const h = Math.hypot(x, z) || 1;
      outX[i] = x / h; outZ[i] = z / h;
    }
  }

  let FLOOR = Infinity, TOP = -Infinity;
  for (let i = 0; i < N; i++) {
    FLOOR = Math.min(FLOOR, rest[i * 3 + 1]);
    TOP = Math.max(TOP, rest[i * 3 + 1]);
  }
  if (floor !== null) {
    const offset = floor - FLOOR;
    for (let i = 0; i < N; i++) rest[i * 3 + 1] += offset;
    TOP += offset; FLOOR = floor;
  }
  for (let i = 0; i < N; i++) {
    mob[i] = 0.25 + 0.75 * smoothstep(FLOOR, TOP, rest[i * 3 + 1]);
  }

  geo.setAttribute('aRest', new THREE.BufferAttribute(unit, 3));
  geo.attributes.position.setUsage(THREE.DynamicDrawUsage);
  geo.computeVertexNormals();
  geo.attributes.normal.setUsage(THREE.DynamicDrawUsage);
  geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0.2, 0), 5);

  // flatten the vertex adjacency into two typed arrays: cheap neighbour lookups in the solver
  const nbSets = Array.from({ length: N }, () => new Set());
  {
    const idx = geo.index.array;
    for (let f = 0; f < idx.length; f += 3) {
      const a = idx[f], b = idx[f + 1], c = idx[f + 2];
      nbSets[a].add(b); nbSets[a].add(c);
      nbSets[b].add(a); nbSets[b].add(c);
      nbSets[c].add(a); nbSets[c].add(b);
    }
  }
  const nbStart = new Uint32Array(N + 1);
  for (let i = 0; i < N; i++) nbStart[i + 1] = nbStart[i] + nbSets[i].size;
  const nbList = new Uint32Array(nbStart[N]);
  const invDeg = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    let k = nbStart[i];
    for (const n of nbSets[i]) nbList[k++] = n;
    invDeg[i] = 1 / nbSets[i].size;
  }

  return {
    geo,
    N,
    unit, rest, disp, vel, mob, outX, outZ, gw,
    nbStart, nbList, invDeg,
    FLOOR,
    TOP,
    HALFW: RAD * 1.06 * 1.11,
    pos: geo.attributes.position.array,
    /** Rest height of vertex `i` with the current squash amount `s1`. */
    restSqY: (i, s1) => FLOOR + (rest[i * 3 + 1] - FLOOR) * s1,
  };
}
