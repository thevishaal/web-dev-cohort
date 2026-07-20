/**
 * Create two arrays: `arr1` with [1, 2, 3] and `arr2` with [4, 5, 6]. Use the spread operator to combine them into a new array `combined`. Log the combined array.
 */

// solution

// Create your arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Combine with spread
const combined = [...arr1, ...arr2];
// Log the combined array
console.log(combined);
