// 11. Arrays and Loops part 1
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

// let u = 1;
// while (u <= 10) {
//   console.log(u);
//   u++;
// }

// for(let u = 1; u < 15; u++){
//   console.log(u);
// }

// const nums = [5,6,7]
// let total = 0;

// for(let i = 0; i < nums.length; i++){
//   total += nums[i];
//   console.log(total);
// }

// const nums = [2,6,8];
// let total = 0;
// let allValue = [];

// for(let i = 0; i < nums.length; i++){
//   const num = nums[i];
//   total += num;
//   let sumValue = total;

//   allValue.push(sumValue * 5);
//   console.log(allValue);
// }

// for(let i = 0; i <= 10; i+2){
//   console.log(i);
// }

// let userData = [];
// let nameUser;
// let date;
// let infoUser = {};

// function recupNameDate() {
//   nameUser = document.querySelector(".nameInput").value;
//   dateUser = document.querySelector(".dateInput").value;
//   if (nameUser.trim() !== "" && nameUser.length <= 10 && dateUser !== "") {
//     infoUser = { nom: nameUser, date: dateUser };
//     userData.push(infoUser);
//     // alert(`Nouvelle valeur : ${nameUser} et ${dateUser} a été ajouter !`)
//   } else {
//     alert(
//       "Veuillez remplire tout les champs (* sans espace), texte trop long ou date manquante !"
//     );
//   }

//   document.querySelector(".nameInput").value = "";
//   document.querySelector(".dateInput").value = "";
//   document.querySelector(".valueOntap").innerHTML = "";

//   renderList();

// }

// function renderList(){
//   let ListHMTL = '';
//   for (let i = 0; i < userData.length; i++) {
//     let Nomfinish = userData[i].nom;
//     let Datefinish = userData[i].date;

//     const html = `<div class="values"><p>${Nomfinish}</p><p>${Datefinish} 😄 </p></div>`;

//     ListHMTL += html;
//   }
//   document.querySelector('.allvalue').innerHTML = ListHMTL;
// }

// function handlePressEnter(event) {
//   if (event.key === "Enter") {
//     recupNameDate();
//   }
// }

// function valueOntap() {
//   let nameTap = document.querySelector(".nameInput").value;
//   document.querySelector(".valueOntap").innerHTML = `${nameTap}`;
// }

// const nums = [10,20,30]
// let lastValue = nums.length - 1
// console.log(nums);
// let valChange = nums[lastValue] = 99
// console.log(nums);

// let firstArray = [1,5];
// let secArray = ["hi", "hello", "good"];

// function getLastValue(array){
//   let lastIndex = array.length - 1;
//   return array[lastIndex];
// }

// console.log(getLastValue(firstArray));
// console.log(getLastValue(secArray));

// function arraySwap(array) {
//   if (array.length < 2) {
//     console.log('rien a changer');
//     return array; 
//   }

//   let last = array.length - 1;
  
//   let c = array[last];
//   let b = array[0];

//   array[last] = b;
//   array[0] = c;

//   return array;
// }

// console.log(arraySwap(firstArray));
// console.log(arraySwap(secArray));

// for(let i = 0; i<=10; i+=2){
//   console.log(i);
// }

// for(i = 5; i >= 0; i--){
//   console.log(i);
// }

// let tab = [4,5,6,8]
// let tab1 = [-2,-1,0,99]
// let tabval = []

// for(let i = 0; i < tab.length; i++){
//   tabval.push(tab[i] + 1) 
// }

// console.log(tabval);

// function addOne(array){
//   let tabval = []
//   for(let i = 0; i < array.length; i++){
//     tabval.push(array[i] + 1);
//   }
//   array = tabval;

//   return array;
// }

// console.log(addOne(tab));

// let tab = [4,5,6,8]
// let tab1 = [-2,-1,0,99]

// Function pour additionner dans un tableau on peut le changer en multiplication ou division
// function addNum(array, num){
//   let tabval = [];
//   for(let i = 0; i < array.length; i++){
//     tabval.push(array[i] + num);
//   }
//   array = tabval;

//   return array;
// }

// console.log(addNum(tab, 2));

// function addArrays(array1, array2){
//   let tabval = [];
//   for(let i = 0; i < array1.length; i++){
//     tabval.push(array1[i] + array2[i]);
//   }
//   array1 = tabval;

//   return array1;
// }

// console.log(addArrays([4,5,6,8], [-2,-1,0,99]));

// function countPositive(nums){
//   let count = 0;
//   for(let i = 0; i < nums.length; i++){
//     if(nums[i] > 0){
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countPositive([1,-3,5]));

// function minMax(nums){
//   let min = 0;
//   let max = 0;

//   if(nums.length === 0){
//     return { min: null, max: null };
//   }
  
//   for(let i = 0; i < nums.length; i++){

//     if(nums.length === 1){
//       min = nums[0];
//       max = nums[0];
//     }

//     if(nums[i] < min){
//       min = nums[i];
//     } else if(nums[i] > max){
//       max = nums[i];
//     }
//   }

//   return {
//     min: min,
//     max: max
//   }
// }

// console.log(minMax([-5]));

// let array8 = ['apple', 'grape', 'grape', 'apple', 'apple'];

// function countWords(words){
//   let wordCount = {};

//   for(let i = 0; i < words.length; i++){
//     let word = words[i];
//     if(wordCount[word]){
//       wordCount[word]++;
//     } else {
//       wordCount[word] = 1;
//     }
//   }

//   return wordCount;
// }

// console.log(countWords(array8));


// Pattern
// left pattern
// function printPattern(height) {
 
//   for (let i = 1; i <= height; i++) {
//     let line = "";
//     for (let j = 1; j <= i; j++) {
//       line += "*";
//     }
    
//     console.log(line);
//   }
// }

// printPattern(5);

// carre pattern
// let n = 4;

// let string = "";

// for(let i = 1; i <= n; i++) {
//   for(let j = 1; j <= n; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// middle pattern
// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     if(i === 0 || i === n - 1) {
//       string += "*";
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);

// right pattern
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// Downward Triangle 
// let n = 5;
// let string = "";
// for (let i = 0; i < n; i++) {
//   // printing star
//   for (let k = 0; k < n - i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


// Hollow Triangle Star
// let n = 6;
// let string = "";

// for (let i = 1; i <= n; i++) {
//   // printing star
//   for (let j = 0; j < i; j++) {
//     if(i === n) {
//       string += "*";
//     }
//     else {
//       if (j == 0 || j == i - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);

// Javascript Pyramid Pattern
// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// Reversed Pyramid Star Pattern 
// let n = 5;
// let string = "";
// // External loop
// for (let i = 0; i < n; i++) {
//   // printing spaces
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * (n-i) - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// Hollow Pyramid Star Pattern
// let n = 5;
// let string = "";

// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     if(i === 1 || i === n) {
//       string += "*";
//     }
//     else {
//       if(k === 0 || k === 2 * i - 2) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);

// Diamond Pattern in Javascript
// let n = 5;
// let string = "";
// // Upside pyramid
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// // downside pyramid
// for (let i = 1; i <= n - 1; i++) {
//   // printing spaces
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = (n - i) * 2 - 1; k > 0; k--) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// Hollow Diamond Pattern
// let n = 5;
// let string = "";
// Upside pyramid
// upside diamond
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     if (k === 0 || k === 2 * i - 2) {
//       string += "*";
//     }
//     else {
//       string += " ";
//     }
//   }
//   string += "\n";
// }
// // downside diamond
// for (let i = 1; i <= n - 1; i++) {
//     // printing spaces
//     for (let j = 0; j < i; j++) {
//       string += " ";
//     }
//     // printing star
//     for (let k = (n - i) * 2 - 1; k >= 1; k--) {
//       if (k === 1 || k === (n - i) * 2 - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//     string += "\n";
//   }
// console.log(string);


// Hourglass Star Pattern
// let n = 5;
// let string = "";
// // Reversed pyramid pattern
// for (let i = 0; i < n; i++) {
//   // printing spaces
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < (n - i) * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// // pyramid pattern
// for (let i = 2; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


// Right Pascal Star Pattern
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


// Left Pascal Star Pattern
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < n - i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// Heart Star Pattern In JavaScript
// var n = 6;
// var str = "";
// for (let i = n / 2; i < n; i += 2) {
//   // print first spaces
//   for (let j = 1; j < n - i; j += 2) {
//     str += " ";
//   }
//   // print first stars
//   for (let j = 1; j < i + 1; j++) {
//     str += "*";
//   }
//   // print second spaces
//   for (let j = 1; j < n - i + 1; j++) {
//     str += " ";
//   }
//   // print second stars
//   for (let j = 1; j < i + 1; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// // lower part
// // inverted pyramid
// for (let i = n; i > 0; i--) {
//   for (let j = 0; j < n - i; j++) {
//     str += " ";
//   }
//   for (let j = 1; j < i * 2; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);