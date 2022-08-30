const ho = {
  lecture: {
    name: 'KDT',
    place: '305호',
    time: '9시'
  },
  tutor: {
    name: '미남',
    age: 18
  },
  study: ['html', 'css', 'javascript', 'react'],
  eunjoo : {
    home: '대전',
    address: {
      region: {
        name: '서구',
        dong: '둔산동',
        detail: {
          first: '오라클 빌딩',
          second: '그린학원',
          third: '305호'
        }
      }
    }
  }
}

// console.log(ho.study[ho.study.length-1]);

// 명령
// ho.study[ho.study.length]='hacker';
// 선언
// ho.study.push('cracker');


// console.table(ho.study)

// console.log(ho.eunjoo.address.region.detail.second)
// let value = ho.eunjoo.address.region.detail.second;


// !
// const {eunjoo:{
//   address: {
//     region: {
//       detail: {
//         second: eunjooHack
//       }}}}} = ho;

// // console.log(eunjooHack)

// function Change(before, after){
//   if(ho.lecture['place'] === before){
//     ho.lecture['place'] = after
//     // console.log(ho.lecture['place'])
//   }
//   return ho.lecture['place']
// }

// Change('305호', '306호') // 실행
// console.log(Change('305호', '306호')) // 반환 값
// console.log(ho.lecture['place']) // 실행이나 콘솔 실행이 있어야 바뀜





// const {lecture: {place: before}} = ho;
// console.log({lecture: {place: before}})
// if( {lecture: {place: before}} === '305호'){
//   ho = '306호'
// }
// console.log({lecture: {place: before}})




// const {lecture: {place: before}} = ho;
// const change = {lecture: {place}}

// console.log(change)



// function change(beforeChange, after) {
//   const {lecture: {place: classRoom}} = ho;
//   console.log(classRoom)
//   const classRoomNumber = classRoom
//   if(classRoomNumber === beforeChange){
//     classRoomNumber = after
//   }
// }

// // console.log(ho.lecture['place'])
// change('305호', '306호')
// console.log(ho.lecture.place)