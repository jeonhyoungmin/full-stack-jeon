// function second() {
//   console.log('두번째지롱');
// }

let second = function () {
  console.log('익명이지롱');
}

function first(text, b) {
  if(typeof text === "string"){
    console.log(text + '했지롱');
    b();
    return "반환했지롱";
  } else {
    console.log('콘솔확인해');
  }
}

// first();
// console.log(first());
first('밥먹었', function() {
  console.log('두번째지롱');
});
// first(113);
first('밥먹었', second);