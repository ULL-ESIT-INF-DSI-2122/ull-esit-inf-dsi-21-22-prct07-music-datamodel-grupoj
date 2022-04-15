import 'mocha';
import {assert} from 'chai';
import {playlistCollection} from '../../../../src/data/var/collections';
import {sortPlaylistName, sortPlaylistLenght}
  from '../../../../src/managers/var/sorts/playlistSort';

describe('Playlist sort test', () => {
  it('sortPlaylistCreator() test', () => {
    assert.isNotNull(sortPlaylistLenght(playlistCollection.getList()[0],
        playlistCollection.getList()[1]));
    assert.isNotNull(sortPlaylistLenght(playlistCollection.getList()[1],
        playlistCollection.getList()[0]));
    assert.isNotNull(sortPlaylistLenght(playlistCollection.getList()[0],
        playlistCollection.getList()[0]));
  });
  it('sortPlaylistName() test', () => {
    assert.isNotNull(sortPlaylistName(playlistCollection.getList()[0],
        playlistCollection.getList()[1]));
    assert.isNotNull(sortPlaylistName(playlistCollection.getList()[1],
        playlistCollection.getList()[0]));
    assert.isNotNull(sortPlaylistName(playlistCollection.getList()[0],
        playlistCollection.getList()[0]));
  });
});
