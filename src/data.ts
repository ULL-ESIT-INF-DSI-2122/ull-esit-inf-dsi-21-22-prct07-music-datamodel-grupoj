import {Album} from './objects/album';
import {Artist} from './objects/artist';
import {musicGenreCollection, artistCollection, groupCollection, songCollection,
  albumCollection, playlistCollection} from './objects/collection';
import {Group} from './objects/group';
import {MusicGenre} from './objects/musicGenre';
import {Playlist} from './objects/playlist';
import {Song} from './objects/song';

/**
 * @function Genera la colección del sistema con una serie de
 * datos preestablecidos
 */
export function data() {
/**
 * Géneros musicales dentro de la colección del sistema
 */
  let genre = new MusicGenre('system', 'genre1');
  musicGenreCollection.addItem(genre);
  genre = new MusicGenre('system', 'genre2');
  musicGenreCollection.addItem(genre);
  genre = new MusicGenre('system', 'genre3');
  musicGenreCollection.addItem(genre);
  genre = new MusicGenre('system', 'genre4');
  musicGenreCollection.addItem(genre);
  genre = new MusicGenre('system', 'genre5');
  musicGenreCollection.addItem(genre);
  genre = new MusicGenre('system', 'genre6');
  musicGenreCollection.addItem(genre);
  genre = new MusicGenre('system', 'genre7');
  musicGenreCollection.addItem(genre);
  genre = new MusicGenre('system', 'genre8');
  musicGenreCollection.addItem(genre);
  genre = new MusicGenre('system', 'genre9');
  musicGenreCollection.addItem(genre);
  genre = new MusicGenre('system', 'genre10');
  musicGenreCollection.addItem(genre);

  /**
 * Artistas dentro de la colección del sistema
 */
  let artist = new Artist('system', 'artista1', 500);
  artistCollection.addItem(artist);
  artist = new Artist('system', 'artista2', 500);
  artistCollection.addItem(artist);
  artist = new Artist('system', 'artista3', 500);
  artistCollection.addItem(artist);
  artist = new Artist('system', 'artista4', 500);
  artistCollection.addItem(artist);
  artist = new Artist('system', 'artista5', 500);
  artistCollection.addItem(artist);
  artist = new Artist('system', 'artista6', 500);
  artistCollection.addItem(artist);
  artist = new Artist('system', 'artista7', 500);
  artistCollection.addItem(artist);
  artist = new Artist('system', 'artista8', 500);
  artistCollection.addItem(artist);
  artist = new Artist('system', 'artista9', 500);
  artistCollection.addItem(artist);
  artist = new Artist('system', 'artista10', 500);
  artistCollection.addItem(artist);

  /**
 * Grupos dentro de la colección del sistema
 */
  let group = new Group('system', 'grupo1', [artistCollection.getList()[0],
    artistCollection.getList()[1]], 2000, 1000);
  groupCollection.addItem(group);
  group = new Group('system', 'grupo2', [artistCollection.getList()[2],
    artistCollection.getList()[3]], 2000, 1000);
  groupCollection.addItem(group);
  group = new Group('system', 'grupo3', [artistCollection.getList()[4],
    artistCollection.getList()[5]], 2000, 1000);
  groupCollection.addItem(group);
  group = new Group('system', 'grupo4', [artistCollection.getList()[6],
    artistCollection.getList()[7]], 2000, 1000);
  groupCollection.addItem(group);
  group = new Group('system', 'grupo5', [artistCollection.getList()[8],
    artistCollection.getList()[9]], 2000, 1000);
  groupCollection.addItem(group);

  /**
 * Canciones dentro de la colección del sistema
 */
  let song = new Song('system', 'canción1', artistCollection.getList()[0], 180,
      musicGenreCollection.getList()[0], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción2', artistCollection.getList()[0], 180,
      musicGenreCollection.getList()[0], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción3', artistCollection.getList()[0], 180,
      musicGenreCollection.getList()[0], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción4', artistCollection.getList()[0], 180,
      musicGenreCollection.getList()[0], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción5', artistCollection.getList()[0], 180,
      musicGenreCollection.getList()[0], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción6', artistCollection.getList()[1], 180,
      musicGenreCollection.getList()[1], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción7', artistCollection.getList()[1], 180,
      musicGenreCollection.getList()[1], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción8', artistCollection.getList()[1], 180,
      musicGenreCollection.getList()[1], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción9', artistCollection.getList()[1], 180,
      musicGenreCollection.getList()[1], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción10', artistCollection.getList()[1], 180,
      musicGenreCollection.getList()[1], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción11', artistCollection.getList()[2], 180,
      musicGenreCollection.getList()[2], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción12', artistCollection.getList()[2], 180,
      musicGenreCollection.getList()[2], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción13', artistCollection.getList()[2], 180,
      musicGenreCollection.getList()[2], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción14', artistCollection.getList()[2], 180,
      musicGenreCollection.getList()[2], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción15', artistCollection.getList()[2], 180,
      musicGenreCollection.getList()[2], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción16', artistCollection.getList()[3], 180,
      musicGenreCollection.getList()[3], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción17', artistCollection.getList()[3], 180,
      musicGenreCollection.getList()[3], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción18', artistCollection.getList()[3], 180,
      musicGenreCollection.getList()[3], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción19', artistCollection.getList()[3], 180,
      musicGenreCollection.getList()[3], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción20', artistCollection.getList()[3], 180,
      musicGenreCollection.getList()[3], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción21', artistCollection.getList()[4], 180,
      musicGenreCollection.getList()[4], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción22', artistCollection.getList()[4], 180,
      musicGenreCollection.getList()[4], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción23', artistCollection.getList()[4], 180,
      musicGenreCollection.getList()[4], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción24', artistCollection.getList()[4], 180,
      musicGenreCollection.getList()[4], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción25', artistCollection.getList()[4], 180,
      musicGenreCollection.getList()[4], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción26', artistCollection.getList()[5], 180,
      musicGenreCollection.getList()[5], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción27', artistCollection.getList()[5], 180,
      musicGenreCollection.getList()[5], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción28', artistCollection.getList()[5], 180,
      musicGenreCollection.getList()[5], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción29', artistCollection.getList()[5], 180,
      musicGenreCollection.getList()[5], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción30', artistCollection.getList()[5], 180,
      musicGenreCollection.getList()[5], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción31', artistCollection.getList()[6], 180,
      musicGenreCollection.getList()[6], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción32', artistCollection.getList()[6], 180,
      musicGenreCollection.getList()[6], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción33', artistCollection.getList()[6], 180,
      musicGenreCollection.getList()[6], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción34', artistCollection.getList()[6], 180,
      musicGenreCollection.getList()[6], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción35', artistCollection.getList()[6], 180,
      musicGenreCollection.getList()[6], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción36', artistCollection.getList()[7], 180,
      musicGenreCollection.getList()[7], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción37', artistCollection.getList()[7], 180,
      musicGenreCollection.getList()[7], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción38', artistCollection.getList()[7], 180,
      musicGenreCollection.getList()[7], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción39', artistCollection.getList()[7], 180,
      musicGenreCollection.getList()[7], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción40', artistCollection.getList()[7], 180,
      musicGenreCollection.getList()[7], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción41', artistCollection.getList()[8], 180,
      musicGenreCollection.getList()[8], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción42', artistCollection.getList()[8], 180,
      musicGenreCollection.getList()[8], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción43', artistCollection.getList()[8], 180,
      musicGenreCollection.getList()[8], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción44', artistCollection.getList()[8], 180,
      musicGenreCollection.getList()[8], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción45', artistCollection.getList()[8], 180,
      musicGenreCollection.getList()[8], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción46', artistCollection.getList()[9], 180,
      musicGenreCollection.getList()[9], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción47', artistCollection.getList()[9], 180,
      musicGenreCollection.getList()[9], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción48', artistCollection.getList()[9], 180,
      musicGenreCollection.getList()[9], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción49', artistCollection.getList()[9], 180,
      musicGenreCollection.getList()[9], 250);
  songCollection.addItem(song);
  song = new Song('system', 'canción50', artistCollection.getList()[9], 180,
      musicGenreCollection.getList()[9], 250);
  songCollection.addItem(song);

  /**
 * Álbumes dentro de la colección del sistema
 */
  let album = new Album('system', 'album1', artistCollection.getList()[0], 2010,
      [songCollection.getList()[1], songCollection.getList()[2],
        songCollection.getList()[3], songCollection.getList()[4]]);
  albumCollection.addItem(album);
  album = new Album('system', 'album2', artistCollection.getList()[2], 2010,
      [songCollection.getList()[11], songCollection.getList()[12],
        songCollection.getList()[13], songCollection.getList()[14]]);
  albumCollection.addItem(album);
  album = new Album('system', 'album3', artistCollection.getList()[4], 2010,
      [songCollection.getList()[21], songCollection.getList()[22],
        songCollection.getList()[23], songCollection.getList()[24]]);
  albumCollection.addItem(album);
  album = new Album('system', 'album4', artistCollection.getList()[6], 2010,
      [songCollection.getList()[31], songCollection.getList()[32],
        songCollection.getList()[33], songCollection.getList()[34]]);
  albumCollection.addItem(album);
  album = new Album('system', 'album5', artistCollection.getList()[8], 2010,
      [songCollection.getList()[41], songCollection.getList()[42],
        songCollection.getList()[43], songCollection.getList()[44]]);
  albumCollection.addItem(album);
  album = new Album('system', 'album6', groupCollection.getList()[0], 2010,
      [songCollection.getList()[6], songCollection.getList()[7],
        songCollection.getList()[8], songCollection.getList()[9]]);
  albumCollection.addItem(album);
  album = new Album('system', 'album7', groupCollection.getList()[1], 2010,
      [songCollection.getList()[16], songCollection.getList()[17],
        songCollection.getList()[18], songCollection.getList()[19]]);
  albumCollection.addItem(album);
  album = new Album('system', 'album8', groupCollection.getList()[2], 2010,
      [songCollection.getList()[26], songCollection.getList()[27],
        songCollection.getList()[28], songCollection.getList()[29]]);
  albumCollection.addItem(album);
  album = new Album('system', 'album9', groupCollection.getList()[3], 2010,
      [songCollection.getList()[36], songCollection.getList()[37],
        songCollection.getList()[38], songCollection.getList()[39]]);
  albumCollection.addItem(album);
  album = new Album('system', 'album10', groupCollection.getList()[4], 2010,
      [songCollection.getList()[46], songCollection.getList()[47],
        songCollection.getList()[48], songCollection.getList()[49]]);
  albumCollection.addItem(album);

  /**
 * Playlists dentro de la colección del sistema
 */
  let playlist = new Playlist('system', 'playlist1',
      [songCollection.getList()[0],
        songCollection.getList()[11], songCollection.getList()[23],
        songCollection.getList()[35], songCollection.getList()[47]]);
  playlistCollection.addItem(playlist);
  playlist = new Playlist('system', 'playlist2', [songCollection.getList()[1],
    songCollection.getList()[12], songCollection.getList()[24],
    songCollection.getList()[36], songCollection.getList()[48]]);
  playlistCollection.addItem(playlist);
  playlist = new Playlist('system', 'playlist3', [songCollection.getList()[2],
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
    group.getPlaylists();
  });
  artistCollection.getList().forEach((artist) => {
    artist.getGroups();
    artist.getAlbums();
    artist.getSongs();
    artist.getGenres();
    artist.getPlaylists();
  });
  musicGenreCollection.getList().forEach((genre) => {
    genre.getCreators();
    genre.getAlbums();
    genre.getSongs();
  });
}
