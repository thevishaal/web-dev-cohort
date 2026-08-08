/**
 * Create a constructor `Person`. Replace Person.prototype with a new object {greet() { return 'Hi'; }}. Manually set Person.prototype.constructor = Person. Create a person instance and log person.constructor.name.
 */

// solution

// Create Person constructor
function Person() {}
// Replace prototype
Person.prototype = {
  greet() {
    return "Hi";
  },
};
// Fix constructor property
Person.prototype.constructor = Person;
// Create instance and log constructor name
const person = new Person();
console.log(person.constructor.name);
