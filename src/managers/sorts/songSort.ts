import {Song} from '../../objects/song';

/**
 * @function Ordena dos canciones por su propiedad name
 * @param x Primer canción
 * @param y Segundo canción
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortSongName(x : Song, y : Song) {
  if (x.getName() < y.getName()) return -1;
  if (x.getName() > y.getName()) return 1;
  return 0;
}

/**
 * @function Ordena dos canciones por su propiedad creator
 * @param x Primer canción
 * @param y Segundo canción
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortSongCreator(x : Song, y : Song) {
  if (x.getCreator() < y.getCreator()) return -1;
  if (x.getCreator() > y.getCreator()) return 1;
  return 0;
}

/**
 * @function Ordena dos canciones por su propiedad lenght
 * @param x Primer canción
 * @param y Segundo canción
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortSongLenght(x : Song, y : Song) {
  if (x.lenght < y.lenght) return -1;
  if (x.lenght > y.lenght) return 1;
  return 0;
}

/**
 * @function Ordena dos canciones por su propiedad genre
 * @param x Primer canción
 * @param y Segundo canción
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortSongGenre(x : Song, y : Song) {
  if (x.getGenre() < y.getGenre()) return -1;
  if (x.getGenre() > y.getGenre()) return 1;
  return 0;
}

/**
 * @function Ordena dos canciones por su propiedad rep
 * @param x Primer canción
 * @param y Segundo canción
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortSongRep(x : Song, y : Song) {
  if (x.getRep() < y.getRep()) return -1;
  if (x.getRep() > y.getRep()) return 1;
  return 0;
}
