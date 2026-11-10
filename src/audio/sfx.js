import { soundBtn } from '../core/media.js';

/**
 * Synthesised sound. No audio files: every effect is a short envelope on an
 * oscillator, so the whole soundtrack is a few hundred bytes of code.
 *
 * Opt-in only. The preference is stored in localStorage and the button in
 * the header reflects it.
 */
export const sfx = (() => {
  let ctx = null, master = null;
  let on = false;
  try { on = localStorage.getItem('pururu-sound') === 'on'; } catch (_) {}
  const btn = soundBtn;
  const paint = () => {
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    const state = btn.querySelector('.state');
    state.dataset.i18n = on ? 'sound.on' : 'sound.off';
    state.textContent = on ? 'on' : 'off';
  };
  paint();
  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      master = ctx.createGain(); master.gain.value = 0.55;
      const comp = ctx.createDynamicsCompressor();
      master.connect(comp); comp.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  function voice({ f0, f1, f2 = null, dur = 0.4, type = 'sine', vol = 0.2, vib = 0, vibRate = 14, delay = 0 }) {
    if (!on || !ensure()) return;
    const t = ctx.currentTime + delay;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f2) { o.frequency.exponentialRampToValueAtTime(f1, t + dur * 0.12); o.frequency.exponentialRampToValueAtTime(f2, t + dur); }
    else o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    if (vib) {
      const l = ctx.createOscillator(), lg = ctx.createGain();
      l.frequency.value = vibRate; lg.gain.setValueAtTime(vib, t); lg.gain.exponentialRampToValueAtTime(0.01, t + dur);
      l.connect(lg); lg.connect(o.frequency); l.start(t); l.stop(t + dur + 0.05);
    }
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(master);
    o.start(t); o.stop(t + dur + 0.05);
  }
  btn.addEventListener('click', () => {
    on = !on; paint();
    try { localStorage.setItem('pururu-sound', on ? 'on' : 'off'); } catch (_) {}
    if (on) { ensure(); api.poke(); }
  });
  const api = {
    unlock() { if (on) ensure(); },
    poke() { const r = 0.9 + Math.random() * 0.25; voice({ f0: 420 * r, f1: 900 * r, dur: 0.09, type: 'triangle', vol: 0.16 }); voice({ f0: 900 * r, f1: 520 * r, dur: 0.12, type: 'sine', vol: 0.08, delay: 0.05 }); },
    boing(a = 0.6) { const b = 150 + 60 * (1 - a); voice({ f0: b, f1: b * 2.6, f2: b * 0.8, dur: 0.45 + a * 0.35, type: 'sine', vol: 0.26, vib: 40 + 60 * a, vibRate: 13 }); voice({ f0: b * 2, f1: b * 4.8, f2: b * 1.5, dur: 0.3, type: 'triangle', vol: 0.05, vib: 60, vibRate: 13 }); },
    land(v = 5) { const a = Math.min(1, v / 9); voice({ f0: 200, f1: 70, dur: 0.18, type: 'sine', vol: 0.25 * a + 0.04 }); voice({ f0: 170, f1: 380, f2: 140, dur: 0.35 + 0.2 * a, type: 'sine', vol: 0.14 * a, vib: 40, vibRate: 15, delay: 0.02 }); },
    jump() { voice({ f0: 260, f1: 820, dur: 0.22, type: 'sine', vol: 0.2 }); },
    wobble() { voice({ f0: 210, f1: 300, f2: 190, dur: 0.35, type: 'sine', vol: 0.14, vib: 50, vibRate: 11 }); },
    stretch(a) { voice({ f0: 180 + 200 * a, f1: 260 + 320 * a, dur: 0.12, type: 'sine', vol: 0.05 }); },
    wake() { voice({ f0: 500, f1: 1100, dur: 0.12, type: 'triangle', vol: 0.12 }); },
    flavor() { [523, 659, 784].forEach((f, i) => voice({ f0: f, f1: f * 1.01, dur: 0.22, type: 'triangle', vol: 0.08, delay: i * 0.06 })); },
  };
  return api;
})();
