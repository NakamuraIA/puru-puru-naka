import * as THREE from 'three';
import { reduceMotion } from '../core/media.js';
import { WALL_Z } from './constants.js';

/** Creates the mutable world state shared by every system. */
export function createWorld(geometry) {
  return {
    /** rigid-body position of the slime */
    body: { x: 0, y: reduceMotion ? 0 : 6, z: 0, vx: 0, vy: 0, vz: 0, air: !reduceMotion },
    /** squash amount, its velocity and where it wants to be */
    sq: 0, sqv: 0, sqTarget: 0,
    /** two-finger / trackpad pinch */
    pinch: { value: 0, last: -10, touchStart: 0, touchBase: 0 },
    /** play area: screen edges, the wall and the top of the frame */
    bounds: { xL: -5, xR: 5, zMin: -4.6 + geometry.HALFW + 0.35, zMax: 1.5, yMax: 2.5 },
    /** pointer grab state (vectors are mutated in place) */
    grab: {
      on: false, list: null, weights: null, g: -1, id: -1,
      plane: new THREE.Plane(), offset: new THREE.Vector3(),
      target: new THREE.Vector3(), cursor: new THREE.Vector3(),
      desired: new THREE.Vector3(), stretch: 0, maxStretch: 0,
      downX: 0, downY: 0, downT: 0, samples: [],
    },
    /** transient events produced by the solver, drained by the main loop */
    events: [],
  };
}
