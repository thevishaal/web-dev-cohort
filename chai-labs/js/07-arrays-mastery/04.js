/**
 * Create an array named `stack` with [1, 2, 3]. Use push() to add the number 4 to the end. Then use pop() to remove the last element and store it in a variable `removed`. Log both the modified stack and the removed value.
 */

// solution

// Create your stack array
const stack = [1, 2, 3];
// Push 4 to the end
stack.push(4);
// Pop the last element
const removed = stack.pop();
// Log the values
console.log(stack, removed);
