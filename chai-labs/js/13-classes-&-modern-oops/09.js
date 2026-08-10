/**
 * Create class `Animal`. Create class `Dog` extending Animal. Create a dog instance. Check if dog is instanceof Dog and store in `isDog`. Check if dog is instanceof Animal and store in `isAnimal`. Log both results on separate lines.
 */

// solution

// Create Animal and Dog classes
class Animal {}
class Dog extends Animal {}
// Create dog instance
const dog = new Dog();
// Check instanceof
const isDog = dog instanceof Dog;
const isAnimal = dog instanceof Animal;
// Log results
console.log(isDog);
console.log(isAnimal);
