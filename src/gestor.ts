import { Playlist } from "./playlist";
import {MusicGenre} from './musicGenre';
import {albumCollection, artistCollection,
    groupCollection, playlistCollection, songCollection} from './collection';

/**
 * Clase Gestor, con ella podremos controlar la gestión del tratamiento avanzado
 * de las playlist que tengamos en nuestro sistema.
 */
export class Gestor{

private playlists : Playlist[] = [];

/**
 * @returns Devuelve por un lado el nombre de la lista y la duración y 
 * lo muestra por pantalla y después en un return devuelve los distintos
 * géneros musicales que contiene.
 */
getPlaylists(): Playlist[] {
    playlistCollection.getList().forEach(playlist => {
        console.log( "Nombre de la playlist: " + playlist.getName() + "Duración de la playlist: " 
        + playlist.getLenght());
        return playlist.getGenres();
    });
    return this.playlists;
}



}