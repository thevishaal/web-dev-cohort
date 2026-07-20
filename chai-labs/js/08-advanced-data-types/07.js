/**
 * Create an empty Map named `scores`. Use set() to add 'math' with value 95, then 'science' with value 88. Use get() to retrieve the math score and store in `mathScore`. Log the mathScore.
 */

// solution

// Create an empty Map
const scores = new Map();
// Add scores
scores.set("math", 95);
scores.set("science", 88);
// Get math score
const mathScore = scores.get("math");
// Log the math score
console.log(mathScore);
