// const Number = []
//   for(let i = 0; i<20; i++){
//     Number[i] = i+1
//   }
// console.log(Number)

// console.log(Math.random(Number)*10+1)

const Random = Math.random(Number)*10+1
const RandomInt = Math.floor(Random)
// console.log(RandomInt)

// console.timeStamp(RandomInt + RandomInt + RandomInt / 3)





function average(Numbers, Count){
  const Number = []
  const RandomInt = [];
  for(let i = 0; i<Numbers; i++){
    Number[i] = i+1
  }
  for(let i =0; i<Count; i++){
    RandomInt[i] = Number[Math.floor(Math.random()*Number.length)]
    console.log(Math.random()*Number.length)
  }
  console.log(RandomInt)
  const value = RandomInt.reduce( (acc, cur, i, {length}) => {
    return i === length-1 ? (acc+cur) / length : acc +cur;
  },0)
  console.log(value)
}

average(100,3)