var express = require("express")
var app = express();

app.get("/", function(req, res){
   res.send("Hi there")
});

app.get("/sound/:animal", function(req, res) {
    var animalSounds = {
        dog : "Wau-Wau = Ruf-Ruf",
        cat : "Mjau-Mjau = Meow-Meow",
        rooster : "Kukuriku = Cock-a-Doodle-Doo",
        fish : "...",
        monkey : "I-i=Eek-Eek"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = animalSounds[animal];
    res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:word/:num", function(req, res){
    var word = req.params.word;
    var num = Number(req.params.num);
    var string = "";
    for (var i = 0; i < num; i++){
        string += " - " + word;
    }
    res.send(string);
});

app.get("*", function(req, res){
    res.send("Sorry, page doesn't exsist")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started")
});
