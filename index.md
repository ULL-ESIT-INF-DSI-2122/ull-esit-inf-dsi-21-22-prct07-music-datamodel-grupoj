## Informe Práctica 7
### Digitalizando la colección de música de los abuelos

En la primera práctica grupal que nos compete, se nos pide que realicemos mediante diseño orientado a objetos una biblioteca de música. Para realizar esta tarea, tendremos que hacer uso de varias clases, las cuales comentaremos una a una a continuación. Después, con respecto al funcionamiento, se nos pide que incluyamos al menos 50 canciones distintas, 10 géneros musicales, 5 grupos, 5 artistas, entre 5 y 10 álbumes y 3 playlists. Una vez realizado esto, la clase más importante será la clase Gestor, la cual nos permitirá gestionar el tratamiento avanzado de las playlists.

Lo primero que tenemos que comentar, antes de entrar en las clases específicas, es la clase `ItemsCollection<T>`. Con esta crearemos colecciones de objetos genéricos, pero más adelante crearemos colecciones pero con las distintas clases, como por ejemplo `new ItemsCollection<Artist>`. En esta clase, los métodos que tendremos serán el de obtener la lista, añadir un elemento a la lista, buscar un elemento en la lista y obtener su tamaño.
  
```
  import {Album} from './album';
import {Artist} from './artist';
import {Group} from './group';
import {MusicGenre} from './musicGenre';
import {Playlist} from './playlist';
import {Song} from './song';

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
   * @param item Objeto de tipo genéricoo que se quiere buscar en la colección
   * @returns Devuelve el objeto de tipo genérico que se buscaba o
   * un mensaje de abvertencia
   */
  searchItem(item: T): T | void {
    const search = this.list.find((element) => element === item);
    return /* (search) ? */ search; /* : console.log('No existe'); */
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
  
```

En primer lugar, una vez comentada la clase collection, la primera clase que encontramos es la clase musicGenre, que englobará todos los géneros musicales. Esta tendrá varios atributos: los grupos o artistas relacionados con el género, los álbumes, las canciones y el nombre del género. Dicho esto, lo que tendremos a continuación serán todos los getters de los atributos, que desarrollamos apoyándonos en la clase collection.
  
 ```
  import {Album} from './album';
import {Artist} from './artist';
import {albumCollection, artistCollection,
  groupCollection, songCollection} from './collection';
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
   * @param name Nombre de género musical
   */
  constructor(private name : string) {};

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
        if (genre.getName() === this.name) this.creators.push(artist);
      });
    });
    groupCollection.getList().forEach((group) => {
      group.getGenres().forEach((genre) => {
        if (genre.getName() === this.name) this.creators.push(group);
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
        if (genre === this) this.albums.push(album);
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
      song.getGenres().forEach((genre) => {
        if (genre === this) this.songs.push(song);
      });
    });
    return this.songs;
  }
}

 ```
 
La siguiente clase a analizar, es la clase song. En esta definiremos cada canción dentro del álbum o playlist. Tendrá varios atributos, como su nombre, creador, duración, géneros, si es un single o no y el número de reproducciones. Como en el caso anterior, esta clase solo contiene los getters de todos los atributos mencionados.

```
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

```

La próxima será la clase álbum, la cual tiene como atributos el nombre, el creador, el año de publicación y una lista con las canciones. Una vez más lo que veremos como métodos serán los getters, que obtendremos estos valores con bucles forEach y con la ayuda de nuestra clase collections.

```
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

```

Seguimos avanzando en la composición de nuestro directorio src, las dos siguientes clases que nos aparecen van ligadas, son la clase grupo y la clase artista. Para la primera, los atributos que tendremos serán el nombre del grupo, artistas que lo componen, año de fundación y número de oyentes, además de los géneros musicales y sus álbums. Mientras que para la segunda clase, serán el nombre y los oyentes, además de los géneros musicales, sus álbums, canciones que tiene y grupos a los que pertenece ese artista. Después de los atributos es igual a las demás clases, con los getters de estos.

```
private genres : MusicGenre[] = [];
  /**
   * Albums publicados por el grupo
   */
  private albums : Album[] = [];
  /**
   * @param name Nombre del grupo
   * @param artists Artistas que conforman el grupo
   * @param year Año de fundación del grupo
   * @param rep Número de oyentes del grupo
   */
  constructor(private name : string, private artists : Artist[],
      private year : number, private rep : number) {};

```


```
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
   * @param name Nombre del artista
   * @param rep Número de oyentes del artista de forma individual
   */
  constructor(private name : string, private rep : number) {};

```

La última de nuestras clases que son descriptivas, es decir, que no abordan el funcionamiento, es la de playlist. Esta tendrá los parámetros de duración de la playlist y los géneros que contiene. Después aparecerán los getters, y más adelante, con la clase gestor, podremos manipular las listas.

```
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
   * @returns Devuelve la longitud de la playlist en formato 'horas:minutos'.
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

```

Antes de pasar a comentar nuestra clase gestor, tenemos primero que hablar sobre el archivo data.ts que se encuentra también en el directorio src. En este archivo, lo que hemos hecho es generar la colección del sistema de los álbumes, canciones... con unos valores preestablecidos. Por ejemplo, los géneros musicales los hemos añadido de esta manera: `let genre = new MusicGenre('genre1'); musicGenreCollection.addItem(genre);`, las canciones así `let song = new Song('canción1', artistCollection.getList()[0], 180, [musicGenreCollection.getList()[0]], true, 250);`, y así con todos los restantes (grupos, artistas, álbumes y playlists). Y al final del archivos, creamos la función update la cual actualiza los atributos de los objetos del sitema que sean dependientes de los datos de otras clase en el orden adecuado tras por ejemplo añadir un nuevo objeto al sistema.

```
export function update() : void {
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
  });
  artistCollection.getList().forEach((artist) => {
    artist.getGroups();
    artist.getAlbums();
    artist.getSongs();
    artist.getGenres();
  });
  musicGenreCollection.getList().forEach((genre) => {
    genre.getCreators();
    genre.getAlbums();
    genre.getSongs();
  });
}

```








theme:cayman
