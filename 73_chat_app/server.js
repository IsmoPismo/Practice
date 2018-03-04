const express = require("express");
const path   = require("path");
const app     = express();
const server  = require("http").createServer(app);
const io      = require("socket.io").listen(server);

const port    = 4040;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.render("index");
});

server.listen(port, () => {
  console.log("Server is listening");
});
