import 'mocha';
import {assert} from 'chai';
import {Group} from '../../src/objects/group';
import {groupCollection} from '../../src/data/var/collections';

describe('Group class test', () => {
  it('instanceOf album object', () => {
    groupCollection.getList().forEach((group) => {
      assert.instanceOf(group, Group);
    });
  });
  it('getName() function test', () => {
    groupCollection.getList().forEach((group) => {
      assert.isNotNull(group.getName());
    });
  });
  it('getAlbums() function test', () => {
    groupCollection.getList().forEach((group) => {
      assert.isNotNull(group.getAlbums());
    });
  });
  it('getArtist() function test', () => {
    groupCollection.getList().forEach((group) => {
      assert.isNotNull(group.getArtists());
    });
  });
  it('getPlaylists() function test', () => {
    groupCollection.getList().forEach((group) => {
      assert.isNotNull(group.getPlaylists());
    });
  });
  it('getGenres() function test', () => {
    groupCollection.getList().forEach((group) => {
      assert.isNotNull(group.getGenres());
    });
  });
  it('getRep() function test', () => {
    groupCollection.getList().forEach((group) => {
      assert.isNotNull(group.getRep());
    });
  });
  it('getSongs() function test', () => {
    groupCollection.getList().forEach((group) => {
      assert.isNotNull(group.getSongs());
    });
  });
  it('getYear() function test', () => {
    groupCollection.getList().forEach((group) => {
      assert.isNotNull(group.getYear());
    });
  });
  it('print() function test', () => {
    groupCollection.getList().forEach((group) => {
      assert.isNotNull(group.print());
    });
  });
});
