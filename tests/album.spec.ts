import 'mocha';
import {assert} from 'chai';
import {Album} from '../src/objects/album';
import {albumCollection} from '../src/data/var/collections';
import {Song} from '../src/objects/song';
import {readData, update} from '../src/data/data';

readData();
update();

describe('Album class test', () => {
  it('instanceOf album object', () => {
    albumCollection.getList().forEach((album) => {
      assert.instanceOf(album, Album);
    });
  });
  it('typeOf getName() function', () => {
    albumCollection.getList().forEach((album) => {
      assert.typeOf(album.getName(), 'string');
    });
  });
  it('typeOf getYear() function', () => {
    albumCollection.getList().forEach((album) => {
      assert.typeOf(album.getYear(), 'number');
    });
  });
  it('typeOf getSong() function', () => {
    albumCollection.getList().forEach((album) => {
      album.getSongs().forEach((song) => {
        assert.instanceOf(song, Song);
      });
    });
  });
});
