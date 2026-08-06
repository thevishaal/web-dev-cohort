/**
 * Create an array `numbers` with [1, 2, 3, 4, 5, 6]. Use filter to keep only even numbers, then use map to square each number. Store the result in `result` and log it.
 */

// solution

// Create array
const numbers = [1, 2, 3, 4, 5, 6];
// Filter and map
const result = numbers.filter((n) => n % 2 === 0).map((n) => n * n);
// Log result
console.log(result);
