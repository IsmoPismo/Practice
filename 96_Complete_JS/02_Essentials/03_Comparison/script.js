var a = 5;
var b = 4;
var c = "5";

var comp = (a == c) ? "Equal" : "Not Equal";
alert('(5 == "5") ? "Equal" : "Not Equal: ' + comp);
alert('Exercise comming up...');

a = Number(prompt("Enter first value"));
b =  Number(prompt("Enter second value"));
var comp = (a > b) ? a + " is bigger than " + b : b + " is bigger than " + a;
alert(comp);
typeOfA = typeof a;
alert("Typeof a ==> " + typeOfA);
