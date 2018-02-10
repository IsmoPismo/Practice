var a = document.getElementById('special')
var b = document.querySelector('#special')
var c = document.getElementsByClassName('brutal')[0]
var d = document.querySelectorAll('#special')[0]
var e = document.querySelector('body>p')
var f = document.querySelector('body p#special')

a.innerText = "A Worked"
b.innerText = "B Worked"
console.dir(c);
c.innerText = "C Worked"
console.dir(d);
d.innerText = "D Worked"
console.dir(e);
e.innerText = "E Worked"
f.innerText = "F Worked"
