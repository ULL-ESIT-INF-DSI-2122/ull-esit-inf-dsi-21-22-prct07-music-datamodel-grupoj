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
  it('getLenght() function test', () => {
    assert.isNotNull(albumCollection.getList());
    assert.isNotNull(artistCollection.getList());
    assert.isNotNull(groupCollection.getList());
    assert.isNotNull(musicGenreCollection.getList());
    assert.isNotNull(playlistCollection.getList());
    assert.isNotNull(songCollection.getList());
  });
  it('getLenght() function test', () => {
    assert.isNotNull(albumCollection.getLenght());
    assert.isNotNull(artistCollection.getLenght());
    assert.isNotNull(groupCollection.getLenght());
    assert.isNotNull(musicGenreCollection.getLenght());
    assert.isNotNull(playlistCollection.getLenght());
    assert.isNotNull(songCollection.getLenght());
  });
});
