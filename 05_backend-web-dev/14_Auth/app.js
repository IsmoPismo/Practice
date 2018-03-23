var express                 = require("express");
var mongoose                = require("mongoose");
var passport                = require("passport");
var bodyParser              = require("body-parser");
var User                    = require("./models/user");
var LocalStrategy           = require("passport-local");
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

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// SignIn
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


// Log-In
app.get("/login", function(req, res){
   res.render("login"); 
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"   
}), function(req, res){
    
});

app.get("/logout", function(req, res){
   req.logout();
   res.redirect("/");
});


// Log-Out

//Routes
app.get("/", function(req, res){
   res.render("home"); 
});


app.get("/secret", isLoggedIn, function(req, res){
   res.render("secret"); 
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});