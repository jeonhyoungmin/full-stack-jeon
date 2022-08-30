// * 함수 만들기

// ! 함수 one을 호출하면 콘솔에 "첫번째 함수"라는 메세지를 출력하게끔 '알고리즘'을 작성하세요.
function one() {
  // return "첫번째 함수"
  console.log("첫번째 함수")
}
one();
// return을 사용해야 하는건가?
// one을 '호출'한다는 의미는? 
// return을 사용하지 않고 호출하는 방법은?
// 간단하게 생각하자

// ! 함수 two를 호출하면 숫자 10 이라는 값이 콘솔에 출력되게끔 '알고리즘'을 작성하세요.
function two() {
  // console.log(10)
  return 10
}
console.log(two());
// console.log(typeof two());

// ! 첫번째 매개변수 parameter에 "KDT"를 입력하면
// ! "KDT"의 데이터 타입이 콘솔에 출력되게끔 알고리즘을 작성하세요.
function three(parameter) {
  if(parameter === "KDT") {
    console.log(typeof "KDT")
  }
}
three("KDT");








// ! 첫번째 매개변수 param에 "KDT"값이 들어오면
// ! 콘솔화면에서 "K-digital training"이라는 문구가 출력되도록 '알고리즘'을 작성하세요.
// ! "KDT"가 아니라면, "한컴타자놀이"가 출력되게끔 '알고리즘'을 추가하세요.
function four(param) {
  if(param === "KDT") {
    console.log('K-digital training')
  } else if( param !== "KDT") {
    console.log("한컴타자놀이")
  }
}
four("KDT");
four("공미남");






function a() {
  return 1;
}

// * let c = 1;
// console.log(a())

function b() {
  return 2;
}

// * let d = 2;

function five(paramOne, paramTwo) {
  // ! 위에 먼저 선언된 함수 a(), b()을 덧셈하여 나온값을
  // ! 콘솔에 출력되게끔 '알고리즘'을 작성하세요.
  // let a = paramOne;
  // let b = paramTwo;
  // a + b
  // console.log(a)
  // console.log(b)
  return paramOne + paramTwo;
}

console.log(a(), b())


// ! 덧셈이 실행되어 어떠한 '숫자값' 이 나오도록 작성하세요.
console.log(five(/* 매개변수 두개 */a(), b()) + a()); 



// -------------------------

// 위 데이터를 생성한 .js 파일에 붙여넣어 node.js 런타임으로 실습하세요.