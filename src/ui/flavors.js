import { FLAVORS } from '../data/flavors.js';
import { flavorWrap } from '../core/media.js';

/**
 * Builds the flavor buttons and switches flavors.
 *
 * Switching is not instant: the target palette is moved and the main loop
 * lerps towards it, so the jelly glides from one color to the next.
 */
export function createFlavorPicker(palette, deps) {
  const { touch, push, hearts, slimeScreenTop, sfx, i18n } = deps;

  /** Builds one round button per flavor. */
  function render(activeIndex) {
    flavorWrap.replaceChildren();
    FLAVORS.forEach((f, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'flv';
      b.setAttribute('aria-pressed', i === activeIndex ? 'true' : 'false');
      const sw = f.id === 'aurora'
        ? '<span class="swatch aurora"></span>'
        : `<span class="swatch" style="--c1:${f.body};--c2:${f.atten}"></span>`;
      b.innerHTML = `${sw}<span class="flv-name"></span>`;
      b.addEventListener('click', () => setFlavor(i));
      flavorWrap.appendChild(b);
    });
    labelAll();
    i18n.onChange(labelAll);
  }

  /** Writes each button label in the current language. */
  function labelAll() {
    FLAVORS.forEach((f, i) => {
      const name = flavorWrap.children[i]?.querySelector('.flv-name');
      if (name) name.textContent = i18n.pick(f.name);
    });
  }

  /** Marks one button as pressed and clears the others. */
  function markActive(i) {
    [...flavorWrap.children].forEach((b, j) =>
      b.setAttribute('aria-pressed', j === i ? 'true' : 'false'));
  }

  function setFlavor(i, { quiet = false } = {}) {
    if (!Number.isInteger(i) || !FLAVORS[i]) return;
    const now = performance.now() / 1000;
    if (!quiet) deps.onTap?.();
    if (!quiet) touch(now);

    // tapping the current flavor just nudges it
    if (i === palette.index && !quiet) {
      push(Math.random() < 0.5 ? -2 : 2, 0);
      return;
    }

    palette.index = i;
    const f = FLAVORS[i];
    for (const k of Object.keys(palette.target)) palette.target[k].set(f[k]);
    Object.assign(palette.materialTarget, {
      trans: f.trans, irid: f.irid, rainbow: f.rainbow, rough: f.rough,
    });

    // the page chrome follows the jelly
    const root = document.documentElement;
    root.style.setProperty('--accent', f.logo);
    root.style.setProperty('--accent-deep', f.deep);
    root.dataset.flavor = f.id;
    markActive(i);
    flavorWrap.children[i]?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    deps.onSelect?.(f);
    if (quiet) return;

    deps.sqv += 3;
    push(Math.random() < 0.5 ? -1.5 : 1.5, 0);
    deps.ex.happyUntil = now + 1.4;
    const p = slimeScreenTop();
    hearts(p.x, p.y + 40, 4);
    sfx.flavor();
  }

  return { render, setFlavor };
}
