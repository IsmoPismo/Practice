var out = document.getElementById('out');

myFunc();

function myFunc(param = "Constructor"){
  out.innerHTML = param;
  return param;
}
