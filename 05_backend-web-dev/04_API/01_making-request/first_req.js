var express = require("express");
var first_req = express();
var reQuest = require("request")

reQuest("https://habitica.com/", function(error, response, body){
   if (!error && response.statusCode == 200){
       console.log(body)
   } 
});