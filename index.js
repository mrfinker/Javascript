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

let userData = [];
let nameUser;
let date;
let infoUser = {};
let ListHMTL = '';

renderList();

function recupNameDate() {
  nameUser = document.querySelector(".nameInput").value;
  dateUser = document.querySelector(".dateInput").value;
  if (nameUser.trim() !== "" && nameUser.length <= 10 && dateUser !== "") {
    infoUser = { nom: nameUser, date: dateUser };
    userData.push(infoUser);
    alert(`Nouvelle valeur : ${nameUser} et ${dateUser} a été ajouter !`)
  } else {
    alert(
      "Veuillez remplire tout les champs (* sans espace), texte trop long ou date manquante !"
    );
  }

  document.querySelector(".nameInput").value = "";
  document.querySelector(".dateInput").value = "";
  document.querySelector(".valueOntap").innerHTML = "";
  
  renderList();

}

function renderList(){
  for (let i = 0; i < userData.length; i++) {
    let Nomfinish = userData[i].nom;
    let Datefinish = userData[i].date;

    const html = `<div class="values"><p>${Nomfinish}</p><p>${Datefinish}</p></div>`;

    ListHMTL += html;
  }
  document.querySelector('.allvalue').innerHTML = ListHMTL;
}

function handlePressEnter(event) {
  if (event.key === "Enter") {
    recupNameDate();
  }
}

function valueOntap() {
  let nameTap = document.querySelector(".nameInput").value;
  document.querySelector(".valueOntap").innerHTML = `${nameTap}`;
}



for(let i = 0; i <= 10; i+2){
  console.log(i);
}