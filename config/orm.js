// Ensures MySQL connected to Node.js
var connection = require('./connection.js');

// Creates the appropriate # of question marks based of values to insert
function printQuestionMarks(num){
    var questionMarks = [];
    for (var i=0;i<num;i++) {
        questionMarks.push('?');
    }
    // example return string "?,?,?" for mult values
    return questionMarks.toString();
}

// Converts updated object from client request to sql language that can be passed to an update query
function objToSql(obj) {
    var newArr = [];
    for (var key in obj) {
        console.log('testing for-in loop. current key: ' + key);
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
        connection.query(queryStr, [filterVal], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    insertOne: function(table, cols, vals, callback){
        cols = cols.toString();
        var queryStr = 'INSERT INTO ' + table + '(' + cols + ') ' + 
        'VALUES (' + printQuestionMarks(vals.length) + ');';
        console.log('orm.js insertOne queryStr: ' + queryStr); // Debug
        connection.query(queryStr, vals, function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    updateOne; function(table, updatedObj, colToFind, colFilter, callback){
        var queryStr = 'UPDATE ' + table + ' SET ' + updatedObj + ' WHERE ' + colToFind + ' = ' + colFilter + ';';
        console.log('orm.js updateOne queryStr: ' + queryStr); // Debug
        connection.query(queryStr, function(err, res){
            if (err) throw err;
            callback(res);
        });
    }
}

module.exports = orm;