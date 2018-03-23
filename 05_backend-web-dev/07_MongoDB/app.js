var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);


//One way of creating and saving a cat

// var georgie = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// georgie.save(function(err, cat){
//     if (err) {
//         console.log("Error");
//     } else {
//         console.log("Saved cat to db");
//         console.log(cat);
//     }
// });


//Shorter way - creating and saving a cat

// Cat.create({
//   name: "Snowball",
//   age: 10,
//   temperament: "Blaze"
// }, function(err, cat){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(cat);
//     }
// });


Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh-oh!");
    } else {
        console.log("All the cats");
        console.log(cats);
    }
});
