/**
 * Create a constructor function `Animal`. Create an instance `cat` using new Animal(). Use instanceof to check if cat is an instance of Animal. Store the result in variable `result` and log it.
 */

// solution

// Create Animal constructor
function Animal() {}
// Create cat instance
const cat = new Animal();
// Check with instanceof
const result = cat instanceof Animal;
// Log result
console.log(result);
