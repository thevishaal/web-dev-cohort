/**
 * Create an array named `colors` with ['red', 'green', 'blue']. Use array destructuring to extract the first element into a variable `first`, the second into `second`, and the third into `third`. Log all three variables.
 */

// solution

// Create your array
const colors = ["red", "green", "blue"];
// Destructure the array
const [first, second, third] = [...colors];
// Log the variables
console.log(first, second, third);
