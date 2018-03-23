var a = "Something went wrong";
var q = prompt("Your Question Here:");
var stdout = document.getElementById("std-out");
var r = Math.floor(6*Math.random());

switch (r) {
  case 0:
  stdout.innerText = "You sould be thniking about other stuff";
  break;
  case 1:
  stdout.innerText = "My feeling says 'yes'";
  break;
  case 2:
  stdout.innerText = "No, that will never happen";
  break;
  case 3:
  stdout.innerText = "Maybe, if you give it your best";
  break;
  case 4:
  stdout.innerText = "Grid, is the answer";
  break;
  case 5:
  stdout.innerText = "Look at you, with that smile... :) ";
  break;

}
