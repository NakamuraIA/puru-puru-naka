import ja from './locales/ja.js';
import ptBR from './locales/pt-BR.js';
import en from './locales/en.js';
import es from './locales/es.js';
import zh from './locales/zh.js';

const STORAGE_KEY = 'pururu-lang';

/**
 * The shipped languages, in switcher order. `code` doubles as the value of
 * the <html lang> attribute, so it must be a real BCP 47 tag.
 */
export const LANGS = [
  { code: 'ja', label: '日本語', short: 'JA', dict: ja },
  { code: 'pt-BR', label: 'Português (Brasil)', short: 'PT', dict: ptBR },
  { code: 'en', label: 'English', short: 'EN', dict: en },
  { code: 'es', label: 'Español', short: 'ES', dict: es },
  { code: 'zh', label: '中文', short: '中文', dict: zh },
];

const DICT = new Map(LANGS.map((l) => [l.code, l.dict]));
const DEFAULT = 'ja';

function read() {
  try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
}

function write(code) {
  try { localStorage.setItem(STORAGE_KEY, code); } catch { /* private mode */ }
}

/**
 * Picks the closest supported language for a list of browser preferences.
 * `pt-BR` before plain `pt` matters, otherwise Brazilian users would fall
 * through to the wrong tag. Falls back to Japanese.
 */
export function detectLanguage(prefs = navigator.languages ?? [navigator.language ?? '']) {
  for (const pref of prefs.filter(Boolean)) {
    if (DICT.has(pref)) return pref;

    const exact = LANGS.find((l) => l.code.toLowerCase() === pref.toLowerCase());
    if (exact) return exact.code;

    const base = pref.split('-')[0].toLowerCase();
    // pt-BR wins over any other pt variant
    if (base === 'pt') return 'pt-BR';

    const loose = LANGS.find((l) => l.code.split('-')[0].toLowerCase() === base);
    if (loose) return loose.code;
  }
  return DEFAULT;
}

/**
 * Creates the translation engine.
 *
 * Strings live in the markup as `data-i18n="key"` (text content) or
 * `data-i18n-attr="attr:key,title:key2"` (attributes), so the HTML stays
 * declarative and adding a language never touches the markup.
 */
export function createI18n() {
  const listeners = new Set();
  let current = DICT.has(read()) ? read() : detectLanguage();

  /** Translates one key, falling back to Japanese then to the key itself. */
  function t(key) {
    return (DICT.get(current) ?? ja)[key] ?? ja[key] ?? key;
  }

  /** Resolves a per-language value, e.g. a flavor's name map. */
  function pick(map) {
    if (!map) return '';
    if (typeof map === 'string') return map;
    return map[current] ?? map[DEFAULT] ?? Object.values(map)[0] ?? '';
  }

  /** Writes translations into the DOM and syncs <html lang>. */
  function apply(root = document) {
    // text content
    for (const el of root.querySelectorAll('[data-i18n]')) {
      el.textContent = t(el.dataset.i18n);
    }
    // attributes: data-i18n-attr="title:counter.title,aria-label:a11y.sound"
    for (const el of root.querySelectorAll('[data-i18n-attr]')) {
      for (const pair of el.dataset.i18nAttr.split(',')) {
        const [attr, key] = pair.split(':').map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      }
    }

    // document head: title + meta tags
    const meta = (selector, key) => {
      const el = document.head.querySelector(selector);
      if (el) el.setAttribute('content', t(key));
    };
    const title = document.head.querySelector('title');
    if (title) title.textContent = t('meta.title');
    meta('meta[name="description"]', 'meta.description');
    meta('meta[property="og:title"]', 'og.title');
    meta('meta[property="og:description"]', 'og.description');
    meta('meta[property="og:image:alt"]', 'og.imageAlt');
    meta('meta[property="og:locale"]', 'og.locale');

    const html = document.documentElement;
    html.lang = current;
    html.dataset.lang = current;
  }

  function set(code) {
    if (!DICT.has(code) || code === current) return false;
    current = code;
    write(code);
    apply();
    for (const fn of listeners) fn(code, t);
    return true;
  }

  return {
    t,
    pick,
    apply,
    set,
    get: () => current,
    onChange: (fn) => (listeners.add(fn), () => listeners.delete(fn)),
  };
}
