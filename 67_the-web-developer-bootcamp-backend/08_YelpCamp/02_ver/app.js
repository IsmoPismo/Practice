var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));


//schema set-up
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create( 
//     {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"}, function(err, camps){
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
            res.render("campgrounds", {campgrounds: allCamps});   
       }
    });
    // res.render("campgrounds", {campgrounds: campgrounds})
    
});

app.post("/campgrounds", function(req, res){
   var name = req.body.name;
   var image = req.body.image;
   var newCamp = {name: name, image: image};
   Campground.create(newCamp, function(err, newlyCamp){
       if(err){
           console.log(err);
       } else {
           res.redirect("/campgrounds");
       }
   });
   
});

Campground.remove({name: "Granite Hill"}, function (err, mes) {
    if(err){
        console.log("Something went wrong")
    } else {
        console.log("Got it")
    }
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server running"); 
});