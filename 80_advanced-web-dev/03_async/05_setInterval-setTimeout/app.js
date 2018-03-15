var body = document.querySelector("body");
var h1 = document.createElement("h1");
var stopBtn = document.createElement('button');
stopBtn.setAttribute("onclick", "clearInterval(id)");
stopBtn.textContent = "STOP";
body.appendChild(stopBtn);
// var delay = 2300;
var inter = 900;

// function funkey(){
//
//   h1.innerHTML = "Hello from the Time-out";
//   body.appendChild(h1);
// }
//
// setTimeout(funkey, delay);

function funkey2() {
  var h1 = document.createElement("h1");
  h1.innerHTML = "Hello from the Time-out";
  body.appendChild(h1);
}

var id = function(){
  setInterval(funkey2, inter);
}();
