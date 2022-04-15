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
  it('getName() function test', () => {
    songCollection.getList().forEach((song) => {
      assert.isNotNull(song.getName());
    });
  });
  it('getLenght() function test', () => {
    songCollection.getList().forEach((song) => {
      assert.isNotNull(song.getLenght());
    });
  });
  it('getCreator() function test', () => {
    songCollection.getList().forEach((song) => {
      assert.isNotNull(song.getCreator());
    });
  });
  it('getRep() function test', () => {
    songCollection.getList().forEach((song) => {
      assert.isNotNull(song.getRep());
    });
  });
  it('getGenres() function test', () => {
    songCollection.getList().forEach((song) => {
      assert.isNotNull(song.getGenres());
    });
  });
  it('getSingle() function test', () => {
    songCollection.getList().forEach((song) => {
      assert.isNotNull(song.getSingle());
    });
  });
  it('print() function test', () => {
    songCollection.getList().forEach((song) => {
      assert.isNotNull(song.print());
    });
  });
});
