var output = document.getElementById('output');
var divList = document.getElementsByTagName('div');
divList[7].innerHTML = "Welcome to my website";

function myFun1() {
   var html = "<h1>Div list</h1>";
   for (var x = 1; x < divList.length; x++) {
     if (!divList[x].firstElementChild) {
       html += divList[x].innerText + "<br>";
     }
   }
   divList[0].innerHTML = html;
}
