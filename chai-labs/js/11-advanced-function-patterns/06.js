/**
 * Create a function `multiply` that takes two parameters `a` and `b` and returns their product. Create a function `partial` that takes a function and a first argument, returning a new function that only needs the second argument. Use partial to create `multiplyByFive` from multiply. Call it with 3 and log the result.
 */

// solution

// Create multiply function
const multiply = (a, b) => a * b;
// Create partial function
function partial(fn, firstArg) {
  return function (secondArg) {
    return fn(firstArg, secondArg);
  };
}
// Create multiplyByFive
const multiplyByFive = partial(multiply, 5);
// Call and log
console.log(multiplyByFive(3));
