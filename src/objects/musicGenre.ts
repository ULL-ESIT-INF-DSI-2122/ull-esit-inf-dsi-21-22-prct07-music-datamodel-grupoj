import {Album} from './album';
import {Artist} from './artist';
import {albumCollection, artistCollection,
  groupCollection, songCollection} from '../data/var/collections';
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
   * @param user Usuario creador del género musical
   * @param name Nombre de género musical
   */
  constructor(public user : string, private name : string) {}

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
        if (artist != this.creators.find((element) => element === artist)) {
          if (genre.getName() === this.name) this.creators.push(artist);
        }
      });
    });
    groupCollection.getList().forEach((group) => {
      group.getGenres().forEach((genre) => {
        if (group != this.creators.find((element) => element === group)) {
          if (genre.getName() === this.name) this.creators.push(group);
        }
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
        if (album != this.albums.find((element) => element === album)) {
          if (genre === this) this.albums.push(album);
        }
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
      if (song != this.songs.find((element) => element === song)) {
        song.getGenres().forEach((genre) => {
          if (genre === this) this.songs.push(song);
        });
      }
    });
    return this.songs;
  }

  /**
   * Muestra la información realacionada con un género musical
   */
  print() : void {
    console.log(`-Usuario propietario del género musical: ${this.user}`);
    console.log(`-Nombre del género musical: ${this.getName()}`);
    console.log(`-Grupos y/o artistas relacionados con el género musical: `);
    this.creators.forEach((creator) => {
      console.log(`\t-${creator.getName()}`);
    });
    console.log(`-Álbumes relacionados con el género musical: `);
    this.albums.forEach((album) => {
      console.log(`\t-${album.getName()}`);
    });
    console.log(`-Canciones relacionadas con el género musical: `);
    this.songs.forEach((song) => {
      console.log(`\t-${song.getName()}`);
    });
  }
}
