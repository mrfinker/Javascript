// 9.DOM

// document.body.innerHTML = ('Hello');
// document.title = ('Good job');

// document.title = 'Changed title';
// const titlePage = document.title;
// console.log(titlePage);

// console.log(document.body);
// console.log(typeof document.body);

// console.log(document.body.innerHTML);
// document.body.innerHTML=('changed')

// document.body.innerHTML = "<button>Bonjour</button>";

// document.querySelector("button");
// console.log(document.querySelector("button"));
// document.querySelector("button").innerHTML = "changed!!";

// const btnElement = document.querySelector('.btn_two');
// console.log(btnElement);

// function abonner(){
//   const btnSub = document.querySelector('.suscribe');
//     if(btnSub.innerHTML === 'S\'abonner' ){
//       btnSub.innerHTML = 'Abonner';
//     } else {
//       btnSub.innerHTML = 'S\'abonner'
//     }
// }

// function calculateCost(){
//   let cost = document.querySelector('.cost');
//   let value = Number(cost.value);
  
//   if(value < 40){
//     value += 10;
//   }
  
//   document.querySelector('.result').innerHTML = `$${value}`;
// }

// function handleCostEnterKey(event){
//   if(event.key === 'Enter'){
//     calculateCost();
//   }
// }

const btnChallenge = document.querySelector('.challenge').innerHTML;
console.log(btnChallenge);
const btnChallenge2 = document.querySelector('.challenge2')
function changeValueBtn(){
  let result = btnChallenge2.innerHTML = 'test ok!';
  return result;
}