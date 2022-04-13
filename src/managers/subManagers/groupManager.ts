import {update} from '../../data/data';
import {Artist} from '../../objects/artist';
import {artistCollection, groupCollection} from '../../data/var/collections';
import {Group} from '../../objects/group';
import {SubManager} from '../manager';
import {manager} from '../../program';
import {groupMenu, printGroup} from '../var/managerEnum';
import {sortGroupName, sortGroupRep,
  sortGroupYear} from '../var/sorts/groupSort';

const inquirer = require('inquirer');

/**
 * Clase GroupManager, permite gestionar el submenu de gestión avanzada
 * de grupo, así como invocar a diferentes métodos que el usuario
 * quiera con el fin de maniùlar la información del sistema
 */
export class GroupManager implements SubManager<Group> {
  /**
   * Usuario logueado en el sistema
   */
  public user : string;
  /**
   * Constructor vacío
   */
  constructor() {}

  /**
   * @method Muestra la información del grupo que seleccione el usuario
   * @param list Lista de canciones donde eligirá el usuario
   */
  print(list : Group[]) {
    const option : string[] = [];
    list.forEach((group) => {
      option.push(group.getName());
    });
    option.push('-Cancelar');
    console.clear();
    inquirer.prompt({
      type: 'rawlist',
      pageSize: 10,
      name: 'name',
      message: 'Colección de grupos del sistema: ',
      choices: option,
    }).then((answer : {name: string}) => {
      if (answer.name != '-Cancelar') {
        console.clear();
        const group = list.find((element) => element.getName() ===answer.name);
        if (group) group.print();
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
   * @method Muestra las opciones con las que se pueden mostras los grupos
   * del sistema y ordena en función de los que pida el usuario
   */
  printMode() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      pageSize: 7,
      name: 'option',
      message: 'Elija el modo: ',
      choices: Object.values(printGroup),
    }).then((answer : {option: string}) => {
      switch (answer.option) {
        case printGroup.NameLower:
          const nameLower = groupCollection.getList().sort(sortGroupName);
          this.print(nameLower);
          break;
        case printGroup.NameUpper:
          const nameUpper = groupCollection.getList().sort(sortGroupName);
          nameUpper.reverse();
          this.print(nameUpper);
          break;
        case printGroup.YearLower:
          const yearLower = groupCollection.getList().sort(sortGroupYear);
          this.print(yearLower);
          break;
        case printGroup.YearUpper:
          const yearUpper = groupCollection.getList().sort(sortGroupYear);
          yearUpper.reverse();
          this.print(yearUpper);
          break;
        case printGroup.RepLower:
          const repLower = groupCollection.getList().sort(sortGroupRep);
          this.print(repLower);
          break;
        case printGroup.RepUpper:
          const repUpper = groupCollection.getList().sort(sortGroupRep);
          repUpper.reverse();
          this.print(repUpper);
          break;
        case printGroup.Exit:
          this.management();
          break;
      }
    });
  }

  /**
   * @method Crea y añade a la colección del sistema un grupo con todas
   * sus propiedades necesarias dadas por el usuario
   */
  create() {
    inquirer.prompt({
      name: 'name',
      message: 'Nombre del grupo: ',
    }).then((name : {name: string}) => {
      const group = groupCollection.getList().find((element) =>
        element.getName() === name.name);
      if (!group) {
        inquirer.prompt({
          type: 'checkbox',
          name: 'artists',
          message: 'Número de oyentes de forma individual: ',
          choices: artistCollection.getList(),
        }).then((artists : {artists: string[]}) => {
          inquirer.prompt({
            name: 'year',
            message: 'Año de creación del grupo: ',
          }).then((year : {year: string}) => {
            inquirer.prompt({
              name: 'rep',
              message: 'Número de oyentes: ',
            }).then((rep : {rep: string}) => {
              const groupName : string = name.name;
              const groupArtists : Artist[] = [];
              artists.artists.forEach((name) => {
                const artist = artistCollection.getList().find((element) =>
                  element.getName() === name);
                if (artist) groupArtists.push(artist);
              });
              const groupYear = parseInt(year.year);
              const groupRep : number = parseInt(rep.rep);
              const group : Group = new Group(this.user, groupName,
                  groupArtists, groupYear, groupRep);
              groupCollection.addItem(group);
              console.clear();
              console.log('Se ha creado y añadido su grupo');
              update();
              group.print();
              inquirer.prompt({
                type: 'list',
                name: 'end',
                message: '------',
                choices: ['Volver'],
              }).then(() => {
                this.add();
              });
            });
          });
        });
      } else {
        console.clear();
        console.log('Ya existe un grupo con ese nombre');
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
   * @method Invoca a la función create() que se encarga de crear un grupo
   */
  add() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      name: 'option',
      message: 'Elija una opción: ',
      choices: ['Crear grupo', 'Atrás'],
    }).then((answer : {option: string}) => {
      if (answer.option === 'Atrás') this.management();
      else this.create();
    });
  }

  /**
   * @method Elimina un grupo que el usuario quiera, siempre y cuando este sea
   * su propietario, de la colección del sistema
   */
  delete() {
    const option : string[] = [];
    groupCollection.getList().forEach((group) => {
      option.push(group.getName());
    });
    option.push('-Cancelar');
    console.clear();
    inquirer.prompt({
      type: 'list',
      pageSize: 10,
      name: 'name',
      message: 'Elija el grupo que desea eliminar: ',
      choices: option,
    }).then((answer : {name: string}) => {
      if (answer.name != '-Cancelar') {
        console.clear();
        const group = groupCollection.getList().find((element) =>
          element.getName() === answer.name);
        if (group) {
          if (group.user === this.user) {
            for (let i = 0; i < groupCollection.getLenght(); i++) {
              if (group.getName() === groupCollection.getList()[i].getName()) {
                groupCollection.getList().splice(i, 1);
                console.log('Se ha eliminado el grupo');
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
   * @method Subgestor que muestra el submenu de grupo e invoca los diferentes
   * métodos de la clase en función de las peticiones del usuario
   */
  management() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      name: 'option',
      message: 'Elija qué desea hacer: ',
      choices: Object.values(groupMenu),
    }).then((answer : {option: string}) => {
      switch (answer.option) {
        case groupMenu.Print:
          this.printMode();
          break;
        case groupMenu.Add:
          this.add();
          break;
        case groupMenu.Del:
          this.delete();
          break;
        case groupMenu.Exit:
          manager.management();
          break;
      }
    });
  }
}
