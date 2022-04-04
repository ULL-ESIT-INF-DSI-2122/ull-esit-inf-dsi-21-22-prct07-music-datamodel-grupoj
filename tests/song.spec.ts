import 'mocha';
import {assert} from 'chai';
import {Song} from '../src/song';
import {data, update} from '../src/data';
import {songCollection} from '../src/collection';

data();
update();

describe('Song class test', () => {
  it('instanceOf', () => {
    assert.instanceOf(songCollection.getList()[0], Song);
  });
});
