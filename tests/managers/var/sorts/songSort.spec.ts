import 'mocha';
import {assert} from 'chai';
import {songCollection} from '../../../../src/data/var/collections';
import {sortSongCreator, sortSongName, sortSongLenght, sortSongRep}
  from '../../../../src/managers/var/sorts/songSort';

describe('Song sort test', () => {
  it('sortSongCreator() test', () => {
    assert.isNotNull(sortSongCreator(songCollection.getList()[0],
        songCollection.getList()[1]));
    assert.isNotNull(sortSongCreator(songCollection.getList()[1],
        songCollection.getList()[0]));
    assert.isNotNull(sortSongCreator(songCollection.getList()[0],
        songCollection.getList()[0]));
  });
  it('sortSongName() test', () => {
    assert.isNotNull(sortSongName(songCollection.getList()[0],
        songCollection.getList()[1]));
    assert.isNotNull(sortSongName(songCollection.getList()[1],
        songCollection.getList()[0]));
    assert.isNotNull(sortSongName(songCollection.getList()[0],
        songCollection.getList()[0]));
  });
  it('sortSongYear() test', () => {
    assert.isNotNull(sortSongLenght(songCollection.getList()[0],
        songCollection.getList()[1]));
    assert.isNotNull(sortSongLenght(songCollection.getList()[1],
        songCollection.getList()[0]));
    assert.isNotNull(sortSongLenght(songCollection.getList()[0],
        songCollection.getList()[0]));
  });
  it('sortSongYear() test', () => {
    assert.isNotNull(sortSongRep(songCollection.getList()[0],
        songCollection.getList()[1]));
    assert.isNotNull(sortSongRep(songCollection.getList()[1],
        songCollection.getList()[0]));
    assert.isNotNull(sortSongRep(songCollection.getList()[0],
        songCollection.getList()[0]));
  });
});
