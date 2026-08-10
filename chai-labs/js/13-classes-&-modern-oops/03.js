/**
 * Create a class `Animal` with constructor taking `name` and a method `speak()` that returns 'Sound'. Create a class `Dog` that extends Animal. Create a dog with name 'Buddy' and log dog.speak().
 */

// solution

// Create Animal class
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return "Sound";
  }
}
// Create Dog class extending Animal
class Dog extends Animal {}
// Create dog and log speak()
const dog = new Dog("Buddy");
console.log(dog.speak());
