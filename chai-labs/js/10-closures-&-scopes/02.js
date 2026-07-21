/**
 * Create a function `createGreeter` that takes a `name` parameter. It should return an inner function that logs 'Hello, [name]!'. Store the returned function in a variable `greet` and call it.
 */

// solution

// Create createGreeter function
function createGreeter(name) {
  return function inner() {
    console.log(`Hello, ${name}!`);
  };
}
// Create greet function
const greet = createGreeter("Alice");
// Call greet
greet();
