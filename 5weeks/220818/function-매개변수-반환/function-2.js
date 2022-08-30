function insa(parameter) {
  parameter + 1;
  return "두";
}

// ! typeof (insa("형민")) = string인 이유는 return이 "두진"이기 때문에.
console.log(typeof (insa("형민")));
console.log( insa("은") === "두");