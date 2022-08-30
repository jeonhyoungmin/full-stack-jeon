const arr = [1,2,3];

// let result = arr.shift();
// console.log(result);
// console.log(arr);

// 첫 번째 요소를 제거하기 위해선 첫 번째 요소를 제외하고 save하기
let newArr = []
for(let i = 1; i<arr.length; i++){
  newArr[i] = arr[i]
}
console.log(newArr)
console.log(newArr.length)
console.log(newArr[0])

// ! empty value 발생