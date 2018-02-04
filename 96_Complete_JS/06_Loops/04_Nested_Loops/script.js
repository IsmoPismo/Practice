var stdOut = document.getElementById('output');
var html = "<table>";
var counter = 1;

for (var row = 0; row < 10; row++){
  html += "<tr>";
  for (var col = 0; col < 5; col++){
    html += "<td>Cell="+counter+"</td>";
    counter += 1
  }
  html += "</tr>";
}
html += "</table>";
stdOut.innerHTML = html;
