function printReserse(a) {
	al = a.length
	rev = new Array
	for (var i = 0; i < al; i++) {
		rev[i] = a.pop()
	}
	return rev
}

function isUniform(a) {
	for (var i = 1; i < a.length; i++) {
		if (a[0] != a[i]) {
			return false
		}
	}
	return true
}

function sumArray(a) {
	var sum = 0
	a.forEach(function(v) {
		sum += Number(v)
	})
	return sum
}

function max(a) {
	var max = a[0]
	for (var i = 1; i < a.length; i++) {
		if (max < a[i]) {
			max = a[i]
		}
	}
	return max
}

var reversedArray = printReserse([1, 2, 5])
var revString= printReserse(["A","B","C","D","E","F","G"])

var x = isUniform([1,1,1,2,1])
var y = isUniform([1,1,1,1,1])

var z = sumArray([1,1,1,1,1])

var maks = max([1,1,1,2,1])
