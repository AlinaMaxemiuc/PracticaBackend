const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "root",
  database:"practica",
});

connection.connect((error) => {
  if (error) console.log("db not connected Error"+ error);
  else console.log("Successfully connected to the database.");
});

module.exports = connection;
