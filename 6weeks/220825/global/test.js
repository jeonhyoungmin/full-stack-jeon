// C에서 많이 쓰는 방식. 선언 먼저 하고 후에 할당
// let a;
// console.log(a);
// a = 'yea hoon';
// console.log(a);




// const a; error
// const a = 'yea hoon';
// console.log(a)



// let a,b,c,d,e;
// a = 'hello'
// b = 'bye'
// console.log(a,b)




const a = [];
console.log(a);
// ! 재할당은 아님, 값이 변했을 뿐. "편집"은 가능.
a.push('yea hoon');
// = a[a.length] = 'yea hoon'
console.log(a);
// a = 'hello'; X