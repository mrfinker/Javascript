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

let valueDoc = document.querySelector(".userValue");
let valueUser;
let randomValue = Math.round(Math.random() * 100);
console.log(randomValue);

function checkValue() {
  valueUser = valueDoc.value;
  if(valueUser === randomValue){
    console.log('Bravo');
  } else if(valueUser < randomValue){
    console.log('inferieur');
  } else if(valueUser > randomValue){
    console.log('superieur');
  }
  console.log(valueUser);
}
