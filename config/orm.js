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

var orm = {
    selectAll: function(table, col, val, callback){
        var queryStr = 'SELECT * FROM ' + table + ' WHERE ' col + ' = ?';
        console.log('orm.js selectAll queryStr: ' + queryStr); // Debug
        connection.query(queryStr, [filterVal], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    insertOne: function(table, cols, vals, callback){
        cols = cols.toString();
        var queryStr = 'INSERT INTO ' + table + '(' + cols + ') ' + 
        'VALUES (' + printQuestionMarks(vals.length) + ')';
        console.log('orm.js insertOne queryStr: ' + queryStr); // Debug
        connection.query(queryStr, vals, function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    updateOne; function(table, colToUpdate, newVal, colToFind, colFilter, callback){
        var queryStr = 'UPDATE ' + table + ' SET ' + col + ' = ' +
        newVal + ' WHERE ' + col + ' = ' + colFilter;
        console.log('orm.js updateOne queryStr: ' + queryStr); // Debug
        connection.query(queryStr, function(err, res){
            if (err) throw err;
            callback(res);
        });
    }
}

module.exports = orm;