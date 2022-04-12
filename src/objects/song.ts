import {Artist} from './artist';
import {Group} from './group';
import {MusicGenre} from './musicGenre';

/**
 * Clase Song, es una entidad del sistema que representa
 * cada canción dentro de un álbum
 */
export class Song {
  /**
   * Determina si la canción es un sigle o no
   */
  private single : boolean;
  /**
   * @param user Usuario creador de la canción
   * @param name Nombre de la canción
   * @param creator Nombre del autor de la canción
   * @param lenght Duración de la canción en segundos (es el único atributo
   * público para poder usarlo en la clase Playlist para la función getLenght())
   * @param genre Género musical de la canción
   * @param rep Número de reproducciones de la canción
   */
  constructor(public user : string, private name : string,
    private creator : Artist | Group, public lenght : number,
    private genre : MusicGenre, private rep : number) {}

  /**
   * @returns Devuelve el nombre de la canción
   */
  getName() : string {
    return this.name;
  }

  /**
   * @returns Devuelve el autor de la canción
   */
  getCreator() : Artist | Group {
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
   * @returns Devuelve el género de la canción
   */
  getGenre() : MusicGenre {
    return this.genre;
  }

  /**
   * @returns Devuelve true si la cación es un singley false si no lo es
   */
  getSingle() : boolean {
    if (this.creator instanceof Artist) this.single = true;
    if (this.creator instanceof Group) this.single = false;
    return this.single;
  }

  /**
   * @returns Devuelve el número de reproducciones de la canción
   */
  getRep() : number {
    return this.rep;
  }

  /**
   * Muestra la información relacionada con una canción
   */
  print() : void {
    console.log(`-Usuario propietario de la canción: ${this.user}`);
    console.log(`-Nombre de la canción: ${this.getName()}`);
    console.log(`-Creador de la canción: ${this.getCreator().getName()}`);
    console.log(`-Duración de la canción: '${this.getLenght()}' (m/s)`);
    console.log(`-Género de la canción: ${this.getGenre().getName()}`);
    const format = (this.getSingle()) ? 'Single' : 'Colaboración';
    console.log(`-Formato de la canción: ${format}`);
    console.log(`-Reproducciones de la canción: ${this.getRep()}`);
  }
}
