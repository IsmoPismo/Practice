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
  findPerson();
}

function findPerson(){
  key = myArray[Math.floor(Math.random() * myArray.length)];
  message1("Find "+key);
  }

function build(){
  var newDivs = "";
  for (var x = 0; x < myArray.length; x++){
    var str = myArray[x];
    var shufStr = str.split("").sort(function(){
      return 0.5 - Math.random();
    }).join("");
    newDivs += '<div onmouseover="uText(this,\''+shufStr+'\')"  onmouseout="uText(this,\'Hidden '+(x+1)+'\')" onclick="eEle(this,\''+str+'\')" >Hidden '+(x+1)+'</div>';
  }
  wrapper.innerHTML = newDivs;
}

function uText(t, mes){
  t.innerHTML = mes;
}

function eEle(t,s){
  if(s==key){
    var n = myArray.indexOf(s);
    myArray.splice(n, 1);
    t.parentNode.removeChild(t);
    message2('Correct');
    findPerson();
  } else {
  message2('Wrong')
  }
  if (myArray.length <= 0){
    message1('Game Over')
  }
}

function message1(message){
  document.getElementById('message1').innerHTML = message;
}

function message2(message){
  document.getElementById('message2').innerHTML = message;
}
