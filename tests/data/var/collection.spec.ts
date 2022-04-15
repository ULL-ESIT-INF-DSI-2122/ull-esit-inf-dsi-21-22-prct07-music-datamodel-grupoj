import 'mocha';
import {assert} from 'chai';
import {ItemsCollection, albumCollection, artistCollection,
  groupCollection, musicGenreCollection, playlistCollection,
  songCollection} from '../../../src/data/var/collections';

describe('ItemsCollection class test', () => {
  it('instanceOf of items collection', () => {
    assert.instanceOf(albumCollection, ItemsCollection);
    assert.instanceOf(artistCollection, ItemsCollection);
    assert.instanceOf(groupCollection, ItemsCollection);
    assert.instanceOf(musicGenreCollection, ItemsCollection);
    assert.instanceOf(playlistCollection, ItemsCollection);
    assert.instanceOf(songCollection, ItemsCollection);
  });
  it('test of getLenght() function', () => {
    assert.typeOf(albumCollection.getLenght(), 'number');
    assert.typeOf(artistCollection.getLenght(), 'number');
    assert.typeOf(groupCollection.getLenght(), 'number');
    assert.typeOf(musicGenreCollection.getLenght(), 'number');
    assert.typeOf(playlistCollection.getLenght(), 'number');
    assert.typeOf(songCollection.getLenght(), 'number');
  });
});
