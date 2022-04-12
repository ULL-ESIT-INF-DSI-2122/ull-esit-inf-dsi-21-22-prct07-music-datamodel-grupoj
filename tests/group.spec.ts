import 'mocha';
import {assert} from 'chai';
import {Group} from '../src/objects/group';
import {data, update} from '../src/data';
import {groupCollection} from '../src/objects/collection';

data();
update();

describe('Group class test', () => {
  it('instanceOf of group object', () => {
    groupCollection.getList().forEach((group) => {
      assert.instanceOf(group, Group);
    });
  });
  it('typeof of getName() function', () => {
    groupCollection.getList().forEach((group) => {
      assert.typeOf(group.getName(), 'string');
    });
  });
  it('typeof of getYear() function', () => {
    groupCollection.getList().forEach((group) => {
      assert.typeOf(group.getYear(), 'number');
    });
  });
});
