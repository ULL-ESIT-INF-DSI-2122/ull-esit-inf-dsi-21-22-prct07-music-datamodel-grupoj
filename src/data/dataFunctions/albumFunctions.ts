import {albumCollection, artistCollection, groupCollection,
  songCollection} from '../var/collections';
import {Song} from '../../objects/song';
import {Artist} from '../../objects/artist';
import {Group} from '../../objects/group';
import {Album} from '../../objects/album';
import {albumData} from '../var/dataInterfaces';
import {sortAlbumName} from '../../managers/var/sorts/albumSort';

import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';

/**
 * @interface Interfaz para el adaptador de album
 */
export interface SchemaInterface {
  album : albumData[];
}

const adapter = new FileSync('./src/data/jsonFiles/albumData.json');
const db : lowdb.LowdbSync<SchemaInterface> = lowdb(adapter);

/**
 * @function Escribe todos los álbumes de la colección del sistema en
 * el fichero albumData.json de la base de datos
 */
export function writeAlbumData() {
  const list = albumCollection.getList().sort(sortAlbumName);
  const albums : albumData[] = [];
  list.forEach((album) => {
    const songs : string[] = [];
    album.getSongs().forEach((song) => {
      songs.push(song.getName());
    });
    albums.push({
      user: album.user,
      name: album.getName(),
      creator: album.getCreator().getName(),
      year: album.getYear(),
      songs: songs,
    });
  });
  db.defaults().write();
  db.set('Albums', albums).write();
}

/**
 * @function Lee todos los álbumes del fichero albumData.json de la base
 * de datos y los añade a la colección del sistema
 */
export function readAlbumData() {
  const albumData : albumData[] = db.get('Albums').value();
  albumData.forEach((album) => {
    const creators : (Artist | Group)[] = [];
    artistCollection.getList().forEach((artist) => {
      creators.push(artist);
    });
    groupCollection.getList().forEach((group) => {
      creators.push(group);
    });
    const creator = creators.find((element) =>
      element.getName() === album.creator);
    const songs : Song[] = [];
    album.songs.forEach((name) => {
      const song = songCollection.getList().find((element) =>
        element.getName() === name);
      if (song) songs.push(song);
    });
    if (creator) {
      albumCollection.addItem(new Album(album.user, album.name,
          creator, album.year, songs));
    }
  });
}
