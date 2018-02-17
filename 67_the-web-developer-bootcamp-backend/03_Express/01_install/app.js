var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there");
});

app.get("/bye", function(req, res){
    res.send("Bye, bye");
});


app.get("/cat", function(req, res){
    console.log("Someone made a request for /cat")
    res.send("Mjau");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});