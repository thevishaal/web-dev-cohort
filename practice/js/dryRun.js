/**
 * what is function?
 * function is a block of code that performs a specific task.
 * it is a reusable piece of code that can be called multiple times in a program.
 * it can take input parameters and return output values.
 * it helps to break down a complex problem into smaller, manageable pieces.
 */

/**
 * what is higher order function?
 * a higher order function is a function that takes one or more functions as arguments, or returns a function as its result.
 * it allows us to abstract over actions, not just values.
 * it can be used to create more flexible and reusable code.
 */

// 1.
const nums = [3, 10, 24, 90];

const result = map((e) => e * 10 + 1);

function map(fn) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const currentElement = nums[i];
    const r = fn(currentElement);
    result.push(r);
  }

  return result;
}

console.log(result);

// 2.
const nums2 = [3, 10, 24, 90, 80, 34, 67];

nums2.forEach(function (e) {
  if (e % 2 === 0) {
    console.log(e);
  }
});
