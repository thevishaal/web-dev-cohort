/**
 * Create a Map named `cache` with entries: 'page1' -> 'data1', 'page2' -> 'data2'. Use has() to check if 'page1' exists and store in `hasPage1`. Use delete() to remove 'page1', then check has('page1') again and store in `stillHas`. Log both values.
 */

// solution

// Create your Map
const cache = new Map([
  ["page1", "data1"],
  ["page2", "data2"],
]);
// Check if page1 exists
const hasPage1 = cache.has("page1");
// Delete page1
cache.delete("page1");
// Check again
const stillHas = cache.has("page1");
// Log both values
console.log(hasPage1, stillHas);
