var elClass = document.getElementsByClassName('output');

for (var x = 0; x < elClass.length; x++){
  el = elClass[x];
  el.onclick = function(){
    this.innerHTML = "FUCKER";
  };
}
