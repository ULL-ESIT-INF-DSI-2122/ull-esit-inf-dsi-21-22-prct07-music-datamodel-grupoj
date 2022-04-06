import 'mocha';
import {assert} from 'chai';
import {MusicGenre} from '../src/musicGenre';
import {data, update} from '../src/data';
import {musicGenreCollection} from '../src/collection';

data();
update();

describe('MusicGenre class test', () => {
  it('instanceOf', () => {
    musicGenreCollection.getList().forEach((genre) => {
      assert.instanceOf(genre, MusicGenre);
    });
  });
});
