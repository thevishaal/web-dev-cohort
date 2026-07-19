/**
 * Create an array named `letters` with ['a', 'b', 'c', 'd', 'e']. Use indexOf() to find the index of 'c' and store it in `position`. Also find the index of 'z' and store it in `notFound`. Log both values.
 */

// solution

// Create your letters array
const letters = ["a", "b", "c", "d", "e"];
// Find the index of 'c'
const position = letters.indexOf("c");
// Find the index of 'z'
const notFound = letters.indexOf("z");
// Log the values
console.log(position, notFound);
