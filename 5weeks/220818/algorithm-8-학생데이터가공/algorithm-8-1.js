let studentList = ['강', '김', '류', '마', '문', '박', '박', '송', '양', '원', '유', '이', '이', '이', '정', '정', '정', '지', '한', '황', '김', '김', '김', '전', '정', '이', '최', '한'];

// * length 사용
// console.log(studentList)
// console.log(studentList.length)
// studentList[studentList.length] = '공욱재';
// console.log(studentList)



// * length 미사용
// function addName(name) {
//   if(studentList[i] === '') {
//   studentList[i] = name;
//   }
// }
// addName('공')
// console.log(studentList)



// function addName(name) {
//   if(name === "string") {
//     for(let i = 0; i < Infinity; i++) {
//       if((typeof studentList[i])==="undefined" && (typeof studentList[i-1])==="string") {
//         studentList[i] = name;
//       }
//     }
//   }
// }
// console.log(typeof (addName('공')))

// console.log(typeof(studentList[28]))
// console.log(typeof (studentList[28-1]))
// console.log(studentList)

// console.log((typeof studentList[27]) === "string")
// console.log(studentList)
// console.log((typeof studentList[28]) === "undefined")


// ! for문으로 while처럼 사용한 것.
// function addName(name){
//   for(let i = 0; ; i++) {
//     if( (typeof studentList[i]) === "undefined" && (typeof studentList[i-1]) ==="string") {
//       console.log(studentList[i-1])
//       studentList[i] = name;
//       break
//     }
//   }
// }

// addName('공욱재');
// console.log(studentList)



// ! while문으로 작성하기
// ! while문은 참 일때 까지 계속 반복 

let lastNumber = 0;
// while((typeof studentList[lastNumber])==="string"){
//   lastNumber++
// }
// console.log(lastNumber)
// studentList[lastNumber] = '공'
// console.log(studentList)
// console.log(studentList)
// console.log((typeof studentList[27]) === "string")

function addName(name) {
  if((typeof name) === "string") {
    while((typeof studentList[lastNumber]) === "string") {
      lastNumber++
    }
    studentList[lastNumber] = name
  }
}

addName('공')
console.log(studentList)