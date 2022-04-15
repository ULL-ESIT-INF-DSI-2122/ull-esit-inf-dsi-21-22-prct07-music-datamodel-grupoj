import 'mocha';
import {assert} from 'chai';
import {writeAlbumData, readAlbumData}
  from '../../../src/data/dataFunctions/albumFunctions';


describe('album functions test', () => {
  it('readAlbumData() function test', () => {
    assert.isNotNull(readAlbumData());
  });
  it('writeAlbumData() function test', () => {
    assert.isNotNull(writeAlbumData());
  });
});
