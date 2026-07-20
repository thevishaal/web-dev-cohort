/**
 * Create a Set named `colors` with ['red', 'green', 'blue']. Use has() to check if 'green' exists and store the result in `hasGreen`. Use delete() to remove 'green', then check has('green') again and store in `stillHas`. Log both values.
 */

// solution

// Create your Set
const colors = new Set(["red", "green", "blue"]);
// Check if green exists
const hasGreen = colors.has("green");
// Delete green
colors.delete("green");
// Check again
const stillHas = colors.has("green");
// Log both values
console.log(hasGreen, stillHas);
