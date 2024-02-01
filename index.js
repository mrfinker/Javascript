// 8. Objects
const product = {
  name: "Caleb",
  price: 150
}

console.log(typeof product);
console.log(product);
console.log(product.name);
console.log(product.price);

product.name = 'Change name';
console.log(product);

product.newPropriete = true;
console.log(product);

delete product.newPropriete;
console.log(product);

const product2 = {
  name: 'Shirt',
  price: 15,
  ['delivery']: '1 day',
  rate: {
    stars: 4.5,
    count: 185
  },
  fun: function function1(){
    console.log('C\'est une fonction dans un object');
  }
};

console.log(product2);
console.log(product2['name']);
console.log(product2['delivery']);
// same things
console.log(product2.rate.count);
console.log(product2['rate'].count);
console.log(product2['rate']['count']);
console.log(product2.rate['count']);

console.log(product2.fun());

const reusableProduct2 = JSON.stringify(product2);
console.log(reusableProduct2);

// console.log(product2.delivery-time);