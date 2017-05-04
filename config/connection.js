var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "",
	database: "burgers_db"
});

connection.connect(function(err) {
	if (err) {
		console.error("error: " + err);
    return;
	}
	console.log("connected as id " + connection.threadId);
	console.log("connection: " + connection);
});

module.exports = connection;