// let numberData = [444,23,2022,8,16,12,22];

// console.log(numberData);


/* 가장 큰 수는 어떻게 알 수 있나? 안에 있는 모든 값을 각각 비교해보기 */
// i번째 있는 값을 numberData 하나하나에 다 비교해보기
// let elseNumber = 
// let elseNumber = "i";

// for(let i = 0; i < numberData.length; i++){
  // console.log(numberData[i]);
  // console.log(numberData[!i])
  // console.log(numberData[i+ count])
  // count ++;
  // if(numberData[i] > ) {
  //   console.log(numberData)
  // }
// }

// numberData[0] > numberData[1,2,3,4,5,6]
// numberData[i] > numberData[i를 제외한 값]
// numberData[0] > numberData[1]
// i번째 순서를 제외할 필요가 있음
// i!==i

// i값을 제외한 배열의 수를 비교
// i = 0

// numberData[0] > numberData[1,2,3,4,5,6]
// numberData[1] > numberData[0,2,3,4,5,6]
// numberData[2] > numberData[0,1,3,4,5,6]
// numberData[3] > numberData[0,1,2,4,5,6]

// let elseNumber = []

// for(let i = 0; i < numberData.length; i++) {
//   if(numberData[i] > numberData[i])
// }













// let numberData = [444,23,2022,8,16,12,22];
// // pseudo 1. 나 배열에 있는 값을 조회할거야 --> 반복문

// let saveValue = 0;
// let bigValue = 0;

// for(let i = 0; i < numberData.length; i++) {
//   //pseudo 2. 값을 비교 하고싶어 ===, !==
//   //pseudo 3. 큰놈 >, <
//   if(numberData[i] > numberData[i+1]) {
//     console.log('앞에 있는 놈이 더 값이 큽니다');
//     saveValue = numberData[i];
//     if(saveValue < numberData[i]) {
//       saveData = numberData[i]
//     }
//   } else {
//     console.log("뒤엣놈이 더 커");
//   }
//   console.log(saveData)
//   // console.log(saveValue)
//   // console.log(numberData)
// }

// // 배열 중에 가장 큰 값을 찾자
// // 찾기 위해서는 i번째 순서의 값을 다른 값과 비교해야 한다
// // i번째와 i+1번째와 비교해보기
// // i번째가 i+1보다 크다: 444>23 23>2022 2022>8 8>16 16>12 12>22













let numberData = [444,23,2022,8,16,12,22];

// work: 배열이 숫자가 무엇인지 모르는 상태로 가정하는 것이 훈련에 좋다.
// work: 가장 기초적인 제어부터 구현해 나간다.
// work: 당연한 것 위주로 시작하는 것.

// programming standard 절차짖향, 명령기반 프로그램

let data = 0;

for(let i = 0; i < numberData.length; i++) {
  // console.log(numberData[i]);
  // console.log(i+1);
  if(numberData[i] > numberData[i+1]) {
    // console.log("0번째가 큽니다")
    console.log("i 번 째" + numberData[i]);
    console.log("i+1 번 째" + numberData[i+1]);
    if(data < numberData[i]) {
      data = numberData[i];
      console.log(i+ "번째입니다");
    }
  }
}
console.log(data)