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

const valueMes = () => {
  console.log("hey");
}

const btnClick = document.querySelector(".printMessage");

btnClick.addEventListener("click", valueMes);
btnClick.removeEventListener('click', valueMes);

btnClick.addEventListener("click", () => {
  console.log("hey2");
});
