var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    seedDB      = require("./seeds");
    
seedDB();
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));

var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create( 
//     {name: "Gradačac", image: "https://cdn3.acsi.eu/5/6/7/2/56727629b1934.jpeg", description: "I love eating birds like chicken"}, function(err, camps){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("Newly created: ");
//             console.log(camps);
//         }
//     });

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
   res.render("landing");
});

app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, allCamps){
       if(err){
           console.log(err);
       } else {
            res.render("index", {campgrounds: allCamps});   
       }
    });
});

app.post("/campgrounds", function(req, res){
   var name = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var newCamp = {name: name, image: image, description: desc};
   Campground.create(newCamp, function(err, newlyCamp){
       if(err){
           console.log(err);
       } else {
           res.redirect("/campgrounds");
       }
   });
   
});

// Campground.remove({name: ""}, function (err, mes) {
//     if(err){
//         console.log("Something went wrong")
//     } else {
//         console.log("Got it")
//     }
// });

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, foundCamp){
        if(err){
            console.log(err)
        } else {
            res.render("show", {camp: foundCamp});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server running"); 
});