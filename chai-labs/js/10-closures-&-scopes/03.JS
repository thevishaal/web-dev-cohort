/**
 * Create a function `createCounter` that returns an object with two methods: `increment()` (increases internal count by 1 and returns it) and `getCount()` (returns current count). Start count at 0. Create a counter, call increment twice, then log the result of getCount().
 */

// solution

// Create createCounter function
function createCounter() {
  let count = 0;
  return {
    increment() {
      count += 1;
      return count;
    },
    getCount() {
      return count;
    },
  };
}
// Create counter
const counter = createCounter();
// Call increment twice
counter.increment();
counter.increment();
// Log count
console.log(counter.getCount());
