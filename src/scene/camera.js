import * as THREE from 'three';
import { clamp } from '../core/math.js';

/**
 * Frames the slime: picks the field of view and distance so it always sits
 * nicely in the viewport (portrait gets a taller, closer shot), and derives
 * the invisible walls that keep it on screen.
 *
 * `layout` and `updateBounds` are kept verbatim from the original build.
 */
export function createCameraRig(camera, renderer, { counter, wall, paintWall, body, bounds, geometry, wallZ }) {
  const { HALFW, FLOOR, TOP } = geometry;
  const view = { d: 10, target: new THREE.Vector3(), base: new THREE.Vector3(), tilt: 0 };
  const _p = new THREE.Vector3();
  let lastWidth = 0, lastHeight = 0, lastDPR = 0;
  /** Full re-frame; runs on boot and on every resize. */
  function layout() {
    const w = innerWidth, h = innerHeight, aspect = w / h;
    const pixelRatio = Math.min(devicePixelRatio || 1, 2);
    if (w === lastWidth && h === lastHeight && pixelRatio === lastDPR) return;
    lastWidth = w; lastHeight = h; lastDPR = pixelRatio;
    if (renderer.getPixelRatio() !== pixelRatio) renderer.setPixelRatio(pixelRatio);
    renderer.setSize(w, h, false);
    counter.getRenderTarget().setSize(Math.max(1, Math.round(w * pixelRatio * 0.5)), Math.max(1, Math.round(h * pixelRatio * 0.5)));
    camera.aspect = aspect;
    const portrait = aspect < 0.9;
    camera.fov = portrait ? 40 : 30;
    const tan = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const slimeW = 2 * HALFW, slimeH = TOP - FLOOR;
    const dW = slimeW / ((portrait ? 0.5 : 0.24) * 2 * tan * aspect);
    const dH = slimeH / ((portrait ? 0.3 : 0.3) * 2 * tan);
    const d = Math.max(dW, dH);
    view.d = d;
    view.tilt = THREE.MathUtils.degToRad(portrait ? 15 : 12);
    const visH = 2 * d * tan;
    const yc = portrait ? 0.54 : 0.6;   // where the slime sits, from the TOP
    const centerY = (FLOOR + TOP) / 2;
    view.target.set(0, centerY + (yc - 0.5) * visH, 0);
    view.base.set(0, view.target.y + Math.sin(view.tilt) * d, Math.cos(view.tilt) * d);
    camera.position.copy(view.base);
    camera.lookAt(view.target);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();

    // how far toward you it may come before leaving the bottom of the screen
    let zMax = 0;
    for (let z = 0; z < 8; z += 0.05) {
      _p.set(0, FLOOR, z + HALFW).project(camera);
      if (_p.y < (portrait ? -0.62 : -0.8)) break;
      zMax = z;
    }
    bounds.zMax = zMax;

    // wall: fill everything above the counter line
    const dist = view.base.z - wallZ;
    const wallW = 2 * dist * tan * aspect * 1.5 + 8;
    const wallTop = view.base.y + dist * (Math.tan(view.tilt) + tan) * 1.3 + 2;
    const wallH = wallTop - FLOOR;
    wall.scale.set(wallW, wallH, 1);
    wall.position.set(0, FLOOR + wallH / 2, wallZ);
    paintWall(wallW, wallH);
  }
  /** Cheap per-frame refresh of the play area at the slime's depth. */
  function updateBounds() {
    // screen edges at the slime's depth (in world units)
    _p.set(0, FLOOR + 0.8, body.z).project(camera); const n0 = _p.x;
    _p.set(1, FLOOR + 0.8, body.z).project(camera); const k = _p.x - n0;
    bounds.xL = (-0.985 - n0) / k; bounds.xR = (0.985 - n0) / k;
    _p.set(body.x, TOP, body.z).project(camera); const y0 = _p.y;
    _p.set(body.x, TOP + 1, body.z).project(camera); const y1 = _p.y;
    bounds.yMax = clamp((0.72 - y0) / (y1 - y0), 0.4, 5);
  }

  return { view, layout, updateBounds };
}
