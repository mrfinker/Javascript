// const myfunc = () => {
//   console.log('arrow function');
// }
/*
const myfunc = (param) => {
  console.log('arrow function');
  console.log(param + 1);
}
myfunc(2)

const regularfunc = function(){
  console.log('regular function');
}
regularfunc()

const obj1 = {
  // sont identiques
  method: () => {

  },
  method(){

  }
}
*/

/*
const valueMes = () => {
  console.log("hey");
}

const btnClick = document.querySelector(".printMessage");

btnClick.addEventListener("click", valueMes);
btnClick.removeEventListener('click', valueMes);

btnClick.addEventListener("click", () => {
  console.log("hey2");
});

let tab1 = [1,5,8,9,6,2,6,-5,-8,15,-9,-1]
tab1.forEach((value, index) => {
  console.log(`${index} : ${value}`);
});

let tab2 = tab1.filter((value) => {
  // if(value >= 0){
  //   return true
  // } else {
  //   return false
  // }
  return value >= 0;
});
console.log(tab2);

let tab3 = tab1.map((value, index) => {
  return value * 2;
})
console.log(tab3);
*/

// let multiply = (a,b) => { return a*b }

// console.log(multiply(7,10));

let tab0 = [5,8,9,-5,6,9,-8]

// let countPositive = (nums) => {
//   let count = 0;
//   nums.forEach((value) => {
//     if(value >= 0){
//       count++;
//     }
//   })
//   return count;
// }

// console.log(countPositive(tab0));

const addNum = (arr, num) => {
  const val = arr.map((value) => {
    return value + num;
  })
  return val;
}

// let tabi = tab0.map((value) => {
//   return value * num
// })

console.log(addNum(tab0, 5));

let tabFoods = ['egg', 'apple', 'egg', 'egg', 'ham']

const removeEgg = (foods) => {
  const val = foods.filter((value) => {
    return value !== 'egg';
  })
  return val
}

console.log(removeEgg(tabFoods));


