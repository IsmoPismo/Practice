for (var x = 0; x < 1920; x+=100) {
  for (var y = 0; y < 1080; y+=100) {
    new Path.Circle(new Point(x, y), 10).fillColor = "purple"
  }
}
