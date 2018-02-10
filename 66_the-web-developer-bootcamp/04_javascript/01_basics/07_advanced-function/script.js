// VERSION I
//-------------

// no zagrada
function myForEach(arr, func) {
	for (var i = 0; i < arr.length; i++) {
		func(arr[i])
	}
}

var alerts = ["First Alert","Second Alert","Last Alert","I'm dead"]
myForEach(alerts, function(a) {
	alert(a)
})

// ARRAY PROTOTYPE
//------------------

Array.prototype.myForEach = function(func) {
	for (var i = 0; i < this.length; i++) {
		func(this[i])
	}
};

var colors = ["RED","OLIVE","PURPLE","GRAY"]
colors.myForEach(function(c) {
	console.log(c);
})
