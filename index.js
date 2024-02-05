// 11. Arrays and Loops
// const myArray = [10, 25, 45, 55, 60];
// console.log(myArray);
// console.log(myArray[0]);
// console.log(myArray[2]);
// myArray[0] = 86;
// console.log(myArray);
// [10, 25, 45, 55, 60].forEach((value, index) =>
//   console.log(`Value : ${value} , Index : ${index}`)
// );

// let myArray1 = [1, 'hello', true, { name: 'Caleb', age: 30 }, [1, 2, 3]];
// console.log(typeof myArray1);
// console.log(myArray1);
// console.log(myArray1[3].name)

// let ArraysOne = Array.isArray(myArray1);
// console.log(ArraysOne);
// console.log(myArray1.length);

// myArray1.push('hello');
// console.log(myArray1);
// myArray1.unshift('hello');
// console.log(myArray1);
// myArray1.shift();
// console.log(myArray1);
// myArray1.pop();
// console.log(myArray1);

// myArray1.splice(1, 1);
// console.log(myArray1);
// myArray1.splice(1, 0, 'hello');
// console.log(myArray1);
// myArray1.splice(2, 1, 'hello');
// console.log(myArray1);
// myArray1.splice(2, 0, 'hello');
// console.log(myArray1);
// myArray1.splice(3, 1);
// console.log(myArray1);
// myArray1.splice(3, 0, 'hello');
// console.log(myArray1);
// myArray1.splice(0, 0, 'hello', 'hello');
// console.log(myArray1);

function recupNameDate(){
  let name = document.querySelector('.nameInput').value;
  let userData = [];
  userData.push(name);
  console.log(userData);
}