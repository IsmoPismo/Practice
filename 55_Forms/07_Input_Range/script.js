var stdOut = document.getElementById('sdtout')
var range = document.getElementById('rang')

stdOut.innerText = range.valueAsNumber;

range.addEventListener('input', function(){
  stdOut.innerText = range.valueAsNumber;
})
