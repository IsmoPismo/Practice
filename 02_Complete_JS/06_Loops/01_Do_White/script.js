var h1 = document.getElementById('id')
var x = 0;
var userVal = prompt("How much you wanna loop, dude?")
do {
  if (x%2 == 0) {
    h1.innerHTML += x + "<br>"
  }
  x++
} while (x < Number(userVal))
h1.innerText += "Final value " + x
