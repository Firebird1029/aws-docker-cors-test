const express = require("express"),
	cors = require("cors"),
	router = express.Router();

router
	.route("/")
	// .all(
	// 	cors({
	// 		origin: "http://google.com",
	// 		methods: "GET POST"
	// 	})
	// )
	.get((req, res) => res.send("protected hello"));

module.exports = router;