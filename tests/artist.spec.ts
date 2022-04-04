import 'mocha';
import {assert} from 'chai';
import {Artist} from '../src/artist';
import {data, update} from '../src/data';
import {artistCollection} from '../src/collection';

data();
update();

describe('Artist class test', () => {
  it('instanceOf', () => {
    assert.instanceOf(artistCollection.getList()[0], Artist);
  });
});
