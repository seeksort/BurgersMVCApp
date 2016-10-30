var mysql = require('mysql')
    sqlkey = require('./sqlkey.js');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: sqlkey.key,
    database: 'Bamazon'
});

// Set up and check connection
connection.connect(function(err){
    if (err) throw err;
    console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;