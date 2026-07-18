/**
 * Create two functions: `double` that takes a number and returns it doubled, and `addTen` that takes a number and returns it plus 10. Call them in sequence: first double 5, then add 10 to that result. Log the final answer (which should be 20).
 */

// solution

// Declare the double function
function double(num) {
  return num * 2;
}
// Declare the addTen function
function addTen(num) {
  return num + 10;
}
// Compose them: addTen(double(5)) and log result
console.log(addTen(double(5)));
