import {Artist} from './artist';
import {MusicGenre} from './musicGenre';

/**
 * Clase Song, es una entidad del sistema que representa
 * cada canción dentro de un álbum
 */
export class Song {
  /**
   * @param name Nombre de la canción
   * @param creator Nombre del autor de la canción
   * @param lenght Duración de la canción en segundos (es el único atributo
   * público para poder usarlo en la clase Playlist para la función getLenght())
   * @param genres Géneros musicales de la canción
   * @param single Determina si la canción es un sigle o no
   * @param rep Número de reproducciones de la canción
   */
  constructor(private name : string, private creator : Artist,
      public lenght : number, private genres : MusicGenre[],
      private single : boolean, private rep : number) {};

  /**
   * @returns Devuelve el nombre de la canción
   */
  getName() : string {
    return this.name;
  }

  /**
   * @returns Devuelve el autor de la canción
   */
  getCreator() : Artist {
    return this.creator;
  }

  /**
   * @returns Devuelve la duración de la canción en formato 'minutos:segundos'
   */
  getLenght() : string {
    const minute = Math.floor((this.lenght / 60) % 60);
    const second = this.lenght % 60;
    return `${minute} : ${second}`;
  }

  /**
   * @returns Devuelve los géneros de la canción
   */
  getGenres() : MusicGenre[] {
    return this.genres;
  }

  /**
   * @returns Devuelve true si la cación es un singley false si no lo es
   */
  getSingle() : boolean {
    return this.single;
  }

  /**
   * @returns Devuelve el número de reproducciones de la canción
   */
  getRep() : number {
    return this.rep;
  }
}
