import { THEMES } from '../data/themes.js';

export function createThemes(scene, counter, wall, store) {
  let current = 'bathroom';
  function setTheme(id) {
    const theme = THEMES.find(item => item.id === id);
    if (!theme) return false;
    current = id;
    scene.background.set(theme.background);
    const uniforms = counter.material.uniforms;
    uniforms.uBase.value.set(theme.base); uniforms.uVein.value.set(theme.vein);
    uniforms.uWarm.value.set(theme.warm); uniforms.uPattern.value = theme.pattern;
    wall.setTheme(id);
    document.documentElement.dataset.theme = id;
    document.documentElement.style.setProperty('--bg', theme.background);
    store.update({ theme: id });
    return true;
  }
  return { setTheme, get current() { return current; } };
}
