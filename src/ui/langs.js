import { LANGS } from '../i18n/index.js';

/**
 * The language picker: a native <select> styled as a frosted pill.
 *
 * Native on purpose — it gets keyboard navigation, screen-reader support and
 * the mobile wheel picker for free, none of which a custom dropdown would.
 */
export function createLangPicker(i18n) {
  const select = document.querySelector('#lang');
  if (!select) return { set() {} };

  // build the options from the LANGS table so there is a single source of truth
  for (const { code, label } of LANGS) {
    const opt = document.createElement('option');
    opt.value = code;
    opt.textContent = label;
    select.appendChild(opt);
  }

  // show the short code on the pill, full names in the dropdown
  const paint = () => {
    const lang = LANGS.find((l) => l.code === i18n.get());
    if (lang) select.value = lang.code;
  };

  select.addEventListener('change', () => i18n.set(select.value));
  paint();

  // keep it in sync when the language changes elsewhere
  i18n.onChange(paint);

  return { select, set: paint };
}
