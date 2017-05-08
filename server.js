// Server JS Code

// Include Requires
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Create a new express app.
var app = express();
// Sets an initial port. We'll use this later.
var PORT = process.env.PORT || 4500;
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


// Starts the express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});