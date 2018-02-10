var arrayStdOut = document.getElementById('std-out-arr')
var objectStdOut = document.getElementById('std-out-obj')

var lucky = {
	name: "Lucky",
	breed: "Bunišćar",
	age: 8
}

var dogs = ["Lucky", "Aria", "Cura"]

objectStdOut.innerText = lucky.age
arrayStdOut.innerText = dogs.1 //imposible
