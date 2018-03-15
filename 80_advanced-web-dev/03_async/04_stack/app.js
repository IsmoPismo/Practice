function uppedWord(w){
  return w[0].toUpperCase() + w.slice(1);
}

function upperMoreWords(w){
  var p = w.split(" ");
  for (var i = 0; i < p.length; i++){
    p[i] = uppedWord(p[i]);
  }
  return p.join(" ");
}

console.log(upperMoreWords('mofo fomo'));
