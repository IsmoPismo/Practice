// var path = new Path.Circle({
// 	center: view.center,
// 	radius: 30,
// 	strokeColor: 'black'
// });
//
// function onResize(event) {
// 	// Whenever the window is resized, recenter the path:
// 	path.position = view.center;
// }
//
// paper.install(window);
// 	window.onload = function() {
// 		paper.setup('myCanvas');
// 		var path = new Path.Rectangle([75, 75], [100, 100]);
// 		path.strokeColor = 'black';
//
// 		view.onFrame = function(event) {
// 			// On each frame, rotate the path by 3 degrees:
// 			path.rotate(3);
// 		}
// 	}

// 
// paper.install(window);
// window.onload = function() {
//   paper.setup('myCanvas');
//   // Create a simple drawing tool:
//   var tool = new Tool();
//   var path;
//
//   // Define a mousedown and mousedrag handler
//   tool.onMouseDown = function(event) {
//     path = new Path();
//     path.strokeColor = 'black';
//     path.add(event.point);
//   }
//
//   tool.onMouseDrag = function(event) {
//     path.add(event.point);
//   }
// }
