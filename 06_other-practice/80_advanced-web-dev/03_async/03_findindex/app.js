var stringThing = ["This", "is", "mine"];

console.log(findIndex(stringThing, function(item, index, arrayay) {
  return item === "mine";
}));

function findIndex(arr, callback){
  for (var i = 0; i < arr.length; i++){
    if (callback(arr[i], i, arr)){
      return i;
    }
  }
  return -1;
}
