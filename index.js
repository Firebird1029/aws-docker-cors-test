const express = require("express"),
	morgan = require("morgan"),
	cors = require("cors"),
	router = require("./router");

const app = express();

process.env.NODE_ENV !== "production" && app.use(morgan("dev"));

app.get("/", (req, res) => res.send("hello world"));
app.use("/api", router);

app.listen(process.env.PORT || 3000, () => {
	console.log("Server started");
});
