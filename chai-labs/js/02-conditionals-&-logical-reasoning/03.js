/**
 * Create a variable named `clearanceLevel` and set it to `2`. Write an if-else-if-else chain that logs: - 'Maximum access granted' if level is 3 - 'Standard access granted' if level is 2 - 'Limited access granted' if level is 1 - 'No access' for any other value
 */

// solution

// Create the clearanceLevel variable
let clearanceLevel = 2;
// Write your if-else-if-else chain below
if (clearanceLevel === 3) {
  console.log("Maximum access granted");
} else if (clearanceLevel === 2) {
  console.log("Standard access granted");
} else {
  console.log("No access");
}
