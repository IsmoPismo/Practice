var names = ["Larisa","Aria","Dela","Buddy","Lojo","Fluš"];
var myArray = [];
var key;

function start() {
  myArray = names.slice();
  myArray.sort(function(a,b){
    return 0.5 - Math.random();
  });
  console.log(myArray);

}
