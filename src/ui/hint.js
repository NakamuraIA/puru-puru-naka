import { coarse } from '../core/media.js';

// which key each hint slot uses on this device
const SLOTS = [
  ['drag', () => 'hint.drag'],
  ['dragDo', () => 'hint.dragDo'],
  ['tap', (c) => (c ? 'hint.touch.tap' : 'hint.tap')],
  ['tapDo', () => 'hint.tapDo'],
  ['pinch', (c) => (c ? 'hint.touch.pinch' : 'hint.pinch')],
  ['pinchDo', (c) => (c ? 'hint.touch.pinchDo' : 'hint.pinchDo')],
];

/**
 * The gesture hint bar under the header.
 *
 * The markup already carries `data-i18n` with the desktop wording; this module
 * re-applies the right key afterwards, because on touch devices "Clique" has
 * to become "Toque". It also fades the bar once the user has clearly got the
 * idea (after three interactions).
 */
export function createHint(i18n) {
  const el = document.querySelector('#hint');

  /** Writes the wording for this device into the bar. */
  function apply() {
    for (const [slot, keyFor] of SLOTS) {
      const node = document.querySelector(`[data-hint="${slot}"]`);
      if (node) node.textContent = i18n.t(keyFor(coarse));
    }
  }

  apply();
  i18n.onChange(apply);

  return {
    apply,
    element: el,
    /** Fades the bar out on the third interaction. */
    dimAfter(count) {
      if (count === 3) el.classList.add('dim');
    },
  };
}
