var cCode = [];
var counter = 0;
var stdOut = document.getElementById('out');
var c1 = document.getElementById('code1')
var c2 = document.getElementById('code2')
var c3 = document.getElementById('code3')

for (var i = 0; i < 3; i++) {
  cCode.push(Math.floor(Math.random()* 10));
}
stdOut.innerText = cCode

function crack() {
  counter = 0;
  var guess = [c1.value, c2.value, c3.value];
  stdOut.innerText += "\n"
  for (var x = 0; x < cCode.length; x++) {
    stdOut.innerText += checkNum(guess[x],cCode[x]);
  }
}

if (counter == 3) {
  stdOut.innerText += " - RIGHT COMBO! YOU WIN!"
}

function checkNum(a, b) {
  if (a==b) {
    counter++;
    return a;
  } else if (a > b) {
    return "H";
  } return "L";
}
