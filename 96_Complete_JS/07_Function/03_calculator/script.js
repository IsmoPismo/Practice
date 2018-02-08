var n1 = document.getElementById('num1');
var n2 = document.getElementById('num2');
var out = document.getElementById('stdout');

function add() {
  var a = n1.value +  " + " +  n2.value;
  var b = n1.value + n2.value;
  outputHTML(a, b);
}

function sub() {
  var a = n1.value +  " - " +  n2.value;
  var b = n1.value - n2.value;
  outputHTML(a, b);
}

function mul() {
  var a = n1.value +  " * " +  n2.value;
  var b = n2.value * n1.value;
  outputHTML(a, b);
}

function div() {
  var a = n2.value +  " / " +  n1.value;
  var b = n2.value / n1.value;
  outputHTML(a, b);
}
function outputHTML(parm, res) {
  out.innerHTML = parm + " = " + res;
}
