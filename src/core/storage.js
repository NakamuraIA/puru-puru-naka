import { FLAVORS } from '../data/flavors.js';
import { THEMES } from '../data/themes.js';
import { TOYS } from '../data/playground.js';

export const STORAGE_KEY = 'pururu-play-v1';
const defaults = { version: 1, plocs: 0, flavor: 'soda', theme: 'bathroom', companion: false, toy: 'none' };
const contains = (items, id) => items.some(item => item.id === id);
const validCount = value => Number.isSafeInteger(value) && value >= 0;

export function normalizeSave(value) {
  if (!value || typeof value !== 'object' || value.version !== 1) return { ...defaults };
  return {
    ...defaults,
    plocs: validCount(value.plocs) ? value.plocs : 0,
    flavor: contains(FLAVORS, value.flavor) ? value.flavor : defaults.flavor,
    theme: contains(THEMES, value.theme) ? value.theme : defaults.theme,
    companion: value.companion === true,
    toy: contains(TOYS, value.toy) ? value.toy : defaults.toy,
  };
}

function browserStorage() {
  try { return globalThis.localStorage; } catch { return null; }
}

/** Local-only preferences; unavailable storage never prevents play. */
export function createStore(storage = browserStorage()) {
  const listeners = new Set();
  function read() {
    try { const value = storage?.getItem(STORAGE_KEY); return value ? normalizeSave(JSON.parse(value)) : null; }
    catch { return null; }
  }
  let state = read() ?? { ...defaults };
  function notify() { for (const fn of listeners) fn({ ...state }); }
  function update(patch) {
    const saved = read() ?? state;
    state = normalizeSave({ ...saved, ...patch, plocs: Math.max(state.plocs, saved.plocs, validCount(patch.plocs) ? patch.plocs : 0) });
    try { storage?.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* Keep the in-memory state. */ }
    notify();
    return { ...state };
  }
  return {
    get state() { return { ...state }; },
    update,
    increment() {
      const count = Math.max(state.plocs, (read() ?? state).plocs);
      return update({ plocs: Math.min(Number.MAX_SAFE_INTEGER, count + 1) }).plocs;
    },
    refresh() {
      const saved = read() ?? state;
      state = { ...saved, plocs: Math.max(state.plocs, saved.plocs) };
      notify();
    },
    subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); },
  };
}
