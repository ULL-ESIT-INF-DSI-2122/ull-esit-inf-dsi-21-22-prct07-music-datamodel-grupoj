import 'mocha';
import {assert} from 'chai';
import {Artist} from '../../src/objects/artist';
import {artistCollection} from '../../src/data/var/collections';
import {MusicGenre} from '../../src/objects/musicGenre';

describe('Artist class test', () => {
  it('instanceOf artist object', () => {
    artistCollection.getList().forEach((artist) => {
      assert.instanceOf(artist, Artist);
    });
  });
  it('typeOf getName() function', () => {
    artistCollection.getList().forEach((artist) => {
      assert.typeOf(artist.getName(), 'string');
    });
  });
  it('typeOf getGenres() function', () => {
    artistCollection.getList().forEach((artist) => {
      artist.getGenres().forEach((genre) => {
        assert.instanceOf(genre, MusicGenre);
      });
    });
  });
  it('typeOf getRep() function', () => {
    artistCollection.getList().forEach((artist) => {
      assert.typeOf(artist.getRep(), 'number');
    });
  });
});
