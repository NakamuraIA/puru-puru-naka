import * as THREE from 'three';
import { clamp } from '../core/math.js';
import { GRAVITY } from '../slime/constants.js';
import { reduceMotion } from '../core/media.js';

/**
 * Every input path in one place:
 *   - pointer down/move/up (mouse, pen, touch, multi-touch pinch)
 *   - trackpad wheel and gesture events
 *   - keyboard (arrows to nudge, Enter to poke, Space to jump, 1-6 flavors)
 *
 * Touched-down handlers are kept verbatim from the original build.
 */
export function bindPointerEvents(ctx) {
  const { canvas, camera, world, geometry, raycast, grabCtl, physics, sfx, doJump, setFlavor, push, ex, counterPlane, onCount, touch, touches } = ctx;
  const { body, grab, pinch } = world;
  const { HALFW, FLOOR, N, unit } = geometry;
  const removers = [];
  const enabled = () => !ctx.isActive || ctx.isActive();
  function listen(target, type, fn, options) {
    const handler = event => { if (enabled()) fn(event); };
    target.addEventListener(type, handler, options);
    removers.push(() => target.removeEventListener(type, handler, options));
  }
  const onCanvas = (type, fn, options) => listen(canvas, type, fn, options);

  let lastTap = { t: 0, x: 0, y: 0 };
  const tmpV = new THREE.Vector3();

  onCanvas('pointerdown', (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    const now = performance.now() / 1000;
    sfx.unlock();
    if (e.pointerType === 'touch') {
      touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
      try { canvas.setPointerCapture(e.pointerId); } catch { /* Already cancelled. */ }
      if (touches.size === 2) {
        grabCtl.release('cancel');
        for (const id of touches.keys()) {
          try { canvas.setPointerCapture(id); } catch { /* Already cancelled. */ }
        }
        const [a, b] = [...touches.values()];
        pinch.touchStart = Math.hypot(a.x - b.x, a.y - b.y) || 1;
        pinch.touchBase = pinch.value;
        return;
      }
      if (touches.size > 2) return;
    }
    raycast.setNDC(e, canvas);
    touch(now);
    const hit = raycast.hitTest();
    const dbl = now - lastTap.t < 0.33 && Math.hypot(e.clientX - lastTap.x, e.clientY - lastTap.y) < 40;
    lastTap = { t: now, x: e.clientX, y: e.clientY };
    if (!hit) {
      // tapped the counter: it hops over to that spot
      raycast.ray.setFromCamera(raycast.ndc, camera);
      counterPlane.constant = -FLOOR;
      const q = raycast.ray.ray.intersectPlane(counterPlane, tmpV);
      ex.surpriseUntil = now + 0.4;
      if (q && !reduceMotion) {
        let dx = q.x - body.x, dz = q.z - body.z;
        const dist = Math.hypot(dx, dz);
        const reach = Math.min(dist, 4.5);
        if (dist > 0.01) { dx *= reach / dist; dz *= reach / dist; }
        const vy = 4.2 + reach * 0.35, T = 2 * vy / -GRAVITY;
        if (physics.hop(vy, clamp(dx / T * 0.8, -9, 9), clamp(dz / T * 0.8, -9, 9))) sfx.jump();
      } else if (dbl) doJump();
      return;
    }
    if (dbl) { doJump(); return; }
    try { canvas.setPointerCapture(e.pointerId); } catch (_) { /* not capturable */ }
    grabCtl.begin(hit, e.pointerId, now);
  });

  onCanvas('pointermove', (e) => {
    if (e.pointerType === 'touch' && touches.has(e.pointerId)) {
      touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (touches.size === 2) {
        const [a, b] = [...touches.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        pinch.value = clamp(pinch.touchBase + (d / pinch.touchStart - 1) * 0.9, -0.45, 0.85);
        pinch.last = performance.now() / 1000;
        return;
      }
    }
    raycast.setNDC(e, canvas);
    raycast.pointer.moved = true;
    touch(performance.now() / 1000);
  });
  const endPointer = (e) => {
    const cancelled = e.type === 'pointercancel';
    if (e.pointerType === 'touch') {
      const wasPinch = touches.size >= 2;
      touches.delete(e.pointerId);
      if (wasPinch) { pinch.last = -10; pinch.value = 0; }
      if (!wasPinch && (!grab.on || grab.id === e.pointerId)) {
        if (!cancelled) raycast.setNDC(e, canvas);
        grabCtl.release(cancelled ? 'cancel' : 'up');
      }
      // A lifted finger cannot hover: avoid a full mesh raycast every frame.
      raycast.pointer.has = touches.size > 0;
      raycast.pointer.moved = false;
      raycast.pointer.over = false;
      raycast.pointer.lastHit = false;
      canvas.style.cursor = '';
      return;
    }
    if (grab.on && grab.id !== e.pointerId) return;
    if (cancelled) { grabCtl.release('cancel'); raycast.pointer.has = false; return; }
    raycast.setNDC(e, canvas); grabCtl.release('up');
  };
  onCanvas('pointerup', endPointer);
  onCanvas('pointercancel', endPointer);
  onCanvas('lostpointercapture', e => {
    if (grab.on && grab.id === e.pointerId) {
      grabCtl.release('cancel'); touches.delete(e.pointerId);
      raycast.pointer.has = false; raycast.pointer.lastHit = false;
    }
  });
  onCanvas('pointerleave', (e) => {
    if (!grab.on && e.pointerType === 'mouse') { raycast.pointer.has = false; raycast.pointer.over = false; raycast.pointer.lastHit = false; canvas.style.cursor = ''; }
  });
  onCanvas('contextmenu', (e) => e.preventDefault());

  // trackpad: two-finger swipe pushes it, pinch stretches / squashes it
  onCanvas('wheel', (e) => {
    e.preventDefault();
    const now = performance.now() / 1000;
    touch(now);
    const unitScale = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 400 : 1;
    const dx = e.deltaX * unitScale, dy = e.deltaY * unitScale;
    if (e.ctrlKey) {
      pinch.value = clamp(pinch.value - dy * 0.012, -0.45, 0.85);
      pinch.last = now;
      return;
    }
    if (grab.on) return;
    push(clamp(-dx * 0.022, -2.4, 2.4), clamp(-dy * 0.018, -2, 2));
    // a little shiver in the direction of the swipe
    if (Math.abs(dx) + Math.abs(dy) > 6) world.sqv += 0.12;
  }, { passive: false });
  let gestureBase = 0;
  onCanvas('gesturestart', (e) => { e.preventDefault(); gestureBase = pinch.value; });
  onCanvas('gesturechange', (e) => {
    e.preventDefault();
    pinch.value = clamp(gestureBase + (e.scale - 1) * 0.9, -0.45, 0.85);
    pinch.last = performance.now() / 1000;
  });
  onCanvas('gestureend', (e) => { e.preventDefault(); pinch.last = -10; });

  /** Space to jump, Enter to poke, arrows to nudge, 1-6 to switch flavor. */
  listen(window, 'keydown', (e) => {
    if (e.isComposing || e.keyCode === 229) return;
    const tag = (e.target && e.target.tagName) || '';
    if (['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA'].includes(tag) || e.target?.closest?.('dialog[open]')) return;
    const now = performance.now() / 1000;
    const arrows = { ArrowLeft: [-4, 0], ArrowRight: [4, 0], ArrowUp: [0, -3.5], ArrowDown: [0, 3.5] };
    if (e.code === 'Space') { e.preventDefault(); sfx.unlock(); touch(now); doJump(); }
    else if (e.key === 'Enter') {
      e.preventDefault(); sfx.unlock(); touch(now);
      let g = 0, best = -Infinity;
      for (let i = 0; i < N; i++) { const s = unit[i*3+2] - Math.abs(unit[i*3+1] + 0.25); if (s > best) { best = s; g = i; } }
      physics.poke(g); ex.squeezeUntil = now + 0.3; ex.happyUntil = now + 1.5; sfx.poke(); onCount();
      ctx.onPoke?.(now);
    }
    else if (arrows[e.key]) { e.preventDefault(); touch(now); push(...arrows[e.key]); sfx.wobble(); }
    else if (/^[1-6]$/.test(e.key)) setFlavor(+e.key - 1);
  });
  return () => { for (const remove of removers) remove(); };
}
