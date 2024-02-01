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
  price: 15
}

console.log(product2);
console.log(product2['name']);