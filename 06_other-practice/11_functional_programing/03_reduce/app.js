var orders = [
  {amount: 125},
  {amount: 225},
  {amount: 90},
  {amount: 125}
];

var larisa = orders.reduce(function(sum, order){
  return sum + order.amount;
}, 0);
// 
// var sum = 0;
// for (var i = 0; i < orders.length; i++){
//   sum += orders[i].amount;
// }
