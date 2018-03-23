var animals = ["Cat","Dog","Rabit","Bird"]

//["Horse", "fish", "fish", "fish", "fish", "fish", "fish", "fish", "rabbit", "dog", "sheep"]

animals.unshift("Horse")
animals[8] = "Rabit"
animals.fill("Fish",1,8)
animals.push("Dog")
animals.push("Sheep")

console.log(animals);
