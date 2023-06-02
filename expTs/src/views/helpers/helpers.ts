import { Prof, Tecnologia } from './helpersTypes';

export function listaProfs(profs: Prof[]) {
  const lista = profs.map((p) => `<li>${p.nome} ${p.sala}</li>`);
  return `<ul>${lista.join('')}</ul>`;
}

export function listaTecnologia(tec: Tecnologia[]) {
  const lista = tec.map((p) => `<li>${p.name} ${p.type}</li>`);
  return `<ul>${lista.join('')}</ul>`;
}
