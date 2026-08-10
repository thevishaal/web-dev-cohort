/**
 * Create a class expression assigned to variable `User` with constructor taking `name` parameter. Add method `greet()` that returns 'Hello, [name]'. Create a user with name 'Bob' and log user.greet().
 */

// solution

// Create class expression
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return "Hello, " + this.name;
  }
}
// Create user and log greet()
const user = new User("Bob");
console.log(user.greet());
