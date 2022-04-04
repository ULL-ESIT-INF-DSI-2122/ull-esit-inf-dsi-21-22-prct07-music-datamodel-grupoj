import {Album} from './album';
import {Artist} from './artist';
import {musicGenreCollection, artistCollection, groupCollection, songCollection,
  albumCollection, playlistCollection} from './collection';
import {Group} from './group';
import {MusicGenre} from './musicGenre';
import {Playlist} from './playlist';
import {Song} from './song';

/**
 * @function Genera la colección del sistema con una serie de
 * datos preestablecidos
 */
export function data() {
/**
 * Géneros musicales dentro de la colección del sistema
 */
  let genre = new MusicGenre('genre1');
  musicGenreCollection.addItem(genre);
  genre = new MusicGenre('genre2');
  musicGenreCollection.addItem(genre);
  genre = new MusicGenre('genre3');
  musicGenreCollection.addItem(genre);
  genre = new MusicGenre('genre4');
  musicGenreCollection.addItem(genre);
  genre = new MusicGenre('genre5');
  musicGenreCollection.addItem(genre);
  genre = new MusicGenre('genre6');
  musicGenreCollection.addItem(genre);
  genre = new MusicGenre('genre7');
  musicGenreCollection.addItem(genre);
  genre = new MusicGenre('genre8');
  musicGenreCollection.addItem(genre);
  genre = new MusicGenre('genre9');
  musicGenreCollection.addItem(genre);
  genre = new MusicGenre('genre10');
  musicGenreCollection.addItem(genre);

  /**
 * Artistas dentro de la colección del sistema
 */
  let artist = new Artist('artista1', 500);
  artistCollection.addItem(artist);
  artist = new Artist('artista2', 500);
  artistCollection.addItem(artist);
  artist = new Artist('artista3', 500);
  artistCollection.addItem(artist);
  artist = new Artist('artista4', 500);
  artistCollection.addItem(artist);
  artist = new Artist('artista5', 500);
  artistCollection.addItem(artist);
  artist = new Artist('artista6', 500);
  artistCollection.addItem(artist);
  artist = new Artist('artista7', 500);
  artistCollection.addItem(artist);
  artist = new Artist('artista8', 500);
  artistCollection.addItem(artist);
  artist = new Artist('artista9', 500);
  artistCollection.addItem(artist);
  artist = new Artist('artista10', 500);
  artistCollection.addItem(artist);

  /**
 * Grupos dentro de la colección del sistema
 */
  let group = new Group('grupo1', [artistCollection.getList()[0],
    artistCollection.getList()[1]], 2000, 1000);
  groupCollection.addItem(group);
  group = new Group('grupo2', [artistCollection.getList()[2],
    artistCollection.getList()[3]], 2000, 1000);
  groupCollection.addItem(group);
  group = new Group('grupo3', [artistCollection.getList()[4],
    artistCollection.getList()[5]], 2000, 1000);
  groupCollection.addItem(group);
  group = new Group('grupo4', [artistCollection.getList()[6],
    artistCollection.getList()[7]], 2000, 1000);
  groupCollection.addItem(group);
  group = new Group('grupo5', [artistCollection.getList()[8],
    artistCollection.getList()[9]], 2000, 1000);
  groupCollection.addItem(group);

  /**
 * Canciones dentro de la colección del sistema
 */
  let song = new Song('canción1', artistCollection.getList()[0], 180,
      [musicGenreCollection.getList()[0]], true, 250);
  songCollection.addItem(song);
  song = new Song('canción2', artistCollection.getList()[0], 180,
      [musicGenreCollection.getList()[0]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción3', artistCollection.getList()[0], 180,
      [musicGenreCollection.getList()[0]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción4', artistCollection.getList()[0], 180,
      [musicGenreCollection.getList()[0]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción5', artistCollection.getList()[0], 180,
      [musicGenreCollection.getList()[0]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción6', artistCollection.getList()[1], 180,
      [musicGenreCollection.getList()[1]], true, 250);
  songCollection.addItem(song);
  song = new Song('canción7', artistCollection.getList()[1], 180,
      [musicGenreCollection.getList()[1]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción8', artistCollection.getList()[1], 180,
      [musicGenreCollection.getList()[1]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción9', artistCollection.getList()[1], 180,
      [musicGenreCollection.getList()[1]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción10', artistCollection.getList()[1], 180,
      [musicGenreCollection.getList()[1]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción11', artistCollection.getList()[2], 180,
      [musicGenreCollection.getList()[2]], true, 250);
  songCollection.addItem(song);
  song = new Song('canción12', artistCollection.getList()[2], 180,
      [musicGenreCollection.getList()[2]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción13', artistCollection.getList()[2], 180,
      [musicGenreCollection.getList()[2]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción14', artistCollection.getList()[2], 180,
      [musicGenreCollection.getList()[2]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción15', artistCollection.getList()[2], 180,
      [musicGenreCollection.getList()[2]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción16', artistCollection.getList()[3], 180,
      [musicGenreCollection.getList()[3]], true, 250);
  songCollection.addItem(song);
  song = new Song('canción17', artistCollection.getList()[3], 180,
      [musicGenreCollection.getList()[3]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción18', artistCollection.getList()[3], 180,
      [musicGenreCollection.getList()[3]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción19', artistCollection.getList()[3], 180,
      [musicGenreCollection.getList()[3]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción20', artistCollection.getList()[3], 180,
      [musicGenreCollection.getList()[3]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción21', artistCollection.getList()[4], 180,
      [musicGenreCollection.getList()[4]], true, 250);
  songCollection.addItem(song);
  song = new Song('canción22', artistCollection.getList()[4], 180,
      [musicGenreCollection.getList()[4]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción23', artistCollection.getList()[4], 180,
      [musicGenreCollection.getList()[4]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción24', artistCollection.getList()[4], 180,
      [musicGenreCollection.getList()[4]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción25', artistCollection.getList()[4], 180,
      [musicGenreCollection.getList()[4]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción26', artistCollection.getList()[5], 180,
      [musicGenreCollection.getList()[5]], true, 250);
  songCollection.addItem(song);
  song = new Song('canción27', artistCollection.getList()[5], 180,
      [musicGenreCollection.getList()[5]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción28', artistCollection.getList()[5], 180,
      [musicGenreCollection.getList()[5]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción29', artistCollection.getList()[5], 180,
      [musicGenreCollection.getList()[5]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción30', artistCollection.getList()[5], 180,
      [musicGenreCollection.getList()[5]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción31', artistCollection.getList()[6], 180,
      [musicGenreCollection.getList()[6]], true, 250);
  songCollection.addItem(song);
  song = new Song('canción32', artistCollection.getList()[6], 180,
      [musicGenreCollection.getList()[6]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción33', artistCollection.getList()[6], 180,
      [musicGenreCollection.getList()[6]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción34', artistCollection.getList()[6], 180,
      [musicGenreCollection.getList()[6]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción35', artistCollection.getList()[6], 180,
      [musicGenreCollection.getList()[6]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción36', artistCollection.getList()[7], 180,
      [musicGenreCollection.getList()[7]], true, 250);
  songCollection.addItem(song);
  song = new Song('canción37', artistCollection.getList()[7], 180,
      [musicGenreCollection.getList()[7]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción38', artistCollection.getList()[7], 180,
      [musicGenreCollection.getList()[7]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción39', artistCollection.getList()[7], 180,
      [musicGenreCollection.getList()[7]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción40', artistCollection.getList()[7], 180,
      [musicGenreCollection.getList()[7]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción41', artistCollection.getList()[8], 180,
      [musicGenreCollection.getList()[8]], true, 250);
  songCollection.addItem(song);
  song = new Song('canción42', artistCollection.getList()[8], 180,
      [musicGenreCollection.getList()[8]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción43', artistCollection.getList()[8], 180,
      [musicGenreCollection.getList()[8]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción44', artistCollection.getList()[8], 180,
      [musicGenreCollection.getList()[8]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción45', artistCollection.getList()[8], 180,
      [musicGenreCollection.getList()[8]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción46', artistCollection.getList()[9], 180,
      [musicGenreCollection.getList()[9]], true, 250);
  songCollection.addItem(song);
  song = new Song('canción47', artistCollection.getList()[9], 180,
      [musicGenreCollection.getList()[9]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción48', artistCollection.getList()[9], 180,
      [musicGenreCollection.getList()[9]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción49', artistCollection.getList()[9], 180,
      [musicGenreCollection.getList()[9]], false, 250);
  songCollection.addItem(song);
  song = new Song('canción50', artistCollection.getList()[9], 180,
      [musicGenreCollection.getList()[9]], false, 250);
  songCollection.addItem(song);

  /**
 * Álbumes dentro de la colección del sistema
 */
  let album = new Album('album1', artistCollection.getList()[0], 2010,
      [songCollection.getList()[1], songCollection.getList()[2],
        songCollection.getList()[3], songCollection.getList()[4]]);
  albumCollection.addItem(album);
  album = new Album('album2', artistCollection.getList()[2], 2010,
      [songCollection.getList()[11], songCollection.getList()[12],
        songCollection.getList()[13], songCollection.getList()[14]]);
  albumCollection.addItem(album);
  album = new Album('album3', artistCollection.getList()[4], 2010,
      [songCollection.getList()[21], songCollection.getList()[22],
        songCollection.getList()[23], songCollection.getList()[24]]);
  albumCollection.addItem(album);
  album = new Album('album4', artistCollection.getList()[6], 2010,
      [songCollection.getList()[31], songCollection.getList()[32],
        songCollection.getList()[33], songCollection.getList()[34]]);
  albumCollection.addItem(album);
  album = new Album('album5', artistCollection.getList()[8], 2010,
      [songCollection.getList()[41], songCollection.getList()[42],
        songCollection.getList()[43], songCollection.getList()[44]]);
  albumCollection.addItem(album);
  album = new Album('album6', groupCollection.getList()[0], 2010,
      [songCollection.getList()[6], songCollection.getList()[7],
        songCollection.getList()[8], songCollection.getList()[9]]);
  albumCollection.addItem(album);
  album = new Album('album7', groupCollection.getList()[1], 2010,
      [songCollection.getList()[16], songCollection.getList()[17],
        songCollection.getList()[18], songCollection.getList()[19]]);
  albumCollection.addItem(album);
  album = new Album('album8', groupCollection.getList()[2], 2010,
      [songCollection.getList()[26], songCollection.getList()[27],
        songCollection.getList()[28], songCollection.getList()[29]]);
  albumCollection.addItem(album);
  album = new Album('album9', groupCollection.getList()[3], 2010,
      [songCollection.getList()[36], songCollection.getList()[37],
        songCollection.getList()[38], songCollection.getList()[39]]);
  albumCollection.addItem(album);
  album = new Album('album10', groupCollection.getList()[4], 2010,
      [songCollection.getList()[46], songCollection.getList()[47],
        songCollection.getList()[48], songCollection.getList()[49]]);
  albumCollection.addItem(album);

  /**
 * Playlists dentro de la colección del sistema
 */
  let playlist = new Playlist('playlist1', [songCollection.getList()[0],
    songCollection.getList()[11], songCollection.getList()[23],
    songCollection.getList()[35], songCollection.getList()[47]]);
  playlistCollection.addItem(playlist);
  playlist = new Playlist('playlist2', [songCollection.getList()[1],
    songCollection.getList()[12], songCollection.getList()[24],
    songCollection.getList()[36], songCollection.getList()[48]]);
  playlistCollection.addItem(playlist);
  playlist = new Playlist('playlist3', [songCollection.getList()[2],
    songCollection.getList()[13], songCollection.getList()[25],
    songCollection.getList()[37], songCollection.getList()[49]]);
  playlistCollection.addItem(playlist);
}

/**
 * @function Actualiza los atributos de los objetos del sitema que sean
 * dependientes de los datos de otras clase en el orden adecuado tras por
 * ejemplo añadir un nuevo objeto al sistema
 */
export function update() : void {
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
  });
  artistCollection.getList().forEach((artist) => {
    artist.getGroups();
    artist.getAlbums();
    artist.getSongs();
    artist.getGenres();
  });
  musicGenreCollection.getList().forEach((genre) => {
    genre.getCreators();
    genre.getAlbums();
    genre.getSongs();
  });
}
