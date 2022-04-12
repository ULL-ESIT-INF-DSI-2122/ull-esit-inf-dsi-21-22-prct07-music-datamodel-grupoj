import {update} from '../../data/oldData';
import {Artist} from '../../objects/artist';
import {artistCollection, groupCollection, musicGenreCollection,
  songCollection} from '../../data/var/collection';
import {Group} from '../../objects/group';
import {Song} from '../../objects/song';
import {manager, SubManager} from '../manager';
import {printSongs, songMenu} from '../var/managerEnum';
import {sortSongCreator, sortSongGenre, sortSongLenght,
  sortSongName, sortSongRep} from '../var/sorts/songSort';

const inquirer = require('inquirer');

/**
 * Clase SongManager, permite gestionar el submenu de gestión avanzada
 * de canción, así como invocar a diferentes métodos que el usuario
 * quiera con el fin de maniùlar la información del sistema
 */
export class SongManager implements SubManager<Song> {
  /**
   * Usuario logueado en el sistema
   */
  public user : string;
  /**
   * Constructor vacío
   */
  constructor() {}

  /**
   * @method Muestra la información de la canción que seleccione el usuario
   * @param list Lista de canciones donde eligirá el usuario
   */
  print(list : Song[]) {
    const option : string[] = [];
    list.forEach((song) => {
      option.push(song.getName());
    });
    option.push('-Cancelar');
    console.clear();
    inquirer.prompt({
      type: 'rawlist',
      pageSize: 10,
      name: 'name',
      message: 'Colección de canciones del sistema: ',
      choices: option,
    }).then((answer : {name: string}) => {
      if (answer.name != '-Cancelar') {
        console.clear();
        const song = list.find((element) => element.getName() === answer.name);
        if (song) song.print();
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
   * @method Muestra las opciones con las que se pueden mostras las canciones
   * del sistema y ordena en función de los que pida el usuario
   */
  printMode() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      pageSize: 12,
      name: 'option',
      message: 'Elija el modo: ',
      choices: Object.values(printSongs),
    }).then((answer : {option: string}) => {
      switch (answer.option) {
        case printSongs.NameLower:
          const nameLower = songCollection.getList().sort(sortSongName);
          this.print(nameLower);
          break;
        case printSongs.NameUpper:
          const nameUpper = songCollection.getList().sort(sortSongName);
          nameUpper.reverse();
          this.print(nameUpper);
          break;
        case printSongs.CreatorLower:
          const creatorLower = songCollection.getList().sort(sortSongCreator);
          this.print(creatorLower);
          break;
        case printSongs.CreatorUpper:
          const creatorUpper = songCollection.getList().sort(sortSongCreator);
          creatorUpper.reverse();
          this.print(creatorUpper);
          break;
        case printSongs.LenghtLower:
          const lenghtLower = songCollection.getList().sort(sortSongLenght);
          this.print(lenghtLower);
          break;
        case printSongs.LenghtUpper:
          const lenghtUpper = songCollection.getList().sort(sortSongLenght);
          lenghtUpper.reverse();
          this.print(lenghtUpper);
          break;
        case printSongs.GenreLower:
          const genreLower = songCollection.getList().sort(sortSongGenre);
          this.print(genreLower);
          break;
        case printSongs.GenreUpper:
          const genreUpper = songCollection.getList().sort(sortSongGenre);
          genreUpper.reverse();
          this.print(genreUpper);
          break;
        case printSongs.RepLower:
          const repLower = songCollection.getList().sort(sortSongRep);
          this.print(repLower);
          break;
        case printSongs.RepUpper:
          const repUpper = songCollection.getList().sort(sortSongRep);
          repUpper.reverse();
          this.print(repUpper);
          break;
        case printSongs.Singles:
          const singles : Song[] = [];
          songCollection.getList().forEach((song) => {
            if (song.getSingle() === true) singles.push(song);
          });
          this.print(singles);
          break;
        case printSongs.Exit:
          this.management();
          break;
      }
    });
  }

  /**
   * @method Crea y añade a la colección del sistema una canción con todas
   * sus propiedades necesarias dadas por el usuario
   */
  create() {
    inquirer.prompt({
      name: 'name',
      message: 'Nombre de la canción: ',
    }).then((name : {name: string}) => {
      const song = songCollection.getList().find((element) =>
        element.getName() === name.name);
      if (!song) {
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
            name: 'time',
            message: 'Duración de la canción en segundos: ',
          }).then((time : {time: string}) => {
            inquirer.prompt({
              type: 'list',
              name: 'genre',
              message: 'Género musical de la canción: ',
              choices: musicGenreCollection.getList(),
            }).then((genre : {genre: string}) => {
              inquirer.prompt({
                name: 'rep',
                message: 'Reproducciones de la canción: ',
              }).then((rep : {rep: string}) => {
                const songName : string = name.name;
                const songCreator= creators.find((element) =>
                  element.getName() === creator.creator);
                const songLenght : number = parseInt(time.time);
                const songGenre =
                  musicGenreCollection.getList().find((element) =>
                    element.getName() === genre.genre);
                const songRep : number = parseInt(rep.rep);
                if (songCreator && songGenre) {
                  const song : Song = new Song(this.user, songName, songCreator,
                      songLenght, songGenre, songRep);
                  songCollection.addItem(song);
                  console.clear();
                  console.log('Se ha creado y añadido su canción');
                  update();
                  song.print();
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
        });
      } else {
        console.clear();
        console.log('Ya existe una canción con ese nombre');
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
   * @method Invoca a la función create() que se encarga de crear una canción
   */
  add() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      name: 'option',
      message: 'Elija una opción: ',
      choices: ['Crear canción', 'Atrás'],
    }).then((answer : {option: string}) => {
      if (answer.option === 'Atrás') this.management();
      else this.create();
    });
  }

  /**
   * @method Elimina una canción que el usuario quiera, siempre y cuando
   * este sea su propietario, de la colección del sistema
   */
  delete() {
    const option : string[] = [];
    songCollection.getList().forEach((song) => {
      option.push(song.getName());
    });
    option.push('-Cancelar');
    console.clear();
    inquirer.prompt({
      type: 'list',
      pageSize: 10,
      name: 'name',
      message: 'Elija la canción que desea eliminar: ',
      choices: option,
    }).then((answer : {name: string}) => {
      if (answer.name != '-Cancelar') {
        console.clear();
        const song = songCollection.getList().find((element) =>
          element.getName() === answer.name);
        if (song) {
          if (song.user === this.user) {
            for (let i = 0; i < songCollection.getLenght(); i++) {
              if (song.getName() === songCollection.getList()[i].getName()) {
                songCollection.getList().splice(i, 1);
                console.log('Se ha eliminado la canción');
                update();
              }
            }
          } else console.log('No puede borrarla ya que no es el propietario');
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
   * @method Subgestor que muestra el submenu de canción e invoca los diferentes
   * métodos de la clase en función de las peticiones del usuario
   */
  management() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      name: 'option',
      message: 'Elija qué desea hacer: ',
      choices: Object.values(songMenu),
    }).then((answer : {option: string}) => {
      switch (answer.option) {
        case songMenu.Print:
          this.printMode();
          break;
        case songMenu.Add:
          this.add();
          break;
        case songMenu.Del:
          this.delete();
          break;
        case songMenu.Exit:
          manager.management();
          break;
      }
    });
  }
}
