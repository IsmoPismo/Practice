var faker = require("faker");

var items = 10;

console.log("===================\nWelcome to my shop\n===================");

for (var i = 0; i <= items; i++) {
var material = faker.commerce.productAdjective();
var product = faker.commerce.productName();
var price = faker.commerce.price();
console.log(material, product, " - $" + price);
}