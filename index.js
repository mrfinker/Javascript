// 11. Arrays and Loops
const myArray = [10, 25, 45, 55, 60];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[2]);
myArray[0] = 86;
console.log(myArray);
[10, 25, 45, 55, 60].forEach((value, index) =>
  console.log(`Value : ${value} , Index : ${index}`)
);

let myArray1 = [1, 'hello', true, { name: 'Caleb', age: 30 }, [1, 2, 3]];
console.log(myArray1);
console.log(myArray1[3].name)