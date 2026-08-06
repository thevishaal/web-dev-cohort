/**
 * Create a recursive function `sumArray` that takes an array of numbers and returns their sum. Base case: empty array returns 0. Recursive case: return first element plus sum of remaining elements. Call it with [1, 2, 3, 4] and log the result.
 */

// solution

// Create sumArray function
function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sumArray(arr.slice(1));
}
// Call and log
console.log(sumArray([1, 2, 3, 4]));
