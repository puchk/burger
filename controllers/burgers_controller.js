var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res) {
	console.log(req.body);
	burger.insertOne(req.body.burgerName, function() {
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	burger.updateOne({
		devoured: req.body.devoured
	}, condition, function() {
		res.redirect("/");
	});
});

module.exports = router;