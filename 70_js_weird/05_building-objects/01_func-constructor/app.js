function Person(fName, lName){
  this.fName = fName || 'default';
  this.lName = lName || 'default';
}

var ismo = new Person('Ismo', 'Pismo');
console.log(ismo);
var noName = new Person('NoName');
console.log(noName);
