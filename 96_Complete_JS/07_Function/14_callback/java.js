var out = document.querySelector("h1");
var num1 = document.querySelector("#one-field");
var num2 = document.querySelector("#two-field");
var plus = document.querySelector("#plus");
var minus = document.querySelector("#minus");
var times = document.querySelector("#times");
var divides = document.querySelector("#divides");
var modul = document.querySelector("#modul")

function cOut(a,b,s,cback) {
  var result = cback(Number(a),Number(b));
  out.innerHTML = a + " " + s + " " + b + " = " + result + "<br>";
}

plus.addEventListener("click", function () {
  cOut(num1.value, num2.value, "+",function(arg1, arg2){
    return arg1+arg2
  });
});

minus.addEventListener("click", function () {
  cOut(num1.value, num2.value, "-",function(x,y){
    return x-y
  });
});

times.addEventListener("click", function () {
  cOut(num1.value, num2.value, "x",function(foo,bar){
    return foo*bar
  });
});

divides.addEventListener("click", function () {
  cOut(num1.value, num2.value, ":",function(var1,var2){
    return var1/var2
  });
});

modul.addEventListener("click", function () {
  cOut(num1.value, num2.value, "%", function(one, two){
    return one % two;
  });
});
