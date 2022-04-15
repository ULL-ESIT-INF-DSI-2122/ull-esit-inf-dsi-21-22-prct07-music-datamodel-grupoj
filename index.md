# Práctica 7 - Digitalizando la colección de música de los abuelos

El objetivo de la práctica será crear un sistema de de objetos que permita representar una biblioteca musical. Dentro de dicha biblioteca se deberán distinguir los diferentes objetos, con sus propiedades, y las relaciones que hay entre ellos. 

En un principio el sistema deberá constar con una serie de datos predeterminados, alamcenados en el mismo mediante el uso de lowdb. Gracias a esta herramienta podremos crear una base de datos el sistema que se guardará en formato json.

Además de esto, se deberá implementar un sistema de gestión que permita al usuario interactuar con la biblioteca del sistema, siendo capaz de crear, borrar o modificar según guste, y que se verá relejada en la base de datos. Esto se podrá llevar a cabo gracias a las funcionalidades de Inquirer. 

## Sistema de objetos

El diseño que se ha llevado a cabo cuenta con la siguiente lista de objetos: Album, Artist, Group, MusicGenre, Playlist y Song. Dentro de la definición de cada objeto existirá, como es lógico, el constructor que contendrá los datos básicos del objeto, es decir, aquellos que no dependen de otros objetos del sistema, y con una serie de getters que permitirán tanto devolver el valor de las diferentes propiedades en caso de que ya exista, como asignarlas consultando los diferentes objetos del sistema.

### Clase Album

La clase Album representará un álbum y sus propiedades dentro del sistema. La clase contará con sus respectivos getters y con un método print que mostrará todas las característeicas de un objeto en concreto.

```typescript
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
   * @param songs Canciones que hay en el álbum
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
```

### Clase Artist

La clase Artista representará un artista y sus propiedades dentro del sistema. La clase contará con sus respectivos getters y con un método print que mostrará todas las característeicas de un objeto en concreto.

```typescript
/**
 * Clase Artist, representa una entidad separada de los grupos dentro del
 * sistema. Con esta decisión, podemos identifcar artistas que forman parte
 * de grupos y que además tienen carreras en solitario o que están
 * en varios grupos.
 */
export class Artist {
  /**
   * Playlists que están relacionadas con el artista
   */
  private playlists : Playlist[] = [];
  /**
   * Géneros musicales que están relacionados con el artista, ya sea de forma
   * individual o en alguno de sus grupos
   */
  private genres : MusicGenre[] = [];
  /**
   * Álbumes en los que ha participado, ya sea de forma individual o como parte
   * de algún grupo
   */
  private albums : Album[] = [];
  /**
   * Canciones creadas por el artista
   */
  private songs : Song[] = [];
  /**
   * Grupos a los que pertenece el artista
   */
  private groups : Group[] = [];
  /**
   * @param user Usuario propietario del artista
   * @param name Nombre del artista
   * @param rep Número de oyentes del artista de forma individual
   */
  constructor(public user : string, private name : string,
    private rep : number) {}

  /**
   * @returns Devuelve el nombre del artista
   */
  getName() : string {
    return this.name;
  }

  /**
   * @returns Devuelve los géneros musicales relacionados con el artista. Para
   * ello añade a la propiedad de la clase genres todos aquellos géneros
   * musicales que tengan sus canciones, y ,en caso de que
   * pertenezca algún grupo, también los albumes de los mismos.
   */
  getGenres() : MusicGenre[] {
    this.songs.forEach((song) => {
      song.getGenres().forEach((genre) => {
        if (genre != this.genres.find((element) => element === genre)) {
          this.genres.push(genre);
        }
      });
    });
    this.groups.forEach((group) => {
      group.getGenres().forEach((genre) => {
        if (genre != this.genres.find((element) => element === genre)) {
          this.genres.push(genre);
        }
      });
    });
    return this.genres;
  }

  /**
   * @returns Devuelve aquellos albumes publicados por el artista y por
   * aquellos grupos de los que forme parte, en caso de haberlos. Para ello
   * comprueba la colección de albumes del sistema, y en caso de que el autor
   * de alguno coincida con el artista, añade ese album a la propiedad de la
   * clase albums
   */
  getAlbums() : Album[] {
    albumCollection.getList().forEach((album) => {
      if (album.getCreator() === this) this.albums.push(album);
    });
    this.groups.forEach((group) => {
      group.getAlbums().forEach((album) => {
        if (album != this.albums.find((element) => element === album)) {
          this.albums.push(album);
        }
      });
    });
    return this.albums;
  }

  /**
   * @returns Devuelves aquellas canciones publicadas por el artista. Para
   * ellos comprueba la colección de canciones de sistema y si el autor de
   * alguna de ellas coincide con el artista, añade la canción a la propiedad
   * de la clase songs
   */
  getSongs() : Song[] {
    songCollection.getList().forEach((song) => {
      if (song.getCreator() === this) {
        if (song != this.songs.find((element) => element === song)) {
          this.songs.push(song);
        }
      }
    });
    return this.songs;
  }

  /**
   * @returns Devuelve el número de oyentes que tiene el artista, pero no solo
   * de forma individual, sino contando todas sus participaciones en los
   * posibles grupos de los que forma parte. Para ello suma los oyentes de
   * los grupos de los que forma parte con los propios
   */
  getRep() : number {
    let globalRep = this.rep;
    this.groups.forEach((group) => {
      globalRep += group.getRep();
    });
    return globalRep;
  }

  /**
   * @returns Devuelve los grupos de los que forma parte el artista, en caso de
   * no formar parte de niguno devolverá una propiedad vacía
   */
  getGroups() : Group[] {
    groupCollection.getList().forEach((group) => {
      group.getArtists().forEach((artist) => {
        if (group != this.groups.find((element) => element === group)) {
          if (artist === this) this.groups.push(group);
        }
      });
    });
    return this.groups;
  }

  /**
   * @returns Devuelve las playlists que están relacionadas con el artista,
   * para ello comprueba en que playlist hay canciones relacionadas con el
   * artista, y las añade a la propiedad de la clase playlists
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
   * Muestra la información relacionada con un artista
   */
  print() : void {
    console.log(`-Usuario propietario del artista: ${this.user}`);
    console.log(`-Nombre del artista: ${this.getName()}`);
    console.log(`-Grupos de los que forma parte el artista: `);
    this.groups.forEach((group) => {
      console.log(`\t-${group.getName()}`);
    });
    console.log(`-Géneros musicales relacionados con el artista: `);
    this.genres.forEach((genre) => {
      console.log(`\t-${genre.getName()}`);
    });
    console.log(`-Álbumes en los que participa el artista: `);
    this.albums.forEach((album) => {
      console.log(`\t-${album.getName()}`);
    });
    console.log(`-Canciones creadas por el artista: `);
    this.songs.forEach((song) => {
      console.log(`\t-${song.getName()}`);
    });
    console.log(`-Playlists en las que participa el artista: `);
    this.playlists.forEach((playlist) => {
      console.log(`\t-${playlist.getName()}`);
    });
    console.log(`-Número de oyentes totales del artista: ${this.getRep()}`);
  }
}
```

### Clase Group

La clase Group representará un grupo musical y sus propiedades dentro del sistema. La clase contará con sus respectivos getters y con un método print que mostrará todas las característeicas de un objeto en concreto.

```typescript
/**
 * Clase Group, representa otra entidad dentro del sistema.
 * Esta entidad deberá contener toda la información asociada
 * a un grupo determinado dentro del sistema
 */
export class Group {
  /**
   * Canciones creadas por el grupo
   */
  private songs : Song[] = [];
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
   * @returns Devuelves aquellas canciones creadas por el grupo. Para
   * ellos comprueba la colección de canciones de sistema y si el autor de
   * alguna de ellas coincide con el grupo, añade la canción a la propiedad
   * de la clase songs
   */
  getSongs() : Song[] {
    songCollection.getList().forEach((song) => {
      if (song.getCreator() === this) {
        if (song != this.songs.find((element) => element === song)) {
          this.songs.push(song);
        }
      }
    });
    return this.songs;
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
    console.log(`-Canciones creadas por el grupo: `);
    this.songs.forEach((song) => {
      console.log(`\t-${song.getName()}`);
    });
    console.log(`-Playlists en las que participa el grupo: `);
    this.playlists.forEach((playlist) => {
      console.log(`\t-${playlist.getName()}`);
    });
    console.log(`-Año de creación del grupo: ${this.getYear()}`);
    console.log(`-Número de oyentes grupo: ${this.getRep()}`);
  }
}
```

### Clase MusicGenre

La clase MusicGenre representará un género musical y sus propiedades dentro del sistema. La clase contará con sus respectivos getters y con un método print que mostrará todas las característeicas de un objeto en concreto.

```typescript
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
```

### Clase Playlist

La clase Playlist representará una playlist y sus propiedades dentro del sistema. La clase contará con sus respectivos getters y con un método print que mostrará todas las característeicas de un objeto en concreto.

```typescript
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
```

### Clase Song

La clase Song representará una canción y sus propiedades dentro del sistema. La clase contará con sus respectivos getters y con un método print que mostrará todas las característeicas de un objeto en concreto.

```typescript
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
   * @param genres Género musical de la canción
   * @param rep Número de reproducciones de la canción
   */
  constructor(public user : string, private name : string,
    private creator : Artist | Group, public lenght : number,
    private genres : MusicGenre[], private rep : number) {}

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
  getGenres() : MusicGenre[] {
    return this.genres;
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
    console.log(`-Géneros de la canción: `);
    this.genres.forEach((genre) => {
      console.log(`\t-${genre.getName()}`);
    });
    const format = (this.getSingle()) ? 'Single' : 'Colaboración';
    console.log(`-Formato de la canción: ${format}`);
    console.log(`-Reproducciones de la canción: ${this.getRep()}`);
  }
}
```

## Sistema de información

Como se venía explicando en la introducción de la práctica, se llevará acabo la implementación de una base de datos mediante el uso de lowdb en formato json. Esta base de datos contendrá todos los objetos de la biblioteca y podrá ser modificada a la vez que guardada una vez se acabe la ejecución del programa.

### Información por defecto

En el fichero rawData.ts nos encontraremos con la función rawData(). Dicho método contiene toda la información que tendrá el sistema por defecto, es decir, una lista de los diferentes componentes de la biblioteca. Al estar separada de la base de datos, además de en un formato diferente, servirá como un backup en caso de que ocurra algo ineperado con los ficheros json.

```typescript
/**
 * @function Genera la colección del sistema con una serie de
 * datos preestablecidos
 */
export function rawData() {
  // Géneros musicales dentro de la colección del sistema
  {
    let genre = new MusicGenre('system', 'Urban');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Latino');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Rap');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Reguetón');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Pop');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Rock');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Alternativo');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Indie');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Metal');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'HardRock');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'SoftRock');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Country');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'GlamRock');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Electrónica');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Folk');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'House');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Dubstep');
    musicGenreCollection.addItem(genre);
    genre = new MusicGenre('system', 'Hip-Hop');
    musicGenreCollection.addItem(genre);
  }
  // Artistas dentro de la colección del sistema
  {
  // Calle 13
    let artist = new Artist('system', 'Residente', 7675337);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Visitante', 10203);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'ILe', 359876);
    artistCollection.addItem(artist);

    // Nirvana
    artist = new Artist('system', 'Kurt Cobain', 1023181);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Krist Novoselic', 36124);
    artistCollection.addItem(artist);

    // Imagine Dragons
    artist = new Artist('system', 'Dan Reynolds', 66679);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Daniel Wayne Sermon', 49514);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Ben McKee', 1352);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Daniel Platzman', 12909);
    artistCollection.addItem(artist);

    // Kiss
    artist = new Artist('system', 'Jene Simmons', 40051);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Paul Stanley', 143537);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Peter Criss', 45553);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Ace Frehley', 536081);
    artistCollection.addItem(artist);

    // Lady A
    artist = new Artist('system', 'Hillary Scott', 12466);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Charles Kelley', 80651);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Dave Haywood', 61);
    artistCollection.addItem(artist);

    // One Direction
    artist = new Artist('system', 'Harry Styles', 46490242);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Liam Payne', 6402885);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Zayn Malik', 20366071);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Niall Horan', 14948336);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Louis Tomlinson', 4019792);
    artistCollection.addItem(artist);

    // The Beatles
    artist = new Artist('system', 'John Lennon', 8692656);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Paul McCartney', 10487314);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'George Harrison', 6705654);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Ringo Starr', 1311265);
    artistCollection.addItem(artist);

    // Coldplay
    artist = new Artist('system', 'Chris Martin', 7449);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Jon Buckland', 7703);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Guy Berryman', 81675);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Will Champion', 15290);
    artistCollection.addItem(artist);

    // Single
    artist = new Artist('system', 'Avicci', 28923107);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Eminem', 52673522);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Melendi', 5291279);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Michael Jackson', 28631572);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Skrillex', 20151858);
    artistCollection.addItem(artist);
    artist = new Artist('system', 'Daddy Yankee', 43855958);
    artistCollection.addItem(artist);
  }
  // Grupos dentro de la colección del sistema
  {
    let group = new Group('system', 'Calle13',
        [artistCollection.getList()[0], artistCollection.getList()[1],
          artistCollection.getList()[2]], 2004, 6543532);
    groupCollection.addItem(group);

    group = new Group('system', 'Nirvana',
        [artistCollection.getList()[3], artistCollection.getList()[4]],
        1987, 27116094);
    groupCollection.addItem(group);

    group = new Group('system', 'Imagine Dragons',
        [artistCollection.getList()[5], artistCollection.getList()[6],
          artistCollection.getList()[7], artistCollection.getList()[8]],
        2008, 59087675);
    groupCollection.addItem(group);

    group = new Group('system', 'Kiss',
        [artistCollection.getList()[9], artistCollection.getList()[10],
          artistCollection.getList()[11], artistCollection.getList()[12]],
        1973, 10550312);
    groupCollection.addItem(group);

    group = new Group('system', 'Lady A',
        [artistCollection.getList()[13], artistCollection.getList()[13],
          artistCollection.getList()[15]], 2006, 7226404);
    groupCollection.addItem(group);

    group = new Group('system', 'One Direction',
        [artistCollection.getList()[16], artistCollection.getList()[17],
          artistCollection.getList()[18], artistCollection.getList()[19],
          artistCollection.getList()[20]], 2010, 28220667);
    groupCollection.addItem(group);

    group = new Group('system', 'The Beatles',
        [artistCollection.getList()[21], artistCollection.getList()[22],
          artistCollection.getList()[23], artistCollection.getList()[24]],
        1960, 25216593);
    groupCollection.addItem(group);

    group = new Group('system', 'Coldplay',
        [artistCollection.getList()[25], artistCollection.getList()[26],
          artistCollection.getList()[27], artistCollection.getList()[28]],
        1996, 58491304);
    groupCollection.addItem(group);
  }
  // Canciones dentro de la colección del sistema
  {
    // Calle 13: Entre los que quieran
    let song = new Song('system', 'Intro', groupCollection.getList()[0], 198,
        [musicGenreCollection.getList()[0], musicGenreCollection.getList()[1]],
        3371253);
    songCollection.addItem(song);
    song = new Song('system', 'Calma Pueblo', groupCollection.getList()[0], 249,
        [musicGenreCollection.getList()[2]], 13122729);
    songCollection.addItem(song);
    song = new Song('system', 'Baile de los pobres',
        groupCollection.getList()[0],
        207, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[3]], 43902205);
    songCollection.addItem(song);
    song = new Song('system', 'La vuelta al mundo',
        groupCollection.getList()[0],
        234, [musicGenreCollection.getList()[2]], 142270089);
    songCollection.addItem(song);
    song = new Song('system', 'La Bala', groupCollection.getList()[0], 267,
        [musicGenreCollection.getList()[2]], 26732946);
    songCollection.addItem(song);
    song = new Song('system', 'Vamo` a portarnos mal',
        groupCollection.getList()[0], 243, [musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[2]], 36276215);
    songCollection.addItem(song);
    song = new Song('system', 'Latinoamérica',
        groupCollection.getList()[0], 301,
        [musicGenreCollection.getList()[1], musicGenreCollection.getList()[2]],
        96555254);
    songCollection.addItem(song);
    song = new Song('system', 'Inter', groupCollection.getList()[0], 65,
        [musicGenreCollection.getList()[3]], 5072377);
    songCollection.addItem(song);
    song = new Song('system', 'Digo lo que pienso',
        groupCollection.getList()[0],
        297, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[2]], 13133387);
    songCollection.addItem(song);
    song = new Song('system', 'Muerte en Hawaii', groupCollection.getList()[0],
        189, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[2]], 209447924);
    songCollection.addItem(song);
    song = new Song('system', 'Todo se mueve', groupCollection.getList()[0],
        202, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1], musicGenreCollection.getList()[2]],
        7242362);
    songCollection.addItem(song);
    song = new Song('system', 'El hormiguero', groupCollection.getList()[0],
        305, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1]],
        7620000);
    songCollection.addItem(song);
    song = new Song('system', 'Prepárame la cena', groupCollection.getList()[0],
        319, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[2]], 9152801);
    songCollection.addItem(song);
    song = new Song('system', 'Outro', groupCollection.getList()[0],
        71, [musicGenreCollection.getList()[0]], 9152801);
    songCollection.addItem(song);

    // Residente: Residente
    song = new Song('system', 'Intro ADN/DNA', artistCollection.getList()[0],
        100, [musicGenreCollection.getList()[1]], 3288071);
    songCollection.addItem(song);
    song = new Song('system', 'Somos anormales', artistCollection.getList()[0],
        218, [musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[2]], 11818330);
    songCollection.addItem(song);
    song = new Song('system', 'Interludio entre monstañas siberianas',
        artistCollection.getList()[0],
        142, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1]], 2754703);
    songCollection.addItem(song);
    song = new Song('system', 'Una leyenda China',
        artistCollection.getList()[0],
        269, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1], musicGenreCollection.getList()[2]],
        5536860);
    songCollection.addItem(song);
    song = new Song('system', 'Interludio Haruna Fati',
        artistCollection.getList()[0], 40, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1]], 2527404);
    songCollection.addItem(song);
    song = new Song('system', 'Dagombas en Tamale',
        artistCollection.getList()[0], 235, [musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[2]], 8635211);
    songCollection.addItem(song);
    song = new Song('system', 'Desencuentro',
        artistCollection.getList()[0], 284, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[4]], 41214120);
    songCollection.addItem(song);
    song = new Song('system', 'Guerra',
        artistCollection.getList()[0], 334, [musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[2]], 17195603);
    songCollection.addItem(song);
    song = new Song('system', 'Apocalíptico',
        artistCollection.getList()[0], 372, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[4]], 10952807);
    songCollection.addItem(song);
    song = new Song('system', 'La Sombra',
        artistCollection.getList()[0], 244, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1]], 3911697);
    songCollection.addItem(song);
    song = new Song('system', 'Milo',
        artistCollection.getList()[0], 363, [musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[2]], 7524021);
    songCollection.addItem(song);
    song = new Song('system', 'El Futuro es Nuestro',
        artistCollection.getList()[0], 266, [musicGenreCollection.getList()[1]],
        5679567);
    songCollection.addItem(song);
    song = new Song('system', 'Hijos del Cañaveral',
        artistCollection.getList()[0], 322, [musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[1]], 10245373);
    songCollection.addItem(song);

    // Nirvana: Nevermind
    song = new Song('system', 'Smells like teen spirit',
        groupCollection.getList()[1], 301,
        [musicGenreCollection.getList()[5]], 1253428911);
    songCollection.addItem(song);
    song = new Song('system', 'In Bloom', groupCollection.getList()[1], 255,
        [musicGenreCollection.getList()[5]], 202563669);
    songCollection.addItem(song);
    song = new Song('system', 'Come as you are', groupCollection.getList()[1],
        218, [musicGenreCollection.getList()[5]], 759041416);
    songCollection.addItem(song);
    song = new Song('system', 'Breed', groupCollection.getList()[1],
        184, [musicGenreCollection.getList()[5]], 82096421);
    songCollection.addItem(song);
    song = new Song('system', 'Lithium', groupCollection.getList()[1],
        257, [musicGenreCollection.getList()[5]], 389709421);
    songCollection.addItem(song);
    song = new Song('system', 'Polly', groupCollection.getList()[1],
        173, [musicGenreCollection.getList()[5]], 87170744);
    songCollection.addItem(song);
    song = new Song('system', 'Territorial Pissing',
        groupCollection.getList()[1],
        142, [musicGenreCollection.getList()[5]], 58109145);
    songCollection.addItem(song);
    song = new Song('system', 'Drain you', groupCollection.getList()[1],
        223, [musicGenreCollection.getList()[5]], 96172882);
    songCollection.addItem(song);
    song = new Song('system', 'Lounge Act', groupCollection.getList()[1],
        156, [musicGenreCollection.getList()[5]], 59884274);
    songCollection.addItem(song);
    song = new Song('system', 'Stay Away', groupCollection.getList()[1],
        211, [musicGenreCollection.getList()[5]], 54864490);
    songCollection.addItem(song);
    song = new Song('system', 'On a plain', groupCollection.getList()[1],
        194, [musicGenreCollection.getList()[5]], 44364645);
    songCollection.addItem(song);
    song = new Song('system', 'Something in the way',
        groupCollection.getList()[1],
        232, [musicGenreCollection.getList()[5]], 165290191);
    songCollection.addItem(song);
    song = new Song('system', 'Endless, Nameless', groupCollection.getList()[1],
        403, [musicGenreCollection.getList()[5]], 22226560);
    songCollection.addItem(song);

    // Kurt Cobain: Montage of Heck
    song = new Song('system', 'The Yodel song', artistCollection.getList()[3],
        216, [musicGenreCollection.getList()[5]], 1287967);
    songCollection.addItem(song);
    song = new Song('system', 'Been a Song', artistCollection.getList()[3],
        80, [musicGenreCollection.getList()[5]], 2382880);
    songCollection.addItem(song);
    song = new Song('system', 'The happy guitar', artistCollection.getList()[3],
        132, [musicGenreCollection.getList()[5]], 1365348);
    songCollection.addItem(song);
    song = new Song('system', 'Clean up before she comes',
        artistCollection.getList()[3],
        154, [musicGenreCollection.getList()[5]], 734553);
    songCollection.addItem(song);
    song = new Song('system', 'Reverb Experiment',
        artistCollection.getList()[3],
        172, [musicGenreCollection.getList()[5]], 437788);
    songCollection.addItem(song);
    song = new Song('system', 'You cant`t change me',
        artistCollection.getList()[3],
        258, [musicGenreCollection.getList()[5]], 491869);
    songCollection.addItem(song);
    song = new Song('system', 'Scoff', artistCollection.getList()[3],
        37, [musicGenreCollection.getList()[5]], 354379);
    songCollection.addItem(song);
    song = new Song('system', 'Desire', artistCollection.getList()[3],
        147, [musicGenreCollection.getList()[5]], 571920);
    songCollection.addItem(song);
    song = new Song('system', 'And I love her', artistCollection.getList()[3],
        124, [musicGenreCollection.getList()[5]], 39997799);
    songCollection.addItem(song);
    song = new Song('system', 'Sappy', artistCollection.getList()[3],
        148, [musicGenreCollection.getList()[5]], 8380119);
    songCollection.addItem(song);
    song = new Song('system', 'Letter to Frances',
        artistCollection.getList()[3],
        124, [musicGenreCollection.getList()[5]], 1669078);
    songCollection.addItem(song);
    song = new Song('system', 'Frances farmer will have her revenge on Seatlle',
        artistCollection.getList()[3],
        263, [musicGenreCollection.getList()[5]], 901878);
    songCollection.addItem(song);
    song = new Song('system', 'She only lies', artistCollection.getList()[3],
        167, [musicGenreCollection.getList()[5]], 3833896);
    songCollection.addItem(song);

    // Imagine Dragons: Night Visions
    song = new Song('system', 'Radioactive', groupCollection.getList()[2],
        186, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 1317642296);
    songCollection.addItem(song);
    song = new Song('system', 'Tiptoe', groupCollection.getList()[2],
        194, [musicGenreCollection.getList()[6]], 120088828);
    songCollection.addItem(song);
    song = new Song('system', 'It`s time', groupCollection.getList()[2],
        240, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[6]], 519963927);
    songCollection.addItem(song);
    song = new Song('system', 'Demons', groupCollection.getList()[2],
        177, [musicGenreCollection.getList()[6],
          musicGenreCollection.getList()[7]], 1396795710);
    songCollection.addItem(song);
    song = new Song('system', 'On top of the World',
        groupCollection.getList()[2],
        192, [musicGenreCollection.getList()[4]], 633653476);
    songCollection.addItem(song);
    song = new Song('system', 'Amsterdan', groupCollection.getList()[2],
        241, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 97045455);
    songCollection.addItem(song);
    song = new Song('system', 'Hear me', groupCollection.getList()[2],
        235, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 51130564);
    songCollection.addItem(song);
    song = new Song('system', 'Every Night', groupCollection.getList()[2],
        217, [musicGenreCollection.getList()[6]], 51130564);
    songCollection.addItem(song);
    song = new Song('system', 'Bleeding out', groupCollection.getList()[2],
        223, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[7]], 199785974);
    songCollection.addItem(song);
    song = new Song('system', 'Underdog', groupCollection.getList()[2],
        209, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[6]], 44648530);
    songCollection.addItem(song);
    song = new Song('system', 'Nothing left to say',
        groupCollection.getList()[2],
        537, [musicGenreCollection.getList()[5]], 55087574);
    songCollection.addItem(song);
    song = new Song('system', 'Cha-Ching', groupCollection.getList()[2],
        249, [musicGenreCollection.getList()[6],
          musicGenreCollection.getList()[7]], 55828624);
    songCollection.addItem(song);
    song = new Song('system', 'Working Man', groupCollection.getList()[2],
        233, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[6]], 23048585);
    songCollection.addItem(song);
    song = new Song('system', 'Tokyo', groupCollection.getList()[2],
        233, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[7]], 12190729);
    songCollection.addItem(song);

    // Kiss: Love Gun
    song = new Song('system', 'I stole your love', groupCollection.getList()[3],
        180, [musicGenreCollection.getList()[8]], 5858530);
    songCollection.addItem(song);
    song = new Song('system', 'Christine sixteen', groupCollection.getList()[3],
        194, [musicGenreCollection.getList()[8]], 3759498);
    songCollection.addItem(song);
    song = new Song('system', 'Got love for sale', groupCollection.getList()[3],
        208, [musicGenreCollection.getList()[9]], 869311);
    songCollection.addItem(song);
    song = new Song('system', 'Shock Me', groupCollection.getList()[3],
        226, [musicGenreCollection.getList()[8]], 11150807);
    songCollection.addItem(song);
    song = new Song('system', 'Tomorrow and Tonight',
        groupCollection.getList()[3],
        218, [musicGenreCollection.getList()[8]], 1033253);
    songCollection.addItem(song);
    song = new Song('system', 'Love Gun', groupCollection.getList()[3],
        198, [musicGenreCollection.getList()[9]], 45801026);
    songCollection.addItem(song);
    song = new Song('system', 'Holligan', groupCollection.getList()[3],
        179, [musicGenreCollection.getList()[8]], 1054181);
    songCollection.addItem(song);
    song = new Song('system', 'Almost Human', groupCollection.getList()[3],
        167, [musicGenreCollection.getList()[9]], 1053783);
    songCollection.addItem(song);
    song = new Song('system', 'Plaster Caster', groupCollection.getList()[3],
        208, [musicGenreCollection.getList()[8]], 3029606);
    songCollection.addItem(song);
    song = new Song('system', 'Then she kissed me',
        groupCollection.getList()[3],
        182, [musicGenreCollection.getList()[9]], 1291050);
    songCollection.addItem(song);

    // Lady A: Ocean
    song = new Song('system', 'What if I never get over you',
        groupCollection.getList()[4], 206, [musicGenreCollection.getList()[11]],
        101678826);
    songCollection.addItem(song);
    song = new Song('system', 'Pictures', groupCollection.getList()[4],
        178, [musicGenreCollection.getList()[10]], 5727156);
    songCollection.addItem(song);
    song = new Song('system', 'Crazy Love', groupCollection.getList()[4],
        205, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[11]], 2615478);
    songCollection.addItem(song);
    song = new Song('system', 'You can do you', groupCollection.getList()[4],
        248, [musicGenreCollection.getList()[10]], 1151075);
    songCollection.addItem(song);
    song = new Song('system', 'What I`m leaving for',
        groupCollection.getList()[4],
        203, [musicGenreCollection.getList()[10]], 5044290);
    songCollection.addItem(song);
    song = new Song('system', 'Be patient with my love',
        groupCollection.getList()[4],
        306, [musicGenreCollection.getList()[11]], 3078149);
    songCollection.addItem(song);
    song = new Song('system', 'Alright', groupCollection.getList()[4],
        196, [musicGenreCollection.getList()[4]], 1354923);
    songCollection.addItem(song);
    song = new Song('system', 'Let it be love', groupCollection.getList()[4],
        218, [musicGenreCollection.getList()[10],
          musicGenreCollection.getList()[11]], 1970636);
    songCollection.addItem(song);
    song = new Song('system', 'On a night like this',
        groupCollection.getList()[4],
        203, [musicGenreCollection.getList()[4]], 1636559);
    songCollection.addItem(song);
    song = new Song('system', 'Boots',
        groupCollection.getList()[4],
        275, [musicGenreCollection.getList()[10],
          musicGenreCollection.getList()[11]], 3488799);
    songCollection.addItem(song);
    song = new Song('system', 'The thing that wreeks you',
        groupCollection.getList()[4],
        275, [musicGenreCollection.getList()[10]], 1467732);
    songCollection.addItem(song);
    song = new Song('system', 'Mansion',
        groupCollection.getList()[4],
        192, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[11]], 1200675);
    songCollection.addItem(song);
    song = new Song('system', 'Ocean',
        groupCollection.getList()[4],
        210, [musicGenreCollection.getList()[10]], 47686228);
    songCollection.addItem(song);

    // One Direction: Up all night
    song = new Song('system', 'What makes you beutiful',
        groupCollection.getList()[5],
        199, [musicGenreCollection.getList()[4]], 675098541);
    songCollection.addItem(song);
    song = new Song('system', 'Gotta be you', groupCollection.getList()[5],
        240, [musicGenreCollection.getList()[4]], 90723091);
    songCollection.addItem(song);
    song = new Song('system', 'One thing', groupCollection.getList()[5],
        197, [musicGenreCollection.getList()[4]], 230441115);
    songCollection.addItem(song);
    song = new Song('system', 'Mora than this', groupCollection.getList()[5],
        229, [musicGenreCollection.getList()[4]], 125239630);
    songCollection.addItem(song);
    song = new Song('system', 'Up all night', groupCollection.getList()[5],
        194, [musicGenreCollection.getList()[4]], 94225626);
    songCollection.addItem(song);
    song = new Song('system', 'I wish', groupCollection.getList()[5],
        216, [musicGenreCollection.getList()[4]], 68933970);
    songCollection.addItem(song);
    song = new Song('system', 'Tell me a lie', groupCollection.getList()[5],
        198, [musicGenreCollection.getList()[4]], 47851684);
    songCollection.addItem(song);
    song = new Song('system', 'Taken', groupCollection.getList()[5],
        237, [musicGenreCollection.getList()[4]], 67548244);
    songCollection.addItem(song);
    song = new Song('system', 'I want', groupCollection.getList()[5],
        173, [musicGenreCollection.getList()[4]], 59629020);
    songCollection.addItem(song);
    song = new Song('system', 'Everything about you',
        groupCollection.getList()[5],
        217, [musicGenreCollection.getList()[4]], 42726360);
    songCollection.addItem(song);
    song = new Song('system', 'Same Mistakes', groupCollection.getList()[5],
        218, [musicGenreCollection.getList()[4]], 52084588);
    songCollection.addItem(song);
    song = new Song('system', 'Save you tonight', groupCollection.getList()[5],
        205, [musicGenreCollection.getList()[4]], 39771367);
    songCollection.addItem(song);
    song = new Song('system', 'Stole my hearth', groupCollection.getList()[5],
        205, [musicGenreCollection.getList()[4]], 46179908);
    songCollection.addItem(song);
    song = new Song('system', 'Stand Up', groupCollection.getList()[5],
        175, [musicGenreCollection.getList()[4]], 48647134);
    songCollection.addItem(song);
    song = new Song('system', 'Moments', groupCollection.getList()[5],
        262, [musicGenreCollection.getList()[4]], 77491031);
    songCollection.addItem(song);
    song = new Song('system', 'Another World', groupCollection.getList()[5],
        203, [musicGenreCollection.getList()[4]], 24305196);
    songCollection.addItem(song);
    song = new Song('system', 'Na Na Na', groupCollection.getList()[5],
        185, [musicGenreCollection.getList()[4]], 41504717);
    songCollection.addItem(song);
    song = new Song('system', 'I should have kissed you',
        groupCollection.getList()[5],
        215, [musicGenreCollection.getList()[4]], 35900352);
    songCollection.addItem(song);

    // Harry Styles: Fine Line
    song = new Song('system', 'Golden', artistCollection.getList()[16],
        208, [musicGenreCollection.getList()[12]], 554551715);
    songCollection.addItem(song);
    song = new Song('system', 'Watermelon Sugar',
        artistCollection.getList()[16],
        174, [musicGenreCollection.getList()[4]], 1694942359);
    songCollection.addItem(song);
    song = new Song('system', 'Adore you', artistCollection.getList()[16],
        207, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[12]], 1073694332);
    songCollection.addItem(song);
    song = new Song('system', 'Lights Up', artistCollection.getList()[16],
        172, [musicGenreCollection.getList()[4]], 535870737);
    songCollection.addItem(song);
    song = new Song('system', 'Cherry', artistCollection.getList()[16],
        259, [musicGenreCollection.getList()[10]], 214415394);
    songCollection.addItem(song);
    song = new Song('system', 'Falling', artistCollection.getList()[16],
        240, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[10]], 712059101);
    songCollection.addItem(song);
    song = new Song('system', 'To be so lonely', artistCollection.getList()[16],
        192, [musicGenreCollection.getList()[12]], 164488544);
    songCollection.addItem(song);
    song = new Song('system', 'She', artistCollection.getList()[16],
        360, [musicGenreCollection.getList()[10],
          musicGenreCollection.getList()[12]], 213429664);
    songCollection.addItem(song);
    song = new Song('system', 'Sunflower', artistCollection.getList()[16],
        221, [musicGenreCollection.getList()[4]], 213429664);
    songCollection.addItem(song);
    song = new Song('system', 'Canyon Moon', artistCollection.getList()[16],
        189, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[12]], 126801063);
    songCollection.addItem(song);
    song = new Song('system', 'Treat People', artistCollection.getList()[16],
        197, [musicGenreCollection.getList()[4]], 116555816);
    songCollection.addItem(song);
    song = new Song('system', 'Fine Line', artistCollection.getList()[16],
        377, [musicGenreCollection.getList()[10]], 222423367);
    songCollection.addItem(song);

    // Liam Payne: Midnight Hour
    song = new Song('system', 'Midnight', artistCollection.getList()[17],
        257, [musicGenreCollection.getList()[13]], 574879);
    songCollection.addItem(song);
    song = new Song('system', 'Y wanna know', artistCollection.getList()[17],
        240, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[13]], 131300871);
    songCollection.addItem(song);
    song = new Song('system', 'Live Forever', artistCollection.getList()[17],
        174, [musicGenreCollection.getList()[4]], 48375820);
    songCollection.addItem(song);
    song = new Song('system', 'Let me go', artistCollection.getList()[17],
        174, [musicGenreCollection.getList()[13]], 912997592);
    songCollection.addItem(song);
    song = new Song('system', 'For You', artistCollection.getList()[17],
        244, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[13]], 378706274);
    songCollection.addItem(song);
    song = new Song('system', 'Midnight', artistCollection.getList()[17],
        190, [musicGenreCollection.getList()[13]], 293464395);
    songCollection.addItem(song);

    // Zayn Malik
    song = new Song('system', 'Calamity', artistCollection.getList()[18],
        187, [musicGenreCollection.getList()[2]], 12691860);
    songCollection.addItem(song);
    song = new Song('system', 'Better', artistCollection.getList()[18],
        174, [musicGenreCollection.getList()[4]], 124335939);
    songCollection.addItem(song);
    song = new Song('system', 'Outside', artistCollection.getList()[18],
        208, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[13]], 17855096);
    songCollection.addItem(song);
    song = new Song('system', 'Vibez', artistCollection.getList()[18],
        163, [musicGenreCollection.getList()[13]], 108741241);
    songCollection.addItem(song);
    song = new Song('system', 'When Love`s Around',
        artistCollection.getList()[18],
        191, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[13]], 13195161);
    songCollection.addItem(song);
    song = new Song('system', 'Conexion', artistCollection.getList()[18],
        196, [musicGenreCollection.getList()[4]], 15586075);
    songCollection.addItem(song);
    song = new Song('system', 'Sweat', artistCollection.getList()[18],
        232, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[13]], 31232124);
    songCollection.addItem(song);
    song = new Song('system', 'Unfuckwitable', artistCollection.getList()[18],
        164, [musicGenreCollection.getList()[4]], 11821436);
    songCollection.addItem(song);
    song = new Song('system', 'Windowsill', artistCollection.getList()[18],
        188, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[13]], 12016757);
    songCollection.addItem(song);
    song = new Song('system', 'Tightrope', artistCollection.getList()[18],
        204, [musicGenreCollection.getList()[4]], 27437561);
    songCollection.addItem(song);
    song = new Song('system', 'River Road', artistCollection.getList()[18],
        236, [musicGenreCollection.getList()[4]], 12459507);
    songCollection.addItem(song);

    // The Beatles: Abbey Road
    song = new Song('system', 'Come Together', groupCollection.getList()[6],
        259, [musicGenreCollection.getList()[5]], 500996275);
    songCollection.addItem(song);
    song = new Song('system', 'Something', groupCollection.getList()[6],
        182, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 197809861);
    songCollection.addItem(song);
    song = new Song('system', 'Maxwell`s silver hammer',
        groupCollection.getList()[6],
        207, [musicGenreCollection.getList()[5]], 38467987);
    songCollection.addItem(song);
    song = new Song('system', 'Oh! Darling', groupCollection.getList()[6],
        207, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 98672656);
    songCollection.addItem(song);
    song = new Song('system', 'Octopus`s garden', groupCollection.getList()[6],
        170, [musicGenreCollection.getList()[5]], 57630717);
    songCollection.addItem(song);
    song = new Song('system', 'I want you', groupCollection.getList()[6],
        467, [musicGenreCollection.getList()[9],
          musicGenreCollection.getList()[14]], 53182937);
    songCollection.addItem(song);
    song = new Song('system', 'Here cames the sun',
        groupCollection.getList()[6],
        185, [musicGenreCollection.getList()[5]], 798246500);
    songCollection.addItem(song);
    song = new Song('system', 'Because', groupCollection.getList()[6],
        165, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 40706466);
    songCollection.addItem(song);
    song = new Song('system', 'You never give me your money',
        groupCollection.getList()[6],
        242, [musicGenreCollection.getList()[5]], 36968096);
    songCollection.addItem(song);
    song = new Song('system', 'Sun King', groupCollection.getList()[6],
        146, [musicGenreCollection.getList()[5]], 28450293);
    songCollection.addItem(song);
    song = new Song('system', 'Mean Mr Mustard', groupCollection.getList()[6],
        66, [musicGenreCollection.getList()[5]], 24228069);
    songCollection.addItem(song);
    song = new Song('system', 'Plythene Pam', groupCollection.getList()[6],
        72, [musicGenreCollection.getList()[9],
          musicGenreCollection.getList()[11]], 197809861);
    songCollection.addItem(song);
    song = new Song('system', 'She came in throught the bathroom window',
        groupCollection.getList()[6],
        118, [musicGenreCollection.getList()[9],
          musicGenreCollection.getList()[14]], 31718242);
    songCollection.addItem(song);
    song = new Song('system', 'Golden Slumbers', groupCollection.getList()[6],
        118, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 68699065);
    songCollection.addItem(song);
    song = new Song('system', 'Carry the weight', groupCollection.getList()[6],
        96, [musicGenreCollection.getList()[9]], 46401855);
    songCollection.addItem(song);
    song = new Song('system', 'The End', groupCollection.getList()[6],
        141, [musicGenreCollection.getList()[9]], 30801570);
    songCollection.addItem(song);
    song = new Song('system', 'Her Majestry', groupCollection.getList()[6],
        25, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 210795);
    songCollection.addItem(song);
    // John Lennon: Imagine
    song = new Song('system', 'Imagine', artistCollection.getList()[21],
        187, [musicGenreCollection.getList()[5]], 438913507);
    songCollection.addItem(song);
    song = new Song('system', 'Crippled Inside', artistCollection.getList()[21],
        232, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 8086737);
    songCollection.addItem(song);
    song = new Song('system', 'Jealous Guy', artistCollection.getList()[21],
        257, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 91475924);
    songCollection.addItem(song);
    song = new Song('system', 'It`s so hard', artistCollection.getList()[21],
        149, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 4331360);
    songCollection.addItem(song);
    song = new Song('system', 'I don`t wanna be a soldier mama',
        artistCollection.getList()[21],
        368, [musicGenreCollection.getList()[5]], 4187994);
    songCollection.addItem(song);
    song = new Song('system', 'Gimme some truth',
        artistCollection.getList()[21],
        197, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 11105229);
    songCollection.addItem(song);
    song = new Song('system', 'Oh my love', artistCollection.getList()[21],
        168, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 14836288);
    songCollection.addItem(song);
    song = new Song('system', 'How do you sleep',
        artistCollection.getList()[21],
        339, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 8098121);
    songCollection.addItem(song);
    song = new Song('system', 'How?', artistCollection.getList()[21],
        226, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 5646833);
    songCollection.addItem(song);
    song = new Song('system', 'Oh Yoko!', artistCollection.getList()[21],
        140, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 17496624);
    songCollection.addItem(song);

    // Paul McCartney: Ram
    song = new Song('system', 'Too many people', artistCollection.getList()[22],
        250, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 6863960);
    songCollection.addItem(song);
    song = new Song('system', '3 legs', artistCollection.getList()[22],
        167, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 2714543);
    songCollection.addItem(song);
    song = new Song('system', 'Ram On', artistCollection.getList()[22],
        149, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 8637460);
    songCollection.addItem(song);
    song = new Song('system', 'Uncle Albert', artistCollection.getList()[22],
        295, [musicGenreCollection.getList()[4]], 22941555);
    songCollection.addItem(song);
    song = new Song('system', 'Smile Away', artistCollection.getList()[22],
        232, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[5]], 2736337);
    songCollection.addItem(song);
    song = new Song('system', 'Hearth of the country',
        artistCollection.getList()[22],
        143, [musicGenreCollection.getList()[11],
          musicGenreCollection.getList()[14]], 9635537);
    songCollection.addItem(song);
    song = new Song('system', 'Monkberry moon delight',
        artistCollection.getList()[22],
        324, [musicGenreCollection.getList()[5]], 7117266);
    songCollection.addItem(song);
    song = new Song('system', 'Eat at home', artistCollection.getList()[22],
        202, [musicGenreCollection.getList()[5]], 2376957);
    songCollection.addItem(song);
    song = new Song('system', 'Loney haired lady',
        artistCollection.getList()[22],
        365, [musicGenreCollection.getList()[6],
          musicGenreCollection.getList()[10]], 2676222);
    songCollection.addItem(song);
    song = new Song('system', 'The back seat of my car',
        artistCollection.getList()[22],
        270, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[14]], 3383090);
    songCollection.addItem(song);

    // Coldplay: Parachutes
    song = new Song('system', 'Don`t Panic', groupCollection.getList()[7],
        136, [musicGenreCollection.getList()[6]], 112382468);
    songCollection.addItem(song);
    song = new Song('system', 'Shiver', groupCollection.getList()[7],
        304, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 116223914);
    songCollection.addItem(song);
    song = new Song('system', 'Spies', groupCollection.getList()[7],
        318, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[7]], 41078826);
    songCollection.addItem(song);
    song = new Song('system', 'Sparks', groupCollection.getList()[7],
        227, [musicGenreCollection.getList()[7]], 254177620);
    songCollection.addItem(song);
    song = new Song('system', 'Yellow', groupCollection.getList()[7],
        266, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 1128578545);
    songCollection.addItem(song);
    song = new Song('system', 'Trouble', groupCollection.getList()[7],
        273, [musicGenreCollection.getList()[7]], 238281703);
    songCollection.addItem(song);
    song = new Song('system', 'Parachutes', groupCollection.getList()[7],
        46, [musicGenreCollection.getList()[7]], 42228543);
    songCollection.addItem(song);
    song = new Song('system', 'High Speed', groupCollection.getList()[7],
        256, [musicGenreCollection.getList()[6]], 62863840);
    songCollection.addItem(song);
    song = new Song('system', 'We never change', groupCollection.getList()[7],
        249, [musicGenreCollection.getList()[6]], 52865794);
    songCollection.addItem(song);
    song = new Song('system', 'Everything`s not lost',
        groupCollection.getList()[7],
        436, [musicGenreCollection.getList()[5],
          musicGenreCollection.getList()[6]], 33973788);
    songCollection.addItem(song);

    // Avicii: True
    song = new Song('system', 'Wake me up', artistCollection.getList()[29],
        247, [musicGenreCollection.getList()[13],
          musicGenreCollection.getList()[15]], 1545638734);
    songCollection.addItem(song);
    song = new Song('system', 'You make me', artistCollection.getList()[29],
        233, [musicGenreCollection.getList()[13],
          musicGenreCollection.getList()[15]], 255997677);
    songCollection.addItem(song);
    song = new Song('system', 'Hey Brother', artistCollection.getList()[29],
        255, [musicGenreCollection.getList()[13],
          musicGenreCollection.getList()[15]], 739019409);
    songCollection.addItem(song);
    song = new Song('system', 'Addicted to you', artistCollection.getList()[29],
        148, [musicGenreCollection.getList()[13],
          musicGenreCollection.getList()[15]], 272688892);
    songCollection.addItem(song);
    song = new Song('system', 'Dear Boy', artistCollection.getList()[29],
        479, [musicGenreCollection.getList()[13]], 64345803);
    songCollection.addItem(song);
    song = new Song('system', 'Liar Liar', artistCollection.getList()[29],
        238, [musicGenreCollection.getList()[13],
          musicGenreCollection.getList()[15]], 48008532);
    songCollection.addItem(song);
    song = new Song('system', 'Shame on me', artistCollection.getList()[29],
        253, [musicGenreCollection.getList()[13]], 26075);
    songCollection.addItem(song);
    song = new Song('system', 'Lay me down', artistCollection.getList()[29],
        300, [musicGenreCollection.getList()[13]], 43920245);
    songCollection.addItem(song);
    song = new Song('system', 'Hope there`s someone',
        artistCollection.getList()[29],
        381, [musicGenreCollection.getList()[13],
          musicGenreCollection.getList()[15]], 18315426);
    songCollection.addItem(song);
    song = new Song('system', 'Heart upon my sleeve',
        artistCollection.getList()[29],
        283, [musicGenreCollection.getList()[13]], 24035616);
    songCollection.addItem(song);

    // Eminem: The marshall mathers LP2
    song = new Song('system', 'Bad Guy', artistCollection.getList()[30],
        434, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[17]], 97923199);
    songCollection.addItem(song);
    song = new Song('system', 'Parking Lot', artistCollection.getList()[30],
        55, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[17]], 25918050);
    songCollection.addItem(song);
    song = new Song('system', 'Rhyme of reason', artistCollection.getList()[30],
        301, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[17]], 55467690);
    songCollection.addItem(song);
    song = new Song('system', 'So much better', artistCollection.getList()[30],
        261, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[17]], 50784292);
    songCollection.addItem(song);
    song = new Song('system', 'Survival', artistCollection.getList()[30],
        272, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[17]], 214651935);
    songCollection.addItem(song);
    song = new Song('system', 'Legacy', artistCollection.getList()[30],
        296, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[17]], 126771801);
    songCollection.addItem(song);
    song = new Song('system', 'Asshole', artistCollection.getList()[30],
        288, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[17]], 51790205);
    songCollection.addItem(song);
    song = new Song('system', 'Berzerk', artistCollection.getList()[30],
        238, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[17]], 251906414);
    songCollection.addItem(song);
    song = new Song('system', 'Rap God', artistCollection.getList()[30],
        363, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[17]], 822016140);
    songCollection.addItem(song);
    song = new Song('system', 'Brainless', artistCollection.getList()[30],
        286, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[17]], 46613413);
    songCollection.addItem(song);
    song = new Song('system', 'Stronger than I was',
        artistCollection.getList()[30],
        336, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[17]], 56536523);
    songCollection.addItem(song);
    song = new Song('system', 'The Monster', artistCollection.getList()[30],
        250, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[17]], 720540047);
    songCollection.addItem(song);
    song = new Song('system', 'So Far...', artistCollection.getList()[30],
        317, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[17]], 47300740);
    songCollection.addItem(song);
    song = new Song('system', 'Love Game', artistCollection.getList()[30],
        296, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[17]], 60994346);
    songCollection.addItem(song);
    song = new Song('system', 'Headlights', artistCollection.getList()[30],
        343, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[17]], 129092152);
    songCollection.addItem(song);
    song = new Song('system', 'Evil Twin', artistCollection.getList()[30],
        356, [musicGenreCollection.getList()[2],
          musicGenreCollection.getList()[17]], 26757945);
    songCollection.addItem(song);

    // Melendi: Un alumno más
    song = new Song('system', 'La promesa', artistCollection.getList()[31],
        233, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[5]], 83676437);
    songCollection.addItem(song);
    song = new Song('system', 'Tocado y hundido',
        artistCollection.getList()[31],
        211, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[5]], 59231642);
    songCollection.addItem(song);
    song = new Song('system', 'La religión de los idiotas',
        artistCollection.getList()[31],
        208, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[5]], 18765869);
    songCollection.addItem(song);
    song = new Song('system', 'Saraluna', artistCollection.getList()[31],
        432, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[5]], 10880610);
    songCollection.addItem(song);
    song = new Song('system', 'Cenizas de la eternidad',
        artistCollection.getList()[31],
        296, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[5]], 10734574);
    songCollection.addItem(song);
    song = new Song('system', 'El amor es un arte',
        artistCollection.getList()[31],
        265, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[5]], 18460719);
    songCollection.addItem(song);
    song = new Song('system', 'Septiembre', artistCollection.getList()[31],
        246, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[5]], 14582086);
    songCollection.addItem(song);
    song = new Song('system', 'Colgado de la vecina',
        artistCollection.getList()[31],
        218, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[5]], 10410559);
    songCollection.addItem(song);
    song = new Song('system', 'Tú de Elvis y yo de Marilyn',
        artistCollection.getList()[31],
        224, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[5]], 6293233);
    songCollection.addItem(song);
    song = new Song('system', 'Posdata', artistCollection.getList()[31],
        276, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[5]], 19760635);
    songCollection.addItem(song);
    song = new Song('system', 'El gordo y el narco',
        artistCollection.getList()[31],
        205, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[5]], 4930715);
    songCollection.addItem(song);

    // Michael Jackson: Thriller
    song = new Song('system', 'Wanna Be Startin` Somethin`',
        artistCollection.getList()[32],
        303, [musicGenreCollection.getList()[13]], 125542268);
    songCollection.addItem(song);
    song = new Song('system', 'Baby be mine', artistCollection.getList()[32],
        260, [musicGenreCollection.getList()[13]], 36552767);
    songCollection.addItem(song);
    song = new Song('system', 'The girl is mine',
        artistCollection.getList()[32],
        224, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[13]], 77750323);
    songCollection.addItem(song);
    song = new Song('system', 'Thriller', artistCollection.getList()[32],
        297, [musicGenreCollection.getList()[13]], 388589029);
    songCollection.addItem(song);
    song = new Song('system', 'Beat me', artistCollection.getList()[32],
        258, [musicGenreCollection.getList()[9],
          musicGenreCollection.getList()[13]], 679687887);
    songCollection.addItem(song);
    song = new Song('system', 'Billie Jean', artistCollection.getList()[32],
        294, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[13]], 1091933963);
    songCollection.addItem(song);
    song = new Song('system', 'Human Nature', artistCollection.getList()[32],
        242, [musicGenreCollection.getList()[4]], 122229562);
    songCollection.addItem(song);
    song = new Song('system', 'PYT', artistCollection.getList()[32],
        239, [musicGenreCollection.getList()[4],
          musicGenreCollection.getList()[13]], 274494258);
    songCollection.addItem(song);
    song = new Song('system', 'The lady of my life',
        artistCollection.getList()[32],
        300, [musicGenreCollection.getList()[13],
          musicGenreCollection.getList()[14]], 37852017);
    songCollection.addItem(song);

    // Skrillex: Recess
    song = new Song('system', 'All is far in love and brostep',
        artistCollection.getList()[33],
        249, [musicGenreCollection.getList()[13],
          musicGenreCollection.getList()[15],
          musicGenreCollection.getList()[16]], 35186244);
    songCollection.addItem(song);
    song = new Song('system', 'Recess', artistCollection.getList()[33],
        237, [musicGenreCollection.getList()[13],
          musicGenreCollection.getList()[16]], 107700469);
    songCollection.addItem(song);
    song = new Song('system', 'Stranger', artistCollection.getList()[33],
        289, [musicGenreCollection.getList()[13],
          musicGenreCollection.getList()[16],
          musicGenreCollection.getList()[17]], 25689827);
    songCollection.addItem(song);
    song = new Song('system', 'Try it out', artistCollection.getList()[33],
        229, [musicGenreCollection.getList()[13],
          musicGenreCollection.getList()[15]], 49789644);
    songCollection.addItem(song);
    song = new Song('system', 'Coast is clear', artistCollection.getList()[33],
        243, [musicGenreCollection.getList()[13],
          musicGenreCollection.getList()[15]], 16848931);
    songCollection.addItem(song);
    song = new Song('system', 'Dirty Vibe', artistCollection.getList()[33],
        206, [musicGenreCollection.getList()[13],
          musicGenreCollection.getList()[15]], 33312153);
    songCollection.addItem(song);
    song = new Song('system', 'Ragga Bomb', artistCollection.getList()[33],
        258, [musicGenreCollection.getList()[13],
          musicGenreCollection.getList()[16]], 44239405);
    songCollection.addItem(song);
    song = new Song('system', 'Doompy Poomp', artistCollection.getList()[33],
        205, [musicGenreCollection.getList()[13]], 10617562);
    songCollection.addItem(song);
    song = new Song('system', 'Fuck That', artistCollection.getList()[33],
        232, [musicGenreCollection.getList()[13],
          musicGenreCollection.getList()[16]], 16058513);
    songCollection.addItem(song);
    song = new Song('system', 'Erase my mind', artistCollection.getList()[33],
        302, [musicGenreCollection.getList()[13],
          musicGenreCollection.getList()[15],
          musicGenreCollection.getList()[16]], 36659823);
    songCollection.addItem(song);
    song = new Song('system', 'Fire Away', artistCollection.getList()[33],
        341, [musicGenreCollection.getList()[13],
          musicGenreCollection.getList()[15]], 13648545);
    songCollection.addItem(song);

    // Daddy Yankee: Barrio Fino
    song = new Song('system', 'King Daddy', artistCollection.getList()[34],
        151, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[3],
          musicGenreCollection.getList()[17]], 16798103);
    songCollection.addItem(song);
    song = new Song('system', 'Dale Caliente', artistCollection.getList()[34],
        195, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[17]], 24709331);
    songCollection.addItem(song);
    song = new Song('system', 'No me dejes solo',
        artistCollection.getList()[34],
        170, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[3],
          musicGenreCollection.getList()[17]], 53158362);
    songCollection.addItem(song);
    song = new Song('system', 'Gasolina', artistCollection.getList()[34],
        192, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[3],
          musicGenreCollection.getList()[17]], 402472777);
    songCollection.addItem(song);
    song = new Song('system', 'Like You', artistCollection.getList()[34],
        202, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[17]], 6865969);
    songCollection.addItem(song);
    song = new Song('system', 'El Muro', artistCollection.getList()[34],
        179, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[17]], 2271);
    songCollection.addItem(song);
    song = new Song('system', 'Lo que pasó, pasó',
        artistCollection.getList()[34],
        210, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[3],
          musicGenreCollection.getList()[17]], 228783138);
    songCollection.addItem(song);
    song = new Song('system', 'Tu Príncipe', artistCollection.getList()[34],
        205, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[3]], 138810880);
    songCollection.addItem(song);
    song = new Song('system', 'Cuéntame', artistCollection.getList()[34],
        155, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1]], 5672636);
    songCollection.addItem(song);
    song = new Song('system', 'Santifica tus escapularios',
        artistCollection.getList()[34],
        199, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[17]], 7633714);
    songCollection.addItem(song);
    song = new Song('system', 'Sabor a Melao', artistCollection.getList()[34],
        223, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[3]], 6947855);
    songCollection.addItem(song);
    song = new Song('system', 'El Empuje', artistCollection.getList()[34],
        203, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[3]], 1669268);
    songCollection.addItem(song);
    song = new Song('system', 'Qué vas a hacer?',
        artistCollection.getList()[34],
        199, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[3]], 2275266);
    songCollection.addItem(song);
    song = new Song('system', 'Salud y vida', artistCollection.getList()[34],
        206, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1]], 24126219);
    songCollection.addItem(song);
    song = new Song('system', 'Intermedio "Gavilán"',
        artistCollection.getList()[34],
        72, [musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[17]], 997193);
    songCollection.addItem(song);
    song = new Song('system', 'Corazones', artistCollection.getList()[34],
        209, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[17]], 3934226);
    songCollection.addItem(song);
    song = new Song('system', 'Golpe de Estado', artistCollection.getList()[34],
        186, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[3]], 1619176);
    songCollection.addItem(song);
    song = new Song('system', '2 Mujeres', artistCollection.getList()[34],
        189, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1],
          musicGenreCollection.getList()[3]], 4044615);
    songCollection.addItem(song);
    song = new Song('system', 'Saber tu nombre', artistCollection.getList()[34],
        218, [musicGenreCollection.getList()[0],
          musicGenreCollection.getList()[1]], 1260147);
    songCollection.addItem(song);
  }
  // Álbumes dentro de la colección del sistema
  {
    // Calle 13
    let album = new Album('system', 'Entre los que quieran',
        groupCollection.getList()[0], 2010,
        [songCollection.getList()[0], songCollection.getList()[1],
          songCollection.getList()[2], songCollection.getList()[3],
          songCollection.getList()[4], songCollection.getList()[5],
          songCollection.getList()[6], songCollection.getList()[7],
          songCollection.getList()[8], songCollection.getList()[9],
          songCollection.getList()[10], songCollection.getList()[11],
          songCollection.getList()[12], songCollection.getList()[13]]);
    albumCollection.addItem(album);
    // René Pérez Joglar
    album = new Album('system', 'Residente',
        artistCollection.getList()[0], 2017,
        [songCollection.getList()[14], songCollection.getList()[15],
          songCollection.getList()[16], songCollection.getList()[17],
          songCollection.getList()[18], songCollection.getList()[19],
          songCollection.getList()[20], songCollection.getList()[21],
          songCollection.getList()[22], songCollection.getList()[23],
          songCollection.getList()[24], songCollection.getList()[25],
          songCollection.getList()[26]]);
    albumCollection.addItem(album);

    // Nirvana
    album = new Album('system', 'Nevermind',
        groupCollection.getList()[1], 1991,
        [songCollection.getList()[27], songCollection.getList()[28],
          songCollection.getList()[29], songCollection.getList()[30],
          songCollection.getList()[31], songCollection.getList()[32],
          songCollection.getList()[33], songCollection.getList()[34],
          songCollection.getList()[35], songCollection.getList()[36],
          songCollection.getList()[37], songCollection.getList()[38],
          songCollection.getList()[39]]);
    albumCollection.addItem(album);
    // Kurt Cobain
    album = new Album('system', 'Montage of Heck',
        artistCollection.getList()[3], 2015,
        [songCollection.getList()[40], songCollection.getList()[41],
          songCollection.getList()[42], songCollection.getList()[43],
          songCollection.getList()[44], songCollection.getList()[45],
          songCollection.getList()[46], songCollection.getList()[47],
          songCollection.getList()[48], songCollection.getList()[49],
          songCollection.getList()[50], songCollection.getList()[51],
          songCollection.getList()[52]]);
    albumCollection.addItem(album);

    // Imagine Dragons
    album = new Album('system', 'Night Visions',
        groupCollection.getList()[2], 2012,
        [songCollection.getList()[53], songCollection.getList()[54],
          songCollection.getList()[55], songCollection.getList()[56],
          songCollection.getList()[57], songCollection.getList()[58],
          songCollection.getList()[59], songCollection.getList()[60],
          songCollection.getList()[61], songCollection.getList()[62],
          songCollection.getList()[63], songCollection.getList()[64],
          songCollection.getList()[65], songCollection.getList()[66]]);
    albumCollection.addItem(album);

    // Kiss
    album = new Album('system', 'Love Gun',
        groupCollection.getList()[3], 1977,
        [songCollection.getList()[67], songCollection.getList()[68],
          songCollection.getList()[69], songCollection.getList()[70],
          songCollection.getList()[71], songCollection.getList()[72],
          songCollection.getList()[73], songCollection.getList()[74],
          songCollection.getList()[75], songCollection.getList()[76]]);
    albumCollection.addItem(album);

    // Lady A
    album = new Album('system', 'Ocean',
        groupCollection.getList()[4], 2019,
        [songCollection.getList()[77], songCollection.getList()[78],
          songCollection.getList()[79], songCollection.getList()[80],
          songCollection.getList()[81], songCollection.getList()[82],
          songCollection.getList()[83], songCollection.getList()[84],
          songCollection.getList()[85], songCollection.getList()[86],
          songCollection.getList()[87], songCollection.getList()[88],
          songCollection.getList()[89]]);
    albumCollection.addItem(album);

    // One Direction
    album = new Album('system', 'Up all night',
        groupCollection.getList()[5], 2011,
        [songCollection.getList()[90], songCollection.getList()[91],
          songCollection.getList()[92], songCollection.getList()[93],
          songCollection.getList()[94], songCollection.getList()[95],
          songCollection.getList()[96], songCollection.getList()[97],
          songCollection.getList()[98], songCollection.getList()[99],
          songCollection.getList()[100], songCollection.getList()[101],
          songCollection.getList()[102], songCollection.getList()[103],
          songCollection.getList()[104], songCollection.getList()[105],
          songCollection.getList()[106], songCollection.getList()[107]]);
    albumCollection.addItem(album);
    // Harry Styles
    album = new Album('system', 'Fine Line',
        artistCollection.getList()[16], 2019,
        [songCollection.getList()[108], songCollection.getList()[109],
          songCollection.getList()[110], songCollection.getList()[111],
          songCollection.getList()[112], songCollection.getList()[113],
          songCollection.getList()[114], songCollection.getList()[115],
          songCollection.getList()[116], songCollection.getList()[117],
          songCollection.getList()[118], songCollection.getList()[119]]);
    albumCollection.addItem(album);
    // Liam Payne
    album = new Album('system', 'Midnight Hour',
        artistCollection.getList()[17], 2020,
        [songCollection.getList()[120], songCollection.getList()[121],
          songCollection.getList()[122], songCollection.getList()[123],
          songCollection.getList()[124], songCollection.getList()[125]]);
    albumCollection.addItem(album);
    // Zayn Malik
    album = new Album('system', 'Nobody is listening',
        artistCollection.getList()[18], 2021,
        [songCollection.getList()[126], songCollection.getList()[127],
          songCollection.getList()[128], songCollection.getList()[129],
          songCollection.getList()[130], songCollection.getList()[131],
          songCollection.getList()[132], songCollection.getList()[133],
          songCollection.getList()[134], songCollection.getList()[135],
          songCollection.getList()[136]]);
    albumCollection.addItem(album);

    // The Beatles
    album = new Album('system', 'Abbey Road',
        groupCollection.getList()[6], 1969,
        [songCollection.getList()[137], songCollection.getList()[138],
          songCollection.getList()[139], songCollection.getList()[140],
          songCollection.getList()[141], songCollection.getList()[142],
          songCollection.getList()[143], songCollection.getList()[144],
          songCollection.getList()[145], songCollection.getList()[146],
          songCollection.getList()[147], songCollection.getList()[148],
          songCollection.getList()[149], songCollection.getList()[150],
          songCollection.getList()[151], songCollection.getList()[152],
          songCollection.getList()[153]]);
    albumCollection.addItem(album);
    // John Lennon
    album = new Album('system', 'Imagine',
        artistCollection.getList()[21], 1971,
        [songCollection.getList()[154], songCollection.getList()[155],
          songCollection.getList()[156], songCollection.getList()[157],
          songCollection.getList()[158], songCollection.getList()[159],
          songCollection.getList()[160], songCollection.getList()[161],
          songCollection.getList()[162], songCollection.getList()[163]]);
    albumCollection.addItem(album);
    // Paul McCartney
    album = new Album('system', 'Ram',
        artistCollection.getList()[21], 1971,
        [songCollection.getList()[164], songCollection.getList()[165],
          songCollection.getList()[166], songCollection.getList()[167],
          songCollection.getList()[168], songCollection.getList()[169],
          songCollection.getList()[170], songCollection.getList()[171],
          songCollection.getList()[172], songCollection.getList()[173]]);
    albumCollection.addItem(album);

    // Coldplay
    album = new Album('system', 'Parachutes',
        groupCollection.getList()[7], 2000,
        [songCollection.getList()[174], songCollection.getList()[175],
          songCollection.getList()[176], songCollection.getList()[177],
          songCollection.getList()[178], songCollection.getList()[179],
          songCollection.getList()[180], songCollection.getList()[181],
          songCollection.getList()[182], songCollection.getList()[183]]);
    albumCollection.addItem(album);

    // Avicci
    album = new Album('system', 'True',
        artistCollection.getList()[29], 2013,
        [songCollection.getList()[184], songCollection.getList()[185],
          songCollection.getList()[186], songCollection.getList()[187],
          songCollection.getList()[188], songCollection.getList()[189],
          songCollection.getList()[190], songCollection.getList()[191],
          songCollection.getList()[192], songCollection.getList()[193]]);
    albumCollection.addItem(album);

    // Eminem
    album = new Album('system', 'The marshall mathers LP2',
        artistCollection.getList()[30], 2000,
        [songCollection.getList()[194], songCollection.getList()[195],
          songCollection.getList()[196], songCollection.getList()[197],
          songCollection.getList()[198], songCollection.getList()[199],
          songCollection.getList()[200], songCollection.getList()[201],
          songCollection.getList()[202], songCollection.getList()[203],
          songCollection.getList()[204], songCollection.getList()[205],
          songCollection.getList()[206], songCollection.getList()[207],
          songCollection.getList()[208], songCollection.getList()[209]]);
    albumCollection.addItem(album);

    // Melendi
    album = new Album('system', 'Un alumno más',
        artistCollection.getList()[31], 2014,
        [songCollection.getList()[210], songCollection.getList()[211],
          songCollection.getList()[212], songCollection.getList()[213],
          songCollection.getList()[214], songCollection.getList()[215],
          songCollection.getList()[216], songCollection.getList()[217],
          songCollection.getList()[218], songCollection.getList()[219],
          songCollection.getList()[220]]);
    albumCollection.addItem(album);

    // Michael Jackson
    album = new Album('system', 'Thriller',
        artistCollection.getList()[32], 1982,
        [songCollection.getList()[221], songCollection.getList()[222],
          songCollection.getList()[223], songCollection.getList()[224],
          songCollection.getList()[225], songCollection.getList()[226],
          songCollection.getList()[227], songCollection.getList()[228],
          songCollection.getList()[229]]);
    albumCollection.addItem(album);

    // Skrillex
    album = new Album('system', 'Recess',
        artistCollection.getList()[33], 2014,
        [songCollection.getList()[230], songCollection.getList()[231],
          songCollection.getList()[232], songCollection.getList()[233],
          songCollection.getList()[234], songCollection.getList()[235],
          songCollection.getList()[235], songCollection.getList()[237],
          songCollection.getList()[238], songCollection.getList()[239],
          songCollection.getList()[240]]);
    albumCollection.addItem(album);

    // Daddy Yankee
    album = new Album('system', 'Barrio Fino',
        artistCollection.getList()[34], 2004,
        [songCollection.getList()[241], songCollection.getList()[242],
          songCollection.getList()[243], songCollection.getList()[244],
          songCollection.getList()[245], songCollection.getList()[246],
          songCollection.getList()[247], songCollection.getList()[248],
          songCollection.getList()[249], songCollection.getList()[250],
          songCollection.getList()[251], songCollection.getList()[252],
          songCollection.getList()[253], songCollection.getList()[254],
          songCollection.getList()[255], songCollection.getList()[256],
          songCollection.getList()[257], songCollection.getList()[258],
          songCollection.getList()[259]]);
    albumCollection.addItem(album);
  }
  // Playlists dentro de la colección del sistema
  {
    let playlist = new Playlist('system', 'Hits en español',
        [songCollection.getList()[1], songCollection.getList()[211],
          songCollection.getList()[210], songCollection.getList()[244],
          songCollection.getList()[21], songCollection.getList()[22],
          songCollection.getList()[23], songCollection.getList()[24],
          songCollection.getList()[213]]);
    playlistCollection.addItem(playlist);
    playlist = new Playlist('system', 'Canciones de amor',
        [songCollection.getList()[160], songCollection.getList()[163],
          songCollection.getList()[124], songCollection.getList()[130],
          songCollection.getList()[140], songCollection.getList()[142],
          songCollection.getList()[89], songCollection.getList()[79],
          songCollection.getList()[82], songCollection.getList()[76],
          songCollection.getList()[48], songCollection.getList()[113],
          songCollection.getList()[9]]);
    playlistCollection.addItem(playlist);
    playlist = new Playlist('system', 'Canciones para estudiar',
        [songCollection.getList()[116], songCollection.getList()[112],
          songCollection.getList()[61], songCollection.getList()[178],
          songCollection.getList()[179], songCollection.getList()[92],
          songCollection.getList()[104], songCollection.getList()[89],
          songCollection.getList()[83], songCollection.getList()[154]]);
    playlistCollection.addItem(playlist);
    playlist = new Playlist('system', 'Música para entrenar',
        [songCollection.getList()[27], songCollection.getList()[53],
          songCollection.getList()[187], songCollection.getList()[109],
          songCollection.getList()[108], songCollection.getList()[57],
          songCollection.getList()[244], songCollection.getList()[64],
          songCollection.getList()[106]]);
    playlistCollection.addItem(playlist);
    playlist = new Playlist('system', 'Para cantar en el coche',
        [songCollection.getList()[90], songCollection.getList()[29],
          songCollection.getList()[9], songCollection.getList()[56],
          songCollection.getList()[55], songCollection.getList()[202],
          songCollection.getList()[154], songCollection.getList()[137],
          songCollection.getList()[10]]);
    playlistCollection.addItem(playlist);
  }
}
```

### Manejo de la información

Por otro lado, para la manipulación dinámica de la información, dento del fichero data.ts, nos encontraremos con tres funciones diferentes.

La mayor de ellas es la función update(), y será la encargada de mantener el sistema actualizado, es decir, de mantener aquellas propiedades dependientes de otros objetos de las que se hablaban antes siempre con la información correcta. Para ello realizará las llamadas a los getters indicados en un orden concreto.

```typescript
/**
 * @function Actualiza los atributos de los objetos del sitema que sean
 * dependientes de los datos de otras clase en el orden adecuado tras por
 * ejemplo añadir un nuevo objeto al sistema
 */
export function update() : void {
  songCollection.getList().forEach((song) => {
    song.getSingle();
  });
  playlistCollection.getList().forEach((playlist) => {
    playlist.getLenght();
    playlist.getGenres();
  });
  albumCollection.getList().forEach((album) => {
    album.getGenres();
  });
  groupCollection.getList().forEach((group) => {
    group.getAlbums();
    group.getGenres();
    group.getSongs();
    group.getPlaylists();
  });
  artistCollection.getList().forEach((artist) => {
    artist.getGroups();
    artist.getAlbums();
    artist.getSongs();
    artist.getGenres();
    artist.getPlaylists();
  });
  musicGenreCollection.getList().forEach((musicGenre) => {
    musicGenre.getCreators();
    musicGenre.getAlbums();
    musicGenre.getSongs();
  });
}
```

Las otras dos funciones que encontramos en el fichero serán las encargadas de escribir y leer en la base de datos. Para ello realizan las llamadas correspondientes a las funciones de escritura y lectura de cada tipo de dato en concreto. En el caso de la función escritura el orden es trivial, mientras que en la de lectura debe ser uno en concreto.

```typescript
/**
 * @function Escribe toda la información de la colección del sistema en
 * la base de datos de los ficheros .json
 */
export function writeData() {
  writeAlbumData();
  writeArtistData();
  writeGenreData();
  writeGroupData();
  writePlaylistData();
  writeSongsData();
}
```

```typescript
/**
 * @function Lee toda la información de la base de datos de los ficheros .json
 * y la almacena en la colección del sistema
 */
export function readData() {
  readGenreData();
  readArtistData();
  readGroupData();
  readSongsData();
  readPlaylistData();
  readAlbumData();
}
```

### Funciones para el uso de lowdb

En el apartado anterior se mencionaba una serie de funciones de escritura y lectura para cada tipo de datos. Estas serán las encargadas de manipular la información para adaptarla del formato original al json para posteriormente guardarla, y viceversa. Dentro de cada fichero podremos encontrar por lo tanto, una función de escritura y una de lectura.

#### Funciones para los datos de los álbumes

Para el desarrollo de las funciones de escritura y lectura de un álbum, en primera instancia se declarará la base de datos que se llevará a cabo. 

```typescript
/**
 * @interface Interfaz para el adaptador de album
 */
export interface SchemaInterface {
  album : albumData[];
}

const adapter = new FileSync('./src/data/jsonFiles/albumData.json');
const db : lowdb.LowdbSync<SchemaInterface> = lowdb(adapter);
```

Para la función de escritura, el programa recorrerá toda la colección del sistema y descompondrá los objetos en sus diferentes propiedades y las alamcenará en una constante auxiliar con el formato de albumData[] que se explicará más adelante. Acto seguido escribirá el resultado en el fichero json correspondiente.

```typescript
/**
 * @function Escribe todos los álbumes de la colección del sistema en
 * el fichero albumData.json de la base de datos
 */
export function writeAlbumData() {
  const list = albumCollection.getList().sort(sortAlbumName);
  const albums : albumData[] = [];
  list.forEach((album) => {
    const songs : string[] = [];
    album.getSongs().forEach((song) => {
      songs.push(song.getName());
    });
    albums.push({
      user: album.user,
      name: album.getName(),
      creator: album.getCreator().getName(),
      year: album.getYear(),
      songs: songs,
    });
  });
  db.defaults().write();
  db.set('Albums', albums).write();
}
```

Por otro lado, la función de lectura realizará la tarea opuesta. Esta leerá todos los objetos almacenados en el fichero json correspondiente, para convertirlo en datos de tipo albumData, y posteriormente crear nuevos objetos que se almacenarán en la colección del sistema.

```typescipt
/**
 * @function Lee todos los álbumes del fichero albumData.json de la base
 * de datos y los añade a la colección del sistema
 */
export function readAlbumData() {
  const albumData : albumData[] = db.get('Albums').value();
  albumData.forEach((album) => {
    const creators : (Artist | Group)[] = [];
    artistCollection.getList().forEach((artist) => {
      creators.push(artist);
    });
    groupCollection.getList().forEach((group) => {
      creators.push(group);
    });
    const creator = creators.find((element) =>
      element.getName() === album.creator);
    const songs : Song[] = [];
    album.songs.forEach((name) => {
      const song = songCollection.getList().find((element) =>
        element.getName() === name);
      if (song) songs.push(song);
    });
    if (creator) {
      albumCollection.addItem(new Album(album.user, album.name,
          creator, album.year, songs));
    }
  });
}
```

#### Funciones para los datos de los artistas

Para el desarrollo de las funciones de escritura y lectura de un artista, en primera instancia se declarará la base de datos que se llevará a cabo. 

```typescript
/**
 * @interface Interfaz para el adaptador de artista
 */
export interface SchemaInterface {
  artist : artistData[];
}

const adapter = new FileSync('./src/data/jsonFiles/artistData.json');
const db : lowdb.LowdbSync<SchemaInterface> = lowdb(adapter);
```

Para la función de escritura, el programa recorrerá toda la colección del sistema y descompondrá los objetos en sus diferentes propiedades y las alamcenará en una constante auxiliar con el formato de artistData[] que se explicará más adelante. Acto seguido escribirá el resultado en el fichero json correspondiente.

```typescript
/**
 * @function Escribe todos los artistas de la colección del sistema en
 * el fichero artistData.json de la base de datos
 */
export function writeArtistData() {
  const list = artistCollection.getList().sort(sortArtistName);
  const artists : artistData[] = [];
  list.forEach((artist) => {
    artists.push({
      user: artist.user,
      name: artist.getName(),
      rep: artist.getRep(),
    });
  });
  db.defaults().write();
  db.set('Artists', artists).write();
}
```

Por otro lado, la función de lectura realizará la tarea opuesta. Esta leerá todos los objetos almacenados en el fichero json correspondiente, para convertirlo en datos de tipo artistData, y posteriormente crear nuevos objetos que se almacenarán en la colección del sistema.

```typescript
/**
 * @function Lee todos los artistas del fichero artistData.json de la base
 * de datos y los añade a la colección del sistema
 */
export function readArtistData() {
  const artistData : artistData[] = db.get('Artists').value();
  artistData.forEach((artist) => {
    artistCollection.addItem(new Artist(artist.user, artist.name, artist.rep));
  });
}
```

#### Funciones para los datos de los géneros musicales

Para el desarrollo de las funciones de escritura y lectura de un género musical, en primera instancia se declarará la base de datos que se llevará a cabo. 

```typescript
/**
 * @interface Interfaz para el adaptador de género musical
 */
export interface SchemaInterface {
  musicGenre : genreData[];
}

const adapter = new FileSync('./src/data/jsonFiles/genreData.json');
const db : lowdb.LowdbSync<SchemaInterface> = lowdb(adapter);
```

Para la función de escritura, el programa recorrerá toda la colección del sistema y descompondrá los objetos en sus diferentes propiedades y las alamcenará en una constante auxiliar con el formato de genreData[] que se explicará más adelante. Acto seguido escribirá el resultado en el fichero json correspondiente.

```typescript
/**
 * @function Escribe todos los géneros musicales de la colección del sistema en
 * el fichero genreData.json de la base de datos
 */
export function writeGenreData() {
  const list = musicGenreCollection.getList().sort(sortGenreName);
  const genres : genreData[] = [];
  list.forEach((genre) => {
    genres.push({
      user: genre.user,
      name: genre.getName(),
    });
  });
  db.defaults().write();
  db.set('MusicGenres', genres).write();
}
```

Por otro lado, la función de lectura realizará la tarea opuesta. Esta leerá todos los objetos almacenados en el fichero json correspondiente, para convertirlo en datos de tipo genreData, y posteriormente crear nuevos objetos que se almacenarán en la colección del sistema.

```typescript
/**
 * @function Lee todos los géneros musicales del fichero genreData.json
 * de la base de datos y los añade a la colección del sistema
 */
export function readGenreData() {
  const genreData : genreData[] = db.get('MusicGenres').value();
  genreData.forEach((genre) => {
    musicGenreCollection.addItem(new MusicGenre(genre.user, genre.name));
  });
}
```

#### Funciones para los datos de los grupos

Para el desarrollo de las funciones de escritura y lectura de un grupo musical, en primera instancia se declarará la base de datos que se llevará a cabo. 

```typescript
/**
 * @interface Interfaz para el adaptador de grupo
 */
export interface SchemaInterface {
  group : groupData[];
}

const adapter = new FileSync('./src/data/jsonFiles/groupData.json');
const db : lowdb.LowdbSync<SchemaInterface> = lowdb(adapter);
```

Para la función de escritura, el programa recorrerá toda la colección del sistema y descompondrá los objetos en sus diferentes propiedades y las alamcenará en una constante auxiliar con el formato de groupData[] que se explicará más adelante. Acto seguido escribirá el resultado en el fichero json correspondiente.

```typescript

export function writeGroupData() {
  const list = groupCollection.getList().sort(sortGroupName);
  const groups : groupData[] = [];
  list.forEach((group) => {
    const artists : string[] = [];
    group.getArtists().forEach((artist) => {
      artists.push(artist.getName());
    });
    groups.push({
      user: group.user,
      name: group.getName(),
      artists: artists,
      year: group.getYear(),
      rep: group.getRep(),
    });
  });
  db.defaults().write();
  db.set('Groups', groups).write();
}
```

Por otro lado, la función de lectura realizará la tarea opuesta. Esta leerá todos los objetos almacenados en el fichero json correspondiente, para convertirlo en datos de tipo groupData, y posteriormente crear nuevos objetos que se almacenarán en la colección del sistema.

```typescript
/**
 * @function Lee todos los grupos del fichero groupData.json de la base
 * de datos y los añade a la colección del sistema
 */
export function readGroupData() {
  const groupData : groupData[] = db.get('Groups').value();
  groupData.forEach((group) => {
    const artists : Artist[] = [];
    group.artists.forEach((name) => {
      const artist = artistCollection.getList().find((element) =>
        element.getName() === name);
      if (artist) artists.push(artist);
    });
    groupCollection.addItem(new Group(group.user, group.name, artists,
        group.year, group.rep));
  });
}
```

#### Funciones para los datos de las playlists

Para el desarrollo de las funciones de escritura y lectura de una playlist, en primera instancia se declarará la base de datos que se llevará a cabo. 

```typescript
/**
 * @interface Interfaz para el adaptador de playlist
 */
export interface SchemaInterface {
  playlist : playlistData[];
}

const adapter = new FileSync('./src/data/jsonFiles/playlistData.json');
const db : lowdb.LowdbSync<SchemaInterface> = lowdb(adapter);
```

Para la función de escritura, el programa recorrerá toda la colección del sistema y descompondrá los objetos en sus diferentes propiedades y las alamcenará en una constante auxiliar con el formato de playlistData[] que se explicará más adelante. Acto seguido escribirá el resultado en el fichero json correspondiente.

```typescript
/**
 * @function Escribe todas las playlists de la colección del sistema en
 * el fichero playlistData.json de la base de datos
 */
export function writePlaylistData() {
  const list = playlistCollection.getList().sort(sortPlaylistName);
  const playlists : playlistData[] = [];
  list.forEach((playlist) => {
    const songs : string[] = [];
    playlist.getSongs().forEach((song) => {
      songs.push(song.getName());
    });
    playlists.push({
      user: playlist.user,
      name: playlist.getName(),
      songs: songs,
    });
  });
  db.defaults().write();
  db.set('Playlists', playlists).write();
}
```

Por otro lado, la función de lectura realizará la tarea opuesta. Esta leerá todos los objetos almacenados en el fichero json correspondiente, para convertirlo en datos de tipo playlistData, y posteriormente crear nuevos objetos que se almacenarán en la colección del sistema.

```typescript
/**
 * @function Lee todas las playlists del fichero playlistData.json de la base
 * de datos y los añade a la colección del sistema
 */
export function readPlaylistData() {
  const playlistData : playlistData[] = db.get('Playlists').value();
  playlistData.forEach((playlist) => {
    const songs : Song[] = [];
    playlist.songs.forEach((name) => {
      const song = songCollection.getList().find((element) =>
        element.getName() === name);
      if (song) songs.push(song);
    });
    playlistCollection.addItem(new Playlist(playlist.user,
        playlist.name, songs));
  });
}
```

#### Funciones para los datos de las canciones

Para el desarrollo de las funciones de escritura y lectura de una canción, en primera instancia se declarará la base de datos que se llevará a cabo.

```typescript
/**
 * @interface Interfaz para el adaptador de canción
 */
export interface SchemaInterface {
  songs : songData[];
}

const adapter = new FileSync('./src/data/jsonFiles/songData.json');
const db : lowdb.LowdbSync<SchemaInterface> = lowdb(adapter);
```

Para la función de escritura, el programa recorrerá toda la colección del sistema y descompondrá los objetos en sus diferentes propiedades y las alamcenará en una constante auxiliar con el formato de songData[] que se explicará más adelante. Acto seguido escribirá el resultado en el fichero json correspondiente.

```typescript
/**
 * @function Escribe todas las canciones de la colección del sistema en
 * el fichero songData.json de la base de datos
 */
export function writeSongsData() {
  const list = songCollection.getList().sort(sortSongName);
  const songs : songData[] = [];
  list.forEach((song) => {
    const genres : string[] = [];
    song.getGenres().forEach((genre) => {
      genres.push(genre.getName());
    });
    songs.push({
      user: song.user,
      name: song.getName(),
      creator: song.getCreator().getName(),
      lenght: song.lenght,
      genres: genres,
      rep: song.getRep(),
    });
  });
  db.defaults().write();
  db.set('Songs', songs).write();
}
```

Por otro lado, la función de lectura realizará la tarea opuesta. Esta leerá todos los objetos almacenados en el fichero json correspondiente, para convertirlo en datos de tipo songData, y posteriormente crear nuevos objetos que se almacenarán en la colección del sistema.

```typescript
/**
 * @function Lee todas las canciones del fichero songData.json de la base
 * de datos y los añade a la colección del sistema
 */
export function readSongsData() {
  const songsData : songData[] = db.get('Songs').value();
  songsData.forEach((song) => {
    const creators : (Artist | Group)[] = [];
    artistCollection.getList().forEach((artist) => {
      creators.push(artist);
    });
    groupCollection.getList().forEach((group) => {
      creators.push(group);
    });
    const creator = creators.find((element) =>
      element.getName() === song.creator);
    const genres : MusicGenre[] = [];
    song.genres.forEach((name) => {
      const genre = musicGenreCollection.getList().find((element) =>
        element.getName() === name);
      if (genre) genres.push(genre);
    });
    if (creator) {
      songCollection.addItem(new Song(song.user, song.name, creator,
          song.lenght, genres, song.rep));
    }
  });
}
```

### Variables para el manejo de datos

Para poder gestionar de una forma más limpia y ordenada los datos dentro de la base de datos haremos uso de una serie de varibles y estructuras de datos que nos facilitarán esta tarea.

#### Clase ItemsCollection<T>

La clase ItemsCollection representará una colección de objetos de tipo genérico, en concreto será un vector de objetos. Esto nos permitirá generar colecciones de cada uno de los diferentes objetos del sistem. La clase contará con tres métodos que permitirán manejar las diferentes listas.

Existirá un primer método getList() que devolverá la lista completa; un segundo addItem(item : T) que permitirá añadir un objeto a la colección mediante un push; y un tercero getLengh() que simplemente devolverá la cantidad de objetos que almacena la colección.

```typescript
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
```

Para el desarrollo del programa se creará una colección por cada objeto del sistema, de forma que cada lista contendrá unicamente objetos del tipo que refiere su nombre.

```typescript
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

```

#### Interfaces para el manejo de datos

Para la creación de las diferentes bases de datos que contendrán los objetos del sistema se hará uso de una serie de interfaces que definirá cada uno de las propiedades claves que se deben almacenar de un objeto en los fichero json.

```typescript
/**
 * @interface Interfaz de un álbum en un fichero .json
 */
export interface albumData {
  user : string,
  name : string,
  creator : string,
  year : number,
  songs : string[]
}
```

```typescript
/**
 * @interface Interfaz de un artista en un fichero .json
 */
export interface artistData {
  user : string,
  name : string,
  rep : number
}
```

```typescript
/**
 * @interface Interfaz de un género musical en un fichero .json
 */
export interface genreData {
  user : string,
  name : string
}
```

```typescript
/**
 * @interface Interfaz de un grupo en un fichero .json
 */
export interface groupData {
  user : string,
  name : string,
  artists : string[],
  year : number,
  rep : number
}
```

```typescript
/**
 * @interface Interfaz de una playlist en un fichero .json
 */
export interface playlistData {
  user : string,
  name : string,
  songs : string[]
}
```

```typescript
/**
 * @interface Interfaz de una canción en un fichero .json
 */
export interface songData {
  user : string,
  name : string,
  creator : string,
  lenght : number,
  genres : string[],
  rep : number
}
```

### Ficheros .json

Por último, dentro de este apartado del sistema de información, nos encontraremos con la base de datos como tal, es decir, los diferentes ficheros json que contendrán tanto los valores por defecto del sistema como todas aquellas modificaciones que se hagan sobre la colección del sistema.

## Sistema de gestión

Como último apartado, tendremos que llevar a cabo un sistema de gestión de la información de forma interactiva mediante el uso de la herramienta Inquirer. Esto nos permitirá pedir al usuario que información desea ver en cada momento, o que tarea desea realizar en las colecciones del sistema.

### Clase Manager

La clase Manager será la encargada de inicar el programa y hará de eje central. Contará con una única propiedad user, al igual que los subgestores que se explicarán más adelante, que representará el usuario que está accedietno a la biblioteca.

La clase tendrá dos funciones, una primera login(), que mediante Inquirer pedirá al usuario que se identifique. Esto facilitará la gestión de los objetos del sistema, ya que únicamente estos podrán ser borrados por sus creador. Tal y como se plateaba antes, la colección del sistema cuenta con una serie de datos por defecto. Dichos datos pertenecen al usuario llamado system, por lo que si no se inicia sesión con el mismo no se podrán eliminar. No obstante, para poder iniciar sesión con system, hará falta introducir una contraseña que por defecto está puesta 1234, aunque la idea es que la contraseña sea de mayor seguridad y permanezca en secreto para simular un perfil de administrador y proteger la información del sistema.

Como segunda dfunción nos encontraremos con el métod management(), el cual, meidante Inquirer, mostrará un menú interactivo para que el usuario pueda decidir que objeto del sistema desea gestionar. En función de la opción seleccionada se creará un subgestor de didcho objeto y se pasará a trabajr con sus propios métodos. Destacar que una vez creado un subgestor se le iguala el nombre de usuario para que no se pierda al cambiar de clase.

```typescript
/**
 * Clase Gestor, con ella podremos iniciar sesión y controlar el menu de gestión
 * avanzadda, así como las llamadas a los demás subgestores
 */
export class Manager {
  /**
   * Usuario logueado en el sistema
   */
  public user : string;
  /**
   * Inicializa la información del sistema y comienza con el logueo
   */
  constructor() {
    // rawData();
    readData();
    update();
    writeData();
    this.login();
  }

  /**
   * @method Permite iniciar sesión a un usuario que ejecute el programa,
   * guardando su nombre en la propiedad de clase. En caso de que el usuario
   * sea 'system', pedirá una constraseña, ya que representará el papel de
   * un administrado, como si fuera root
   */
  login() {
    console.clear();
    inquirer.prompt({
      name: 'user',
      message: 'Introduzca su nombre de usuario: ',
    }).then((answer : {user : string}) => {
      if (answer.user === 'system') {
        inquirer.prompt({
          type: 'password',
          name: 'password',
          message: 'Introduzca la contraseña: ',
          mask: '*',
        }).then((pass : {password : string}) => {
          if (pass.password === '1234') {
            this.user = answer.user;
            this.management();
          } else console.log('Parámetros incorrectos');
        });
      } else {
        this.user = answer.user;
        this.management();
      }
    });
  }

  /**
   * @method Despliega el menu principal para la gestión avanzada
   * de la información del sistem, y en función de la demanda del usuario,
   * invocará al subgestor correspondente
   */
  management() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      name: 'option',
      message: 'Elija la opción que desea llevar a cabo: ',
      choices: Object.values(menuOptions),
    }).then((answer : {option: string}) => {
      switch (answer.option) {
        case menuOptions.Album:
          const albumManager = new AlbumManager();
          albumManager.user = this.user;
          albumManager.management();
          break;
        case menuOptions.Artist:
          const artistManager = new ArtistManager();
          artistManager.user = this.user;
          artistManager.management();
          break;
        case menuOptions.Group:
          const groupManager = new GroupManager();
          groupManager.user = this.user;
          groupManager.management();
          break;
        case menuOptions.MusicGenre:
          const musicGenreManager = new MusicGenreManager();
          musicGenreManager.user = this.user;
          musicGenreManager.management();
          break;
        case menuOptions.Playlist:
          const playlistManager = new PlaylistManager();
          playlistManager.user = this.user;
          playlistManager.management();
          break;
        case menuOptions.Song:
          const songManager = new SongManager();
          songManager.user = this.user;
          songManager.management();
          break;
        case menuOptions.Exit:
          break;
      }
    });
  }
}
```

### Subgestores para cada objeto del sistema

Tal y como se mencionaba anteriormente, existirá un subgestor para cada objeto que exista en el sistema. Dichos subgestores estarán definidos por una interfaz génerica que contará con una serie de métoddos comunes que permitirán llevar a cabo la gestión avanzada que sea necesaria.

```typescript
/**
 * @interface Interfaz para cualquier subgestor que
 * se cree en el sistema
 */
export interface SubManager <T>{
  print(list : T[]) : void;
  printMode() : void;
  create() : void;
  add() : void;
  delete() : void;
  management() : void;
}
```

#### Clase AlbumManager
#### Clase ArtistManager
#### Clase GenreManager
#### Clase GroupManager
#### Clase PlaylistManager
#### Clase SongManager

### Variables para la gestión de objetos

Para facilitar la gestión de la información se hará uso de una serie de funciones y de enumerados que permitirán hacer el código más limpio y accesible.

#### Enumerados para los menús del sistema

Para cada uno de los menús mostrados en los diferentes gestores se hará uso de un enumerado diferente que mostrará las opciones que podrá seleccionar el usuario, y que permmitirán manejar sus valores sin posibles errores.

```typescript
/**
 * Opciones del menu principal
 */
export enum menuOptions {
    Album = 'Gestión de álbumes',
    Artist = 'Gestión de artistas',
    Group = 'Gestión de grupos',
    MusicGenre = 'Gestión de géneros musicales',
    Playlist = 'Gestión de playlists',
    Song = 'Gestión de canciones',
    Exit = 'Salir'
  }
```

```typescript
/**
 * Opciones del submenu para la gestión de álbumes
 */
export enum albumMenu {
    Print = 'Previsualizar colección de álbumes',
    Add = 'Añadir un álbum a la colección',
    Del = 'Borrar un álbum de la colección',
    Exit = 'Atras'
  }
/**
 * Opciones para mostrar los álbumes
 */
export enum printAlbum {
    NameLower = 'Por nombre de forma ascendente',
    NameUpper = 'Por nombre de forma descendente',
    CreatorLower = 'Por nombre del creador de forma ascendente',
    CreatorUpper = 'Por nombre del creador de forma descendente',
    YearLower = 'Por año de publicación de forma ascendente',
    YearUpper = 'Por año de publicación de forma descendente',
    Exit = 'Atras'
  }
```

```typescript
/**
 * Opciones del submenu para la gestión de artistas
 */
export enum artistMenu {
    Print = 'Previsualizar colección de artistas',
    Add = 'Añadir un artista a la colección',
    Del = 'Borrar un artista de la colección',
    Exit = 'Atras'
  }
/**
 * Opciones para mostrar los artistas
 */
export enum printArtist {
    NameLower = 'Por nombre de forma ascendente',
    NameUpper = 'Por nombre de forma descendente',
    RepLower = 'Por número de oyentes de forma ascendente',
    RepUpper = 'Por número de oyentes de forma descendente',
    Exit = 'Atras'
  }
```

```typescript
/**
 * Opciones del submenu para la gestión de grupos
 */
export enum groupMenu {
    Print = 'Previsualizar colección de grupos',
    Add = 'Añadir un grupo a la colección',
    Del = 'Borrar un grupo de la colección',
    Exit = 'Atras'
  }
/**
 * Opciones para mostrar los grupos
 */
export enum printGroup {
    NameLower = 'Por nombre de forma ascendente',
    NameUpper = 'Por nombre de forma descendente',
    YearLower = 'Por año de creación de forma ascendente',
    YearUpper = 'Por año de creación de forma descendente',
    RepLower = 'Por número de oyentes de forma ascendente',
    RepUpper = 'Por número de oyentes de forma descendente',
    Exit = 'Atras'
  }
```

```typescript
/**
 * Opciones del submenu para la gestión de géneros musicales
 */
export enum musicGenreMenu {
    Print = 'Previsualizar colección de géneros musicales',
    Add = 'Añadir un género musical a la colección',
    Del = 'Borrar un género musical de la colección',
    Exit = 'Atras'
  }
/**
 * Opciones para mostrar los géneros musicales
 */
export enum printGenre {
    NameLower = 'Por nombre de forma ascendente',
    NameUpper = 'Por nombre de forma descendente',
    Exit = 'Atras'
  }
```

```typescript
/**
 * Opciones del submenu para la gestión de playlists
 */
export enum playlistMenu {
    Print = 'Previsualizar colección de playlists',
    Add = 'Añadir una playlist a la colección',
    Mod = 'Modificar una playlist de la colección',
    Del = 'Borrar una playlist de la colección',
    Exit = 'Atras'
  }
/**
 * Opciones para mostrar las playlists
 */
export enum printPlaylist {
    NameLower = 'Por nombre de forma ascendente',
    NameUpper = 'Por nombre de forma descendente',
    LenghtLower = 'Por duración de forma ascendente',
    LenghtUpper = 'Por duración de forma descendente',
    Songs = 'Consultar canciones de una playlist',
    Exit = 'Atras'
  }
```

```typescript
/**
 * Opciones del submenu para la gestión de canciones
 */
export enum songMenu {
    Print = 'Previsualizar colección de canciones',
    Add = 'Añadir una canción a la colección',
    Del = 'Borrar una canción de la colección',
    Exit = 'Atras'
  }
/**
 * Opciones para mostrar las canciones
 */
export enum printSongs {
    NameLower = 'Por nombre de forma ascendente',
    NameUpper = 'Por nombre de forma descendente',
    CreatorLower = 'Por nombre del creador de forma ascendente',
    CreatorUpper = 'Por nombre del creador de forma descendente',
    LenghtLower = 'Por duración de forma ascendente',
    LenghtUpper = 'Por duración de forma descendente',
    RepLower = 'Por número de reproducciones de forma ascendente',
    RepUpper = 'Por número de reproducciones de forma descendente',
    SinglesY = 'Mostrar únicamente los singles lanzados',
    SinglesN = 'Mostrar únicamente los no singles lanzados',
    Exit = 'Atras'
  }
```

#### Funciones para ordenar datos

Para poder realizar las diferentes ordenaciones, en función de lo que desee el usuario, se hará uso de diferentes funciones que se pasarán como parámetro a la función sort() de un vector. De esta forma podremos ordenar los diferentes objetos por sus diferentes propiedades.

```typescript
/**
 * @function Ordena dos álbumes por su propiedad name
 * @param x Primer álbum
 * @param y Segundo álbum
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortAlbumName(x : Album, y : Album) {
  if (x.getName() < y.getName()) return -1;
  if (x.getName() > y.getName()) return 1;
  return 0;
}

/**
 * @function Ordena dos álbumes por su propiedad creator
 * @param x Primer álbum
 * @param y Segundo álbum
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortAlbumCreator(x : Album, y : Album) {
  if (x.getCreator() < y.getCreator()) return -1;
  if (x.getCreator() > y.getCreator()) return 1;
  return 0;
}

/**
 * @function Ordena dos álbumes por su propiedad year
 * @param x Primer álbum
 * @param y Segundo álbum
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortAlbumYear(x : Album, y : Album) {
  if (x.getYear() < y.getYear()) return -1;
  if (x.getYear() > y.getYear()) return 1;
  return 0;
}
```

```typescript
/**
 * @function Ordena dos artistas por su propiedad name
 * @param x Primer artista
 * @param y Segundo artista
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortArtistName(x : Artist, y : Artist) {
  if (x.getName() < y.getName()) return -1;
  if (x.getName() > y.getName()) return 1;
  return 0;
}

/**
 * @function Ordena dos artistas por su propiedad rep
 * @param x Primer artista
 * @param y Segundo artista
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortArtistRep(x : Artist, y : Artist) {
  if (x.getRep() < y.getRep()) return -1;
  if (x.getRep() > y.getRep()) return 1;
  return 0;
}
```

```typescript
/**
 * @function Ordena dos géneros musicales por su propiedad name
 * @param x Primer género musical
 * @param y Segundo género musical
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortGenreName(x : MusicGenre, y : MusicGenre) {
  if (x.getName() < y.getName()) return -1;
  if (x.getName() > y.getName()) return 1;
  return 0;
}
```

```typescript
/**
 * @function Ordena dos grupos por su propiedad name
 * @param x Primer grupo
 * @param y Segundo grupo
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortGroupName(x : Group, y : Group) {
  if (x.getName() < y.getName()) return -1;
  if (x.getName() > y.getName()) return 1;
  return 0;
}

/**
 * @function Ordena dos grupos por su propiedad year
 * @param x Primer grupo
 * @param y Segundo grupo
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortGroupYear(x : Group, y : Group) {
  if (x.getYear() < y.getYear()) return -1;
  if (x.getYear() > y.getYear()) return 1;
  return 0;
}

/**
 * @function Ordena dos grupos por su propiedad rep
 * @param x Primer grupo
 * @param y Segundo grupo
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortGroupRep(x : Group, y : Group) {
  if (x.getRep() < y.getRep()) return -1;
  if (x.getRep() > y.getRep()) return 1;
  return 0;
}
```

```typescript
/**
 * @function Ordena dos playlists por su propiedad name
 * @param x Primer playlist
 * @param y Segundo playlist
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortPlaylistName(x : Playlist, y : Playlist) {
  if (x.getName() < y.getName()) return -1;
  if (x.getName() > y.getName()) return 1;
  return 0;
}

/**
 * @function Ordena dos playlists por su propiedad lenght
 * @param x Primer playlist
 * @param y Segundo playlist
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortPlaylistLenght(x : Playlist, y : Playlist) {
  if (x.lenght < y.lenght) return -1;
  if (x.lenght > y.lenght) return 1;
  return 0;
}
```

```typescript
/**
 * @function Ordena dos canciones por su propiedad name
 * @param x Primer canción
 * @param y Segundo canción
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortSongName(x : Song, y : Song) {
  if (x.getName() < y.getName()) return -1;
  if (x.getName() > y.getName()) return 1;
  return 0;
}

/**
 * @function Ordena dos canciones por su propiedad creator
 * @param x Primer canción
 * @param y Segundo canción
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortSongCreator(x : Song, y : Song) {
  if (x.getCreator() < y.getCreator()) return -1;
  if (x.getCreator() > y.getCreator()) return 1;
  return 0;
}

/**
 * @function Ordena dos canciones por su propiedad lenght
 * @param x Primer canción
 * @param y Segundo canción
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortSongLenght(x : Song, y : Song) {
  if (x.lenght < y.lenght) return -1;
  if (x.lenght > y.lenght) return 1;
  return 0;
}

/**
 * @function Ordena dos canciones por su propiedad rep
 * @param x Primer canción
 * @param y Segundo canción
 * @returns Devuelve -1 si x es menor, 1 si es mayor, y 0 si x e y son iguales
 */
export function sortSongRep(x : Song, y : Song) {
  if (x.getRep() < y.getRep()) return -1;
  if (x.getRep() > y.getRep()) return 1;
  return 0;
}
```

## Herramientas de desarrollo empleadas

Para el desarrollo de la práctica se han usado una serie de herramientas con el fin de mejorar tanto la calidad del código, como su comprensión. Se ha llevado a acabo una documentación generada con TypeDoc; se han plateado pruebas unitarias para su comprobación con Mocha y Chai; y se han utilizado diversas herramientas para el cubrimiento del código como son Coveralls, GitHub Actions y Sonar Cloud.

## Scripts

- npm run program: Compila y ejecuta el programa 

- npm run doc: Genera la documentación con TypeDoc

- npm run test: Realiza los tests planteados con Mocha y Chai

- npm run coverage: Realiza el cubrimiento con Coveralls 