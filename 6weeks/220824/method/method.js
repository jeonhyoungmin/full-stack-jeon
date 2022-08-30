
// ? 메서드(method) === '함수'와 동일한 것
// * 이름이 다른 이유는 뭘까?

let aboutMe = {
  name: '공미남',
  age: 18,
  nextYear: function() {
    return aboutMe.age + 1;
  }
}

function nextYear(number) {
  return number + 1;
}

console.log(aboutMe.nextYear(aboutMe.age));
console.log(aboutMe.nextYear());

// console.log(aboutMe.name)
