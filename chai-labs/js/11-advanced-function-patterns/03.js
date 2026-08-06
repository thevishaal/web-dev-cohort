/**
 * Create a function `applyTwice` that takes a function `fn` and a value `x`, then applies the function to the value twice (fn(fn(x))). Create a function `addOne` that adds 1 to a number. Use applyTwice with addOne and the value 5, then log the result.
 */

// solution

// Create applyTwice function
const applyTwice = (fn, x) => {
  return fn(fn(x));
};
// Create addOne function
const addOne = (x) => 1 + x;
// Use and log
console.log(applyTwice(addOne, 5));
