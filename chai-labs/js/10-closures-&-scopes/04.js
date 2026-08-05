/**
 * Create a function `createMultiplier` that takes a `factor` parameter and returns a function that multiplies its input by that factor. Create `double` using createMultiplier(2) and `triple` using createMultiplier(3). Log double(5) and triple(5).
 */

// solution

// Create createMultiplier function
function createMultiplier(factor) {
  return function (input) {
    return factor * input;
  };
}
// Create double and triple
const double = createMultiplier(2);
const triple = createMultiplier(3);
// Log results
console.log(double(5));
console.log(triple(5));
