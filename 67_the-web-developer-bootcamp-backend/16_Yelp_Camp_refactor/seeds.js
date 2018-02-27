var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "This is the best campgrounds in the whole white and length with th eradao. Terra is a new weillkommen ehiteago hahahah. Bis dan!"
    },
    {
        name: "Desert Mesa", 
        image: "http://static.dudeiwantthat.com//img/outdoors/camping/lotus-belle-luxury-canvas-17193.jpg",
        description: "I'm totali doing this. I'll write whatever come s into0 my header. Accounts addEventListener with the window in the back. Weedeemo se!"
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Ovtovere je radio koje će se umazati. Ja mislim da neću ovdje dolazit više jer ne mogu da izmišljam više stvari. ^_^"
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;
