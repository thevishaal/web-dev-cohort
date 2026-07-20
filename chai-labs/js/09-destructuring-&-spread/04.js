/**
 * Create an object named `config` with only a property: timeout = 5000. Use object destructuring to extract timeout and a non-existent property retries with a default value of 3. Log both variables.
 */

// solution

// Create your config object
const config = {
  timeout: 5000,
};
// Destructure with default value
const { timeout, retries = 3 } = config;
// Log the variables
console.log(timeout, retries);
