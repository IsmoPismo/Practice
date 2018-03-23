var secretWord = ["JavaScript","HTML","CSS"]
var output = document.querySelector('h1')

function start() {
  suffleArray(secretWord);
  output.innerHTML += secretWord + "<br>";
}

function suffleArray(arr) {
  for (var i = arr.length; i > 0; i-- ) {
    var h = Math.floor(Math.random()*(i+1));
    var temp = arr[i];
    console.log(temp);
    console.log(h);
    arr[i] = arr[h];
    arr[h] = temp;
  }
  return arr;
}
