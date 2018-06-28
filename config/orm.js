var connection = require("./connection.js");

var orm = {
    selectAll: function (table, callback) {

        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            callback(result);
        })

    },

    insertOne: function (table, tableInput, value) {
        var queryString = "INSERT INTO " + table + " (" + tableInput + ") " + "VALUES (" + value + ")";

        connection.query(queryString, function(err,result){
            if (err) throw err; 
            callback(result);
        })
    },

    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objColVals;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });

    }
};
module.exports = orm;
