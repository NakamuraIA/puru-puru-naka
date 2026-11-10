import * as THREE from 'three';

/**
 * Raycasting against the slime, plus the vertex picking that lets a grab
 * start exactly where you touched.
 */
export function createRaycast(camera, mesh, slime) {
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const local = new THREE.Vector3();
  const hits = [];

  const pointer = {
    x: 0, y: 0, nx: 0, ny: 0, has: false, moved: false, over: false, lastHit: false,
  };

  /** Converts a pointer event into normalized device coordinates. */
  function setNDC(e, canvas) {
    const r = canvas.getBoundingClientRect();
    pointer.x = e.clientX; pointer.y = e.clientY;
    pointer.nx = ((e.clientX - r.left) / r.width) * 2 - 1;
    pointer.ny = -((e.clientY - r.top) / r.height) * 2 + 1;
    ndc.set(pointer.nx, pointer.ny);
    pointer.has = true;
  }

  /** Nearest intersection with the slime surface, or null. */
  function hitTest() {
    ray.setFromCamera(ndc, camera);
    hits.length = 0;
    ray.intersectObject(mesh, false, hits);
    return hits[0] || null;
  }

  /** The triangle corner closest to the touch point: our grab handle. */
  function hitVertex(hit) {
    const f = hit.face;
    const local2 = slime.worldToLocal(local.copy(hit.point));
    const pos = mesh.geometry.attributes.position.array;
    let best = f.a, bd = Infinity;
    for (const i of [f.a, f.b, f.c]) {
      const j = i * 3;
      const d = (pos[j] - local2.x) ** 2 + (pos[j + 1] - local2.y) ** 2 + (pos[j + 2] - local2.z) ** 2;
      if (d < bd) { bd = d; best = i; }
    }
    return best;
  }

  return { ray, ndc, pointer, setNDC, hitTest, hitVertex, local };
}
