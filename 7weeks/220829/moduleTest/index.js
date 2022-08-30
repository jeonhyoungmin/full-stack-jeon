import clickEvent from './clickEvent.js'

// ! defer가 나오기 전 방식
window.addEventListener('load', () => {
  const h1 = document.querySelector('h1');
  clickEvent(h1, 'black');

});