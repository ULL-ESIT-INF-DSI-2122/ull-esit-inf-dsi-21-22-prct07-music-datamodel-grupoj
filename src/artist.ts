import {Album} from './album';
import {albumCollection, groupCollection, songCollection} from './collection';
import {Group} from './group';
import {MusicGenre} from './musicGenre';
import {Song} from './song';

/**
 * Clase Artist, representa una entidad separada de los grupos dentro del
 * sistema. Con esta decisión, podemos identifcar artistas que forman parte
 * de grupos y que además tienen carreras en solitario o que están
 * en varios grupos.
 */
export class Artist {
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
   * @param name Nombre del artista
   * @param rep Número de oyentes del artista de forma individual
   */
  constructor(private name : string, private rep : number) {};

  /**
   * @returns Devuelve el nombre del artista
   */
  getName() : string {
    return this.name;
  }

  /**
   * @returns Devuelve los géneros musicales relacionados con el artista. Para
   * ello añade a la propiedad de la clase genres todos aquellos géneros
   * musicales que tengan sus albumes, sus canciones, y ,en caso de que
   * pertenezca algún grupo, también los albumes de los mismos.
   */
  getGenres() : MusicGenre[] {
    this.albums.forEach((album) => {
      album.getGenres().forEach((genre) => {
        if (genre != this.genres.find((element) => element === genre)) {
          this.genres.push(genre);
        }
      });
    });
    this.songs.forEach((song) => {
      song.getGenres().forEach((genre) => {
        if (genre != this.genres.find((element) => element === genre)) {
          this.genres.push(genre);
        }
      });
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
      if (song.getCreator() === this) this.songs.push(song);
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
}
