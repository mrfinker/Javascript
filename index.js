// 1.BASICS
// alert("Bonjour");
// alert("Caleb Kiangebeni");
// console.log("On est, Mercredi 31 Janvier 2024")
// document.body.innerHTML=('Bonjour je suis l\'element attendus sur le body')
// console.log(9+2)
// alert(2+2)
// console.log("Je suis un nombre");

// 2.Numbers and Math
// let cel = 9
// let far = 10
// alert("La valeur de "+ cel +` Celsius en Faraneiht est : ${(far - 32) * 5 / 9} `)
// alert("La valeur de "+ far +` Faraneiht en Celsius est : ${(cel * 9 / 5) + 32}`)

// 3.Strings
// console.log("Caleb" + " Kiangebeni")
// console.log("Caleb" + " Kiangebeni" + " Demissa")
// console.log(typeof(2))
// console.log(typeof(2.2))
// console.log(typeof(2,2))
// console.log(typeof("Bonjour"))
// console.log("hello"+3)
// console.log("$" + 500 + 300)
// console.log("$500" + 300)
// console.log("$" + (500 + 300))
// console.log("Bonjour")
// console.log('Bonjour')
// console.log('Je t\'emmerde')
// let Hey = "Bonjour"
// console.log(`${Hey}`)
// console.log(`Bonjour
// tu vas bien ?`)

// console.log('My name is : as a', typeof("Caleb Kiangebeni"));
// console.log('My name is : Caleb Kiangebeni');
// console.log('My name is :' + ' Caleb Kiangebeni');
// console.log('Total cost : $' + ((1*5)+(1*3)) )
// alert('Total cost : $' + ((1*5)+(1*3)) )
// console.log(`Total cost : $${(1*5)+(1*3)}`)
// console.log(`Total cost : $${Math.round(1*5.5)+(1*3)}`)
// console.log(`Total cost : $${Math.round(1*5.5)+(1*3) * 0.1}`)

// 4. HTML, CSS and Js
// Ceci est un commentaire, en une seule ligne
/* Ceci est un commentaire
Multi-ligne */

// 5.Variables
// let qt = 0;
// let calculation = '';
// let myName = "Caleb Kiangebeni";
// console.log(`My name is : ${myName}`);
// let cost = ((1*5)+(2*3)+(1*9));
// let costPercentage = (cost * 0.1);
// let totalCost = cost + costPercentage;
// console.log(`Cost of food : $${cost}`);
// console.log(`Tax 10% : $${costPercentage}`);
// console.log(`Total cost : $${totalCost}`);

// 6. Booelean and if statement
// console.log(3>5);
// console.log(3<5);
// console.log(3<5+2);
// console.log(3<5-3);
// console.log(typeof(true));
// console.log(typeof('true'));
// console.log(5 == '5');
// console.log(5 === '5');
// let age = 20;
// if(age > 18){
//   console.log("Je suis assez grand");
// } else if (age < 17) {
//   console.log('Je suis encore a fleur d\'age');
// } else {
//   console.log('je ne sais pas');
// }

// let resultat;
// console.log(resultat);

// resultat = true ? 'yes' : 'No';
// console.log(resultat);

// resultat = false ? 'yes' : 'No';
// console.log(resultat);

// let message;
// message = false && 'Bonjour a tous'
// console.log(message);

// message = true && 'Bonjour a tous'
// console.log(message);

// message = true || 'Bonjour a tous'
// console.log(message);

// message = false || 'Bonjour a tous'
// console.log(message);

// message = 'EUR' || 'USD'
// console.log(message);

// message = undefined || 'USD'
// console.log(message);

// win = 0;
// losse = 0;
// tie = 0;

// let computerNumber = '';
// let result = '';

// function playerGame(playerMove){
  
//   if(playerMove === 'Pierre'){
//     if(computerMove === 'Pierre'){
//       result = ('Personne n\'a gagner');
//       tie += 1;
//     } else if (computerMove === 'Feuille'){
//       result = ('L\'IA a gagner');
//       losse += 1;
//     } else if(computerMove === 'Ciseau') {
//       result = ('Tu as gagner');
//       win += 1;
//     }

//   } else if(playerMove === 'Feuille'){
//     if(computerMove === 'Pierre'){
//       result = ('Tu as gagner');
//       win += 1;
//     } else if (computerMove === 'Feuille'){
//       result = ('Match nul');
//       tie += 1;
//     } else if(computerMove === 'Ciseau') {
//       result = ('Tu as perdus');
//       losse += 1;
//     } 
//   } else if(playerMove === 'Ciseau'){
//     if(computerMove === 'Pierre'){
//       result = ('Tu as perdus');
//       losse += 1;
//     } else if (computerMove === 'Feuille'){
//       result = ('Tu as gagner');
//       win += 1;
//     } else if(computerMove === 'Ciseau') {
//       result = ('Match nul');
//       tie += 1;
//     }
//   }
//   alert(`vous avez choisis ${playerMove},  L\'IA a choisis ${computerMove}, ${result}`);
// }

// function pickandroidMove(){
//   const randomNumber = Math.random();

//   if (randomNumber >= 0 && randomNumber < 1/3){
//     computerMove = ('Pierre');
//   } else if(randomNumber >= 1/3 && randomNumber < 2/3){
//     computerMove = ('Feuille');
//   } else if(randomNumber >= 2/3 && randomNumber < 1){
//     computerMove = ('Ciseau');
//   }

//   return console.log(computerMove);
// }

// let hour = 18;
// let name = 'Caleb Kiangebeni'

// if (hour >= 0 && hour <= 12){
//   console.log(`Bonjour, ${name} !`);
// } else if(hour >= 13 && hour <= 17){
//   console.log(`Bon apres-midi, ${name}!`);
// } else {
//   console.log(`Bonne nuit, ${name}!`);
// }

// let age = 50;
// const isHoliday = true;

// if(((age >= 6 && age <=64) || (age >= 65)) && !isHoliday){
//   console.log('Discount');
// } else {
//   console.log('Not discount');
// }

// let randomNumber = Math.random();
// let result = '';

// if(randomNumber < 0.5){
//   result = ('Heads');
// } else {
//   result = ('Tails');
// }

// console.log(result);

// let guess = 'Heads';

// if(guess === result){
//   console.log('J\'ai gagner');
// } else {
//   console.log('J\'ai perdus');
// }

// let resultat = guess === result ? console.log('J\'ai gagner') : console.log('J\'ai perdus');

// 7. Functions

// function greet(name){
//   if(!name || name === undefined){
//     console.log('Hi, there!');
//   } else {
//     console.log(`Hello ${name}`);
//   }
// }
// greet('caleb');
// greet('King');
// greet();

function converToFahranheit(celsius){
  let result = (celsius * 9 / 5) + 32
  return console.log(`${result} Degré Celsius`);
}
// converToFahranheit(30);

function converToCelsius(Farhanheit){
  let result = (Farhanheit - 32) * 5 / 9
  return console.log(`${result} Degré Farhanheit`);
}
// converToCelsius(86);

function convertTemperature(degree, unit){
  if(unit === 'C'){
    converToFahranheit(degree)
  } else if(unit === 'F'){
    converToCelsius(degree)
  }
}

convertTemperature(30, 'C')
convertTemperature(40, 'C')
convertTemperature(86, 'F')