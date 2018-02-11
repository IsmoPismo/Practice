var out = document.querySelector("h1");
var num1 = document.querySelector("#one-field");
var num2 = document.querySelector("#two-field");
var plus = document.querySelector("#plus");
var minus = document.querySelector("#minus");
var times = document.querySelector("#times");
var divides = document.querySelector("#divides");

function cOut(a,b,s,cback) {
  var result = cback(Number(a),Number(b));
  out.innerHTML = a + " " + s + " " + b + " = " + result + "<br>";
}

plus.addEventListener("click", function add() {
  cOut(num1.value, num2.value, "+",function(a,b){
    return a+b
  });
});

minus.addEventListener("click", function add() {
  cOut(num1.value, num2.value, "-",function(a,b){
    return a-b
  });
});

times.addEventListener("click", function add() {
  cOut(num1.value, num2.value, "x",function(a,b){
    return a*b
  });
});

divides.addEventListener("click", function add() {
  cOut(num1.value, num2.value, ":",function(a,b){
    return a/b
  });
});
