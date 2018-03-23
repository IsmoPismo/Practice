var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.render("home.ejs");
});

app.get("/love/:answer", function (req, res){
    var ans = req.params.answer;
    res.render("love.ejs", {thingVar : ans});
})

app.listen(process.env.PORT, process.env.ID, function(){
    console.log("Server is listening...");
});