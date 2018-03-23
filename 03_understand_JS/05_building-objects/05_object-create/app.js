// polyfill
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation' + ' only accepts the first parameter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}

var person = {
  fName: 'default',
  lName: 'default',
  greet: function(){
    return 'hoi ' + this.fName;
  }
};

var john = Object.create(person);
john.fName = 'Džon';
console.log(john.greet());
