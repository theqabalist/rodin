const {ensureDBPath} = require('@@db');
const dbPath = require('config').get('database.path');

ensureDBPath(dbPath);
