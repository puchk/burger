var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var exphbs = require("express-handlebars");
// Import routes from controller to give server access
var routes = require("./controllers/burgers_controller.js");

var port = process.env.PORT || 3000;

// Express
var app = express();

// Serve static content for the app from the public directory
app.use(express.static(process.cwd() + "/public"));

// Body-parser
app.use(bodyParser.urlencoded({	extended: false	}));

// Method-override
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Handlebars
app.engine("handlebars", exphbs({	defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
app.use("/", routes);

app.listen(port, function() {
	console.log("Listening on port " + port);
})