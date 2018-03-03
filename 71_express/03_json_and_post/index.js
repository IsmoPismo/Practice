const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/users", (req, res) => {
  let people = [{
      name: "Ismar",
      age: 29
    },
    {
      age: 23,
      name: "Larisa"
    }
  ];
  res.json(people);
});

app.get("/download", (req, res) => {
  res.download(path.join(__dirname, '/download/pdf.pdf'));
});

app.post("/subscribe", (req, res) => {
  let mail = req.body.email;
  let name = req.body.name;

  console.log("The user: "+name+" with the E-Mail: "+mail+" has succesfully succssieded")
});

app.listen(4000, function() {
  console.log("Server runnin...");
});
