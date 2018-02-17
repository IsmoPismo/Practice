var express = require("express");
var app = express();

app.set("view engine", "ejs")

var friends = ["Peter", "Tony", "Bruce", "Deadpool", "Cat-Woman"];

app.get("/", function(req, res){
   res.render("home"); 
});

app.get("/f", function(req, res){
   res.render("friends", {friends: friends}); 
});

app.post("/new", function(req, res){
   res.send("You have reached the post route"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started!!!"); 
});