/* eslint-disable no-unused-vars */
import {rawData} from '../data/rawData';
import {readData, update} from '../data/data';
import {menuOptions} from './var/managerEnum';
import {AlbumManager} from './subManagers/albumManager';
import {ArtistManager} from './subManagers/artistManager';
import {GroupManager} from './subManagers/groupManager';
import {MusicGenreManager} from './subManagers/genreManager';
import {PlaylistManager} from './subManagers/playlistManager';
import {SongManager} from './subManagers/songManager';
import {writeSongsData} from '../data/dataFunctions/songFunctions';

const inquirer = require('inquirer');

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
    rawData();
    // readData();
    update();
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
