/**
 * Create an object named `person` with properties: `name` = 'Bob', `age` = 30, and an `address` object with `city` = 'New York' and `zipCode` = '10001'. Access and log the city using dot notation.
 */

// solution

// Create your nested person object
const person = {
  name: "Bob",
  age: 30,
  address: {
    city: "New York",
    zipCode: 10001,
  },
};
// Access and log the city
console.log(person.address.city);
