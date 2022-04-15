import {update, writeData} from '../../data/data';
import {playlistCollection, songCollection} from '../../data/var/collections';
import {Playlist} from '../../objects/playlist';
import {Song} from '../../objects/song';
import {SubManager} from '../manager';
import {manager} from '../../program';
import {playlistMenu, printPlaylist, printSongs} from '../var/managerEnums';
import {sortPlaylistLenght, sortPlaylistName} from '../var/sorts/playlistSort';
import {sortSongName, sortSongCreator,
  sortSongLenght, sortSongRep} from '../var/sorts/songSort';

const inquirer = require('inquirer');

/**
 * Clase PlaylistManager, permite gestionar el submenu de gestión avanzada
 * de playlist, así como invocar a diferentes métodos que el usuario
 * quiera con el fin de maniùlar la información del sistema
 */
export class PlaylistManager implements SubManager<Playlist> {
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
  printSong(list : Song[]) {
    const option : string[] = [];
    list.forEach((song) => {
      option.push(song.getName());
    });
    option.push('- Cancelar');
    console.clear();
    inquirer.prompt({
      type: 'rawlist',
      pageSize: 10,
      name: 'name',
      message: 'Canciones de la playlist: ',
      choices: option,
    }).then((answer : {name: string}) => {
      if (answer.name != '- Cancelar') {
        console.clear();
        const song = list.find((element) => element.getName() === answer.name);
        if (song) song.print();
        inquirer.prompt({
          type: 'list',
          name: 'end',
          message: '------',
          choices: ['Volver'],
        }).then(() => {
          this.printSong(list);
        });
      } else this.printModeSong();
    });
  }

  /**
   * @method Muestra las opciones con las que se pueden mostras las canciones
   * de la playlist y ordena en función de los que pida el usuario
   */
  printModeSong() {
    const option : string[] = [];
    playlistCollection.getList().forEach((playlist) => {
      option.push(playlist.getName());
    });
    option.push('- Cancelar');
    console.clear();
    inquirer.prompt({
      type: 'rawlist',
      pageSize: 10,
      name: 'name',
      message: 'Colección de playlists del sistema: ',
      choices: option,
    }).then((answer : {name: string}) => {
      if (answer.name != '- Cancelar') {
        console.clear();
        const playlist = playlistCollection.getList().find((element) =>
          element.getName() === answer.name);
        if (playlist) {
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
                const nameLower = playlist.getSongs().sort(sortSongName);
                this.printSong(nameLower);
                break;
              case printSongs.NameUpper:
                const nameUpper = playlist.getSongs().sort(sortSongName);
                nameUpper.reverse();
                this.printSong(nameUpper);
                break;
              case printSongs.CreatorLower:
                const creatorLower = playlist.getSongs().sort(sortSongCreator);
                this.printSong(creatorLower);
                break;
              case printSongs.CreatorUpper:
                const creatorUpper = playlist.getSongs().sort(sortSongCreator);
                creatorUpper.reverse();
                this.printSong(creatorUpper);
                break;
              case printSongs.LenghtLower:
                const lenghtLower = playlist.getSongs().sort(sortSongLenght);
                this.printSong(lenghtLower);
                break;
              case printSongs.LenghtUpper:
                const lenghtUpper = playlist.getSongs().sort(sortSongLenght);
                lenghtUpper.reverse();
                this.printSong(lenghtUpper);
                break;
              case printSongs.RepLower:
                const repLower = playlist.getSongs().sort(sortSongRep);
                this.printSong(repLower);
                break;
              case printSongs.RepUpper:
                const repUpper = playlist.getSongs().sort(sortSongRep);
                repUpper.reverse();
                this.printSong(repUpper);
                break;
              case printSongs.SinglesY:
                const singlesY : Song[] = [];
                songCollection.getList().forEach((song) => {
                  if (song.getSingle() === true) singlesY.push(song);
                });
                this.printSong(singlesY);
                break;
              case printSongs.SinglesN:
                const singlesN : Song[] = [];
                songCollection.getList().forEach((song) => {
                  if (song.getSingle() === false) singlesN.push(song);
                });
                this.printSong(singlesN);
                break;
              case printSongs.Exit:
                this.printMode();
                break;
            }
          });
        }
      } else this.printMode();
    });
  }

  /**
   * @method Muestra la información de la playlist que seleccione el usuario
   * @param list Lista de canciones donde eligirá el usuario
   */
  print(list : Playlist[]) {
    const option : string[] = [];
    list.forEach((playlist) => {
      option.push(playlist.getName());
    });
    option.push('- Cancelar');
    console.clear();
    inquirer.prompt({
      type: 'rawlist',
      pageSize: 10,
      name: 'name',
      message: 'Colección de playlists del sistema: ',
      choices: option,
    }).then((answer : {name: string}) => {
      if (answer.name != '- Cancelar') {
        console.clear();
        const playlist = list.find((element) =>
          element.getName() === answer.name);
        if (playlist) playlist.print();
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
   * @method Muestra las opciones con las que se pueden mostras las playlist
   * del sistema y ordena en función de los que pida el usuario
   */
  printMode() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      pageSize: 6,
      name: 'option',
      message: 'Elija el modo: ',
      choices: Object.values(printPlaylist),
    }).then((answer : {option: string}) => {
      switch (answer.option) {
        case printPlaylist.NameLower:
          const nameLower = playlistCollection.getList().sort(sortPlaylistName);
          this.print(nameLower);
          break;
        case printPlaylist.NameUpper:
          const nameUpper = playlistCollection.getList().sort(sortPlaylistName);
          nameUpper.reverse();
          this.print(nameUpper);
          break;
        case printPlaylist.LenghtLower:
          const lenghtLower =
            playlistCollection.getList().sort(sortPlaylistLenght);
          this.print(lenghtLower);
          break;
        case printPlaylist.LenghtUpper:
          const lenghtUpper =
            playlistCollection.getList().sort(sortPlaylistLenght);
          lenghtUpper.reverse();
          this.print(lenghtUpper);
          break;
        case printPlaylist.Songs:
          this.printModeSong();
          break;
        case printPlaylist.Exit:
          this.management();
          break;
      }
    });
  }

  /**
   * @method Crea y añade a la colección del sistema una playlist con todas
   * sus propiedades necesarias dadas por el usuario
   */
  create() {
    inquirer.prompt({
      name: 'name',
      message: 'Nombre de la playlist: ',
    }).then((name : {name: string}) => {
      const playlist = playlistCollection.getList().find((element) =>
        element.getName() === name.name);
      if (!playlist) {
        inquirer.prompt({
          type: 'checkbox',
          name: 'songs',
          message: 'Elija las canciones de la playlist: ',
          choices: songCollection.getList(),
        }).then((songs : {songs: string[]}) => {
          const playlistName : string = name.name;
          const playlistSongs : Song[] = [];
          songs.songs.forEach((name) => {
            const song = songCollection.getList().find((element) =>
              element.getName() === name);
            if (song) playlistSongs.push(song);
          });
          const playlist : Playlist = new Playlist(this.user, playlistName,
              playlistSongs);
          playlistCollection.addItem(playlist);
          console.clear();
          console.log('Se ha creado y añadido su playlist');
          update();
          writeData();
          playlist.print();
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
        console.log('Ya existe una playlist con ese nombre');
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
   * @method Crea y añade a la colección del sistema una playlist creada
   * a partir de una ya existente, y completada por el usuario
   */
  append() {
    const option : string[] = [];
    playlistCollection.getList().forEach((playlist) => {
      option.push(playlist.getName());
    });
    option.push('- Cancelar');
    console.clear();
    inquirer.prompt({
      type: 'rawlist',
      pageSize: 10,
      name: 'name',
      message: 'Elija playlist de referencia: ',
      choices: option,
    }).then((answer : {name: string}) => {
      if (answer.name != '- Cancelar') {
        const playlist = playlistCollection.getList().find((element) =>
          element.getName() === answer.name);
        if (playlist) {
          const playlistSongs : Song[] = [];
          playlist.getSongs().forEach((song) => {
            playlistSongs.push(song);
          });
          inquirer.prompt({
            name: 'name',
            message: 'Nombre de la nueva playlist: ',
          }).then((name : {name: string}) => {
            const leftSongs : Song[] = [];
            songCollection.getList().forEach((song) => {
              leftSongs.push(song);
            });
            for (let i = 0; i < leftSongs.length; i++) {
              playlist.getSongs().forEach((song) => {
                if (song.getName() === leftSongs[i].getName()) {
                  leftSongs.splice(i, 1);
                }
              });
            }
            inquirer.prompt({
              type: 'checkbox',
              name: 'songs',
              message: 'Elija las canciones nuevas que se añadirán: ',
              choices: leftSongs,
            }).then((songs : {songs: string[]}) => {
              const playlistName : string = name.name;
              songs.songs.forEach((name) => {
                const song = songCollection.getList().find((element) =>
                  element.getName() === name);
                if (song) playlistSongs.push(song);
              });
              const playlist : Playlist = new Playlist(this.user, playlistName,
                  playlistSongs);
              playlistCollection.addItem(playlist);
              console.clear();
              console.log('Se ha creado y añadido su playlist');
              update();
              writeData();
              playlist.print();
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
        }
      } else this.add();
    });
  }

  /**
   * @method Invoca a la función create() o appen() dependiendo de si
   * el usuario quiere crear una playlist desde cero o a partir de una existente
   */
  add() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      name: 'option',
      message: 'Elija una opción: ',
      choices: ['Crear playlist desde cero',
        'Crear playlist a partir de otra existente', 'Atrás'],
    }).then((answer : {option: string}) => {
      if (answer.option === 'Atrás') this.management();
      else if (answer.option === 'Crear playlist desde cero') this.create();
      else this.append();
    });
  }

  /**
   * @method Elimina una playlist que el usuario quiera, siempre y cuando
   * este sea su propietario, de la colección del sistema
   */
  delete() {
    const option : string[] = [];
    playlistCollection.getList().forEach((playlist) => {
      option.push(playlist.getName());
    });
    option.push('- Cancelar');
    console.clear();
    inquirer.prompt({
      type: 'list',
      pageSize: 10,
      name: 'name',
      message: 'Elija la playlist que desea eliminar: ',
      choices: option,
    }).then((answer : {name: string}) => {
      if (answer.name != '- Cancelar') {
        console.clear();
        const playlist = playlistCollection.getList().find((element) =>
          element.getName() === answer.name);
        if (playlist) {
          if (playlist.user === this.user) {
            for (let i = 0; i < playlistCollection.getLenght(); i++) {
              if (playlist.getName() ===
                playlistCollection.getList()[i].getName()) {
                playlistCollection.getList().splice(i, 1);
                console.log('Se ha eliminado la playlist');
                update();
                writeData();
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
   * @method Permite añadir una o varias canciones del sistema a una playlist
   * @param list Lista de canciones que se toma como referencia
   */
  insert(list : Playlist) {
    const leftSongs : Song[] = [];
    songCollection.getList().forEach((song) => {
      leftSongs.push(song);
    });
    for (let i = 0; i < leftSongs.length; i++) {
      list.getSongs().forEach((song) => {
        if (song.getName() === leftSongs[i].getName()) {
          leftSongs.splice(i, 1);
        }
      });
    }
    console.clear();
    inquirer.prompt({
      type: 'checkbox',
      name: 'songs',
      message: 'Elija las canciones que quiera añadir: ',
      choices: leftSongs,
    }).then((songs : {songs: string[]}) => {
      for (let i = 0; i < playlistCollection.getLenght(); i++) {
        if (list.getName() === playlistCollection.getList()[i].getName()) {
          songs.songs.forEach((name) => {
            const song = songCollection.getList().find((element) =>
              element.getName() === name);
            if (song) playlistCollection.getList()[i].getSongs().push(song);
          });
          console.log('Se agregaron las canciones a la playlist');
          update();
          writeData();
        }
      }
      inquirer.prompt({
        type: 'list',
        name: 'end',
        message: '------',
        choices: ['Volver'],
      }).then(() => {
        this.mod();
      });
    });
  }

  /**
   * @method Permite eliminar una o varias canciones de una playlist del sitema
   * @param list Lista de canciones que se toma como referencia
   */
  splice(list : Playlist) {
    console.clear();
    inquirer.prompt({
      type: 'checkbox',
      name: 'songs',
      message: 'Elija las canciones que quiera añadir: ',
      choices: list.getSongs(),
    }).then((songs : {songs: string[]}) => {
      for (let i = 0; i < playlistCollection.getLenght(); i++) {
        if (list.getName() === playlistCollection.getList()[i].getName()) {
          songs.songs.forEach((name) => {
            const song = songCollection.getList().find((element) =>
              element.getName() === name);
            if (song) {
              for (let j = 0;
                j < playlistCollection.getList()[i].getSongs().length; j++) {
                if (song.getName() ===
                  playlistCollection.getList()[i].getSongs()[j].getName()) {
                  playlistCollection.getList()[i].getSongs().splice(j, 1);
                }
              }
            }
          });
          console.log('Se eliminaron las canciones de la playlist');
          update();
          writeData();
        }
      }
      inquirer.prompt({
        type: 'list',
        name: 'end',
        message: '------',
        choices: ['Volver'],
      }).then(() => {
        this.mod();
      });
    });
  }

  /**
   * @method Permite al usuario elegir entre modificar una playlist añadiéndole
   * canciones, invocando a la función insert(), o si modificarla borrándole
   * canciones, invocando a la función splice(), siempre y cuando el usuario sea
   * el propietario de la playlist
   */
  mod() {
    const option : string[] = [];
    playlistCollection.getList().forEach((playlist) => {
      option.push(playlist.getName());
    });
    option.push('- Cancelar');
    console.clear();
    inquirer.prompt({
      type: 'list',
      pageSize: 10,
      name: 'name',
      message: 'Elija la playlist que desea modificar: ',
      choices: option,
    }).then((answer : {name: string}) => {
      if (answer.name != '- Cancelar') {
        console.clear();
        const playlist = playlistCollection.getList().find((element) =>
          element.getName() === answer.name);
        if (playlist) {
          if (playlist.user === this.user) {
            console.clear();
            inquirer.prompt({
              type: 'list',
              name: 'option',
              message: 'Elija una opción: ',
              choices: ['Añadir canciones',
                'Eliminar canciones', 'Atrás'],
            }).then((answer : {option: string}) => {
              if (answer.option === 'Atrás') this.mod();
              else if (answer.option === 'Añadir una canción') {
                this.insert(playlist);
              } else this.splice(playlist);
            });
          } else console.log('No puede modificar ya que no es el propietario');
        }
      } else this.management();
    });
  }

  /**
   * @method Subgestor que muestra el submenu de playlist e invoca los
   * diferentes métodos de la clase en función de las peticiones del usuario
   */
  management() {
    console.clear();
    inquirer.prompt({
      type: 'list',
      name: 'option',
      message: 'Elija qué desea hacer: ',
      choices: Object.values(playlistMenu),
    }).then((answer : {option: string}) => {
      switch (answer.option) {
        case playlistMenu.Print:
          this.printMode();
          break;
        case playlistMenu.Add:
          this.add();
          break;
        case playlistMenu.Mod:
          this.mod();
          break;
        case playlistMenu.Del:
          this.delete();
          break;
        case playlistMenu.Exit:
          manager.management();
          break;
      }
    });
  }
}
