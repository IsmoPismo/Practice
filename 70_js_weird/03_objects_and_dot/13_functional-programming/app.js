function mapForEach(arr, fn){
  var newA = []
  for (var i = 0; i < arr.length; i++){
    newA.push(
      fn(arr[i])
    );
  }
  return newA;
}

var arr = [1,2,3,4,5];
var arr2 = mapForEach(arr, function(item){
  return item * item;
});
var arr3 = mapForEach(arr, function(item){
  return item > 2;
});
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));

var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};
var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));

console.log(arr);
console.log("________");
console.log(arr2);
console.log("________");
console.log(arr3);
console.log("________");
console.log(arr4);
console.log("________");
console.log(arr5);
