var stringThing = ["This", "is", "mine"];

var result = "";
forEach(stringThing, function(item, index, arrayay) {
if (index !== arrayay.length - 1) {
  result += item + " ";
} else {
  result += item + "!!!";
}
});

function forEach(arr, callback){
  for (var i = 0; i < arr.length; i++){
    callback(arr[i], i, arr);
  }
}

console.log(result);
