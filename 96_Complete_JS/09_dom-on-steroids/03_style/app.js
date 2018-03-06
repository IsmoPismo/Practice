var message = document.getElementById("message");
var pickme1 = document.getElementById("pickme1");
var pickme2 = document.getElementById("pickme2");
var el  = document.querySelectorAll('.output');
var highlight  = document.querySelector('.output-highlight');

message.style.backgroundColor = "aqua";
pickme1.style.backgroundColor = "tomato";
pickme2.style.backgroundColor = "deepskyblue";

for (var i = 0; i < el.length; i++){
  el[i].style.backgroundColor = "rgba(15,245,135,0.2)";
}

pickme1.addEventListener("mouseenter", function(event){
  event.target.style.fontSize = "35px";

  setTimeout(function () {
    event.target.style.fontSize = "20px";
  }, 430);

}, false);

highlight.style.backgroundColor = "";
