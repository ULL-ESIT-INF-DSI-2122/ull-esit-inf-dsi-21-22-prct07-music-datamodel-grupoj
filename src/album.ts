import {Artist} from './artist';
import {Group} from './group';
import {MusicGenre} from './musicGenre';
import {Song} from './song';

/**
 * Clase Album, representa la información relacionada a un disco musical y
 * contiene múltiples canciones.
 */
export class Album {
  /**
   * Géneros músicales que hay en el album
   */
  private genres : MusicGenre[] = [];

  /**
   * @param name Nombre del album
   * @param creator Nombre del artista o grupo creador
   * @param year Año de publicación
   * @param songs Canciones que hay en el album
   */
  constructor(private name : string, private creator : Group | Artist,
      private year : number, private songs : Song[]) {};

  /**
   * @returns Devuelve el nombre del album
   */
  getName() : string {
    return this.name;
  };

  /**
   * @returns Devuelve el artista o grupo creador del album
   */
  getCreator() : Group | Artist {
    return this.creator;
  };

  /**
   * @returns Devuelve el año de publicación del album
   */
  getYear() : number {
    return this.year;
  };

  /**
   * @returns Devuelve la lista de géneros musicales que están realicionados
   * con el album. Para ello añade todos aquellos géneros musicales que tengan
   * las canciones del album a la propiedad genres de la clase.
   */
  getGenres() : MusicGenre[] {
    this.songs.forEach((song) => {
      song.getGenres().forEach((genre) => {
        if (genre != this.genres.find((element) => element === genre)) {
          this.genres.push(genre);
        }
      });
    });
    return this.genres;
  };

  /**
   * @returns Devuelve las canciones que forman el album
   */
  getSongs() : Song[] {
    return this.songs;
  };
}
