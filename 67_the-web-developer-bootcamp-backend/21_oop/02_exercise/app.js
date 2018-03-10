function vozilo(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
  vozilo.prototype.turnOn = function() {
    this.isRunning = true;
  };
  vozilo.prototype.turnOff = function() {
    this.isRunning = false;
  };
  vozilo.prototype.hoink = function(){
    if (this.isRunning){
      alert("BEEP-BEEP");
    }
  };
}

var auto = new vozilo("Ford", "Focus", 2015);
// console.log(auto.make);
// console.log(auto.isRunning);
// auto.turnOn();
// console.log(auto.isRunning);
// auto.turnOff()
// console.log(auto.isRunning);

console.log(auto.isRunning);
auto.turnOn();
console.log(auto.isRunning);
