import {playlistCollection, songCollection} from '../var/collections';
import {playlistData} from '../var/dataInterfaces';
import {Song} from '../../objects/song';
import {Playlist} from '../../objects/playlist';
import {sortPlaylistName} from '../../managers/var/sorts/playlistSort';

import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';

/**
 * @interface Interfaz para el adaptador de playlist
 */
export interface SchemaInterface {
  playlist : playlistData[];
}

const adapter = new FileSync('./src/data/jsonFiles/playlistData.json');
const db : lowdb.LowdbSync<SchemaInterface> = lowdb(adapter);

/**
 * @function Escribe todas las playlists de la colección del sistema en
 * el fichero playlistData.json de la base de datos
 */
export function writePlaylistData() {
  const list = playlistCollection.getList().sort(sortPlaylistName);
  const playlists : playlistData[] = [];
  list.forEach((playlist) => {
    const songs : string[] = [];
    playlist.getSongs().forEach((song) => {
      songs.push(song.getName());
    });
    playlists.push({
      user: playlist.user,
      name: playlist.getName(),
      songs: songs,
    });
  });
  db.defaults().write();
  db.set('Playlists', playlists).write();
}

/**
 * @function Lee todas las playlists del fichero playlistData.json de la base
 * de datos y los añade a la colección del sistema
 */
export function readPlaylistData() {
  playlistCollection.getList().splice(0, playlistCollection.getLenght());
  playlistCollection.getList().forEach((element) => {
    playlistCollection.getList().pop();
  });
  const playlistData : playlistData[] = db.get('Playlists').value();
  playlistData.forEach((playlist) => {
    const songs : Song[] = [];
    playlist.songs.forEach((name) => {
      const song = songCollection.getList().find((element) =>
        element.getName() === name);
      if (song) songs.push(song);
    });
    playlistCollection.addItem(new Playlist(playlist.user,
        playlist.name, songs));
  });
}
