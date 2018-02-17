var names = ["Larisa","Aria","Dela","Buddy","Lojo","Fluš"];
var myArray = [];
var key;
var wrapper = document.getElementById('wrapper');

function start() {
  myArray = names.slice();
  myArray.sort(function(a,b){
    return 0.5 - Math.random();
  });
  build();
}

function build(){
  for (var i = 0; i < myArray.length; i++){
    wrapper.innerHTML += "<div>" + myArray[i] + "</div>"
  }
}
