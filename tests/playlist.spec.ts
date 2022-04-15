import 'mocha';
import {assert} from 'chai';
import {Playlist} from '../src/objects/playlist';
import {playlistCollection} from '../src/data/var/collections';
import {Song} from '../src/objects/song';
import {readData, update} from '../src/data/data';

readData();
update();

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
});
