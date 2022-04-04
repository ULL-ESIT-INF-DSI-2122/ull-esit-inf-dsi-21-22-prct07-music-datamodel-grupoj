import {Album} from './album';
import {Artist} from './artist';
import {albumCollection} from './collection';
import {MusicGenre} from './musicGenre';

/**
 * Clase Group, representa otra entidad dentro del sistema.
 * Esta entidad deberá contener toda la información asociada
 * a un grupo determinado dentro del sistema
 */
export class Group {
  /**
   * Géneros musicales que están realcionados con el grupo
   */
  private genres : MusicGenre[] = [];
  /**
   * Albums publicados por el grupo
   */
  private albums : Album[] = [];
  /**
   * @param name Nombre del grupo
   * @param artists Artistas que conforman el grupo
   * @param year Año de fundación del grupo
   * @param rep Número de oyentes del grupo
   */
  constructor(private name : string, private artists : Artist[],
      private year : number, private rep : number) {};

  /**
   * @returns Devuelve el nombre del grupo
   */
  getName() : string {
    return this.name;
  }

  /**
   * @returns Devuelve los artistas qe forman parte del grupo
   */
  getArtists() : Artist[] {
    return this.artists;
  }

  /**
   * @returns Devuelve el año de fundación del grupo
   */
  getYear() : number {
    return this.year;
  }

  /**
   * @returns Devuelves los géneros musicales relacionados con el grupo,
   * es decir, aquellos géneros que estén presentes en los álbumes que
   * han publicado
   */
  getGenres() : MusicGenre[] {
    this.albums.forEach((album) => {
      album.getGenres().forEach((genre) => {
        if (genre != this.genres.find((element) => element === genre)) {
          this.genres.push(genre);
        }
      });
    });
    return this.genres;
  }

  /**
   * @returns Devuelve los álbumes que ha publicado. Para ello comprueba la
   * colección de álbumes del sistema y si el creador de alguno coincide con
   * el grupo lo añade a la propiedad de la clase albums
   */
  getAlbums() : Album[] {
    albumCollection.getList().forEach((album) => {
      if (album.getCreator() === this) this.albums.push(album);
    });
    return this.albums;
  }

  /**
   * @returns Devuelve el número de oyentes del grupo
   */
  getRep() : number {
    return this.rep;
  }
}
