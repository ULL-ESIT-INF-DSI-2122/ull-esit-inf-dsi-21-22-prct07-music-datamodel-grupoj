import {update} from '../data';
import {musicGenreCollection} from '../objects/collection';
import {MusicGenre} from '../objects/musicGenre';
import {manager, SubManager} from './manager';
import {musicGenreMenu, printGenre} from './managerEnum';
import {sortGenreName} from './sorts/genreSort';

const inquirer = require('inquirer');

/**
 * Clase MusicGenreManager, permite gestionar el submenu de gestión avanzada
 * de género musical, así como invocar a diferentes métodos que el usuario
 * quiera con el fin de maniùlar la información del sistema
 */
export class MusicGenreManager implements SubManager<MusicGenre> {
  /**
   * Usuario logueado en el sistema
   */
  public user : string;
  /**
   * Constructor vacío
   */
  constructor() {}

  /**
   * @method Muestra la información del género musical que seleccione el usuario
   * @param list Lista de canciones donde eligirá el usuario
   */
  print(list : MusicGenre[]) {
    const option : string[] = [];
    list.forEach((genre) => {
      option.push(genre.getName());
    });
    option.push('-Cancelar');
    console.clear();
    inquirer.prompt({
      type: 'rawlist',
      pageSize: 10,
      name: 'name',
      message: 'Colección de géneros musicales del sistema: ',
      choices: option,
    }).then((answer : {name: string}) => {
      if (answer.name != '-Cancelar') {
        console.clear();
        const genre = list.find((element) => element.getName() ===answer.name);
        if (genre) genre.print();
        inquirer.prompt({
          type: 'list',
          name: 'end',
          message: '------',
          choices: ['Volver'],
        }).then(() => {
          this.print(list);
        });
      } else this.printMode();
    });
  }

  /**
   * @method Muestra las opciones con las que se pueden mostras los géneros
   * musicales del sistema y ordena en función de los que pida el usuario
   */
  printMode() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      pageSize: 3,
      name: 'option',
      message: 'Elija el modo: ',
      choices: Object.values(printGenre),
    }).then((answer : {option: string}) => {
      switch (answer.option) {
        case printGenre.NameLower:
          const nameLower = musicGenreCollection.getList().sort(sortGenreName);
          this.print(nameLower);
          break;
        case printGenre.NameUpper:
          const nameUpper = musicGenreCollection.getList().sort(sortGenreName);
          nameUpper.reverse();
          this.print(nameUpper);
          break;
        case printGenre.Exit:
          this.management();
          break;
      }
    });
  }

  /**
   * @method Crea y añade a la colección del sistema un género musical con todas
   * sus propiedades necesarias dadas por el usuario
   */
  create() {
    inquirer.prompt({
      name: 'name',
      message: 'Nombre del género musical: ',
    }).then((name : {name: string}) => {
      const genre = musicGenreCollection.getList().find((element) =>
        element.getName() === name.name);
      if (!genre) {
        const genreName : string = name.name;
        const genre : MusicGenre = new MusicGenre(this.user, genreName);
        musicGenreCollection.addItem(genre);
        console.clear();
        console.log('Se ha creado y añadido su género musical');
        update();
        genre.print();
        inquirer.prompt({
          type: 'list',
          name: 'end',
          message: '------',
          choices: ['Volver'],
        }).then(() => {
          this.add();
        });
      } else {
        console.clear();
        console.log('Ya existe un género musical con ese nombre');
        inquirer.prompt({
          type: 'list',
          name: 'end',
          message: '------',
          choices: ['Volver'],
        }).then(() => {
          this.add();
        });
      }
    });
  }

  /**
   * @method Invoca a la función create() que se encarga de crear
   * un género musical
   */
  add() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      name: 'option',
      message: 'Elija una opción: ',
      choices: ['Crear género musical', 'Atrás'],
    }).then((answer : {option: string}) => {
      if (answer.option === 'Atrás') this.management();
      else this.create();
    });
  }

  /**
   * @method Elimina un género musical que el usuario quiera, siempre y cuando
   * este sea su propietario, de la colección del sistema
   */
  delete() {
    const option : string[] = [];
    musicGenreCollection.getList().forEach((genre) => {
      option.push(genre.getName());
    });
    option.push('-Cancelar');
    console.clear();
    inquirer.prompt({
      type: 'list',
      pageSize: 10,
      name: 'name',
      message: 'Elija el género musical que desea eliminar: ',
      choices: option,
    }).then((answer : {name: string}) => {
      if (answer.name != '-Cancelar') {
        console.clear();
        const genre = musicGenreCollection.getList().find((element) =>
          element.getName() === answer.name);
        if (genre) {
          if (genre.user === this.user) {
            for (let i = 0; i < musicGenreCollection.getLenght(); i++) {
              if (genre.getName() ===
                musicGenreCollection.getList()[i].getName()) {
                musicGenreCollection.getList().splice(i, 1);
                console.log('Se ha eliminado el género musical');
                update();
              }
            }
          } else console.log('No puede borrarlo ya que no es el propietario');
        }
        inquirer.prompt({
          type: 'list',
          name: 'end',
          message: '------',
          choices: ['Volver'],
        }).then(() => {
          this.delete();
        });
      } else this.management();
    });
  }

  /**
   * @method Subgestor que muestra el submenu de género musical e invoca los
   * diferentes métodos de la clase en función de las peticiones del usuario
   */
  management() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      name: 'option',
      message: 'Elija qué desea hacer: ',
      choices: Object.values(musicGenreMenu),
    }).then((answer : {option: string}) => {
      switch (answer.option) {
        case musicGenreMenu.Print:
          this.printMode();
          break;
        case musicGenreMenu.Add:
          this.add();
          break;
        case musicGenreMenu.Del:
          this.delete();
          break;
        case musicGenreMenu.Exit:
          manager.management();
          break;
      }
    });
  }
}
