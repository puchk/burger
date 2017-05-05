// Import mySQL connection
var connection = require("../config/connection.js");

var orm = {
	selectAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
		  if (err) {
		    throw err;
		  }
		  cb(result);
    });
	},
	insertOne: function(table, vals, cb) {
		var queryString = "INSERT INTO " + table;
		queryString += " (burger_name)";
		queryString += " VALUES ('";
		queryString += vals;
		queryString += "');";

		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	updateOne: function(table, cols, condition, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(cols);
		queryString += " WHERE ";
		queryString += condtion;

		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};


module.exports = orm;