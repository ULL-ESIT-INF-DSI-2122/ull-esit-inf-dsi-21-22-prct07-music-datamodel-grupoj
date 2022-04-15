import 'mocha';
import {assert} from 'chai';
import {Playlist} from '../../src/objects/playlist';
import {playlistCollection} from '../../src/data/var/collections';
import {Song} from '../../src/objects/song';
import {MusicGenre} from '../../src/objects/musicGenre';

describe('Playlist class test', () => {
  it('instanceOf of playlist object', () => {
    playlistCollection.getList().forEach((playlist) => {
      assert.instanceOf(playlist, Playlist);
    });
  });
  it('typeOf of getName() function', () => {
    playlistCollection.getList().forEach((playlist) => {
      assert.typeOf(playlist.getName(), 'string');
    });
  });
  it('typeOf of getSongs() function', () => {
    playlistCollection.getList().forEach((playlist) => {
      playlist.getSongs().forEach((song) => {
        assert.instanceOf(song, Song);
      });
    });
  });
  it('typeOf of getLenght() function', () => {
    playlistCollection.getList().forEach((playlist) => {
      assert.typeOf(playlist.getLenght(), 'string');
    });
  });
  it('typeOf of getGenre() function', () => {
    playlistCollection.getList().forEach((playlist) => {
      playlist.getGenres().forEach((genre) => {
        assert.instanceOf(genre, MusicGenre);
      });
    });
  });
  it('return of print() function', () => {
    playlistCollection.getList().forEach((playlist) => {
      assert.equal(playlist.print(), undefined);
    });
  });
});
