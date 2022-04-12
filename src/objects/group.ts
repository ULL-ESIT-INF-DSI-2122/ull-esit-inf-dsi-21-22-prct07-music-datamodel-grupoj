import {Album} from './album';
import {Artist} from './artist';
import {albumCollection, playlistCollection} from './collection';
import {MusicGenre} from './musicGenre';
import {Playlist} from './playlist';

/**
 * Clase Group, representa otra entidad dentro del sistema.
 * Esta entidad deberá contener toda la información asociada
 * a un grupo determinado dentro del sistema
 */
export class Group {
  /**
   * Playlists relacionadas con el grupo
   */
  private playlists : Playlist[] = [];
  /**
   * Géneros musicales que están realcionados con el grupo
   */
  private genres : MusicGenre[] = [];
  /**
   * Albums publicados por el grupo
   */
  private albums : Album[] = [];
  /**
   * @param user Usuario propietario del grupo
   * @param name Nombre del grupo
   * @param artists Artistas que conforman el grupo
   * @param year Año de fundación del grupo
   * @param rep Número de oyentes del grupo
   */
  constructor(public user : string, private name : string,
    private artists : Artist[], private year : number, private rep : number) {}

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

  /**
   * @returns Devuelve aquellas playlists que están relacionadas con el grupo,
   * para ello comprueba en que playlist hay canciones relacionadas con el grupo
   * y las añade a la propiedad de la clase playlists
   */
  getPlaylists() : Playlist[] {
    playlistCollection.getList().forEach((playlist) => {
      playlist.getSongs().forEach((song) => {
        if (playlist != this.playlists.find((element) => element ===playlist)) {
          if (song.getCreator() === this) this.playlists.push(playlist);
        }
      });
    });
    return this.playlists;
  }

  /**
   * Muestra la información relacionada con un grupo
   */
  print() : void {
    console.log(`-Usuario propietario del grupo: ${this.user}`);
    console.log(`-Nombre del grupo: ${this.getName()}`);
    console.log(`-Artistas que forman parte del grupo: `);
    this.artists.forEach((artist) => {
      console.log(`\t-${artist.getName()}`);
    });
    console.log(`-Géneros musicales relacionados con el grupo: `);
    this.genres.forEach((genre) => {
      console.log(`\t-${genre.getName()}`);
    });
    console.log(`-Álbumes del grupo: `);
    this.albums.forEach((album) => {
      console.log(`\t-${album.getName()}`);
    });
    console.log(`-Playlists en las que participa el grupo: `);
    this.playlists.forEach((playlist) => {
      console.log(`\t-${playlist.getName()}`);
    });
    console.log(`-Año de creación del grupo: ${this.getYear()}`);
    console.log(`-Número de oyentes grupo: ${this.getRep()}`);
  }
}
