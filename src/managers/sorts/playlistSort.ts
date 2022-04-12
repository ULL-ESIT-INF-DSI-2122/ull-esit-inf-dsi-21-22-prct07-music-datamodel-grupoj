import {Playlist} from '../../objects/playlist';

/**
 * @function Ordena dos playlists por su propiedad name
 * @param x Primer playlist
 * @param y Segundo playlist
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortPlaylistName(x : Playlist, y : Playlist) {
  if (x.getName() < y.getName()) return -1;
  if (x.getName() > y.getName()) return 1;
  return 0;
}

/**
 * @function Ordena dos playlists por su propiedad lenght
 * @param x Primer playlist
 * @param y Segundo playlist
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortPlaylistLenght(x : Playlist, y : Playlist) {
  if (x.lenght < y.lenght) return -1;
  if (x.lenght > y.lenght) return 1;
  return 0;
}
