String.prototype.isGreaterThan = function(l){
  return this.length > l;
};

console.log('john'.isGreaterThan(3));

// DANGER

Number.prototype.isPositive = function(){
  return this > 0;
};

// console.log(3.isPositive()); <== It's getting a lil' bit 'Dicey' when it comes to this
