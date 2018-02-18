var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/guitars", function(req, res){
    var models = [
        {name: "Standard Western", image: "https://s-media-cache-ak0.pinimg.com/originals/47/2f/b1/472fb10057400f812ee71a2e1f9c3c29.jpg"},
        {name: "Fancy Bass", image: "https://i.pinimg.com/736x/cc/46/11/cc46113d2ac3e433758b6b94dd6e9e92--bass-guitar.jpg"}
    ]
    res.render("guitar", {models: models});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server Running"); 
});