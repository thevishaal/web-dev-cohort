/**
 * Create an array named `numbers` with [10, 20, 30, 40, 50]. Use array destructuring to extract only the first element into `first` and the fourth element into `fourth` (skip the 2nd and 3rd). Log both variables.
 */

// solution

// Create your array
const numbers = [10, 20, 30, 40, 50];
// Destructure with skipping
const [first, , , fourth] = numbers;
// Log the variables
console.log(first, fourth);
