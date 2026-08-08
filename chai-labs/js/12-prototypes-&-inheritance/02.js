/**
 *Create a constructor function `User` that takes `name` parameter and sets `this.name = name`. Create a new User with name 'Alice' and store it in variable `user`. Log user.name.
 */

// solution

// Create User constructor
function User(name) {
  this.name = name;
}
// Create user instance
const user = new User("Alice");
// Log user.name
console.log(user.name);
