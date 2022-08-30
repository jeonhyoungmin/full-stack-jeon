let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// ! 일반 명령방식
for(let i =0; i<arr.length; i++){
    console.log(arr[i]);
}

// ! 명령 방식으로 억지로 forEach만들기
function ukjaeLoop(arr){
  for(let i =0; i<arr.length; i++){
    if(Array.isArray(arr)){
      console.log(arr[i]);
    }
  }
}

// ! 배열 메서드 자바스크립트, 익명함수 방식
arr.forEach(function(parameter, index, arr){
  console.log(parameter, index, arr[index]);
})
// arr.forEach(function(a, b){
//   console.log(`${a} 값은 인데스 ${b}의 값이다`);
// })

// ! 화살표 함수 축약 방식
arr.forEach((a) => console.log(a))