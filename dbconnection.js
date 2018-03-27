var mysql = require('mysql');
var connection = mysql.createPool({
   host : 'localhost',
   user : 'root',
    password: 'root',
    database: 'db_bookmark'
});

module.exports = connection;
