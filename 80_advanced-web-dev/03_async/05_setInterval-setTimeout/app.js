function funkey(){
  var h1 = document.createElement("h1");
  h1.innerHTML = "Hello from the Time-out";
  var body = document.querySelector("body");
  body.appendChild(h1);
}

delay = 2300;

setTimeout(funkey, delay);
