/** Painted room scenery. Static textures keep extra themes cheap on mobile. */
export function paintThemeWall(g, { id, W, H, s, X, Y }) {
  const rect = (x, y, w, h, color) => { g.fillStyle = color; g.fillRect(x, y, w, h); };
  const pot = (x, y, size) => {
    g.fillStyle = '#6F865F';
    for (let i = 0; i < 7; i++) {
      g.beginPath(); g.ellipse(x + Math.sin(i * 2.5) * size * 0.55, y - size * (0.5 + i * 0.13), size * 0.23, size * 0.55, (i - 3) * 0.3, 0, Math.PI * 2); g.fill();
    }
    rect(x - size * 0.5, y, size, size * 0.65, '#B38368');
  };
  if (id === 'kitchen') {
    rect(0, 0, W, H, '#EEE7DC');
    g.strokeStyle = '#D8CEBF'; g.lineWidth = 0.025 * s;
    for (let x = X(-10); x < W; x += 2.4 * s) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); }
    rect(X(-5), Y(7.8), 6.2 * s, 5.7 * s, '#B8B6A1');
    rect(X(-4.8), Y(7.6), 5.8 * s, 5.3 * s, '#FAFAEE');
    rect(X(-2.1), Y(7.6), 0.1 * s, 5.3 * s, '#CCC4B6');
    rect(X(-4.8), Y(4.9), 5.8 * s, 0.1 * s, '#CCC4B6');
    rect(X(2.4), Y(3.1), 4.6 * s, 0.14 * s, '#B18E6C');
    for (let i = 0; i < 3; i++) {
      rect(X(3 + i * 0.85), Y(4.35), 0.5 * s, 1.25 * s, ['#D7C0A3', '#ADAF92', '#D8D2C4'][i]);
      rect(X(3 + i * 0.85), Y(4.43), 0.5 * s, 0.12 * s, '#927960');
    }
    pot(X(4), Y(0.6), 0.65 * s);
  } else if (id === 'garden') {
    rect(0, 0, W, H, '#DFE7D7');
    rect(0, H * 0.04, W, H * 0.35, '#F0F2E6');
    g.strokeStyle = '#B8C5AC'; g.lineWidth = 0.08 * s;
    for (let x = X(-12); x < W; x += 2 * s) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); }
    rect(0, Y(2.2), W, 0.1 * s, '#BAC7AB');
    for (const [x, y, size] of [[-5, 0.7, 1.9], [4.5, 0.8, 2.4], [-2.8, 3.5, 0.8], [6, 4.2, 1.5]]) pot(X(x), Y(y), size * s);
  } else {
    rect(0, 0, W, H, '#EDE3DA');
    const papers = [[-4.7, 7.4, 3.2, 3.9, '#F9F3E6'], [0.5, 6.3, 2.8, 3.2, '#E7C8B3'], [3.8, 7.8, 2.6, 4.5, '#F6EFDF']];
    for (const [x, y, w, h, color] of papers) {
      rect(X(x), Y(y), w * s, h * s, color);
      rect(X(x + w * 0.4), Y(y + 0.1), 0.7 * s, 0.25 * s, '#CFB89E');
      g.strokeStyle = '#AA8C73'; g.lineWidth = 0.03 * s;
      g.beginPath(); g.ellipse(X(x + w / 2), Y(y - h / 2), w * 0.24 * s, h * 0.21 * s, 0, 0, Math.PI * 2); g.stroke();
    }
    pot(X(-4), Y(0.7), 0.7 * s);
    rect(X(4), Y(1.25), 0.6 * s, 1.25 * s, '#C7B89F');
    for (let i = 0; i < 5; i++) rect(X(4.08 + i * 0.09), Y(1.9 + (i % 2) * 0.2), 0.045 * s, 1.2 * s, ['#8A9B7A', '#BC8C72'][i % 2]);
  }
}
