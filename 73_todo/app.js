var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var port = 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("server up");
});
