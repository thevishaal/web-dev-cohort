/**
 * Create a class `Calculator` with a constructor that sets `this.value = 0`. Add a method `add(n)` that increases value by n and returns this. Add a method `getValue()` that returns the current value. Create an instance, call add(5), then log getValue().
 */

// solution

// Create Calculator class
class Calculator {
  constructor() {
    this.value = 0;
  }
  add(n) {
    return (this.value += n);
  }
  getValue() {
    return this.value;
  }
}
// Create instance and use methods
const calc = new Calculator();
calc.add(5);
console.log(calc.getValue());
