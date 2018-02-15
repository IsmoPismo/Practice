// amount of circles
var count = 140;

// Create a symbol, which we will use to place instances of later:
var path = new Path.Circle({
	center: [0, 0],
	radius: 17,
	fillColor: 'white',
	strokeColor: 'black'
});

var symbol = new Symbol(path);

//Place an instance of the Symbol
for (var i = 0; i < count; i++) {
  //Random
  var center = Point.random() * view.size;
  var placedSymbol = symbol.place(center);
  placedSymbol.scale(i / count);
}

// The onFrame function is called up to 60 times a second:
function onFrame(event) {
	// Run through the active layer's children list and change
	// the position of the placed symbols:
	for (var i = 0; i < count; i++) {
		var item = project.activeLayer.children[i];

		// Move the item 1/20th of its width to the right. This way
		// larger circles move faster than smaller circles:
    item.position.x += item.bounds.width / 20;

    //If
    if (item.bounds.left > view.size.width) {
			item.position.x = -item.bounds.width;
		}
  }
}
