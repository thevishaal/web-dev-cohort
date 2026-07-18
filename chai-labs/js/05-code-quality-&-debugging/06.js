/**
 * Create a function named `findMax` that takes two numbers and returns the larger one. Test it with the values 45 and 67. Add console logs to trace the execution: log 'Comparing:' with both numbers, then log 'Result:' with the final answer.
 */

// solution

// Write your findMax function with debugging logs
function findMax(num1, num2) {
  console.log("Comparing:", num1, "and", num2);

  const result = num1 > num2 ? num1 : num2;

  console.log("Result:", result);
  return result;
}

// Test the function
findMax(45, 67);
