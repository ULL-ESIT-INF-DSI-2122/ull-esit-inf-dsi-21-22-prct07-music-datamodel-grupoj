import {Album} from '../../objects/album';
import {Artist} from '../../objects/artist';
import {Group} from '../../objects/group';
import {MusicGenre} from '../../objects/musicGenre';
import {Playlist} from '../../objects/playlist';
import {Song} from '../../objects/song';

/**
 * Clase ItemsCollection <T> implements Collection<T>, representa una
 * colección de objetos de tipo génerico sobre la cual se implemta la
 * interfaz Collection<T> para colecciones de tipo genérico
 */
export class ItemsCollection <T> {
  /**
   * Lista de objetos de la colección
   */
  private list : T[] = [];
  constructor() {}

  /**
   * @returns Devuelve la lista de objetos de tipo genérico
   */
  getList() : T[] {
    return this.list;
  }

  /**
   * @param item Objeto de tipo genérico que será añadido a la colección
   */
  addItem(item: T) : void {
    this.list.push(item);
  }

  /**
   * @returns Devuelve el tamaño de la colección
   */
  getLenght(): number {
    return this.list.length;
  }
}

/**
 * Colección de álbumes dentro del sistema
 */
export const albumCollection = new ItemsCollection<Album>();
/**
 * Colección de artistas dentro del sistema
 */
export const artistCollection = new ItemsCollection<Artist>();
/**
 * Colección de grupos dentro del sitema
 */
export const groupCollection = new ItemsCollection<Group>();
/**
 * Colección de géneros musicales dentro del sistema
 */
export const musicGenreCollection = new ItemsCollection<MusicGenre>();
/**
 * Colección de canciones dentro del sistema
 */
export const songCollection = new ItemsCollection<Song>();
/**
 * Colección de playlists dentro del sistema
 */
export const playlistCollection = new ItemsCollection<Playlist>();
