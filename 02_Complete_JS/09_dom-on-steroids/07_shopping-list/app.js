var input = document.getElementById('addItem');
var btn   = document.getElementById('addNew');
var list  = document.querySelector("ul");

listArray = [];

btn.onclick = function(){
  list.innerHTML += "<li>" + input.value +"</li>";
  input.value = "";
};
