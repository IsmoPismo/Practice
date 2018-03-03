const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("Hi there from APP.JS");
});

app.get("/a", (req, res) =>{
  res.send("<h1>About page</h1>");
});

app.get("/u/:n", (req, res) =>{
  let user = req.params.n.toUpperCase();
  res.send("<h1>"+user+"</h1>");
});


app.listen(3000, function(){
  console.log("Server is listening");
});
