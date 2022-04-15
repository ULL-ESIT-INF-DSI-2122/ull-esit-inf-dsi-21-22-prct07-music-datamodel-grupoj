import 'mocha';
import {assert} from 'chai';
import {readData, update, writeData} from '../../src/data/data';


describe('data functions test', () => {
  it('update() function test', () => {
    assert.isNotNull(update());
  });
  it('writeData() function test', () => {
    assert.isNotNull(writeData());
  });
  it('readData() function test', () => {
    assert.isNotNull(readData());
  });
});
