// 8. Objects
// const product = {
//   name: "Caleb",
//   price: 150
// }

// console.log(typeof product);
// console.log(product);
// console.log(product.name);
// console.log(product.price);

// product.name = 'Change name';
// console.log(product);

// product.newPropriete = true;
// console.log(product);

// delete product.newPropriete;
// console.log(product);

// const product2 = {
//   name: 'Shirt',
//   price: 15,
//   ['delivery']: '1 day',
//   rate: {
//     stars: 4.5,
//     count: 185
//   },
//   fun: function function1(){
//     console.log('C\'est une fonction dans un object');
//   }
// };

// console.log(product2);
// console.log(product2['name']);
// console.log(product2['delivery']);
// // same things
// console.log(product2.rate.count);
// console.log(product2['rate'].count);
// console.log(product2['rate']['count']);
// console.log(product2.rate['count']);

// console.log(product2.fun());

// const reusableJSONProduct2 = JSON.stringify(product2);
// console.log(reusableJSONProduct2);

// const reusableObjectProduct2 = JSON.parse(reusableJSONProduct2);
// console.log(reusableObjectProduct2);

// console.log(product2.delivery-time);

// const obj1 = {
//   nameFisrt: 'caleb',
//   poids: 180
// }

// const obj2 = obj1;
// console.log(obj2);
// console.log(obj1 === obj2);

// obj1.nameFisrt = 'Kiangebeni';
// console.log(obj1);
// console.log(obj2);

// const obj3 = {
//   nameFisrt: 'Kiangebeni',
//   poids: 180
// }

// console.log(obj1);
// console.log(obj3);
// console.log(obj1 === obj3);

// const { nameFisrt, poids } = obj1;
// console.log(nameFisrt);
// console.log(poids);

// const obj4 = {
//   nameFisrt: nameFisrt,
//   nameFisrt,
//   poids: poids
//   poids,
//   method: function function1(){
//     console.log('Je suis une function');
//   }
//   method(){
//     console.log('je suis une fonction');
//   }
// }

// console.log(obj4);
// obj4.method();

objBasket = {
  nameProduct: 'Basketball',
  price: 2095,
  ['delivery-time']: '3 days',
}

objShirt = {
  nameProduct: 'Shirt',
  price: 5000
}

function comparePrice(product1, product2){
  let result = '';
  if(product1.price < product2.price){
    result = (product1.nameProduct + ' est moins chers' + ' car il vaut ' + `${product1.price}`);
  } else {
    result = (product2.nameProduct + ' est moins chers' + ' car il vaut ' + `${product2.price}`);
  }
  return console.log(result);
}

comparePrice(objBasket, objShirt)

objBasket.price += 500

console.log(objBasket);
console.log(objBasket['delivery-time']);