var express = require("express")
var app = express();

app.get("/", function(req, res){
   res.send("Hi there") 
});

app.get("/sound/:animal", function(req, res) {
    var animal = req.params.animal;
    switch (animal) {
        case 'dog':
            res.send("Wau-Wau = Ruf-Ruf");
            break;
        case 'cat':
            res.send("Mjau-Mjau = Meow-Meow");
            break;
        case 'rooster':
            res.send("Kukuriku = Cock-a-Doodle-Doo");
            break;
        case 'monkey':
            res.send("I-i = Eek-Eek");
            break;
        case 'fish':
            res.send("... = ...");
            break;
        default:
            res.send("Animal not i database");
    }
});

app.get("/repeat/:word/:num", function(req, res){
    var word = req.params.word;
    var num = Number(req.params.num);
    var string = "";
    for (var i = 0; i < num; i++){
        string += " - " + word;
    }
    console.log(string);
});

app.get("*", function(req, res){
    res.send("Sorry, page doesn't exsist")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started")
});