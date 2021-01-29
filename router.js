const express = require("express"),
	router = express.Router();

router.route("/").get((req, res) => res.send("api hello"));

module.exports = router;
