/**
 * Write a for loop that iterates from 1 to 10. Log each number, but use a `break` statement to exit the loop immediately when the number reaches 5. Only numbers 1 through 5 should be logged.
 */

// solution

// Write your for loop with a break statement
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}
