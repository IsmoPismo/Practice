var bodyParser  = require("body-parser"),
    express     = require("express"),
    app         = express();
    
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Index
app.get("/", function(req, res){
   res.render("index");
});

// New
app.get("/new", function(req, res){
   res.render("new"); 
});

// Listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server running");
});