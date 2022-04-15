import 'mocha';
import {assert} from 'chai';
import {Playlist} from '../../src/objects/playlist';
import {playlistCollection} from '../../src/data/var/collections';

describe('Playlist class test', () => {
  it('instanceOf of playlist object', () => {
    playlistCollection.getList().forEach((playlist) => {
      assert.instanceOf(playlist, Playlist);
    });
  });
  it('getName() function test', () => {
    playlistCollection.getList().forEach((playlist) => {
      assert.isNotNull(playlist.getName());
    });
  });
  it('getSongs() function test', () => {
    playlistCollection.getList().forEach((playlist) => {
      assert.isNotNull(playlist.getSongs());
    });
  });
  it('getLenght() function test', () => {
    playlistCollection.getList().forEach((playlist) => {
      assert.isNotNull(playlist.getLenght());
    });
  });
  it('getGenres() function test', () => {
    playlistCollection.getList().forEach((playlist) => {
      assert.isNotNull(playlist.getGenres());
    });
  });
  it('print() function test', () => {
    playlistCollection.getList().forEach((playlist) => {
      assert.isNotNull(playlist.print());
    });
  });
});
