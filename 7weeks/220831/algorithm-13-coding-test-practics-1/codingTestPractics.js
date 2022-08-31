// const Number = []
//   for(let i = 0; i<20; i++){
//     Number[i] = i+1
//   }
// console.log(Number)

// console.log(Math.random(Number)*10+1)

// const Random = Math.random(Number)*10+1
// const RandomInt = Math.floor(Random)
// console.log(RandomInt)

// console.timeStamp(RandomInt + RandomInt + RandomInt / 3)




// * 기본 문제
// Question : 1부터 20까지의 범위 중 임의의 숫자 세 개가 있다.
//    공식(formula) : (x + y + z) / 3
//     10미만은 10을 포함하지 않는다. 
// 1. 평균값이 10 미만이면 'under' 라는 메세지를 출력한다.
// 2. 평균값이 10 이상히면 'over' 라는 메세지를 출력한다.
// 3. 플로우차트(flowchart) : 순서도를 작성한다.
function average(Numbers, Count){
  const Number = []
  const RandomInt = [];
  for(let i = 0; i<Numbers; i++){
    Number[i] = i+1
  }
  for(let i =0; i<Count; i++){
    RandomInt[i] = Number[Math.floor(Math.random()*Number.length)]
    // console.log(Math.random()*Number.length)
  }
  // console.log(RandomInt)
  const value = RandomInt.reduce( (acc, cur, i, {length}) => {
    return i === length-1 ? (acc+cur) / length : acc +cur;
  },0)
  if(value >= 10){
    console.log('over')
  } else if(value < 10){
    console.log('under')
  }
  return value
}

console.log(average(20,3))





// * Advanced
// a. 1부터 20까지의 범위 중 임의의 3개의 숫자가 중복되지 않은 난수를 배열, inputData에 담기도록 처리하시오.
// b. 객체 objectData의 property인 key, "first", "second", "third"에 주문 a를 통해 얻은 데이터를 각각의 키(key)의 값으로 삽입(insert)하시오. const objectData = { first : 0, second : 0, third: 0};
// b. objectData에 담긴 세 개의 난수 중 중앙값에 해당하는 값을 출력하시오.
const Number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const a = [];
function Random(Count) {
  for(let i = 0; i<Count;i++){
    const b =  Number[Math.floor(Math.random()*Number.length)]
    if(a.indexOf(b) === -1){
      a.push(b)
    } else {
      i--;
    }
  }
  return a
}
Random(3)
console.log(a)
function Advanced(Random, RandomTwo, RandomThree) {
  this.first = Random
  this.second = RandomTwo
  this.third = RandomThree
}

// const objectData = []
// objectData.push(new Advanced(a[0],a[1],a[2]))
// console.log(objectData)

// console.log(objectData[0].first)
// console.log(objectData[0].second)
// console.log(objectData[0].third)

const newObject = new Advanced(a[0],a[1],a[2])
console.log(newObject)

// console.log(Object.keys(newObject))
// console.log(Object.values(newObject))
// console.log(Object.entries(newObject))

const newArr = Object.values(newObject)
for(let i=0; i<newArr.length;i++){
  newArr[i] === Math.max(...newArr) ? false : 
  newArr[i] === Math.min(...newArr) ? false : console.log(newArr[i])
}

// delete newArr[2]
// console.log(newArr)
// console.log(newArr[2])

// console.log(Math.max.apply(newArr))