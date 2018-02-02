var headButton = document.getElementById('heads');
var tailButton = document.getElementById('tails');
var standardOut = document.getElementById('stdout');

headButton.addEventListener('click', function(){
  var rand = coinToss();
  rand == "Heads" ? alert('YOU WIN!') : alert('Sorry, you lost');
});

tailButton.addEventListener('click', function(){
  var rand = coinToss();
  rand == "Tails" ? alert('YOU WIN!') : alert('Sorry, you lost');
});

function coinToss() {
  return Math.random() > 0.5 ? standardOut.innerText = "Heads" : standardOut.innerText = "Tails";
}
