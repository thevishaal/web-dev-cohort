/**
 * Create an object `animal` with property `eats: true`. Create another object `rabbit` using object literal syntax. Set rabbit's prototype to animal using Object.setPrototypeOf(rabbit, animal). Log rabbit.eats.
 */

// solution

// Create animal object
const animal = {
  eats: true,
};
// Create rabbit object
const rabbit = {};
// Set prototype
Object.setPrototypeOf(rabbit, animal);
// Log rabbit.eats
console.log(rabbit.eats);
