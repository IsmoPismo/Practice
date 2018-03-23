var arr = [1,2,3,4,5,4,2,'a','b','b'];
var myCleanArr = removeDuplicates(arr);

function removeDuplicates(a) {
  var cA = []
  var cO = {}
  for (var i = 0; i < a.length; i++) {
    cO[a[i]] = i
  }

  for (z in cO) {
    cA.push(z);
  }
  return cA
}
