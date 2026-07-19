/**
 * Create an array named `expenses` with [100, 50, 75, 25]. Use reduce() to calculate the total sum of all expenses and store it in `total`. Log the total.
 */

// solution

// Create your expenses array
const expenses = [100, 50, 75, 25];
// Use reduce to calculate the total
const total = expenses.reduce((t, e) => t + e, 0);
// Log the total
console.log(total);
