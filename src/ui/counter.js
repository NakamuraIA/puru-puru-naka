import { countEl } from '../core/media.js';

/**
 * The "ぷるん" counter in the header. Bumping it re-triggers the CSS pop
 * animation by forcing a reflow.
 */
export function createPurrCounter(hint, store) {
  let count = store.state.plocs;
  function paint() {
    countEl.textContent = count < 10000 ? count.toLocaleString() : new Intl.NumberFormat(undefined, { notation: 'compact', maximumFractionDigits: 1 }).format(count);
    countEl.title = count.toLocaleString();
    countEl.setAttribute('aria-label', count.toLocaleString());
  }
  paint();
  // The gesture hint is about this visit, even when the lifetime total is high.
  let visitCount = 0;
  store.subscribe(state => { count = state.plocs; paint(); });

  function bump() {
    count = store.increment();
    // restart the CSS animation
    countEl.classList.remove('bump');
    void countEl.offsetWidth;
    countEl.classList.add('bump');
    hint.dimAfter(++visitCount);
  }

  return {
    bump,
    get value() { return count; },
  };
}
