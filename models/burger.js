// Grab orm
var orm = require('./../config/orm.js');

// Standard table name for this file
var tableName = 'burgers';

// Insert table into orm functions to customize them
var burgerORM = {
    select: function(callback) {
        orm.selectAll(tableName, function(res) {
            callback(res);
        });
    },
    insert: function(cols, val, callback) {
        orm.insertOne(tableName, cols, val, function(res) {
            callback(res);
        });
    },
    update: function(obj, col, filter, callback) {
        orm.updateOne(tableName, obj, col, filter, function(res) {
            callback(res);
        });
    }
}

module.exports = burgerORM;