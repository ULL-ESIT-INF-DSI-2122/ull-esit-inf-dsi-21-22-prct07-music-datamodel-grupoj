import 'mocha';
import {assert} from 'chai';
import {musicGenreCollection} from '../../../../src/data/var/collections';
import {sortGenreName}
  from '../../../../src/managers/var/sorts/genreSort';

describe('Genre sort test', () => {
  it('sortGenreName() test', () => {
    assert.isNotNull(sortGenreName(musicGenreCollection.getList()[0],
        musicGenreCollection.getList()[1]));
    assert.isNotNull(sortGenreName(musicGenreCollection.getList()[1],
        musicGenreCollection.getList()[0]));
    assert.isNotNull(sortGenreName(musicGenreCollection.getList()[0],
        musicGenreCollection.getList()[0]));
  });
});
