import 'mocha';
import {assert} from 'chai';
import {Album} from '../../src/objects/album';
import {albumCollection} from '../../src/data/var/collections';

describe('Album class test', () => {
  it('instanceOf album object', () => {
    albumCollection.getList().forEach((album) => {
      assert.instanceOf(album, Album);
    });
  });
  it('getName() function test', () => {
    albumCollection.getList().forEach((album) => {
      assert.isNotNull(album.getName());
    });
  });
  it('getCreator() function test', () => {
    albumCollection.getList().forEach((album) => {
      assert.isNotNull(album.getCreator());
    });
  });
  it('getYear() function test', () => {
    albumCollection.getList().forEach((album) => {
      assert.isNotNull(album.getYear());
    });
  });
  it('getGenres() function test', () => {
    albumCollection.getList().forEach((album) => {
      assert.isNotNull(album.getGenres());
    });
  });
  it('getSongs() function test', () => {
    albumCollection.getList().forEach((album) => {
      assert.isNotNull(album.getSongs());
    });
  });
  it('print() function test', () => {
    albumCollection.getList().forEach((album) => {
      assert.isUndefined(album.print());
    });
  });
});
