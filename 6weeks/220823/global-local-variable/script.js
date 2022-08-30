let globalData = 'hello';

function example() {
  console.log(globalData);
  let localData = 'bye';
  console.log(localData);
}

example()

console.log(localData); // error

// {} 사이의 영역 = 블럭(block), 블럭 스코프(block scope) = 렉시컬 스코프(lexical scope)