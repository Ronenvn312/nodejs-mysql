require("dotenv").config()
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB
});

connection.connect(function (err) {
    if(err) console.log("Ket noi CSDL ko thanh cong")
    else console.log("ket noi thanh cong")
  })
module.exports = connection;
