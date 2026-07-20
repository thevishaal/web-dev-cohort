/**
 * Create an array named `duplicates` with [1, 2, 2, 3, 3, 3, 4]. Create a Set from it, then convert back to an array using spread operator [...set] and store in `unique`. Log the unique array.
 */

// solution

// Create array with duplicates
const duplicates = [1, 2, 2, 3, 3, 3, 4];
// Convert to Set and back to array
const set = new Set(duplicates);
const unique = [...set];
// Log the unique array
console.log(unique);
