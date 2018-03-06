var aTitle  = document.querySelectorAll('.acc');
var con     = document.querySelectorAll('.con')
for (var x = 0; x < aTitle.length; x++) {
  aTitle[x].onclick = function() {
    displayClear(this.nextElementSibling);
    this.nextElementSibling.classList.toggle('active');
  }
}

function displayClear(t) {
  for (var x = 0; x < con.length; x++) {
    if(t!=con[x]) {
      con[x].classList.remove('active');
    }
  }
}
