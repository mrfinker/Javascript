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
/*
let randomValue;
let level;
let essaie;

function levelBtn(levelValue, essaieValue){
  level = levelValue;
  essaie = essaieValue;
  randomValue = Math.round(Math.random() * Number(level));
}

function checkValue() {
  let valueUser = document.querySelector(".userValue").value;
  let reponse;
  let i;

  for(i = 0; i<essaie; i++){
    if(valueUser == randomValue){
      reponse = 'identique';
      break
    } else if(valueUser < randomValue){
      reponse = 'inferieur';
    } else if(valueUser > randomValue){
      reponse = 'superieur';
    }
  }


  // if(i === essaie){
  //   alert('fin du test');
  // }
  document.querySelector('.reponse').innerHTML = `votre reponse ${valueUser} est ${reponse} a la valeur attendus`;
}

// if(reponse === undefined){
  //   alert('Veuillez choisir un niveau');
  //   document.querySelector('.reponse').innerHTML = ``;
  // }
*/

// let add;
// add = function(){
//   console.log(2+3);
//   console.log(2+3);
// }

// let add2;
// function runTwice(fun){
//   console.log(fun);
// }
// runTwice(add);

function changeTime(){
  document.querySelector('.start').innerHTML = 'Finis !'
}
