import {Artist} from '../../../objects/artist';

/**
 * @function Ordena dos artistas por su propiedad name
 * @param x Primer artista
 * @param y Segundo artista
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortArtistName(x : Artist, y : Artist) {
  if (x.getName() < y.getName()) return -1;
  if (x.getName() > y.getName()) return 1;
  return 0;
}

/**
 * @function Ordena dos artistas por su propiedad rep
 * @param x Primer artista
 * @param y Segundo artista
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortArtistRep(x : Artist, y : Artist) {
  if (x.getRep() < y.getRep()) return -1;
  if (x.getRep() > y.getRep()) return 1;
  return 0;
}
