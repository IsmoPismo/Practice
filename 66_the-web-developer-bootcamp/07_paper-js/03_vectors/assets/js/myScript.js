var p1 = new Point(50, 50);
var p2 = new Point(110, 200);
var p3 = new Point(80, 30);
var p4 = new Point(50, 150);

var vector1 = p2 - p1;
var vector2 = p4 - p3;

console.log(vector1.length);
console.log(vector1.angle);
console.log(vector2.length);
console.log(vector2.angle);

var vector = vector1 + vector2;
console.log(vector.length);
console.log(vector.angle);

var normalizedVector = vector.normalize(5);
console.log(normalizedVector.length)
