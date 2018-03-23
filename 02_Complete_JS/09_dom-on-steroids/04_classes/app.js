var divs = document.querySelectorAll("div");

for (var i = 0; i < divs.length; i++){
  divs[i].onclick = function(){
    removeActive(divs, "active", "remove");
    if (!this.classList.contains("active")){
      this.classList.add("active");
    }
    // this.classList.toggle("crazy");

  };
}

function removeActive(el, cl, ac){
  for (var i = 0; i < el.length; i++){
    el[i].classList[ac](cl);
  }
}
