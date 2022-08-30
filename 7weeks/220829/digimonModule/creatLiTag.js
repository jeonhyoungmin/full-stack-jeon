export default function creatLiTag(digimon, ulTag, digimontext){
  digimon.forEach( (value, index) => {
    let digimonLi = document.createElement('li');
    ulTag.append(digimonLi);
    digimonLi.textContent = digimontext[index];
  });
  
  
  
  // for(let i = 0; i < digimon.length; i++){
  // let digimonLi = document.createElement('li');
  // ulTag.append(digimonLi);
  // digimonLi.textContent = digimontext[i];
  // }
}