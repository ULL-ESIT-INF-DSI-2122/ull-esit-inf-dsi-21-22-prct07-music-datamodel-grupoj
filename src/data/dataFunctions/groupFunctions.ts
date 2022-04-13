import {artistCollection, groupCollection} from '../var/collections';
import {groupData} from '../var/dataInterfaces';
import {Artist} from '../../objects/artist';
import {Group} from '../../objects/group';

import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';

/**
 * @interface Interfaz para el adaptador de grupo
 */
export interface SchemaInterface {
  group : groupData[];
}

const adapter = new FileSync('./src/data/jsonFiles/groupData.json');
const db : lowdb.LowdbSync<SchemaInterface> = lowdb(adapter);

/**
 * @function Escribe todos los grupos de la colección del sistema en
 * el fichero groupData.json de la base de datos
 */
export function writeGroupData() {
  const groups : groupData[] = [];
  groupCollection.getList().forEach((group) => {
    const artists : string[] = [];
    group.getArtists().forEach((artist) => {
      artists.push(artist.getName());
    });
    groups.push({
      user: group.user,
      name: group.getName(),
      artists: artists,
      year: group.getYear(),
      rep: group.getRep(),
    });
  });
  db.defaults().write();
  db.set('Groups', groups).write();
}

/**
 * @function Lee todos los grupos del fichero groupData.json de la base
 * de datos y los añade a la colección del sistema
 */
export function readGroupData() {
  const groupData : groupData[] = db.get('Groups').value();
  groupData.forEach((group) => {
    const artists : Artist[] = [];
    group.artists.forEach((name) => {
      const artist = artistCollection.getList().find((element) =>
        element.getName() === name);
      if (artist) artists.push(artist);
    });
    groupCollection.addItem(new Group(group.user, group.name, artists,
        group.year, group.rep));
  });
}
