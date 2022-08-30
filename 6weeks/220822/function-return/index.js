function minus(a,b) {
  if(typeof (a) === "number" && typeof (b) === "number") {
    if(a > b) {
      return a - b;
    } else {
      console.log("첫 번째 인자가 두 번째 인수보다 작습니다.");
    }
  }
}

function sum(firstNumber, secondNumber) {
  if(typeof (firstNumber) === "number" && typeof (secondNumber) ==="number") {
    return firstNumber + secondNumber;
  }
}

console.log(sum(10, minus(20,5)))