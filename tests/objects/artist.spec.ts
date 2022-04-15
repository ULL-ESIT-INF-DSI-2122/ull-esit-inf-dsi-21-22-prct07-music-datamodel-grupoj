import 'mocha';
import {assert} from 'chai';
import {Artist} from '../../src/objects/artist';
import {artistCollection} from '../../src/data/var/collections';

describe('Artist class test', () => {
  it('instanceOf album object', () => {
    artistCollection.getList().forEach((artist) => {
      assert.instanceOf(artist, Artist);
    });
  });
  it('getName() function test', () => {
    artistCollection.getList().forEach((artist) => {
      assert.isNotNull(artist.getName());
    });
  });
  it('getGroups() function test', () => {
    artistCollection.getList().forEach((artist) => {
      assert.isNotNull(artist.getGroups());
    });
  });
  it('getRep() function test', () => {
    artistCollection.getList().forEach((artist) => {
      assert.isNotNull(artist.getRep());
    });
  });
  it('getGenres() function test', () => {
    artistCollection.getList().forEach((artist) => {
      assert.isNotNull(artist.getGenres());
    });
  });
  it('getSongs() function test', () => {
    artistCollection.getList().forEach((artist) => {
      assert.isNotNull(artist.getSongs());
    });
  });
  it('print() function test', () => {
    artistCollection.getList().forEach((artist) => {
      assert.isNotNull(artist.print());
    });
  });
});
