var bodyParser = require("body-parser"),
mongoose       = require("mongoose"),
express        = require("express"),
app            = express();

// App Config
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var guitarSchema = new mongoose.Schema({
    model: String,
    img: String,
    created : {type: Date, default: Date.now}
});

var Guitar = mongoose.model("Guitar", guitarSchema);

app.get("/", function(req, res){
    res.render("home");
});

app.get("/guitars", function(req, res){
    Guitar.find({}, function(err, guitarsToRender){
       if(err){
           res.redirect("/");
       } else {
res.render("guitar", {model: guitarsToRender})
        }
    });
    });

app.get("/guitars/new", function(req, res) {
   res.render("new");
});

app.post("/guitars", function(req, res){
    console.log(req.body);
    Guitar.create(req.body.guitar, function(err, cat){
    if(err){
          console.log(err);
    } else {
         res.redirect("/guitars");
    }
    });
});

app.get("/guitars/:id", function(req, res){
   Guitar.findById(req.params.id, function(err, oneGuitar){
      if (err) {
          res.redirect("/guitars");
      } else {
          res.render("show", {model: oneGuitar});
      }
   });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server Running"); 
});