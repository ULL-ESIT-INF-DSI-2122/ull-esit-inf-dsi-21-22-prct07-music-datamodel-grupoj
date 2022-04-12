import {Album} from '../../../objects/album';

/**
 * @function Ordena dos álbumes por su propiedad name
 * @param x Primer álbum
 * @param y Segundo álbum
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortAlbumName(x : Album, y : Album) {
  if (x.getName() < y.getName()) return -1;
  if (x.getName() > y.getName()) return 1;
  return 0;
}

/**
 * @function Ordena dos álbumes por su propiedad creator
 * @param x Primer álbum
 * @param y Segundo álbum
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortAlbumCreator(x : Album, y : Album) {
  if (x.getCreator() < y.getCreator()) return -1;
  if (x.getCreator() > y.getCreator()) return 1;
  return 0;
}

/**
 * @function Ordena dos álbumes por su propiedad year
 * @param x Primer álbum
 * @param y Segundo álbum
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortAlbumYear(x : Album, y : Album) {
  if (x.getYear() < y.getYear()) return -1;
  if (x.getYear() > y.getYear()) return 1;
  return 0;
}
