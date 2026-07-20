/**
 * Create an object named `user` with properties: name = 'Alice', age = 25, city = 'NYC'. Use object destructuring to extract name into a variable `name`, and age into `age`. Log both variables.
 */

// solution

// Create your object
const user = {
  name: "Alice",
  age: 25,
  city: "NYC",
};
// Destructure the object
const { name, age } = user;
// Log the variables
console.log(name, age);
