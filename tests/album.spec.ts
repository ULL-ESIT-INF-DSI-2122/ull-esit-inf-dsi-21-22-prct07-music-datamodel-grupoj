import 'mocha';
import {assert} from 'chai';
import {Album} from '../src/objects/album';
import {data, update} from '../src/data';
import {albumCollection} from '../src/objects/collection';
import {Song} from '../src/objects/song';

data();
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
