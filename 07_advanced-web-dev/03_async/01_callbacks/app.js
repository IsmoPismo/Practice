function sendMessage(message, callback){
  return callback(message);
}

sendMessage("message for console", console.log);
sendMessage("ALERT!", alert);
var a = sendMessage("Are you sure?", confirm);

function greet(name, formatter){
  return 'Hello ' + formatter(name);
}

function upperCasey(name){
  return name.toUpperCase();
}

console.log(greet("Ismar", upperCasey));

// Anonymouse Funkeyšns akšn:
console.log(greet('Dude', function(name){
  return name + "!!!";
}));
