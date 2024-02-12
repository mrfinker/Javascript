// 12. advanced functions

function greeting(){
  console.log('hello');
}

greeting();

const num = 2;

// const function1 = function greeting(){
//   console.log('hello2');
// };

const function1 = function() {
  console.log('hello2');
};

console.log(function1);
console.log(typeof function1);

function1();