var circles = [];

function onKeyDown(event) {
  var maxPoint = new Point(view.size.width, view.size.height);
  var randomView = Point.random() * maxPoint;
  var circle = new Path.Circle(randomView, 500);
  circle.strokeColor = "white";
  circle.fillColor = "mediumpurple";
  circles.push(circle);
}

function onFrame(event){
  for (var i = 0; i < circles.length; i++) {
    circles[i].scale(.92);
    circles[i].fillColor.hue += 5;
    circles[i].strokeColor.hue += 15;
  }
}
