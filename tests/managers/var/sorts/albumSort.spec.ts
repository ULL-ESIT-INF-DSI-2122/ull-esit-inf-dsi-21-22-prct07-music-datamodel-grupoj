import 'mocha';
import {assert} from 'chai';
import {albumCollection} from '../../../../src/data/var/collections';
import {sortAlbumCreator, sortAlbumName, sortAlbumYear}
  from '../../../../src/managers/var/sorts/albumSort';

describe('album sort test', () => {
  it('sortAlbumCreator() test', () => {
    assert.isNotNull(sortAlbumCreator(albumCollection.getList()[0],
        albumCollection.getList()[1]));
    assert.isNotNull(sortAlbumCreator(albumCollection.getList()[1],
        albumCollection.getList()[0]));
    assert.isNotNull(sortAlbumCreator(albumCollection.getList()[0],
        albumCollection.getList()[0]));
  });
  it('sortAlbumName() test', () => {
    assert.isNotNull(sortAlbumName(albumCollection.getList()[0],
        albumCollection.getList()[1]));
    assert.isNotNull(sortAlbumName(albumCollection.getList()[1],
        albumCollection.getList()[0]));
    assert.isNotNull(sortAlbumName(albumCollection.getList()[0],
        albumCollection.getList()[0]));
  });
  it('sortAlbumYear() test', () => {
    assert.isNotNull(sortAlbumYear(albumCollection.getList()[0],
        albumCollection.getList()[1]));
    assert.isNotNull(sortAlbumYear(albumCollection.getList()[1],
        albumCollection.getList()[0]));
    assert.isNotNull(sortAlbumYear(albumCollection.getList()[0],
        albumCollection.getList()[0]));
  });
});
