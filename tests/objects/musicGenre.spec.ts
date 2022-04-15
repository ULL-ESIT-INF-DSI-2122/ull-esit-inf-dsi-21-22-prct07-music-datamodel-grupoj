import 'mocha';
import {assert} from 'chai';
import {MusicGenre} from '../../src/objects/musicGenre';
import {musicGenreCollection} from '../../src/data/var/collections';

describe('MusicGenre class test', () => {
  it('instanceOf musicGenre object', () => {
    musicGenreCollection.getList().forEach((genre) => {
      assert.instanceOf(genre, MusicGenre);
    });
  });
  it('getName() function test', () => {
    musicGenreCollection.getList().forEach((genre) => {
      assert.isNotNull(genre.getName());
    });
  });
  it('getAlbum() function test', () => {
    musicGenreCollection.getList().forEach((genre) => {
      assert.isNotNull(genre.getAlbums());
    });
  });
  it('getCreators() function test', () => {
    musicGenreCollection.getList().forEach((genre) => {
      assert.isNotNull(genre.getCreators());
    });
  });
  it('getSongs() function test', () => {
    musicGenreCollection.getList().forEach((genre) => {
      assert.isNotNull(genre.getSongs());
    });
  });
  it('print() function test', () => {
    musicGenreCollection.getList().forEach((genre) => {
      assert.isNotNull(genre.print());
    });
  });
});
