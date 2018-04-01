var animals = [
  {name: 'Fifi', species: 'dog'},
  {name: 'Tarzan', species: 'monkey'},
  {name: 'Gordan', species: 'dog'},
  {name: 'Max', species: 'cat'},
  {name: 'Blob', species: 'fish'},
  {name: 'Feliks', species: 'cat'},
];

// var names = animals.map(function(a){
//   return a.name;
// });

var name = animals.map((a) =>  a.name);

// var names = [];
// for (var i = 0; i < animals.length; i++){
//   names.push(animals[i].name);
// }
