// let hi = 'merong';

// function one(hello) {
  // return hello;
  
  // let hi = hello;
  // return hi;

  // console.log(hi);
// }

// console.log(hello);

// console.log(hi);

// one();






// ! 이미 지역 변수는 계속 쓰고 있었다.
// for(let i = 0; i < 3; i++){console.log('hello')}
// for(let i = 0; i < 3; i++){console.log('bye')}






// ? 왜 var를 사용하지 않는걸까?
// let a = {
//   b: 'hello'
// }

// console.log(a.b)


var a = 'hello';
let b = 'bye';

console.log(a);
console.log(b);

// var a = 'merong';
a = 'merong';
// let b = 'wow';
b = 12345; 
console.log(a);
console.log(b);

const d = 'hand cream';
console.log(d);
d = 'yeong bin'; /* 타입 에러: 상수 */