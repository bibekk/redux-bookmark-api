const mysql = require("mysql")
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_bookmark", // 'ebookmark'
})

module.exports = connection
