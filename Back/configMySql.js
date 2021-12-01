const mySql = require('mysql');

const config = mySql.createConnection({
  host: 'localhost',
  user: 'root',
  port: "3306",
  database: 'todolist',
  multipleStatements: true
});

module.exports = config;