/**
 * Create a constructor `Animal` that takes `name`. Add method `speak()` to Animal.prototype that returns 'Sound'. Create constructor `Dog` that takes `name` and calls Animal.call(this, name). Set Dog.prototype to Object.create(Animal.prototype). Create a dog with name 'Rex' and log dog.speak().
 */

// solution

// Create Animal constructor
function Animal(name) {}
// Add speak to Animal.prototype
Animal.prototype.speak = function () {
  return "Sound";
};
// Create Dog constructor
function Dog(name) {
  Animal.call(this, name);
}
// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
// Create dog and log speak()
const dog = new Dog("Rex");
console.log(dog.speak());
