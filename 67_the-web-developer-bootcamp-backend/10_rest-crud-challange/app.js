var bodyParser  = require("body-parser"),
    express     = require("express"),
    app         = express();
    
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
   res.send("Hello");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server running");
});