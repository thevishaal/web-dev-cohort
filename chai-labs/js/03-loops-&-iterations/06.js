/**
 * Write a for loop that iterates from 1 to 5. Use a `continue` statement to skip logging when the number is 3. Log all other numbers.
 */

// solution

// Write your for loop with a continue statement
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
