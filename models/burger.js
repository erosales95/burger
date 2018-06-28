var orm = require("../config/orm.js");

var burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res);
        })
    },//end selectAll

    insertOne: function (tableInput, value, callback) {
        orm.insertOne("burgers", tableInput, value, function (res) {
            callback(res);
        })
    },//end insertOne

    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;