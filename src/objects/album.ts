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
   * @param user Usuario propietario del álbum
   * @param name Nombre del album
   * @param creator Nombre del artista o grupo creador
   * @param year Año de publicación
   * @param songs Canciones que hay en el album
   */
  constructor(public user : string, private name : string,
    private creator : Group | Artist, private year : number,
    private songs : Song[]) {}

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
      if (song.getGenre() != this.genres.find((element) =>
        element === song.getGenre())) {
        this.genres.push(song.getGenre());
      }
    });
    return this.genres;
  };

  /**
   * @returns Devuelve las canciones que forman el album
   */
  getSongs() : Song[] {
    return this.songs;
  };

  /**
   * Muestra la información relacionada con un Álbum
   */
  print() : void {
    console.log(`-Usuario propietario del álbum: ${this.user}`);
    console.log(`-Nombre del álbum: ${this.getName()}`);
    console.log(`-Creador del álbum: ${this.getCreator().getName()}`);
    console.log(`-Fecha de publicación del álbum: '${this.getYear()}'`);
    console.log(`-Géneros realacionados con el álbum: `);
    this.genres.forEach((genre) => {
      console.log(`\t-${genre.getName()}`);
    });
    console.log(`-Canciones con las que cuenta el álbum: `);
    this.songs.forEach((song) => {
      console.log(`\t-${song.getName()}`);
    });
  }
}
