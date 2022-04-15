import 'mocha';
import {assert} from 'chai';
import {writePlaylistData, readPlaylistData}
  from '../../../src/data/dataFunctions/playlistFunctions';


describe('playlist functions test', () => {
  it('readPlaylistData() function test', () => {
    assert.isNotNull(readPlaylistData());
  });
  it('writePlaylistData() function test', () => {
    assert.isNotNull(writePlaylistData());
  });
});
