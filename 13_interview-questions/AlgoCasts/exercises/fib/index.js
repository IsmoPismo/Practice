// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn){
  const cache = {}
  return function(...args){
    if (cache[args]){
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function fib(n, c = 0, a = [0, 1]){
  if (n < 2){
    return n
  }

  return fib(n - 1) + fib(n - 2)
}

fib = memoize(fib);

module.exports = fib;

// function fib(n, c = 0, a = [0, 1]){
//   if (n < 2){
//     return n
//   }
//
//   return fib(n - 1) + fib(n - 2)
// }

// function fib(n) {
//   let arr = [0, 1];
//   for (let i = 2; i <= n; i++){
//     let a = arr[i-2];
//     let b = arr[i-1];
//     arr.push(a+b);
//   }
//   return arr[n]
// }



// function fib(n) {
//   let a = 0;
//   let b = 1;
//   let c = 0;
//   for (let i = 0; i < n - 1; i++){
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return n !== 1 ? c : 1
// }
