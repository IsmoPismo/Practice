var bodyParser = require("body-parser"),
mongoose       = require("mongoose"),
express        = require("express"),
app            = express();

// App Config
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Schema and Model config
var blogSchema =  new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
}); 

var Blog = mongoose.model("Blog", blogSchema);

// INDEX
app.get("/", function(req, res) {
    res.redirect("/blogs")    
});

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
       if(err){
          console.log("error") 
       } else {
           res.render("index", {blogs: blogs}) 
       }
    });
});

// NEW
app.get("/blogs/new", function(req, res) {
   res.render("new"); 
});
// CREATE
app.post("/blogs", function(req, res){
    // create blog
    console.log(req.body);
    console.log("===========");
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        } else {
            //then, redirect to the index
            res.redirect("/blogs");
        }
    });
});

// SHOW
app.get("/blogs/:id", function(req, res){
   Blog.findById(req.params.id, function(err, foundBlog){
      if (err) {
          res.redirect("/blogs");
      } else {
          res.render("show", {blog: foundBlog});
      }
   });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is up.");
});