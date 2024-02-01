// 8. Objects
const product = {
  name: "Caleb",
  price: 150
}

console.log(typeof product);
console.log(product);
console.log(product.name);
console.log(product.price);

product.name = 'Change name';
console.log(product);

product.newPropriete = true;
console.log(product);

delete product.newPropriete;
console.log(product);

const score = {
  win: 0,
  losse: 0,
  tie: 0,
}


let computerNumber = '';
let result = '';

function playerGame(playerMove){
  
  if(playerMove === 'Pierre'){
    if(computerMove === 'Pierre'){
      result = ('Personne n\'a gagner');
    } else if (computerMove === 'Feuille'){
      result = ('L\'IA a gagner');
    } else if(computerMove === 'Ciseau') {
      result = ('Tu as gagner');
    }

  } else if(playerMove === 'Feuille'){
    if(computerMove === 'Pierre'){
      result = ('Tu as gagner');
    } else if (computerMove === 'Feuille'){
      result = ('Match nul');
    } else if(computerMove === 'Ciseau') {
      result = ('Tu as perdus');
    } 
  } else if(playerMove === 'Ciseau'){
    if(computerMove === 'Pierre'){
      result = ('Tu as perdus');
    } else if (computerMove === 'Feuille'){
      result = ('Tu as gagner');
    } else if(computerMove === 'Ciseau') {
      result = ('Match nul');
    }
  }
  alert(`vous avez choisis ${playerMove},  L\'IA a choisis ${computerMove}, ${result}`);
}

function pickandroidMove(){
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = ('Pierre');
  } else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = ('Feuille');
  } else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = ('Ciseau');
  }

  return console.log(computerMove);
}
