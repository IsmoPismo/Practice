var outsideFun = "outside"

function myFun() {
  insideFun = "inside"  // without var
  console.log(outsideFun);
  console.log(insideFun);
}

myFun();
console.log(outsideFun);
console.log(insideFun);

// because we declared a variable withoput var and
// executed myFun() we can acces the insideFun variable
// in the global scope
