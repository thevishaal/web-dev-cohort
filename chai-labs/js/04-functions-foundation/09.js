/**
 * Create a function named `checkAge` that takes a parameter `age`. If age is 18 or greater, return 'Adult'. Otherwise, return 'Minor'. Call it with 16 and 21, logging both results.
 */

// solution

// Declare your function with conditional logic
function checkAge(age) {
  return age >= 18 ? "Adult" : "Minor";
}
// Call with 16 and log
console.log(checkAge(16));
// Call with 21 and log
console.log(checkAge(21));
