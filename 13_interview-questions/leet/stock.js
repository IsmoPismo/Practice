// Say you have an array for
// which the ith element is the price of a given stock on day i.
//
// If you were only permitted to complete at most one transaction
// (i.e., buy one and sell one share of the stock),
// design an algorithm to find the maximum profit.
//
// Note that you cannot sell a stock before you buy one.

let a = [7,1,5,3,6,4]
let b = [7,6,4,3,1]
let c = []
let d = [9,2,4,7,12]

function stockOpt(prices) {
  let min = Math.min(...prices)
  let max = Math.max(...prices.slice(prices.indexOf(min)))
  return max - min
}

console.log(stockOpt(d));
