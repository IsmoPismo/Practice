var message = document.getElementById("message");
var pickme1 = document.getElementById("pickme1");
var pickme2 = document.getElementById("pickme2");
var el = document.querySelectorAll('.output');
var highlight = document.querySelector('.output-highlight');
var bgCols    = ["aqua", "pink","royalblue","cyan","teal","orange"];
var c;

pickme1.addEventListener("mouseenter", function(event) {
  event.target.style.fontSize = "22px";

  setTimeout(function() {
    event.target.style.fontSize = "20px";
  }, 170);

}, false);

function start() {
  setInterval(swapBg, 2000);
}

function swapBg(){
  for (var x = 0; x < el.length;  x++){
    c = bgCols[Math.floor(Math.random() * el.length)];
    el[x].style.backgroundColor = c;
  }
}
