// Ensures MySQL connected to Node.js
var connection = require('./connection.js');

// Converts updated object from client request to sql language that can be passed to an update query
function objToSql(obj) {
    var newArr = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newArr.push(key + '=' + obj[key]);
        }
    }
    return newArr.toString();
}

var orm = {
    selectAll: function(table, callback){
        var queryStr = 'SELECT * FROM ' + table + ';';
        console.log('orm.js selectAll queryStr: ' + queryStr); // Debug
        connection.query(queryStr, function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    insertOne: function(table, cols, val, callback){
        var queryStr = 'INSERT INTO ' + table + ' (' + cols.toString() + ') ' + 
        'VALUES (\'' + val.toString() + '\');';
        console.log('orm.js insertOne queryStr: ' + queryStr); // Debug
        connection.query(queryStr, function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    updateOne: function(table, updatedObj, colToFind, colFilter, callback){
        var queryStr = 'UPDATE ' + table + ' SET ' + objToSql(updatedObj) + ' WHERE ' + colToFind + ' = ' + colFilter + ';';
        console.log('orm.js updateOne queryStr: ' + queryStr); // Debug
        connection.query(queryStr, function(err, res){
            if (err) throw err;
            callback(res);
        });
    }
}

module.exports = orm;