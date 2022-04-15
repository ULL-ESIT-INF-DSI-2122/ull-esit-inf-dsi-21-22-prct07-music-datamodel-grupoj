import 'mocha';
import {assert} from 'chai';
import {artistCollection} from '../../../../src/data/var/collections';
import {sortArtistRep, sortArtistName}
  from '../../../../src/managers/var/sorts/artistSort';

describe('Artist sort test', () => {
  it('sortArtistCreator() test', () => {
    assert.isNotNull(sortArtistRep(artistCollection.getList()[0],
        artistCollection.getList()[1]));
    assert.isNotNull(sortArtistRep(artistCollection.getList()[1],
        artistCollection.getList()[0]));
    assert.isNotNull(sortArtistRep(artistCollection.getList()[0],
        artistCollection.getList()[0]));
  });
  it('sortArtistName() test', () => {
    assert.isNotNull(sortArtistName(artistCollection.getList()[0],
        artistCollection.getList()[1]));
    assert.isNotNull(sortArtistName(artistCollection.getList()[1],
        artistCollection.getList()[0]));
    assert.isNotNull(sortArtistName(artistCollection.getList()[0],
        artistCollection.getList()[0]));
  });
});
