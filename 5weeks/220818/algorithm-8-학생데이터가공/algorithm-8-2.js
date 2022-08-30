let studentList = ['강', '김', '류', '마', '문', '박', '박', '송', '양', '원', '유', '이', '이', '이', '정', '정', '정', '지', '한', '황', '김', '김', '김', '전', '정', '이', '최', '한'];

// console.log(studentList)

// ? 각 데이터에 '님' 붙이기

let nim = " 님"

// 님을 붙이려면 어떻게 해야 할까?
// 각 데이터를 반복문으로 불러들이고서
// 하나하나에 nim을 붙여주자

for(let i = 0; i < studentList.length; i++) {
  studentList[i] = studentList[i] + nim
  console.log(studentList)
}

// ! 문자열은 +로 하나의 문자열로 합쳐진다.
// ! 숫자 + 문자 = 숫자 + 문자
// ! 문자 + 숫자 = '문자"문자열숫자"'