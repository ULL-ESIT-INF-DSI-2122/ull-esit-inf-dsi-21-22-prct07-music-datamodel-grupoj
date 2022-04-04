import 'mocha';
import {assert} from 'chai';
import {data, update} from '../src/data';

describe('data() function test', () => {
  it('return', () => {
    assert.equal(data(), undefined);
  });
});

describe('update() function test', () => {
  it('return', () => {
    assert.equal(update(), undefined);
  });
});
