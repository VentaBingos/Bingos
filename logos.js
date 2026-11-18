// Logos de cada bingo (archivos en la misma carpeta de la web)
const LOGOS = {
  INTEREFA: ['logo-interefa.png'],
  PLATENSE: ['logo-platense.png', 'escudo-cpp.png']
};
const logosHTML = (id, alto) => (LOGOS[id] || []).map(f => `<img src="${f}" alt="" style="height:${alto}px;max-width:70%;object-fit:contain">`).join('');