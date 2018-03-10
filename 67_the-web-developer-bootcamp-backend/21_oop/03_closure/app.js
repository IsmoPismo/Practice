function counter(){
  var count = 0;
  return function(){
    return ++count;
  }
}

var counter1 = counter();
console.log(counter1());
console.log(counter1());

var couter2 = counter();
console.log(couter2());
console.log(couter2());

console.log(counter1());  // not effecter by 2
// count; would cause error
