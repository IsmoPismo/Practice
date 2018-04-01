var animals = [
  {name: 'Fifi', species: 'dog'},
  {name: 'Tarzan', species: 'monkey'},
  {name: 'Gordan', species: 'dog'},
  {name: 'Max', species: 'cat'},
  {name: 'Blob', species: 'fish'},
  {name: 'Feliks', species: 'cat'},
];

var isDog = function(animal){
  return animal.species === 'dog';
};

var dogs = animals.filter(isDog);

// var dog = [];
// for (var i = 0; i < animals.length; i++){
//   if (animals[i].species === 'dog'){
//     dog.push(animals[i]);
//   }
// }
