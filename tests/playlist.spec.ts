import 'mocha';
import {assert} from 'chai';
import {Playlist} from '../src/playlist';
import {data, update} from '../src/data';
import {playlistCollection} from '../src/collection';
import {Song} from '../src/song';

data();
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
