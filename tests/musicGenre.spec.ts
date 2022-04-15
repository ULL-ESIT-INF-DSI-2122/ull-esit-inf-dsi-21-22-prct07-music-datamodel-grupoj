import 'mocha';
import {assert} from 'chai';
import {MusicGenre} from '../src/objects/musicGenre';
import {musicGenreCollection} from '../src/data/var/collections';
import {readData, update} from '../src/data/data';

readData();
update();

describe('MusicGenre class test', () => {
  it('instanceOf', () => {
    musicGenreCollection.getList().forEach((genre) => {
      assert.instanceOf(genre, MusicGenre);
    });
  });
});
