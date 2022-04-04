import 'mocha';
import {assert} from 'chai';
import {MusicGenre} from '../src/musicGenre';
import {data, update} from '../src/data';
import {musicGenreCollection} from '../src/collection';

data();
update();

describe('MusicGenre class test', () => {
  it('instanceOf', () => {
    assert.instanceOf(musicGenreCollection.getList()[0], MusicGenre);
  });
});
