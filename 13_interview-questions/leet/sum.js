const arr = [1, 2, 4, 7, 11]
const tar = 13

// for(let i = 0; i < arr.length; i++){
//   for(let j = i + 1; j < arr.length; j++){
//     if(arr[i] + arr[j] === tar){
//       console.log(`[${i}, ${j}]`);
//     }
//   }
// }

// const obj = {}
// const finalResult = []
// for(let i = 0; i < arr.length; i++){
//   obj[i] = arr[i]
// }
//
// for(let i = 0; i < arr.length; i++){
//   let comp = tar - arr[i]
//   let result = Object.keys(obj).find(i => obj[i] === comp)
//   if(result){
//     finalResult.push(result)
//     if(finalResult.length === 2){
//       console.log(finalResult);
//     }
//   }
// }

const obj = {}
for(let i = 0; i < arr.length; i++){
  let comp = tar - arr[i]
  let found = Object.keys(obj).find(i => obj[i] === comp)
  if(found){
    console.log([i, parseInt(found)])
  }
  obj[i] = arr[i]
}
