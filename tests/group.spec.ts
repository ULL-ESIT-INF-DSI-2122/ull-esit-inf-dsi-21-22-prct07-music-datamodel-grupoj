import 'mocha';
import {assert} from 'chai';
import {Group} from '../src/objects/group';
import {groupCollection} from '../src/data/var/collections';
import {readData, update} from '../src/data/data';

readData();
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
