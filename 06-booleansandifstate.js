// 6. Booelean and if statement
console.log(3>5);
console.log(3<5);
console.log(3<5+2);
console.log(3<5-3);
console.log(typeof(true));
console.log(typeof('true'));
console.log(5 == '5');
console.log(5 === '5');
let ageperson = 20;
if(ageperson > 18){
  console.log("Je suis assez grand");
} else if (ageperson < 17) {
  console.log('Je suis encore a fleur d\'age');
} else {
  console.log('je ne sais pas');
}

let resultatTest;
console.log(resultatTest);

resultatTest = true ? 'yes' : 'No';
console.log(resultatTest);

resultatTest = false ? 'yes' : 'No';
console.log(resultatTest);

let message;
message = false && 'Bonjour a tous'
console.log(message);

message = true && 'Bonjour a tous'
console.log(message);

message = true || 'Bonjour a tous'
console.log(message);

message = false || 'Bonjour a tous'
console.log(message);

message = 'EUR' || 'USD'
console.log(message);

message = undefined || 'USD'
console.log(message);

const score = JSON.parse(localStorage.getItem('score'));

let computerNumber = '';
let result = '';

function playerGame(playerMove){
  
  if(playerMove === 'Pierre'){
    if(computerMove === 'Pierre'){
      result = ('Match nul');
    } else if (computerMove === 'Feuille'){
      result = ('Tu as perdus');
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

  if(result === "Tu as gagner"){
    score.win += 1;
  } else if(result === 'Tu as perdus'){
    score.losse += 1;
  } else if(result === 'Match nul'){
    score.tie += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  alert(`vous avez choisis ${playerMove},  L\'IA a choisis ${computerMove}, ${result}
Gagner : ${score.win}, Perdus : ${score.losse}, nul : ${score.tie}`);
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

  return computerMove;
}

let hour = 18;
let name = 'Caleb Kiangebeni'

if (hour >= 0 && hour <= 12){
  console.log(`Bonjour, ${name} !`);
} else if(hour >= 13 && hour <= 17){
  console.log(`Bon apres-midi, ${name}!`);
} else {
  console.log(`Bonne nuit, ${name}!`);
}

let age = 50;
const isHoliday = true;

if(((age >= 6 && age <=64) || (age >= 65)) && !isHoliday){
  console.log('Discount');
} else {
  console.log('Not discount');
}

let randomNumber = Math.random();
let resultTwo = '';

if(randomNumber < 0.5){
  resultTwo = ('Heads');
} else {
  resultTwo = ('Tails');
}

console.log(resultTwo);

let guess = 'Heads';

if(guess === resultTwo){
  console.log('J\'ai gagner');
} else {
  console.log('J\'ai perdus');
}

let resultat = guess === resultTwo ? console.log('J\'ai gagner') : console.log('J\'ai perdus');
