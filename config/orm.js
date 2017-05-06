// Import mySQL connection
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}


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
		queryString += " (burger_name, devoured)";
		queryString += " VALUES ('";
		queryString += vals;
		queryString += "', false);";

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
		queryString += condition;

		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};


module.exports = orm;