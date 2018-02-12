var colors = creataRandomColors(6);

var squares = document.querySelectorAll(".color");
var pickCol = colors[colorPicker()];
var titleCol = document.getElementById("current-color");

titleCol.textContent = pickCol;

for (var i = 0; i < squares.length; i++) {
  // adds colors
  squares[i].style.backgroundColor = colors[i];

  // adds events
  squares[i].addEventListener("click", function() {
    var clckCol = this.style.backgroundColor;
    console.log(clckCol, pickCol);
    if (clckCol == pickCol) {
      for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = clckCol;
      }
      document.getElementById("prompt").innerHTML = "Correct!"
      document.querySelector('h1').style.backgroundColor = clckCol;
    } else {
      this.style.backgroundColor = "mediumpurple";
      document.getElementById("prompt").innerHTML = "Try again"
    }
  });
}

function colorPicker() {
  var c = Math.floor(Math.random() * squares.length);
  return c;
}

function creataRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() *256);
  var g = Math.floor(Math.random() *256);
  var b = Math.floor(Math.random() *256);
  return "rgb("+ r +", " + g + ", " + b + ")";
}
