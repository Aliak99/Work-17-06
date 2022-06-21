const mysql = require('mysql');
require("dotenv").config();

const con = mysql.createConnection({
    host: "db",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database : process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_LOCAL_PORT,
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
});

module.exports = con;
