import {MusicGenre} from './musicGenre';
import {Song} from './song';

/**
 * Clase Playlist, representa una lista de reproducción de música
 * de alguna plataforma digital dentro el sistema
 */
export class Playlist {
  /**
   * Duración de la playlist en segundos
   */
  public lenght : number = 0;
  /**
   * Géneros musicales que se encuentran en la playlist
   */
  private genres : MusicGenre[] = [];
  /**
   * @param user Usuario creador de la playlist
   * @param name Nombre de la playlist
   * @param songs Canciones de la playlist
   */
  constructor(public user : string, private name : string,
    private songs : Song[]) {}

  /**
   * @returns Devuelve el nombre de la playlist
   */
  getName() : string {
    return this.name;
  }

  /**
   * @returns Devuelve las canciones de la playlist
   */
  getSongs() : Song[] {
    return this.songs;
  }

  /**
   * @returns Devuelve la longitud de la playlist en formato
   * 'horas:minutos:segundo'. Para ello suma la duración de
   * todas las canciones de la playlist
   */
  getLenght() : string {
    let globalLenght = 0;
    this.songs.forEach((song) => {
      globalLenght += song.lenght;
    });
    this.lenght = globalLenght;
    const hour = Math.floor(this.lenght / 3600);
    const minute = Math.floor((this.lenght / 60) % 60);
    const second = this.lenght % 60;
    return `${hour} : ${minute} : ${second}`;
  }

  /**
   * @returns Devuelve todos los géneros musicales que están relacionados con
   * la playlist. Para ello añade todos aquellos géneros musicales que tengan
   * las canciones de la playlist
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
  }

  /**
   * Devuelve la información relacionada con una playlist
   */
  print() : void {
    console.log(`-Usuario propietario de la playlist: ${this.user}`);
    console.log(`-Nombre de la playlist: ${this.getName()}`);
    console.log(`-Géneros realacionados con la playlist: `);
    this.genres.forEach((genre) => {
      console.log(`\t-${genre.getName()}`);
    });
    console.log(`-Canciones con las que cuenta la playlist: `);
    this.songs.forEach((song) => {
      console.log(`\t-${song.getName()}`);
    });
    console.log(`-Duración de la playlist: '${this.getLenght()}' (h/m/s)`);
  }
}
