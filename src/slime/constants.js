/**
 * Tuning constants for the slime. These read as "feel" knobs: raise
 * GRAVITY and it falls faster, lower K_SPRING and it wobbles more.
 */

// rigid body
export const GRAVITY = -26;
export const FRICTION = 2.4;

// soft body
export const K_SPRING = 300;
export const C_DAMP = 3.2;
export const K_NEIGHBOR = 900;
export const C_NEIGHBOR = 8;
export const COUPLE = 1.0;

// squash / stretch spring
export const K_SQUASH = 300;
export const C_SQUASH = 4.6;

// how hard the body chases your finger while grabbed
export const K_FOLLOW = 75;
export const C_FOLLOW = 10;

// physics runs at a constant rate regardless of frame rate
export const FIXED_STEP = 1 / 240;
export const MAX_SUBSTEPS = 10;

// where the wall stands, and the top of the play area
export const WALL_Z = -4.6;
