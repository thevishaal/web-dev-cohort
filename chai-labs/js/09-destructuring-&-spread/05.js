/**
 * Create an array named `scores` with [95, 88, 92, 78, 85]. Use array destructuring to extract the first element into `highest`, and collect the remaining elements into an array `rest`. Log both variables.
 */

// solution

// Create your array
const scores = [95, 88, 92, 78, 85];
// Destructure with rest
const [highest, ...rest] = [...scores];
// Log the variables
console.log(highest, rest);
