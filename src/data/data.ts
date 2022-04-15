import {readAlbumData, writeAlbumData} from './dataFunctions/albumFunctions';
import {readArtistData, writeArtistData} from './dataFunctions/artistFunctions';
import {readGenreData, writeGenreData} from './dataFunctions/genreFunctions';
import {readGroupData, writeGroupData} from './dataFunctions/groupFunctions';
import {readPlaylistData,
  writePlaylistData} from './dataFunctions/playlistFunctions';
import {readSongsData, writeSongsData} from './dataFunctions/songFunctions';
import {songCollection, playlistCollection, albumCollection,
  groupCollection, artistCollection,
  musicGenreCollection} from './var/collections';

/**
 * @function Escribe toda la información de la colección del sistema en
 * la base de datos de los ficheros .json
 */
export function writeData() {
  writeAlbumData();
  writeArtistData();
  writeGenreData();
  writeGroupData();
  writePlaylistData();
  writeSongsData();
}

/**
 * @function Lee toda la información de la base de datos de los ficheros .json
 * y la almacena en la colección del sistema
 */
export function readData() {
  readAlbumData();
  readArtistData();
  readGenreData();
  readGroupData();
  readPlaylistData();
  readSongsData();
}

/**
 * @function Actualiza los atributos de los objetos del sitema que sean
 * dependientes de los datos de otras clase en el orden adecuado tras por
 * ejemplo añadir un nuevo objeto al sistema
 */
export function update() : void {
  songCollection.getList().forEach((song) => {
    song.getSingle();
  });
  playlistCollection.getList().forEach((playlist) => {
    playlist.getLenght();
    playlist.getGenres();
  });
  albumCollection.getList().forEach((album) => {
    album.getGenres();
  });
  groupCollection.getList().forEach((group) => {
    group.getAlbums();
    group.getGenres();
    group.getSongs();
    group.getPlaylists();
  });
  artistCollection.getList().forEach((artist) => {
    artist.getGroups();
    artist.getAlbums();
    artist.getSongs();
    artist.getGenres();
    artist.getPlaylists();
  });
  musicGenreCollection.getList().forEach((musicGenre) => {
    musicGenre.getCreators();
    musicGenre.getAlbums();
    musicGenre.getSongs();
  });
}
