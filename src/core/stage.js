import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

/**
 * Creates the renderer, the scene and the camera, and wires up the lights.
 *
 * `canvas` is the existing <canvas> in the markup — we render into it rather
 * than letting three.js create its own detached one.
 *
 * Throws if WebGL is unavailable so the caller can show the fallback message.
 */
export function createStage(canvas) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  } catch (err) {
    throw new Error('WebGL não está disponível neste dispositivo.', { cause: err });
  }

  const DPR = Math.min(devicePixelRatio, 2);
  renderer.setPixelRatio(DPR);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#EFF0F0');

  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 200);

  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  scene.environment = pmrem.fromScene(room, 0.035).texture;
  room.dispose();
  pmrem.dispose();

  const key = new THREE.DirectionalLight(0xffffff, 2.0);
  key.position.set(4, 6, 3);
  scene.add(key);

  const fill = new THREE.DirectionalLight(0xffffff, 1.0);
  fill.position.set(-5, 3, 4);
  scene.add(fill);

  scene.add(new THREE.HemisphereLight(0xffffff, 0xe9e7e2, 0.7));

  return { renderer, scene, camera, DPR };
}
