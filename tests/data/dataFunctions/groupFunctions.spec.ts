import 'mocha';
import {assert} from 'chai';
import {writeGroupData, readGroupData}
  from '../../../src/data/dataFunctions/groupFunctions';


describe('group functions test', () => {
  it('readGroupData() function test', () => {
    assert.isNotNull(readGroupData());
  });
  it('writeGroupData() function test', () => {
    assert.isNotNull(writeGroupData());
  });
});
