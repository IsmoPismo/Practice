var bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    express     = require("express"),
    app         = express();
    
mongoose.connect("mongodb://localhost/icondb");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var iconSchema = new mongoose.Schema({
    icon: String
});

var Icon = mongoose.model("Icon", iconSchema);

app.get("/", function(req, res){
    Icon.find({}, function(err, iconsRender){
       if(err){
           res.send("There was an error...");
       } else {
           res.render("index", {icons: iconsRender});
           }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("App Running") 
});