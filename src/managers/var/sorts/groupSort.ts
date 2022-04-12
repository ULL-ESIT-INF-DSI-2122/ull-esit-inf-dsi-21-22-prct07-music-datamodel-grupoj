import {Group} from '../../../objects/group';

/**
 * @function Ordena dos grupos por su propiedad name
 * @param x Primer grupo
 * @param y Segundo grupo
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortGroupName(x : Group, y : Group) {
  if (x.getName() < y.getName()) return -1;
  if (x.getName() > y.getName()) return 1;
  return 0;
}

/**
 * @function Ordena dos grupos por su propiedad year
 * @param x Primer grupo
 * @param y Segundo grupo
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortGroupYear(x : Group, y : Group) {
  if (x.getYear() < y.getYear()) return -1;
  if (x.getYear() > y.getYear()) return 1;
  return 0;
}

/**
 * @function Ordena dos grupos por su propiedad rep
 * @param x Primer grupo
 * @param y Segundo grupo
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortGroupRep(x : Group, y : Group) {
  if (x.getRep() < y.getRep()) return -1;
  if (x.getRep() > y.getRep()) return 1;
  return 0;
}
