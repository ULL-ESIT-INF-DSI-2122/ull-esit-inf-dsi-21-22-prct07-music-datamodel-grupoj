const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const db = lowdb(new FileSync('src/data/jsonFiles/ '));
