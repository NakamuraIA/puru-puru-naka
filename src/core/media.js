/**
 * User preferences and DOM lookups.
 * Evaluated once, at import time, before anything else runs.
 */

/** Respect the OS "reduce motion" setting for every animation in the app. */
export const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/** True on touch-first devices: changes hint wording and disables cursor parallax. */
export const coarse = matchMedia('(pointer: coarse)').matches;

export const canvas = document.querySelector('#gl');
export const fxLayer = document.querySelector('#fx');
export const countEl = document.querySelector('#count');
export const flavorWrap = document.querySelector('#flavors');
export const soundBtn = document.querySelector('#sound');
export const langSelect = document.querySelector('#lang');
export const noGlEl = document.querySelector('#nogl');
