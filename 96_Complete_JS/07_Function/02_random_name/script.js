var stdOut = document.getElementById('output')
var batn = document.getElementById('batn')
var adj = ["Wonderfull ", "Pityfull ", "Big "]

function myFunc() {
  var r = Math.floor(Math.random()*3)
  var n = prompt("Enter your name")
  switch (r) {
    case 0:
      stdOut.innerText = adj[0] + n
      break;
    case 1:
      stdOut.innerText = adj[1] + n
      break;
    case 2:
      stdOut.innerText = adj[2] + n
      break;
    default:
      stdOut.innerText = "Error"
  }
}
