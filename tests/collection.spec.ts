import 'mocha';
import {assert} from 'chai';
import {ItemsCollection, albumCollection, artistCollection,
  groupCollection, musicGenreCollection, playlistCollection,
  songCollection} from '../src/objects/collection';
import {data, update} from '../src/data';

data();
update();

describe('ItemsCollection class test', () => {
  it('instanceOf of items collection', () => {
    assert.instanceOf(albumCollection, ItemsCollection);
    assert.instanceOf(artistCollection, ItemsCollection);
    assert.instanceOf(groupCollection, ItemsCollection);
    assert.instanceOf(musicGenreCollection, ItemsCollection);
    assert.instanceOf(playlistCollection, ItemsCollection);
    assert.instanceOf(songCollection, ItemsCollection);
  });
  it('test of addItem() function', () => {
    assert.equal(albumCollection.addItem(
        albumCollection.getList()[0]), undefined);
    assert.equal(artistCollection.addItem(
        artistCollection.getList()[0]), undefined);
    assert.equal(groupCollection.addItem(
        groupCollection.getList()[0]), undefined);
    assert.equal(musicGenreCollection.addItem(
        musicGenreCollection.getList()[0]), undefined);
    assert.equal(playlistCollection.addItem(
        playlistCollection.getList()[0]), undefined);
    assert.equal(songCollection.addItem(
        songCollection.getList()[0]), undefined);
  });
  it('test of searchItem() function', () => {
    assert.equal(albumCollection.searchItem(
        albumCollection.getList()[0]), albumCollection.getList()[0]);
    assert.equal(artistCollection.searchItem(
        artistCollection.getList()[0]), artistCollection.getList()[0]);
    assert.equal(groupCollection.searchItem(
        groupCollection.getList()[0]), groupCollection.getList()[0]);
    assert.equal(musicGenreCollection.searchItem(
        musicGenreCollection.getList()[0]), musicGenreCollection.getList()[0]);
    assert.equal(playlistCollection.searchItem(
        playlistCollection.getList()[0]), playlistCollection.getList()[0]);
    assert.equal(songCollection.searchItem(
        songCollection.getList()[0]), songCollection.getList()[0]);
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
