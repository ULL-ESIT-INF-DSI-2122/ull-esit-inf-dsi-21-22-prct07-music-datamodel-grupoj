import 'mocha';
import {assert} from 'chai';
import {groupCollection} from '../../../../src/data/var/collections';
import {sortGroupRep, sortGroupName, sortGroupYear}
  from '../../../../src/managers/var/sorts/groupSort';

describe('Group sort test', () => {
  it('sortGroupCreator() test', () => {
    assert.isNotNull(sortGroupRep(groupCollection.getList()[0],
        groupCollection.getList()[1]));
    assert.isNotNull(sortGroupRep(groupCollection.getList()[1],
        groupCollection.getList()[0]));
    assert.isNotNull(sortGroupRep(groupCollection.getList()[0],
        groupCollection.getList()[0]));
  });
  it('sortGroupName() test', () => {
    assert.isNotNull(sortGroupName(groupCollection.getList()[0],
        groupCollection.getList()[1]));
    assert.isNotNull(sortGroupName(groupCollection.getList()[1],
        groupCollection.getList()[0]));
    assert.isNotNull(sortGroupName(groupCollection.getList()[0],
        groupCollection.getList()[0]));
  });
  it('sortGroupYear() test', () => {
    assert.isNotNull(sortGroupYear(groupCollection.getList()[0],
        groupCollection.getList()[1]));
    assert.isNotNull(sortGroupYear(groupCollection.getList()[1],
        groupCollection.getList()[0]));
    assert.isNotNull(sortGroupYear(groupCollection.getList()[0],
        groupCollection.getList()[0]));
  });
});
