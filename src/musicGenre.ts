import {Album} from './album';
import {Artist} from './artist';
import {albumCollection, artistCollection,
  groupCollection, songCollection} from './collection';
import {Group} from './group';
import {Song} from './song';

/**
 * Clase MusicGenre, representa un género musical dentro del sistema
 */
export class MusicGenre {
  /**
   * Grupos y/o artistas que están relacionados con el género musical
   */
  private creators : (Group | Artist)[] = [];
  /**
   * Álbumes en los que hay presentes alguna canción del género musical
   */
  private albums : Album[] = [];
  /**
   * Canciones que pertenecen al género musical
   */
  private songs : Song[] = [];
  /**
   * @param name Nombre de género musical
   */
  constructor(private name : string) {};

  /**
   * @returns Devuelve el nombre del género musical
   */
  getName() : string {
    return this.name;
  }

  /**
   * @returns Devulve aquellos grupos y/o artistas que estén relacionados
   * con el género musical. Para ello comprueba las colecciones de artistas
   * y grupos del sitema, y si alguno de los géneros relacionados con los
   * mismos coinciden con el género musical, se alamcena el grupo o el
   * artista en la propiedad de la clase creators
   */
  getCreators() : (Group | Artist)[] {
    artistCollection.getList().forEach((artist) => {
      artist.getGenres().forEach((genre) => {
        if (genre.getName() === this.name) this.creators.push(artist);
      });
    });
    groupCollection.getList().forEach((group) => {
      group.getGenres().forEach((genre) => {
        if (genre.getName() === this.name) this.creators.push(group);
      });
    });
    return this.creators;
  }

  /**
   * @returns Devuelve aquellos álbumes en los que esté  presente el
   * género musical. Para ello comprueba la colección de álbumes del
   * sistema y si los géneros de alguno coincide con el género musica,
   *  se almacena el album en la propiedad de la clase albums
   */
  getAlbums() : Album[] {
    albumCollection.getList().forEach((album) => {
      album.getGenres().forEach((genre) => {
        if (genre === this) this.albums.push(album);
      });
    });
    return this.albums;
  }

  /**
   * @returns Devuelve aquellas canciones que pertenezcan al género
   * musical. Para ello comprueba la colección de canciones del sistema,
   * y si el género de alguna coincide con el género musical, la añade a
   * la propiedad de la clase songs
   */
  getSongs() : Song[] {
    songCollection.getList().forEach((song) => {
      song.getGenres().forEach((genre) => {
        if (genre === this) this.songs.push(song);
      });
    });
    return this.songs;
  }
}
