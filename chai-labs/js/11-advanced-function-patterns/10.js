/**
 * Create a pure function `calculateTotal` that takes an array of prices and a tax rate, returning the total with tax. Don't modify the input array. Create prices array [10, 20, 30] and call calculateTotal with it and tax rate 0.1 (10%). Log the result.
 */

// solution

// Create calculateTotal function
function calculateTotal(arr, taxRate) {
  let total = 0;
  for (const p of arr) {
    total += p;
  }

  return total + (total * taxRate) / 100;
}
// Create prices array
const prices = [10, 20, 30];
// Call and log
console.log(calculateTotal(prices, 10));
