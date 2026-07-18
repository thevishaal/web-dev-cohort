/**
 * Write nested for loops to create a 3x3 grid. The outer loop should iterate from 1 to 3 (representing rows), and the inner loop should also iterate from 1 to 3 (representing columns). For each combination, log the string in format 'Row X Col Y' (e.g., 'Row 1 Col 1').
 */

// solution

// Write your nested loops
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`Row ${i} Col ${j}`);
  }
}
