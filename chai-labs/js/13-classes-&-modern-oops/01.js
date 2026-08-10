/**
 * Create a class `Person` with a constructor that takes a `name` parameter and assigns it to `this.name`. Create an instance with name 'Alice' and log person.name.
 */

// solution

// Create Person class
class Person {
  constructor(name) {
    this.name = name;
  }
}
// Create instance
const person = new Person("Alice");
// Log name
console.log(person.name);
