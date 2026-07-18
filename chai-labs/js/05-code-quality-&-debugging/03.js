/**
 * Write a function named `calculateDiscount` that takes two parameters: `price` and `discountPercent`, and returns the discounted price. Add a comment above the function explaining what it does. Add an inline comment explaining the calculation.
 */

// solution

// Add your comment here explaining the function
// This function calculates and returns the price after applying a discount.
// Write your function
function calculateDiscount(price, discountPercent) {
  const discountedPrice = price - (price * discountPercent) / 100; // Subtract the discount amount from the original price.
  return discountedPrice;
}

console.log(calculateDiscount(100, 20));
