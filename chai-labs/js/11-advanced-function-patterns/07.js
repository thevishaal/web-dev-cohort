/**
 * Create a curried function `add` that takes one argument and returns a function that takes another argument and returns their sum. Call add(3)(4) and log the result.
 */

// solution

// Create curried add function
function add(a) {
  return function (b) {
    return a + b;
  };
}
// Call and log
console.log(add(3)(4));
