var methodOverride = require("method-override"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    express     = require("express"),
    app         = express();
    
mongoose.connect("mongodb://localhost/buttondb");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// Database
var buttonSchema = new mongoose.Schema({
    color: String
});
var Button = mongoose.model("Button", buttonSchema);

// Index
app.get("/", function(req, res){
   Button.find({}, function (err, buttons){
      if (err){
            res.redirect("/")
      } else {
            res.render("index", {buttons: buttons});
      }
   });

});

// New
app.get("/new", function(req, res){
   res.render("new"); 
});

// Create
app.post("/", function(req, res){
      Button.create(req.body.form, function(err, newBtn){
      if(err){
          console.log(err);
      } else {
          res.redirect("/");
      }
   });
});

// Show
app.get("/:id", function(req, res){
   Button.findById(req.params.id, function(err, foundButton){
      if(err){
          console.log(err);
      } else {
          res.render("show", {button: foundButton});
      }
   });
});

app.delete("/:id", function(req, res){
   Button.findByIdAndRemove(req.params.id, function(err){
       if(err){
           res.redirect("/");
       } else {
           res.redirect("/");
       }
   });
});

// Edit
app.get("/:id/edit", function(req, res) {
    Button.findById(req.params.id, function(err, editButton){
        if(err){
            res.redirect("/");
        } else {
            res.render("edit", {button: editButton})
        }
    });
});

// Update
app.put("/:id", function(req, res){
    console.log(req.params.id, req.body.form)
    Button.findByIdAndUpdate(req.params.id, req.body.form, function(err, updatedB){
        if(err){
            res.redirect("/");
        } else {
            res.redirect("/" + req.params.id);
        }
    });
});

// Listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server running");
});