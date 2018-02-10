// var stdOut = document.getElementById('std-out');
// var a = "That was i can limit the scope of some variables. This 'var a' doesn't conflict with the anonymus function's 'var a'"
//
// (function () {
//   var a = " self executing"
//   stdOut.innerText = "I'm anonymus" + a + " function. I'm so excited\n";
// })();
//
// stdOut.innerText += a;

var a = "Self-Executing function limit the scope of some throw-away variables";
var output = document.getElementById("std-out");
(function () {
    var a = " self-executing ";
    output.innerHTML = "I'm a"+a+" function!!!\n";
})();
output.innerHTML += a;
