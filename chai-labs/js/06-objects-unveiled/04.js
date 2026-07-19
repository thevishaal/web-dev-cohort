/**
 * Create an object named `calculator` with two properties: `value` set to 0, and a method `add` that takes a parameter `n` and adds it to the `value` property (using this.value). Call the add method with 5, then log the calculator's value.
 */

// solution

// Create your calculator object with a method
const calculator = {
  value: 0,
  add: function (n) {
    return this.value + n;
  },
};
// Call the add method with 5
const result = calculator.add(5);
// Log the value
console.log(result);
