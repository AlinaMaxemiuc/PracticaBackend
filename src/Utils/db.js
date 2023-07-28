const mysql = require("mysql");
require('dotenv').config()

//conexiune la baza de date
const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

connection.connect((error) => {
  if (error) console.log("db not connected Error"+ error);
  else console.log("Successfully connected to the database.");
});

module.exports = connection;
