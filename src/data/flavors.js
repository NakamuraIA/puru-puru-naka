/**
 * Flavor catalogue. Colors are plain hex so they can be fed to both
 * three.js (as Color) and to CSS (as a custom property).
 *
 * `name` is a per-language map — the label under each swatch is localized.
 * `ja` is the fallback (the original copy).
 */
export const FLAVORS = [
  {
    id: 'soda', body: '#A2EAFF', atten: '#3DB8F6', glow: '#A8EEFF',
    deep: '#1678C4', logo: '#7FD8FA',
    trans: 1, irid: 0.2, rainbow: 0, rough: 0.14,
    name: { ja: 'ソーダ', 'pt-BR': 'Soda', en: 'Soda', es: 'Soda', zh: '苏打' },
  },
  {
    id: 'ichigo', body: '#FFA3C2', atten: '#F2508A', glow: '#FFC6DA',
    deep: '#D6336C', logo: '#FFA3C2',
    trans: 1, irid: 0.2, rainbow: 0, rough: 0.14,
    name: { ja: 'いちご', 'pt-BR': 'Morango', en: 'Strawberry', es: 'Fresa', zh: '草莓' },
  },
  {
    id: 'melon', body: '#B6EC86', atten: '#58C45E', glow: '#DBFFB4',
    deep: '#2F8F3A', logo: '#B6EC86',
    trans: 1, irid: 0.2, rainbow: 0, rough: 0.14,
    name: { ja: 'メロン', 'pt-BR': 'Melão', en: 'Melon', es: 'Melón', zh: '蜜瓜' },
  },
  {
    id: 'lemon', body: '#FFE27E', atten: '#FFB42A', glow: '#FFF2AE',
    deep: '#C97800', logo: '#FFE27E',
    trans: 1, irid: 0.2, rainbow: 0, rough: 0.14,
    name: { ja: 'レモン', 'pt-BR': 'Limão', en: 'Lemon', es: 'Limón', zh: '柠檬' },
  },
  {
    id: 'budou', body: '#C6ADFF', atten: '#8A63F5', glow: '#E2D5FF',
    deep: '#6A45D6', logo: '#C6ADFF',
    trans: 1, irid: 0.2, rainbow: 0, rough: 0.14,
    name: { ja: 'ぶどう', 'pt-BR': 'Uva', en: 'Grape', es: 'Uva', zh: '葡萄' },
  },
  {
    id: 'aurora', body: '#FFFFFF', atten: '#EFEAF8', glow: '#FFFFFF',
    deep: '#8A6CE0', logo: '#CDBDF4',
    trans: 1, irid: 0.65, rainbow: 1, rough: 0.085,
    name: { ja: 'オーロラ', 'pt-BR': 'Aurora', en: 'Aurora', es: 'Aurora', zh: '极光' },
  },
  {
    id: 'coffee', body: '#D4AB8C', atten: '#845235', glow: '#F3DFC6', deep: '#764831', logo: '#BA896A',
    trans: 0.65, irid: 0.08, rainbow: 0, rough: 0.2,
    name: { ja: 'コーヒー', 'pt-BR': 'Café', en: 'Coffee', es: 'Café', zh: '咖啡' },
  },
  {
    id: 'honey', body: '#F7CC72', atten: '#CC8825', glow: '#FFEDB8', deep: '#9A6014', logo: '#E5B653',
    trans: 0.95, irid: 0.12, rainbow: 0, rough: 0.16,
    name: { ja: 'はちみつ', 'pt-BR': 'Mel', en: 'Honey', es: 'Miel', zh: '蜂蜜' },
  },
  {
    id: 'matcha', body: '#CAD5A5', atten: '#78974D', glow: '#E2ECCA', deep: '#516F34', logo: '#A8BD83',
    trans: 0.7, irid: 0.1, rainbow: 0, rough: 0.2,
    name: { ja: '抹茶', 'pt-BR': 'Matcha', en: 'Matcha', es: 'Matcha', zh: '抹茶' },
  },
  {
    id: 'peach', body: '#FFD0B3', atten: '#EB9375', glow: '#FFE7D5', deep: '#B65A3D', logo: '#F3B194',
    trans: 0.9, irid: 0.15, rainbow: 0, rough: 0.16,
    name: { ja: 'もも', 'pt-BR': 'Pêssego', en: 'Peach', es: 'Melocotón', zh: '桃子' },
  },
  {
    id: 'chocolate', body: '#B58B7A', atten: '#6D4637', glow: '#E2C4B1', deep: '#694334', logo: '#AE8070',
    trans: 0.45, irid: 0.06, rainbow: 0, rough: 0.24,
    name: { ja: 'チョコ', 'pt-BR': 'Chocolate', en: 'Chocolate', es: 'Chocolate', zh: '巧克力' },
  },
  {
    id: 'coconut', body: '#FFF6E4', atten: '#D7CDBB', glow: '#FFFFFF', deep: '#807158', logo: '#DFD3BA',
    trans: 0.5, irid: 0.08, rainbow: 0, rough: 0.19,
    name: { ja: 'ココナッツ', 'pt-BR': 'Coco', en: 'Coconut', es: 'Coco', zh: '椰子' },
  },
];
