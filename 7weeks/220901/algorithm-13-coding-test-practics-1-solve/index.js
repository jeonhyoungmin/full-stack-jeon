function randomData(minInt, maxInt){
  const getRandomValue = Math.random()*(maxInt - minInt +1) + minInt;
  return Math.floor(getRandomValue);
}

function getRandomIntArray(count, minInt, maxInt){
  const setArray = [];

  let handle = 0;
  while(handle < count) {
    let rnadomValue = randomData(minInt, maxInt);
    if(setArray.includes(rnadomValue) === false) {
      setArray.push(rnadomValue);
      handle ++;
    }
  }
  setArray.sort((a,b) => a-b);
  return setArray;
}

const setData = getRandomIntArray(3,1,20);
console.log(setData)