import {Album} from './album';
import {albumCollection, groupCollection, playlistCollection,
  songCollection} from './collection';
import {Group} from './group';
import {MusicGenre} from './musicGenre';
import {Playlist} from './playlist';
import {Song} from './song';

/**
 * Clase Artist, representa una entidad separada de los grupos dentro del
 * sistema. Con esta decisión, podemos identifcar artistas que forman parte
 * de grupos y que además tienen carreras en solitario o que están
 * en varios grupos.
 */
export class Artist {
  /**
   * Playlists que están relacionadas con el artista
   */
  private playlists : Playlist[] = [];
  /**
   * Géneros musicales que están relacionados con el artista, ya sea de forma
   * individual o en alguno de sus grupos
   */
  private genres : MusicGenre[] = [];
  /**
   * Álbumes en los que ha participado, ya sea de forma individual o como parte
   * de algún grupo
   */
  private albums : Album[] = [];
  /**
   * Canciones creadas por el artista
   */
  private songs : Song[] = [];
  /**
   * Grupos a los que pertenece el artista
   */
  private groups : Group[] = [];
  /**
   * @param user Usuario propietario del artista
   * @param name Nombre del artista
   * @param rep Número de oyentes del artista de forma individual
   */
  constructor(public user : string, private name : string,
    private rep : number) {}

  /**
   * @returns Devuelve el nombre del artista
   */
  getName() : string {
    return this.name;
  }

  /**
   * @returns Devuelve los géneros musicales relacionados con el artista. Para
   * ello añade a la propiedad de la clase genres todos aquellos géneros
   * musicales que tengan sus canciones, y ,en caso de que
   * pertenezca algún grupo, también los albumes de los mismos.
   */
  getGenres() : MusicGenre[] {
    this.songs.forEach((song) => {
      if (song.getGenre() != this.genres.find((element) =>
        element === song.getGenre())) {
        this.genres.push(song.getGenre());
      }
    });
    this.groups.forEach((group) => {
      group.getGenres().forEach((genre) => {
        if (genre != this.genres.find((element) => element === genre)) {
          this.genres.push(genre);
        }
      });
    });
    return this.genres;
  }

  /**
   * @returns Devuelve aquellos albumes publicados por el artista y por
   * aquellos grupos de los que forme parte, en caso de haberlos. Para ello
   * comprueba la colección de albumes del sistema, y en caso de que el autor
   * de alguno coincida con el artista, añade ese album a la propiedad de la
   * clase albums
   */
  getAlbums() : Album[] {
    albumCollection.getList().forEach((album) => {
      if (album.getCreator() === this) this.albums.push(album);
    });
    this.groups.forEach((group) => {
      group.getAlbums().forEach((album) => {
        if (album != this.albums.find((element) => element === album)) {
          this.albums.push(album);
        }
      });
    });
    return this.albums;
  }

  /**
   * @returns Devuelves aquellas canciones publicadas por el artista. Para
   * ellos comprueba la colección de canciones de sistema y si el autor de
   * alguna de ellas coincide con el artista, añade la canción a la propiedad
   * de la clase songs
   */
  getSongs() : Song[] {
    songCollection.getList().forEach((song) => {
      if (song.getCreator() === this) {
        if (song != this.songs.find((element) => element === song)) {
          this.songs.push(song);
        }
      }
    });
    return this.songs;
  }

  /**
   * @returns Devuelve el número de oyentes que tiene el artista, pero no solo
   * de forma individual, sino contando todas sus participaciones en los
   * posibles grupos de los que forma parte. Para ello suma los oyentes de
   * los grupos de los que forma parte con los propios
   */
  getRep() : number {
    this.groups.forEach((group) => {
      this.rep += group.getRep();
    });
    return this.rep;
  }

  /**
   * @returns Devuelve los grupos de los que forma parte el artista, en caso de
   * no formar parte de niguno devolverá una propiedad vacía
   */
  getGroups() : Group[] {
    groupCollection.getList().forEach((group) => {
      group.getArtists().forEach((artist) => {
        if (group != this.groups.find((element) => element === group)) {
          if (artist === this) this.groups.push(group);
        }
      });
    });
    return this.groups;
  }

  /**
   * @returns Devuelve las playlists que están relacionadas con el artista,
   * para ello comprueba en que playlist hay canciones relacionadas con el
   * artista, y las añade a la propiedad de la clase playlists
   */
  getPlaylists() : Playlist[] {
    playlistCollection.getList().forEach((playlist) => {
      playlist.getSongs().forEach((song) => {
        if (playlist != this.playlists.find((element) => element ===playlist)) {
          if (song.getCreator() === this) this.playlists.push(playlist);
        }
      });
    });
    return this.playlists;
  }

  /**
   * Muestra la información relacionada con un artista
   */
  print() : void {
    console.log(`-Usuario propietario del artista: ${this.user}`);
    console.log(`-Nombre del artista: ${this.getName()}`);
    console.log(`-Grupos de los que forma parte el artista: `);
    this.groups.forEach((group) => {
      console.log(`\t-${group.getName()}`);
    });
    console.log(`-Géneros musicales relacionados con el artista: `);
    this.genres.forEach((genre) => {
      console.log(`\t-${genre.getName()}`);
    });
    console.log(`-Álbumes en los que participa el artista: `);
    this.albums.forEach((album) => {
      console.log(`\t-${album.getName()}`);
    });
    console.log(`-Canciones creadas por el artista: `);
    this.songs.forEach((song) => {
      console.log(`\t-${song.getName()}`);
    });
    console.log(`-Playlists en las que participa el artista: `);
    this.playlists.forEach((playlist) => {
      console.log(`\t-${playlist.getName()}`);
    });
    console.log(`-Número de oyentes totales del artista: ${this.getRep()}`);
  }
}
