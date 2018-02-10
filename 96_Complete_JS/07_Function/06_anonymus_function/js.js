var stdOut = document.getElementById('std-out');

var varA = function(b="Parameter") {
  stdOut.innerText += "I'm anonymus..." + b + "\n";
}

varA();
varA("Argument")
