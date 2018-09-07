// SETS - Store unique values of any type

const set1 = new Set(['i', 'don\'t', 'wanna', 'learn', 'about', new Set(['SETS'])])

set1.size; // 6
set1.has('i'); // TRUE
set1.has(50 + 50); //FALSE
set1.delete('i');

// ITERATING THROUGH SETS
for(let item of set1) {
  console.log(item);
}

// to array
const setArr = Array.from(set1);
console.log(setArr);
