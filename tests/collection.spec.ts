import 'mocha';
import {assert} from 'chai';
import {ItemsCollection, albumCollection, artistCollection,
  groupCollection, musicGenreCollection, playlistCollection,
  songCollection} from '../src/collection';
import {data, update} from '../src/data';

data();
update();

describe('ItemsCollection class test', () => {
  it('instanceOf', () => {
    assert.instanceOf(albumCollection, ItemsCollection);
    assert.instanceOf(artistCollection, ItemsCollection);
    assert.instanceOf(groupCollection, ItemsCollection);
    assert.instanceOf(musicGenreCollection, ItemsCollection);
    assert.instanceOf(playlistCollection, ItemsCollection);
    assert.instanceOf(songCollection, ItemsCollection);
  });
});
