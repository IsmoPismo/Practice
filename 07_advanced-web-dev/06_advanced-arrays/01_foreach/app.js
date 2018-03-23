function halfValues(arr){
  var newA = [];
  arr.forEach(function(val){
    newA.push(val/2);
  });
  return newA;
}

console.log(halfValues([2,10,55]));
