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
  private lenght : number = 0;
  /**
   * Géneros musicales que se encuentran en la playlist
   */
  private genres : MusicGenre[] = [];
  /**
   * @param name Nombre de la playlist
   * @param songs Canciones de la playlist
   */
  constructor(private name : string, private songs : Song[]) {};

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
   * @returns Devuelve la longitus de la playlist en formato 'horas:minutos'.
   * Para ello suma la duración de todas las canciones de la playlist
   */
  getLenght() : string {
    this.songs.forEach((song) => {
      this.lenght += song.lenght;
    });
    const hour = Math.floor(this.lenght / 3600);
    const minute = Math.floor((this.lenght / 60) % 60);
    return `${hour} : ${minute}`;
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
}
