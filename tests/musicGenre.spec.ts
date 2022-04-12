import 'mocha';
import {assert} from 'chai';
import {MusicGenre} from '../src/objects/musicGenre';
import {data, update} from '../src/data';
import {musicGenreCollection} from '../src/objects/collection';

data();
update();

describe('MusicGenre class test', () => {
  it('instanceOf', () => {
    musicGenreCollection.getList().forEach((genre) => {
      assert.instanceOf(genre, MusicGenre);
    });
  });
});
