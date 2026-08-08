/**
 * Create a constructor function `Dog` that takes `name` parameter. Add a method `bark` to Dog.prototype that returns 'Woof!'. Create a Dog instance with name 'Buddy' and call its bark method. Log the result.
 */

// solution
// Create Dog constructor
function Dog(name) {
  this.name = name;
}
// Add bark method to prototype
Dog.prototype.bark = function () {
  return "Woof!";
};
// Create dog instance
const dog = new Dog("Buddy");
// Call and log bark()
console.log(dog.bark());
