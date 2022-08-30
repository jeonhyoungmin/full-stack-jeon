const numbers = [1, 2, 3];
const pows = [];

// for(let i = 0; i < numbers.length; i++) {
//   pows.push(numbers[i] ** 2);
// }

// console.log(pows);

// numbers.forEach(item => pows.push(item ** 2));
// numbers.forEach(function(item) {
//   pows.push(item ** 2)
// });
// console.log(pows);

// console.dir(Object())

for(let i=0; i<numbers.length; i++){
  pows[i] = numbers[i] ** 2;
}
console.log(pows)