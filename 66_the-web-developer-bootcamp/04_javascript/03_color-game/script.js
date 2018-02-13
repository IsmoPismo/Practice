var colors = creataRandomColors(6);

var squares = document.querySelectorAll(".color");
var pickCol = colors[colorPicker()];
var titleCol = document.getElementById("current-color");
var resetB = document.getElementById('reset-button')
var easyHard = document.querySelectorAll('.button-slick');

easyHard[1].addEventListener("click", function() {
  easyHard[1].classList.add('selected');
  easyHard[2].classList.remove('selected');
});

easyHard[2].addEventListener("click", function() {
  easyHard[2].classList.add('selected');
  easyHard[1].classList.remove('selected');

});

titleCol.textContent = pickCol;

resetB.addEventListener("click", function() {
  colors = creataRandomColors(6);
  pickCol = colors[colorPicker()];
  titleCol.textContent = pickCol;
  document.body.style.backgroundColor = "mediumpurple"
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});

for (var i = 0; i < squares.length; i++) {
  // adds colors
  squares[i].style.backgroundColor = colors[i];

  // adds events
  squares[i].addEventListener("click", function() {
    var clckCol = this.style.backgroundColor;
    // console.log(clckCol, pickCol);
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
