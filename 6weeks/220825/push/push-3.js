const arr = [1,2];

const newArr = [...arr, 3];
console.log(newArr);

const newNewArr = [0, ...arr, 3];
console.log(newNewArr)


// for(let i = 0; i < arr.length; i++){
//   let newArr
//   newArr = arr[i]
//   console.log(newArr);
// }