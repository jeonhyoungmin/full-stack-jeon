let a = '1';
console.log(typeof a);

let b = parseInt(a);
// parse: 해석하다
// int: integer 정수
console.log(typeof b);

let c = '안녕하지롱';
// 변수 c는 숫자로 바꿀 수 없는 데이터 ==> NaN(Not a Number)
// 에러로 발생하지 않아 난처한 경우의 대표적인 사례

let d = parseInt(c);
console.log(d);