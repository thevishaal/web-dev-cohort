/**
 * Create an object `person` with: name = 'Alice', address = {city: 'NYC', zip: '10001'}. Use nested destructuring to extract name and the nested city property. Log both variables.
 */

// solution

// Create your nested object
const person = {
  name: "Alice",
  address: {
    city: "NYC",
    zip: "10001",
  },
};
// Destructure with nesting
const {
  name,
  address: { city },
} = person;
// Log the variables
console.log(name, city);
