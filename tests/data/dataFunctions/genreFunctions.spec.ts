import 'mocha';
import {assert} from 'chai';
import {writeGenreData, readGenreData}
  from '../../../src/data/dataFunctions/genreFunctions';


describe('genre functions test', () => {
  it('readGenreData() function test', () => {
    assert.isNotNull(readGenreData());
  });
  it('writeGenreData() function test', () => {
    assert.isNotNull(writeGenreData());
  });
});
