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

/**
 * @interface Interfaz de un artista en un fichero .json
 */
export interface artistData {
  user : string,
  name : string,
  rep : number
}

/**
 * @interface Interfaz de un género musical en un fichero .json
 */
export interface genreData {
  user : string,
  name : string
}

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

/**
 * @interface Interfaz de una playlist en un fichero .json
 */
export interface playlistData {
  user : string,
  name : string,
  songs : string[]
}

/**
 * @interface Interfaz de una canción en un fichero .json
 */
export interface songData {
  user : string,
  name : string,
  creator : string,
  lenght : number,
  genre : string,
  rep : number
}
