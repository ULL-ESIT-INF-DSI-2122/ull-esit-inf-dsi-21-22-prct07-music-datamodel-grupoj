import {update} from '../../data/data';
import {Artist} from '../../objects/artist';
import {artistCollection} from '../../data/var/collections';
import {SubManager} from '../manager';
import {manager} from '../../program';
import {artistMenu, printArtist} from '../var/managerEnum';
import {sortArtistName, sortArtistRep} from '../var/sorts/artistSort';

const inquirer = require('inquirer');

/**
 * Clase ArtistManager, permite gestionar el submenu de gestión avanzada
 * de artista, así como invocar a diferentes métodos que el usuario
 * quiera con el fin de maniùlar la información del sistema
 */
export class ArtistManager implements SubManager<Artist> {
  /**
   * Usuario logueado en el sistema
   */
  public user : string;
  /**
   * Constructor vacío
   */
  constructor() {}

  /**
   * @method Muestra la información del artista que seleccione el usuario
   * @param list Lista de canciones donde eligirá el usuario
   */
  print(list : Artist[]) {
    const option : string[] = [];
    list.forEach((artist) => {
      option.push(artist.getName());
    });
    option.push('- Cancelar');
    console.clear();
    inquirer.prompt({
      type: 'rawlist',
      pageSize: 10,
      name: 'name',
      message: 'Colección de artistas del sistema: ',
      choices: option,
    }).then((answer : {name: string}) => {
      if (answer.name != '- Cancelar') {
        console.clear();
        const artist = list.find((element) => element.getName() ===answer.name);
        if (artist) artist.print();
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
   * @method Muestra las opciones con las que se pueden mostras los artistas
   * del sistema y ordena en función de los que pida el usuario
   */
  printMode() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      pageSize: 5,
      name: 'option',
      message: 'Elija el modo: ',
      choices: Object.values(printArtist),
    }).then((answer : {option: string}) => {
      switch (answer.option) {
        case printArtist.NameLower:
          const nameLower = artistCollection.getList().sort(sortArtistName);
          this.print(nameLower);
          break;
        case printArtist.NameUpper:
          const nameUpper = artistCollection.getList().sort(sortArtistName);
          nameUpper.reverse();
          this.print(nameUpper);
          break;
        case printArtist.RepLower:
          const repLower = artistCollection.getList().sort(sortArtistRep);
          this.print(repLower);
          break;
        case printArtist.RepUpper:
          const repUpper = artistCollection.getList().sort(sortArtistRep);
          repUpper.reverse();
          this.print(repUpper);
          break;
        case printArtist.Exit:
          this.management();
          break;
      }
    });
  }

  /**
   * @method Crea y añade a la colección del sistema un artista con todas
   * sus propiedades necesarias dadas por el usuario
   */
  create() {
    inquirer.prompt({
      name: 'name',
      message: 'Nombre del artista: ',
    }).then((name : {name: string}) => {
      const artist = artistCollection.getList().find((element) =>
        element.getName() === name.name);
      if (!artist) {
        inquirer.prompt({
          name: 'rep',
          message: 'Número de oyentes de forma individual: ',
        }).then((rep : {rep: string}) => {
          const artistName : string = name.name;
          const artistRep : number = parseInt(rep.rep);
          const artist : Artist = new Artist(this.user, artistName, artistRep);
          artistCollection.addItem(artist);
          console.clear();
          console.log('Se ha creado y añadido su artista');
          update();
          artist.print();
          inquirer.prompt({
            type: 'list',
            name: 'end',
            message: '------',
            choices: ['Volver'],
          }).then(() => {
            this.add();
          });
        });
      } else {
        console.clear();
        console.log('Ya existe un artista con ese nombre');
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
   * @method Invoca a la función create() que se encarga de crear un artista
   */
  add() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      name: 'option',
      message: 'Elija una opción: ',
      choices: ['Crear artista', 'Atrás'],
    }).then((answer : {option: string}) => {
      if (answer.option === 'Atrás') this.management();
      else this.create();
    });
  }

  /**
   * @method Elimina un artista que el usuario quiera, siempre y cuando este sea
   * su propietario, de la colección del sistema
   */
  delete() {
    const option : string[] = [];
    artistCollection.getList().forEach((artist) => {
      option.push(artist.getName());
    });
    option.push('- Cancelar');
    console.clear();
    inquirer.prompt({
      type: 'list',
      pageSize: 10,
      name: 'name',
      message: 'Elija el artista que desea eliminar: ',
      choices: option,
    }).then((answer : {name: string}) => {
      if (answer.name != '- Cancelar') {
        console.clear();
        const artist = artistCollection.getList().find((element) =>
          element.getName() === answer.name);
        if (artist) {
          if (artist.user === this.user) {
            for (let i = 0; i < artistCollection.getLenght(); i++) {
              if (artist.getName() ===artistCollection.getList()[i].getName()) {
                artistCollection.getList().splice(i, 1);
                console.log('Se ha eliminado el artista');
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
   * @method Subgestor que muestra el submenu de artista e invoca los diferentes
   * métodos de la clase en función de las peticiones del usuario
   */
  management() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      name: 'option',
      message: 'Elija qué desea hacer: ',
      choices: Object.values(artistMenu),
    }).then((answer : {option: string}) => {
      switch (answer.option) {
        case artistMenu.Print:
          this.printMode();
          break;
        case artistMenu.Add:
          this.add();
          break;
        case artistMenu.Del:
          this.delete();
          break;
        case artistMenu.Exit:
          manager.management();
          break;
      }
    });
  }
}
