var bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    express     = require("express"),
    app         = express();
    
mongoose.connect("mongodb://localhost/buttondb");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

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
   console.log(req.body.form.color);
   res.redirect("/");
});

// Listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server running");
});