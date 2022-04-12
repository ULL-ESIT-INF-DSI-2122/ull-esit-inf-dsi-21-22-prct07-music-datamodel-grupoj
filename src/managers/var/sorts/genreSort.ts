import {MusicGenre} from '../../../objects/musicGenre';

/**
 * @function Ordena dos géneros musicales por su propiedad name
 * @param x Primer género musical
 * @param y Segundo género musical
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortGenreName(x : MusicGenre, y : MusicGenre) {
  if (x.getName() < y.getName()) return -1;
  if (x.getName() > y.getName()) return 1;
  return 0;
}
