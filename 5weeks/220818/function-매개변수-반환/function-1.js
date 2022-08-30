// * 함수 선언(declaration)
function hairService(parameter) {
  // ? 실행부분 (가공)
  console.log('어서오세요 ' + parameter + ' 고객님');

  // ? 돌려주는 부분 (돌려주는작업)
  return "근씨메롱";

  // ! 콘솔과 리턴은 관계가 없다.
}

// * 함수 호출, 할당(assignment);
hairService('양');
console.log(hairService('공'));
// hairService("이아연");

// console.log(typeof hairService())