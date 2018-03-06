var divs = document.querySelectorAll("div");

for (var i = 0; i < divs.length; i++){
  divs[i].onclick = function(){
    this.classList.toggle("crazy");
  }
}
