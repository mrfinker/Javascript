// 12. advanced functions

/*
function greeting(){
  console.log('hello');
}

greeting();

const num = 2;

// version 1
// const function1 = function greeting(){
//   console.log('hello2');
// };

// version 2
const function1 = function() {
  console.log('hello2');
};

console.log(function1);
console.log(typeof function1);

function1();

const obj1 = {
  num: 2,
  // version1
  // fun: function greeting(){
  //   console.log('hello3');
  // }
  // version2
  fun: function(){
    console.log('hello3');
  }
}

obj1.fun();

function display(param){
  console.log(param);
}
display('yeah');


// callback function
function run(param){
  param();
}

run(function(){
  console.log('Appelle function dans une function en tant que parametre');
}) */

// setTimeout() && Asynchronous code
/*
setTimeout(function(){
  // synchronous line by line
  console.log('timeout1');
  console.log('timeout2');
}, 3000);

console.log('next line');

// setInterval
setInterval(function(){
  console.log('interval1');
}, 3000);
*/
let randomValue;
let level;
let essaie;

function levelBtn(level, essaie){
  randomValue = Math.round(Math.random() * Number(level));
  console.log(level);
}

function checkValue() {
  let valueUser = document.querySelector(".userValue").value;
  let reponse;
  if(valueUser == randomValue){
    reponse = 'Bravo';
  } else if(valueUser < randomValue){
    reponse = 'inferieur';
  } else if(valueUser > randomValue){
    reponse = 'superieur';
  }
  document.querySelector('.reponse').innerHTML = reponse;
  console.log(valueUser);
  console.log(randomValue);
  console.log(essaie);
}
