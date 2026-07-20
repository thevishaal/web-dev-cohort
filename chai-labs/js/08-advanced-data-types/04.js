/**
 * Create a Set named `items` with [10, 20, 30, 40]. Get the size and store it in `count`. Then use clear() to remove all items. Get the size again and store in `afterClear`. Log both values.
 */

// solution

// Create your Set
const items = new Set([10, 20, 30, 40]);
// Get the size
const count = items.size;
// Clear the Set
items.clear();
// Get size again
const afterClear = items.size;
// Log both values
console.log(count, afterClear);
