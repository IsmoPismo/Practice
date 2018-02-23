var bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    express     = require("express"),
    app         = express();
    
mongoose.connect("mongodb://localhost/embeded_dbs");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
   nickname: String,
   posted: [postSchema]
});

var User = mongoose.model("User", userSchema);


User.find({nickname: "Alex", posted: []}, function(err, found){
   if(err){
       console.log(err)
  } else {
        console.log(found[0]);
        console.log(found[0].posted.push({title: "Something", content: "Something more"}));
        console.log(found[0]);
        found[0].save(function(err, newUser){
            if(err){
                console.log(err)
            } else {
                console.log(newUser)
            }
        })
     }
});

app.get("/", function(req, res){
   res.send("Home or Index") 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("App Running") 
});