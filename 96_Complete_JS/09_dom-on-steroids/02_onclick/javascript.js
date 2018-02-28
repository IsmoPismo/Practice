var elClass = document.getElementsByClassName('output');
var elHigh = document.getElementsByClassName('high');
var h1 = document.querySelector('h1');

for (var x = 0; x < elClass.length; x++){
  el = elClass[x];
  el.onclick = function(){
    this.innerHTML = "FUCKER";
  };
}

for (var x = 0; x < elHigh.length; x++){
  el = elHigh[x];
  el.onclick = function(){
    h1.innerHTML = "High kliked";
  };
}
