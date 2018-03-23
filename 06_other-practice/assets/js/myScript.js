//Point

var mySecondPoint = new Point();
console.log(mySecondPoint);

mySecondPoint.x=8;
mySecondPoint.y = (mySecondPoint.x)*(mySecondPoint.x) + 2;
console.log(mySecondPoint);

var myThirdPoint = mySecondPoint.clone();
console.log(myThirdPoint);


// Size

var mySize = new Size(10, 0);
mySize.height = 55;
console.log(mySize);


// Rect

var myRect = new Rectangle(mySecondPoint, mySize);
console.log(myRect);

// We start by creating a rectangle of dimension and
// location set to 0
var rect = new Rectangle();
console.log(rect); // { x: 0, y: 0, width: 0, height: 0 }

// Now we can for example define its size...
rect.size = new Size(100, 200);

// and its center
rect.center = new Point(100, 100);
console.log(rect); // { x: 50, y: 0, width: 100, height: 200 }
