let numberData = [444,23,2022,8,16,12,22];

// 가장 작은 값을 찾아보자
// 배열에는 무슨 수가 있는지 모르겠다.
// 반복문을 통해서 if을 통과시켜서 찾아보자

let data = 10000;
for(let i =0; i < numberData.length; i++){
  // console.log(numberData.length);
  // console.log(numberData[i]);
  // 비교연산자를 사용하여 작은 값을 찾아보자
  // 기준이 되는 값이 있어야 함.
  if(numberData[i] < numberData[i+1]) {
    // console.log(numberData[i]);
    // console.log(i+1 + "번 째");
    if(numberData[i] < data) {
      data = numberData[i];
      // console.log(data)
    }
  } else {
    // console.log("아니네");
  }
}
console.log(data);