import 'mocha';
import {assert} from 'chai';
import {Song} from '../src/song';
import {data, update} from '../src/data';
import {songCollection} from '../src/collection';
import {Artist} from '../src/artist';

data();
update();

describe('Song class test', () => {
  it('instanceOf of song object', () => {
    songCollection.getList().forEach((song) => {
      assert.instanceOf(song, Song);
    });
  });
  it('typeOf of getName() function', () => {
    songCollection.getList().forEach((song) => {
      assert.typeOf(song.getName(), 'string');
    });
  });
  it('typeOf of getCreator() function', () => {
    songCollection.getList().forEach((song) => {
      assert.instanceOf(song.getCreator(), Artist);
    });
  });
  it('typeOf of getLenght() function', () => {
    songCollection.getList().forEach((song) => {
      assert.typeOf(song.getLenght(), 'string');
    });
  });
  it('typeOf of getSingle() function', () => {
    songCollection.getList().forEach((song) => {
      assert.typeOf(song.getSingle(), 'boolean');
    });
  });
  it('typeOf of getRep() function', () => {
    songCollection.getList().forEach((song) => {
      assert.typeOf(song.getRep(), 'number');
    });
  });
});
