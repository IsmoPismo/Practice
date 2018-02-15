function onKeyDown(event) {
  var maxPoint = new Point(view.size.width, view.size.height);
  var randomView = Point.random() * maxPoint;
  var circle = new Path.Circle(randomView, 49);
  circle.strokeColor = "mediumpurple";
  circle.fillColor = "black"
}
