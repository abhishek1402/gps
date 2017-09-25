import mysql from 'mysql'
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'gps'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
