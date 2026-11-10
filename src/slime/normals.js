/** Area-weighted normals for the slime's indexed, tightly packed Float32 buffers.
 * Same calculation as BufferGeometry.computeVertexNormals, without attribute
 * getters, setters or temporary vectors in the per-frame triangle loop.
 */
export function updateNormals(index, positions, normals) {
  normals.fill(0);
  for (let i = 0; i < index.length; i += 3) {
    const a = index[i] * 3, b = index[i + 1] * 3, c = index[i + 2] * 3;
    const cbx = positions[c] - positions[b];
    const cby = positions[c + 1] - positions[b + 1];
    const cbz = positions[c + 2] - positions[b + 2];
    const abx = positions[a] - positions[b];
    const aby = positions[a + 1] - positions[b + 1];
    const abz = positions[a + 2] - positions[b + 2];
    const nx = cby * abz - cbz * aby;
    const ny = cbz * abx - cbx * abz;
    const nz = cbx * aby - cby * abx;
    normals[a] += nx; normals[a + 1] += ny; normals[a + 2] += nz;
    normals[b] += nx; normals[b + 1] += ny; normals[b + 2] += nz;
    normals[c] += nx; normals[c + 1] += ny; normals[c + 2] += nz;
  }
  for (let i = 0; i < normals.length; i += 3) {
    const x = normals[i], y = normals[i + 1], z = normals[i + 2];
    const inverse = 1 / (Math.sqrt(x * x + y * y + z * z) || 1);
    normals[i] *= inverse; normals[i + 1] *= inverse; normals[i + 2] *= inverse;
  }
}
