import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';

/**
 * The polished marble counter: a Reflector (planar reflection) wearing a
 * custom shader that adds veining, a soft depth-of-field falloff and a
 * blurred reflection. Kept verbatim from the original build.
 *
 * `getFrameNo` is used to render the reflection only once per frame, since
 * the transmission pass would otherwise render it again.
 */
  export function createCounter(scene, { floorY, DPR, wallZ, getFrameNo }) {
  const MarbleShader = {
    name: 'MarbleCounter',
    uniforms: {
      color: { value: null }, tDiffuse: { value: null }, textureMatrix: { value: null },
      uBase: { value: new THREE.Color('#F4F3F0') },
      uVein: { value: new THREE.Color('#8C8F95') },
      uWarm: { value: new THREE.Color('#DCD5CB') },
      uWallZ: { value: wallZ },
      uFocal: { value: 10 },
      uPattern: { value: 0 },
    },
    vertexShader: /* glsl */`
      uniform mat4 textureMatrix;
      varying vec4 vUv;
      varying vec3 vWorld;
      void main(){
        vUv = textureMatrix * vec4(position, 1.0);
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: /* glsl */`
      uniform sampler2D tDiffuse;
      uniform vec3 uBase; uniform vec3 uVein; uniform vec3 uWarm;
      uniform float uWallZ; uniform float uFocal;
      uniform float uPattern;
      varying vec4 vUv;
      varying vec3 vWorld;
      float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
      float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y); }
      float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++){ s += a * vnoise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return s; }
      void main(){
        vec2 p = vWorld.xz * 0.3 + vec2(3.1, 1.7);
        vec2 q = vec2(fbm(p * 0.9), fbm(p * 0.9 + vec2(5.2, 1.3)));
        float f = fbm(p * 1.3 + q * 1.8);
        float v1 = abs(sin((p.x * 0.9 + p.y * 0.55) * 2.0 + f * 5.5));
        float vein = pow(1.0 - v1, 16.0);
        float v2 = abs(sin((p.x * -0.5 + p.y * 1.2) * 4.2 + fbm(p * 2.4 + q) * 7.0));
        vein += pow(1.0 - v2, 34.0) * 0.5;
        float cloud = fbm(p * 3.5 + q);
        float dist = distance(vWorld, cameraPosition);
        float blur = smoothstep(2.5, 9.0, abs(dist - uFocal));
        vein *= mix(1.0, 0.3, blur);
        cloud = mix(cloud, 0.5, blur * 0.8);
        vec3 col = uBase * (0.975 + 0.05 * cloud);
        col = mix(col, uWarm, smoothstep(0.55, 0.8, cloud) * 0.12);
        col = mix(col, uVein, clamp(vein, 0.0, 1.0) * 0.5);
        if (uPattern > 0.5 && uPattern < 1.5) {
          float grain = pow(abs(sin(vWorld.x * 3.5 + fbm(vWorld.xz * 0.7) * 2.8)), 16.0);
          col = mix(uBase, uVein, grain * 0.22 + cloud * 0.09);
        } else if (uPattern > 1.5) col = mix(uBase, uWarm, cloud * 0.16);
        col *= 0.94 + 0.07 * smoothstep(-10.0, 10.0, vWorld.x);
        col *= 1.0 - 0.14 * smoothstep(uWallZ + 1.0, uWallZ, vWorld.z);
        float bl = (0.004 + 0.01 * blur) * vUv.w;
        vec3 r = texture2DProj(tDiffuse, vUv).rgb * 0.36;
        r += texture2DProj(tDiffuse, vUv + vec4( bl, 0.0, 0.0, 0.0)).rgb * 0.16;
        r += texture2DProj(tDiffuse, vUv + vec4(-bl, 0.0, 0.0, 0.0)).rgb * 0.16;
        r += texture2DProj(tDiffuse, vUv + vec4(0.0,  bl, 0.0, 0.0)).rgb * 0.16;
        r += texture2DProj(tDiffuse, vUv + vec4(0.0, -bl, 0.0, 0.0)).rgb * 0.16;
        r = min(r, vec3(1.2));
        vec3 V = normalize(cameraPosition - vWorld);
        float fres = 0.05 + 0.95 * pow(1.0 - clamp(V.y, 0.0, 1.0), 5.0);
        float k = clamp(0.1 + 0.5 * fres, 0.0, 0.5);
        col = mix(col, r, k);
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }
    `,
  };
  const counter = new Reflector(new THREE.PlaneGeometry(140, 60), {
    shader: MarbleShader,
    textureWidth: Math.round(innerWidth * DPR * 0.5),
    textureHeight: Math.round(innerHeight * DPR * 0.5),
    clipBias: 0.003,
    multisample: 0,
  });
  counter.rotation.x = -Math.PI / 2;
  counter.position.set(0, floorY, wallZ + 30);
  scene.add(counter);

  /** The transmission pass would re-render the mirror, so it runs once. */
  function oncePerFrame() {
    const orig = counter.onBeforeRender;
    counter.userData.lastFrame = -1;
    counter.onBeforeRender = function (...args) {
      if (this.userData.lastFrame === getFrameNo()) return;
      this.userData.lastFrame = getFrameNo();
      orig.apply(this, args);
    };
  }

  return { counter, oncePerFrame };
}
