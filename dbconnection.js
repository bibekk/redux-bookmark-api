var mariadb = require('mariadb');
var pool = mariadb.createPool({
   host : 'localhost',
   user : 'rasp',
    password: 'rasp',
    database: 'bookmarks_db',
    connectionLimit: 100
});

module.exports = pool;
