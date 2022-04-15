import 'mocha';
import {assert} from 'chai';
import {writeSongsData, readSongsData}
  from '../../../src/data/dataFunctions/songFunctions';


describe('dong functions test', () => {
  it('readSongData() function test', () => {
    assert.isNotNull(readSongsData());
  });
  it('writeSongData() function test', () => {
    assert.isNotNull(writeSongsData());
  });
});
