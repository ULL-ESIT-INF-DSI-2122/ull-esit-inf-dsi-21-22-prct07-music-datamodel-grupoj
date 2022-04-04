import 'mocha';
import {assert} from 'chai';
import {Album} from '../src/album';
import {data, update} from '../src/data';
import {albumCollection} from '../src/collection';

data();
update();

describe('Album class test', () => {
  it('instanceOf', () => {
    assert.instanceOf(albumCollection.getList()[0], Album);
  });
});
