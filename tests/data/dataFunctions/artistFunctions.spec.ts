import 'mocha';
import {assert} from 'chai';
import {writeArtistData, readArtistData}
  from '../../../src/data/dataFunctions/artistFunctions';


describe('artist functions test', () => {
  it('readArtistData() function test', () => {
    assert.isNotNull(readArtistData());
  });
  it('writeArtistData() function test', () => {
    assert.isNotNull(writeArtistData());
  });
});
