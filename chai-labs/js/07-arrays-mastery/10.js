/**
 * Create an array named `ages` with [12, 18, 25, 15, 30]. Use filter() to create a new array `adults` containing only ages 18 or above. Log the adults array.
 */

// solution

// Create your ages array
const ages = [12, 18, 25, 15, 30];
// Use filter to get only adults (18+)
const adults = ages.filter((a) => a >= 18);
// Log the adults array
console.log(adults);
