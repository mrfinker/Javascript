// // arraysLoops part 2
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

//     const html = `<div class="values">
//     <p>${Nomfinish}</p>
//     <p>${Datefinish}</p>
//     <button 
//     onclick="
//     userData.splice(${i}, 1);
//     renderList();
//     ">Supprimer</button>
//     </div>`;

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

// const array1 = [1,2,3];
// // const array2 = array1;
// const array2 = array1.slice();
// array2.push(4);
// console.log(array1);
// console.log(array2);

// const array3 = [1,2,3];

// arrays destructing
// const [un, deux, troix] = [1,2,3]

// break and continue
// for(let i = 0; i<=10; i++){
//   if(i===5){
//     break;
//   }
//   console.log(i);
// }

// for(let i = 0; i<=10; i++){
//   if(i===5){
//     continue;
//   }
//   console.log(i);
// }

// Sauter les valuers divisibles par 3
// for(let i = 0; i<=10; i++){
//   if(i%3===0){
//     continue;
//   }
//   console.log(i);
// }

// multiplie les valeurs et stop la function si il y a 0
// function addNum(array, num){
//     let tabval = [];
//     for(let i = 0; i < array.length; i++){
//       if(array[i] === 0){
//         break;
//       }

//       tabval.push(array[i] * num);
//     }
//     array = tabval;
  
//     return array;
//   }
  
//   console.log(addNum([1,2,5,6,0,8,4,5], 2));

// function LoopsArray(array){
//   for(let i = 0; i < array.length; i++){
//     if(array.includes('search')){
//       console.log(array.indexOf('search'));
//       break;
//     } else{
//       console.log(-1);
//     }
//   }
// }

// console.log(LoopsArray(['hello', 'search', 'world', 'goodbye', 'search']));

// function findIndex(array, word){
//   console.log(word);
//   for(let i = 0; i < array.length; i++){
//     if(array.includes(word)){
//       return array.indexOf(word);
//     } else{
//       return -1
//     }
//   }
// }

// console.log(findIndex(['hello', 'search', 'world', 'goodbye', 'search'], 'search'));

// myfoods = ['egg', 'apple', 'egg', 'egg', 'ham'];

// function removeEgg(foods){
//   let newval = [];
//   for(let i = 0; i < foods.length; i++){
//     foodsname = foods[i];
//     if(foodsname !== 'egg'){
//       newval.push(foodsname);
//     } else {
//       continue;
//     }
//   }
//   return newval;
// }

// function removeEgg(foods){
//   let count = 0;
//   let newval = [];
//   for(let i = 0; i < foods.length; i++){
//     let foodsname = foods[i];
//     if(foodsname === 'egg' && count < 2){
//       count++;
//       continue;
//     }
//     newval.push(foodsname);
//   }
//   return newval;
// }

// function removeEgg(foods){
//   let reversedFoods = foods.slice().reverse();
//   let count = 0;
//   let newval = [];
//   for(let i = 0; i < reversedFoods.length; i++){
//     let foodsname = reversedFoods[i];
//     if(foodsname === 'egg' && count < 2){
//       count++;
//       continue;
//     }
//     newval.push(foodsname);
//   }
//   return newval.reverse();
// }

// console.log(removeEgg(myfoods));

for(let i = 1; i <= 20; i++){
  if(i%3 === 0){
    console.log('fizz');
  } else if(i%5 === 0){
    console.log('buzz');
  } else if(i%3 === 0 && i%5 === 0){
    console.log('fizzBuzz');
  }
  console.log(i);
}