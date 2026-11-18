// ====== CONFIGURACIÓN ÚNICA DE LA WEB ======
// URL de la Aplicación web de Apps Script (termina en /exec)
const API = 'https://script.google.com/macros/s/AKfycbxlzeJYt-x1Rs3UNL-ET73P7trUY5nlLX7pTzmoPvaKeO67fKkGleX6YRPVnOWG6Xpy5w/exec';
// Tu WhatsApp: 549 + característica sin 0 + número sin 15  (ej. Reconquista: 5493482123456)
const VENDEDOR_WA = '5493482545079';
const VENDEDOR_NOMBRE = 'Yamir Aracne';

const pesos = n => '$' + Number(n || 0).toLocaleString('es-AR');
const $ = id => document.getElementById(id);

async function api(data) {
  const r = await fetch(API, { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(data) });
  return r.json();
}
async function apiGet(action) {
  const r = await fetch(API + '?action=' + action);
  return r.json();
}
/** "10000x4+20000x7" → "4 cuotas de $10.000 y 7 de $20.000" */
function planTxt(c) {
  const g = []; c.forEach(x => (g.length && g[g.length - 1][0] === x) ? g[g.length - 1][1]++ : g.push([x, 1]));
  return g.map(([x, n], i) => `${n} ${i ? 'de' : n > 1 ? 'cuotas de' : 'cuota de'} ${pesos(x)}`).join(' y ');
}
