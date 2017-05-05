var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	insertOne: function(cols, vals, cb) {
		orm.create("burgers", cols, vals, function(res) {
			cb(res);
		});
	},
	updateOne: function(cols, condition, cb) {
		orm.update("burgers", cols, condition, function(res) {
			cb(res);
		});
	}
};

module.exports = cat;