/**
 * Create an array named `queue` with [2, 3, 4]. Use unshift() to add the number 1 to the beginning. Then use shift() to remove the first element and store it in `first`. Log both the modified queue and the first value.
 */

// solution

// Create your queue array
const queue = [2, 3, 4];
// Add 1 to the beginning
queue.unshift(1);
// Remove the first element
const first = queue.shift();
// Log the values
console.log(queue, first);
