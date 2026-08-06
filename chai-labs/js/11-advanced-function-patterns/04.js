/**
 *Create a function `compose` that takes two functions `f` and `g`, and returns a new function that applies g first, then f (i.e., f(g(x))). Create `addTwo` (adds 2) and `multiplyByThree` (multiplies by 3). Use compose to create a function that multiplies by 3 then adds 2. Apply it to 4 and log the result.
 */

// solution
// Create compose function
const compose = (f, g, x) => f(g(x));
// Create addTwo and multiplyByThree
const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;
// Compose and use
console.log(compose(addTwo, multiplyByThree, 4));
