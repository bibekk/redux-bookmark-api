const mysql = require("mysql")
const connection = mysql.createPool({
  host: "localhost",
  user: "bibek",
  password: "Panacea@1",
  database: "db_bookmark", // 'ebookmark'
})

module.exports = connection
