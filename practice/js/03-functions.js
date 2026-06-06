// 1. closure :- A closure is a function that has access to its own scope, the outer function's scope, and the global scope. It allows a function to access variables from an enclosing scope, even after the outer function has finished executing.

function outerFunction() {
  const outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable); // Accessing the outer variable
  }
  return innerFunction; // Returning the inner function
}

const closureExample = outerFunction();
closureExample(); // Output: I am from the outer function

// 2. callback :- A callback is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows you to handle asynchronous operations in JavaScript.

function fetchData(callback) {
  console.log("Fetching data from the server...");
  setTimeout(() => {
    const data = "Data fetched from the server";
    callback(data); // Calling the callback function with the fetched data
  }, 2000);
}

fetchData((result) => {
  console.log(result); // Output: Data fetched from the server
});

// 3. higher-order function :- A higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result. It allows you to create more abstract and reusable code.

function higherOrderFunction(operation) {
  return function (a, b) {
    return operation(a, b); // Calling the passed-in function with arguments
  };
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const addFunction = higherOrderFunction(add);
const subtractFunction = higherOrderFunction(subtract);
console.log(addFunction(5, 3)); // Output: 8
console.log(subtractFunction(5, 3)); // Output: 2

// 4. pure function :- A pure function is a function that always produces the same output for the same input and has no side effects. It does not modify any external state or variables.

function pureFunction(x, y) {
  return x + y; // It always returns the same output for the same input
}

console.log(pureFunction(2, 3)); // Output: 5
console.log(pureFunction(2, 3)); // Output: 5

// 5. IIFE (Immediately Invoked Function Expression) :- An IIFE is a function that is defined and immediately executed. It is often used to create a new scope and avoid polluting the global namespace.

(function () {
  const message = "This is an IIFE";
  console.log(message); // Output: This is an IIFE
})();

// 6. arrow function :- An arrow function is a concise syntax for writing functions in JavaScript. It does not have its own 'this' context and is often used for shorter function expressions.

const arrowFunction = (a, b) => a + b; // It returns the sum of a and b
console.log(arrowFunction(4, 5)); // Output: 9
