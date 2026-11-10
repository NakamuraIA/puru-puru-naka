/**
 * Minimal requestAnimationFrame driver.
 * Everything else in the app is a plain function called from `onFrame`.
 *
 * A throw inside one system must not silently freeze the whole scene: the
 * next frame is already scheduled, and the error is reported once instead of
 * spamming the console at 60fps.
 */
export function createLoop(onFrame, { page = globalThis.document, onPause = () => {} } = {}) {
  let raf = 0;
  let running = false;
  let lastError = null;
  let previous = null;

  const tick = (timestamp) => {
    raf = requestAnimationFrame(tick);
    const dt = previous === null ? 0 : Math.max(0, (timestamp - previous) / 1000);
    previous = timestamp;
    try {
      onFrame(dt);
      lastError = null;
    } catch (err) {
      if (err !== lastError) {
        lastError = err;
        console.error('[pururu] frame failed, continuing anyway:', err);
      }
    }
  };

  function visibilityChanged() {
    if (page?.hidden) {
      cancelAnimationFrame(raf);
      raf = 0;
      previous = null;
      onPause();
    } else if (running && !raf) {
      previous = null;
      raf = requestAnimationFrame(tick);
    }
  }

  return {
    start() {
      if (running) return;
      running = true;
      page?.addEventListener('visibilitychange', visibilityChanged);
      visibilityChanged();
    },
    stop() {
      running = false;
      page?.removeEventListener('visibilitychange', visibilityChanged);
      cancelAnimationFrame(raf);
      raf = 0;
      previous = null;
    },
  };
}
