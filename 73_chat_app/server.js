const express = require("express");
const path   = require("path");
const app     = express();
const server  = require("http").createServer(app);
const io      = require("socket.io").listen(server);

const port    = 4040;

let users = [];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

io.sockets.on('connection', (socket) => {
  //set usermane
  socket.on('set user', (data, callback) => {
    if(users.indexOf(data) != -1){
      callback(false);
    } else {
      callback(true);
      socket.username = data;
      users.push(socket.username);
      updateUsers();
    }
  });
});

function updateUsers(){
  io.sockets.emit('users', users);
};

app.get("/", (req, res, next) => {
  res.render("index");
});

server.listen(port, () => {
  console.log("Server is listening");
});
