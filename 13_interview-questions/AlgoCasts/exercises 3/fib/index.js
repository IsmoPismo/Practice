// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   const resultArray = [0,1,1,2,3];
//   for (let i = 5; i <= n; i++){
//     const a = resultArray[i-1];
//     const b = resultArray[i-2];
//     resultArray.push(a + b);
//   }
//   return resultArray[n]
// }

function memoize(fn){
  const cache = {};
  return function(...args){

    if(cache[args]){
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result
  }
}

const slowFib = (n) => {
  if(n < 2){
    return n
  } else if(n === 2){
    return 1
  } else if(n === 3){
    return 2
  } else if(n === 4){
    return 3
  } else if(n == 5){
    return 5
  } else {
    return fib(n - 1) + fib(n - 2)
  }

}

const fib = memoize(slowFib);

module.exports = fib;
