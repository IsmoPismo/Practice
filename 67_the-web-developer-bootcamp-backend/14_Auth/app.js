var express                 = require("express");
var mongoose                = require("mongoose");
var passport                = require("passport");
var bodyParser              = require("body-parser");
var User                    = require("./models/user");
var localStrategy           = require("passport-local");
var expressSession          = require("express-session");
var passportLocalMongoose   = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth_demo");

var app     = express();

app.use(expressSession({
    secret: "Ismar i Larisa",
    resave: false,
    saveUninitialized: false
}));

app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Auth-Routes

app.get("/register", function(req, res){
   res.render("register"); 
});

app.post("/register", function(req, res){
   User.register(new User({username: req.body.username}), req.body.password, function(err, user){
       console.log("User: " + req.body.username);
       console.log("Pass: " + req.body.password);
       if(err){
           console.log(err);
           return res.render("register");
       }
       passport.authenticate("local")(req, res, function(){
          res.render("secret");
       });
   });
});

//Routes
app.get("/", function(req, res){
   res.render("home"); 
});


app.get("/secret", function(req, res){
   res.render("secret"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});