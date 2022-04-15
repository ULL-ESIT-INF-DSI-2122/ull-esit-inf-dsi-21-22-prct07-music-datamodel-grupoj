import {musicGenreCollection} from '../var/collections';
import {genreData} from '../var/dataInterfaces';
import {MusicGenre} from '../../objects/musicGenre';
import {sortGenreName} from '../../managers/var/sorts/genreSort';

import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';

/**
 * @interface Interfaz para el adaptador de género musical
 */
export interface SchemaInterface {
  musicGenre : genreData[];
}

const adapter = new FileSync('./src/data/jsonFiles/genreData.json');
const db : lowdb.LowdbSync<SchemaInterface> = lowdb(adapter);

/**
 * @function Escribe todos los géneros musicales de la colección del sistema en
 * el fichero genreData.json de la base de datos
 */
export function writeGenreData() {
  const list = musicGenreCollection.getList().sort(sortGenreName);
  const genres : genreData[] = [];
  list.forEach((genre) => {
    genres.push({
      user: genre.user,
      name: genre.getName(),
    });
  });
  db.defaults().write();
  db.set('MusicGenres', genres).write();
}

/**
 * @function Lee todos los géneros musicales del fichero genreData.json
 * de la base de datos y los añade a la colección del sistema
 */
export function readGenreData() {
  musicGenreCollection.getList().splice(0, musicGenreCollection.getLenght());
  musicGenreCollection.getList().forEach((element) => {
    musicGenreCollection.getList().pop();
  });
  const genreData : genreData[] = db.get('MusicGenres').value();
  genreData.forEach((genre) => {
    musicGenreCollection.addItem(new MusicGenre(genre.user, genre.name));
  });
}
