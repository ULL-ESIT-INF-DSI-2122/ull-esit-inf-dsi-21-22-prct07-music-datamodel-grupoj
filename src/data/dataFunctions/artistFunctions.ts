import {artistCollection} from '../var/collections';
import {artistData} from '../var/dataInterfaces';
import {Artist} from '../../objects/artist';
import {sortArtistName} from '../../managers/var/sorts/artistSort';

import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';

/**
 * @interface Interfaz para el adaptador de artista
 */
export interface SchemaInterface {
  artist : artistData[];
}

const adapter = new FileSync('./src/data/jsonFiles/artistData.json');
const db : lowdb.LowdbSync<SchemaInterface> = lowdb(adapter);

/**
 * @function Escribe todos los artistas de la colección del sistema en
 * el fichero artistData.json de la base de datos
 */
export function writeArtistData() {
  const list = artistCollection.getList().sort(sortArtistName);
  const artists : artistData[] = [];
  list.forEach((artist) => {
    artists.push({
      user: artist.user,
      name: artist.getName(),
      rep: artist.rep,
    });
  });
  db.defaults().write();
  db.set('Artists', artists).write();
}

/**
 * @function Lee todos los artistas del fichero artistData.json de la base
 * de datos y los añade a la colección del sistema
 */
export function readArtistData() {
  artistCollection.getList().splice(0, artistCollection.getLenght());
  artistCollection.getList().forEach((element) => {
    artistCollection.getList().pop();
  });
  const artistData : artistData[] = db.get('Artists').value();
  artistData.forEach((artist) => {
    artistCollection.addItem(new Artist(artist.user, artist.name, artist.rep));
  });
}
