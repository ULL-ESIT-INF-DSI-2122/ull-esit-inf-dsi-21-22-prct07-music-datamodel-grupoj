import {update} from '../../data/data';
import {Album} from '../../objects/album';
import {Artist} from '../../objects/artist';
import {albumCollection, artistCollection, groupCollection,
  songCollection} from '../../data/var/collections';
import {Group} from '../../objects/group';
import {Song} from '../../objects/song';
import {SubManager} from '../manager';
import {manager} from '../../program';
import {albumMenu, printAlbum} from '../var/managerEnum';
import {sortAlbumCreator, sortAlbumName,
  sortAlbumYear} from '../var/sorts/albumSort';

const inquirer = require('inquirer');

/**
 * Clase AlbumManager, permite gestionar el submenu de gestión avanzada
 * de álbum, así como invocar a diferentes métodos que el usuario
 * quiera con el fin de maniùlar la información del sistema
 */
export class AlbumManager implements SubManager<Album> {
  /**
   * Usuario logueado en el sistema
   */
  public user : string;
  /**
   * Constructor vacío
   */
  constructor() {}

  /**
   * @method Muestra la información del álbum que seleccione el usuario
   * @param list Lista de canciones donde eligirá el usuario
   */
  print(list : Album[]) {
    const option : string[] = [];
    list.forEach((album) => {
      option.push(album.getName());
    });
    option.push('- Cancelar');
    console.clear();
    inquirer.prompt({
      type: 'rawlist',
      pageSize: 10,
      name: 'name',
      message: 'Colección de álbumes del sistema: ',
      choices: option,
    }).then((answer : {name: string}) => {
      if (answer.name != '- Cancelar') {
        console.clear();
        const album = list.find((element) => element.getName() === answer.name);
        if (album) album.print();
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
   * @method Muestra las opciones con las que se pueden mostras los álbumes
   * del sistema y ordena en función de los que pida el usuario
   */
  printMode() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      pageSize: 7,
      name: 'option',
      message: 'Elija el modo: ',
      choices: Object.values(printAlbum),
    }).then((answer : {option: string}) => {
      switch (answer.option) {
        case printAlbum.NameLower:
          const nameLower = albumCollection.getList().sort(sortAlbumName);
          this.print(nameLower);
          break;
        case printAlbum.NameUpper:
          const nameUpper = albumCollection.getList().sort(sortAlbumName);
          nameUpper.reverse();
          this.print(nameUpper);
          break;
        case printAlbum.CreatorLower:
          const creatorLower = albumCollection.getList().sort(sortAlbumCreator);
          this.print(creatorLower);
          break;
        case printAlbum.CreatorUpper:
          const creatorUpper = albumCollection.getList().sort(sortAlbumCreator);
          creatorUpper.reverse();
          this.print(creatorUpper);
          break;
        case printAlbum.YearLower:
          const yearLower = albumCollection.getList().sort(sortAlbumYear);
          this.print(yearLower);
          break;
        case printAlbum.YearUpper:
          const yearUpper = albumCollection.getList().sort(sortAlbumYear);
          yearUpper.reverse();
          this.print(yearUpper);
          break;
        case printAlbum.Exit:
          this.management();
          break;
      }
    });
  }

  /**
   * @method Crea y añade a la colección del sistema un álbum con todas
   * sus propiedades necesarias dadas por el usuario
   */
  create() {
    inquirer.prompt({
      name: 'name',
      message: 'Nombre del álbum: ',
    }).then((name : {name: string}) => {
      const album = albumCollection.getList().find((element) =>
        element.getName() === name.name);
      if (!album) {
        const creators : (Artist | Group)[] = [];
        artistCollection.getList().forEach((artist) => {
          creators.push(artist);
        });
        groupCollection.getList().forEach((group) => {
          creators.push(group);
        });
        inquirer.prompt({
          type: 'list',
          name: 'creator',
          message: 'Nombre del creador: ',
          choices: creators,
        }).then((creator : {creator: string}) => {
          inquirer.prompt({
            name: 'year',
            message: 'Año de publicación: ',
          }).then((year : {year: string}) => {
            inquirer.prompt({
              type: 'checkbox',
              name: 'songs',
              message: 'Elija las canciones del álbum: ',
              choices: songCollection.getList(),
            }).then((songs : {songs: string[]}) => {
              const albumName : string = name.name;
              const albumCreator= creators.find((element) =>
                element.getName() === creator.creator);
              const albumYear : number = parseInt(year.year);
              const albumSongs : Song[] = [];
              songs.songs.forEach((name) => {
                const song = songCollection.getList().find((element) =>
                  element.getName() === name);
                if (song) albumSongs.push(song);
              });
              if (albumCreator) {
                const album : Album = new Album(this.user, albumName,
                    albumCreator, albumYear, albumSongs);
                albumCollection.addItem(album);
                console.clear();
                console.log('Se ha creado y añadido su álbum');
                update();
                album.print();
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
          });
        });
      } else {
        console.clear();
        console.log('Ya existe un álbum con ese nombre');
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
   * @method Invoca a la función create() que se encarga de crear un álbum
   */
  add() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      name: 'option',
      message: 'Elija una opción: ',
      choices: ['Crear álbum', 'Atrás'],
    }).then((answer : {option: string}) => {
      if (answer.option === 'Atrás') this.management();
      else this.create();
    });
  }

  /**
   * @method Elimina un álbum que el usuario quiera, siempre y cuando este sea
   * su propietario, de la colección del sistema
   */
  delete() {
    const option : string[] = [];
    albumCollection.getList().forEach((album) => {
      option.push(album.getName());
    });
    option.push('- Cancelar');
    console.clear();
    inquirer.prompt({
      type: 'list',
      pageSize: 10,
      name: 'name',
      message: 'Elija el álbum que desea eliminar: ',
      choices: option,
    }).then((answer : {name: string}) => {
      if (answer.name != '- Cancelar') {
        console.clear();
        const album = albumCollection.getList().find((element) =>
          element.getName() === answer.name);
        if (album) {
          if (album.user === this.user) {
            for (let i = 0; i < albumCollection.getLenght(); i++) {
              if (album.getName() === albumCollection.getList()[i].getName()) {
                albumCollection.getList().splice(i, 1);
                console.log('Se ha eliminado el álbum');
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
   * @method Subgestor que muestra el submenu de álbum e invoca los diferentes
   * métodos de la clase en función de las peticiones del usuario
   */
  management() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      name: 'option',
      message: 'Elija qué desea hacer: ',
      choices: Object.values(albumMenu),
    }).then((answer : {option: string}) => {
      switch (answer.option) {
        case albumMenu.Print:
          this.printMode();
          break;
        case albumMenu.Add:
          this.add();
          break;
        case albumMenu.Del:
          this.delete();
          break;
        case albumMenu.Exit:
          manager.management();
          break;
      }
    });
  }
}
