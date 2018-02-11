function myFun() {
  var b = 420;

  function myInsideFunc() {
    b++;
    return b;
  }
  myInsideFunc();
  c = myInsideFunc;
  c();
  d = function() {
    b*=2;
  }
  console.log(b);
  d();
  console.log(b);
  var e = myInsideFunc();
  console.log(b); // passed and executed

}

myFun();
