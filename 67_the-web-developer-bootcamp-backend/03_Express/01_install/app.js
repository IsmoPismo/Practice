var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there");
});

app.get("/bye", function(req, res){
    res.send("Bye, bye");
});

app.get("/r/:subredit", function(req, res){
    var sub = req.params.subredit;
    res.send("Welcome to the " + sub + " subreddit.");
});

app.get("*", function(req, res){
   res.send("You're a Rockstar-Programmer")
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});
