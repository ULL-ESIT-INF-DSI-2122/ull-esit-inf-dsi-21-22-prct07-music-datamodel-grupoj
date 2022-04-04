import 'mocha';
import {assert} from 'chai';
import {Group} from '../src/group';
import {data, update} from '../src/data';
import {groupCollection} from '../src/collection';

data();
update();

describe('Group class test', () => {
  it('instanceOf', () => {
    assert.instanceOf(groupCollection.getList()[0], Group);
  });
});
