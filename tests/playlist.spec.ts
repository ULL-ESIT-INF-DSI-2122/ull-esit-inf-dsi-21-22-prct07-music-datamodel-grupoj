import 'mocha';
import {assert} from 'chai';
import {Playlist} from '../src/playlist';
import {data, update} from '../src/data';
import {playlistCollection} from '../src/collection';

data();
update();

describe('Playlist class test', () => {
  it('instanceOf', () => {
    assert.instanceOf(playlistCollection.getList()[0], Playlist);
  });
});
