/**
 * Create a Map named `products` with entries: 'laptop' -> 999, 'mouse' -> 25, 'keyboard' -> 75. Use Array.from() with products.keys() to get all keys in an array `productNames`. Use Array.from() with products.values() to get all values in an array `prices`. Log both arrays.
 */

// solution

// Create your Map
const products = new Map([
  ["laptop", 999],
  ["mouse", 25],
  ["keyboard", 75],
]);
// Get keys as array
const productNames = Array.from(products.keys());
// Get values as array
const prices = Array.from(products.values());
// Log both arrays
console.log(productNames, prices);
