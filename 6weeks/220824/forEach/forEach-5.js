// class Numbers {
//   numberArray = [];
//   multiply(arr) {
//     arr.forEach(function(item) {
//       this.numberArray.push(item * item);
//     }, this);
//   }
// }

// const numbers = new Numbers();
// numbers.multiply([1,2,3]);
// console.log(numbers.numberArray);



// ! 화살표 함수는 this 바인딩을 갖지 않는다.
class Numbers {
  numberArray = [];
  multiply(arr) {
    arr.forEach(item => this.numberArray.push(item * item));
  }
}

const numbers = new Numbers();
numbers.multiply([1,2,3]);
console.log(numbers.numberArray);
