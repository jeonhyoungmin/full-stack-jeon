const arr = [1,2,3,5,8,9];

// let result = arr.pop();
// console.log(result);

// console.log(arr);

let newArr = []
for(let i = 0; i < arr.length-1; i++){
  newArr[i] = arr[i]
}

console.log(newArr)