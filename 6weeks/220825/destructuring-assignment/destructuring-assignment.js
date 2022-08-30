// const arr = [1,2,3];

// const [one, two, three] = arr;

// console.log(one)




const user = {firstName: 'ungmo', lastName: 'Lee'}
const {firstName, lastName} = user;
const {firstName: fn, lastName: ln} = user;
console.log(fn, ln);


const str = 'hello';
const {length} = str;
console.log(length)