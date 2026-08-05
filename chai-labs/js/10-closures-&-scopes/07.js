/**
 * Create an array `funcs` to store functions. Use a for loop with 'let i' from 0 to 2. In each iteration, push a function to funcs that returns the value of i. After the loop, call funcs[0](), funcs[1](), and funcs[2]() and log each result on separate lines.
 */

// solution

// Create array and loop
const funcs = [];
// Call and log functions
for (let i = 0; i <= 2; i++) {
  funcs.push(function () {
    return i;
  });
}

for (const fun of funcs) {
  console.log(fun());
}
