/**
 * Create a function named `greetWithDefault` that takes a parameter `name` with a default value of 'Guest'. The function should return the string 'Welcome, [name]'. Call it twice - once without arguments and once with 'Bob', logging both results.
 */

// solution

// Declare your function with default parameter
function greetWithDefault(name = "Guest") {
  return `Welcome, ${name}`;
}
// Call without arguments and log
console.log(greetWithDefault());
// Call with 'Bob' and log
console.log(greetWithDefault("Bob"));
