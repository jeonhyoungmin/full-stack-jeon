// [1, 2, 3].forEach( function(item, index, arr) {
//   console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`)
// });

// ! JSON.stringify 메서드는 객체를 JSON 포맷의 '문자열'로 변환한다.

for(let i = 0; i<[1, 2, 3].length; i++){
  console.log(`요소값: ${[1, 2, 3][i]}, 인덱스: ${[1,2,3][i].length}, this: ${JSON.stringify([1,2,3])}`)
}

// ! forEach 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.