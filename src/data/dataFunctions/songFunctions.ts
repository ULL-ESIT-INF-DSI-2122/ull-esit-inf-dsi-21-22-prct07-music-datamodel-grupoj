import {artistCollection, groupCollection, musicGenreCollection,
  songCollection} from '../var/collections';
import {songData} from '../var/dataInterfaces';
import {Artist} from '../../objects/artist';
import {Group} from '../../objects/group';
import {Song} from '../../objects/song';
import {MusicGenre} from '../../objects/musicGenre';
import {sortSongName} from '../../managers/var/sorts/songSort';

import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';

/**
 * @interface Interfaz para el adaptador de canción
 */
export interface SchemaInterface {
  songs : songData[];
}

const adapter = new FileSync('./src/data/jsonFiles/songData.json');
const db : lowdb.LowdbSync<SchemaInterface> = lowdb(adapter);

/**
 * @function Escribe todas las canciones de la colección del sistema en
 * el fichero songData.json de la base de datos
 */
export function writeSongsData() {
  const list = songCollection.getList().sort(sortSongName);
  const songs : songData[] = [];
  list.forEach((song) => {
    const genres : string[] = [];
    song.getGenres().forEach((genre) => {
      genres.push(genre.getName());
    });
    songs.push({
      user: song.user,
      name: song.getName(),
      creator: song.getCreator().getName(),
      lenght: song.lenght,
      genres: genres,
      rep: song.getRep(),
    });
  });
  db.defaults().write();
  db.set('Songs', songs).write();
}

/**
 * @function Lee todas las canciones del fichero songData.json de la base
 * de datos y los añade a la colección del sistema
 */
export function readSongsData() {
  songCollection.getList().splice(0, songCollection.getLenght());
  songCollection.getList().forEach((element) => {
    songCollection.getList().pop();
  });
  const songsData : songData[] = db.get('Songs').value();
  songsData.forEach((song) => {
    const creators : (Artist | Group)[] = [];
    artistCollection.getList().forEach((artist) => {
      creators.push(artist);
    });
    groupCollection.getList().forEach((group) => {
      creators.push(group);
    });
    const creator = creators.find((element) =>
      element.getName() === song.creator);
    const genres : MusicGenre[] = [];
    song.genres.forEach((name) => {
      const genre = musicGenreCollection.getList().find((element) =>
        element.getName() === name);
      if (genre) genres.push(genre);
    });
    if (creator) {
      songCollection.addItem(new Song(song.user, song.name, creator,
          song.lenght, genres, song.rep));
    }
  });
}
