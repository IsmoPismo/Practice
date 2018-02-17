var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/love/:answer", function (req, res){
    var ans = req.params.answer;
    res.render("love", {thingVar : ans});
});

app.get("/posts", function(req, res) {
   var posts = [
       { title: "Where's the Fridge?", author: "Todd"},
       { title: "I'm crying", author: "Beba"},
       { title: "I think my toad is pregnant", author: "Kalisi"},
       ]
    res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.ID, function(){
    console.log("Server is listening...");
});