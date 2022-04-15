import 'mocha';
import {assert} from 'chai';
import {Song} from '../../src/objects/song';
import {songCollection} from '../../src/data/var/collections';

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
  it('return of print() function', () => {
    songCollection.getList().forEach((song) => {
      assert.equal(song.print(), undefined);
    });
  });
});
