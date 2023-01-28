const {stat, mkdir} = require('fs/promises');
const {T, F} = require('ramda');
const Promise = require('bluebird');

const exists = path => stat(path).then(T, F);

const ensureDBPath = Promise.coroutine(function* (path) {
  if (!(yield exists(path))) {
    yield mkdir(path, {recursive: true});
  }

  return path;
});

module.exports = {
  ensureDBPath
};
