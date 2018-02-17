var express = require("express");
var app = express();
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")

var friends = ["Peter", "Tony", "Bruce", "Deadpool", "Cat-Woman"];

app.get("/", function(req, res){
   res.render("home"); 
});

app.get("/f", function(req, res){
   res.render("friends", {friends: friends}); 
});

app.post("/new", function(req, res){
    var add = req.body.newFriend;
    friends.push(add);
    res.redirect("/f");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started!!!"); 
});