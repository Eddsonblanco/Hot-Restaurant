var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})

const tables = [];
const waiting = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
})

app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
})