/**
 * Create a recursive function `countdown` that takes a number `n` and logs numbers from n down to 1. If n is 0 or less, do nothing (base case). Call countdown(3).
 */

// solution

// Create countdown function
function countdown(n) {
  console.log(n);
  if (n > 1) {
    countdown(n - 1);
  }
}
// Call countdown
countdown(3);
