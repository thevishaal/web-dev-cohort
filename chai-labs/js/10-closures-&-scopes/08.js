/**
 * Create a function `createFormatter` that takes a `prefix` and `suffix`. Return a function that takes a `text` parameter and returns the text wrapped with the prefix and suffix. Create a formatter with prefix '[' and suffix ']', then log the result of calling it with 'Important'.
 */

// solution

// Create createFormatter function
function createFormatter(prefix, suffix) {
  return function (text) {
    return prefix + text + suffix;
  };
}
// Create formatter
const formatter = createFormatter("[", "]");
// Use formatter and log
console.log(formatter("Important"));
