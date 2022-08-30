const arr = [1,2,3];
console.log(arr.includes(2));
console.log(arr.includes(100));
console.log(arr.includes(1,1));
console.log(arr.includes(3,-1));



console.log([NaN].indexOf(NaN) !== -1)
console.log([NaN].includes(NaN))