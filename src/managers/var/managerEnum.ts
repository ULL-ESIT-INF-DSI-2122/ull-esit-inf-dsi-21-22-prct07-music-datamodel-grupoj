/* eslint-disable no-unused-vars */

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

/**
 * Opciones del submenu para la gestión de playlists
 */
export enum playlistMenu {
    Print = 'Previsualizar colección de plsylists',
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
    Singles = 'Mostrar únicamente los singles lanzados',
    Exit = 'Atras'
  }
