var cDate, eDate, s, m, h, d, t;
var stdOut = document.querySelector('h2');
var mainMsg = document.querySelector('#msg');


function start(){
  var tDate = event.target.valueAsDate;
  mainMsg.textContent = tDate;
  eDate = new Date(tDate);
  outputUpdate();
  t = window.setTimeout(update, 1000);
}

function update(){
  outputUpdate();
  t = window.setTimeout(update, 1000);
}

function outputUpdate(){
  cDate = new Date();
  s = Math.round((eDate - cDate)/1000);
  m = Math.round(s/60);
  h = Math.round(m/60);
  d = Math.round(h/24);

  stdOut.innerHTML = (s%60) + " " + (m%60) + " " + (h%24) + " " + d;
}
