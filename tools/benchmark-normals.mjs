import { performance } from 'node:perf_hooks';
import { createSlimeGeometry } from '../src/slime/geometry.js';
import { updateNormals } from '../src/slime/normals.js';

// CPU microbenchmark, not an end-to-end FPS or mobile hardware measurement.
const geometry = createSlimeGeometry(true);
const { geo, pos, N } = geometry;
pos.set(geometry.rest);
const original = () => geo.computeVertexNormals();
const optimized = () => updateNormals(geo.index.array, pos, geo.attributes.normal.array);
for (let i = 0; i < 500; i++) { original(); optimized(); }
const times = { original: [], optimized: [] };
function measure(fn) {
  const start = performance.now();
  for (let i = 0; i < 500; i++) fn();
  return (performance.now() - start) / 500;
}
for (let round = 0; round < 7; round++) {
  // Alternate the order to reduce consistent warmup/thermal bias.
  const order = round % 2 ? [['optimized', optimized], ['original', original]] : [['original', original], ['optimized', optimized]];
  for (const [name, fn] of order) times[name].push(measure(fn));
}
const median = values => values.sort((a, b) => a - b)[3];
console.log(JSON.stringify({ vertices: N, originalMs: median(times.original), optimizedMs: median(times.optimized) }, null, 2));
geo.dispose();
