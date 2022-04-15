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
  it('return of getCreators()', () => {
    musicGenreCollection.getList().forEach((genre) => {
      assert.typeOf(genre.getCreators().length, 'number');
    });
  });
});
