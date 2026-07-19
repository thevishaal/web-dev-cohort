/**
 * Create an object named `product` with properties: `name` = 'Laptop', `price` = 999, and `stock` = 50. Use Object.keys() to get all property names as an array, store it in a variable `keys`, and log it.
 */

// solution

// Create your product object
const product = {
  name: "Laptop",
  price: 999,
  stock: 50,
};
// Get the keys using Object.keys()
const keys = Object.keys(product);
// Log the keys array
console.log(keys);
