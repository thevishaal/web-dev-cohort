/**
 * Create an object named `settings` with properties: `theme` = 'dark', `fontSize` = 16, and `notifications` = true. Use Object.entries() to get all key-value pairs as an array, store it in a variable `entries`, and log it.
 */

// solution

// Create your settings object
const settings = {
  theme: "dark",
  fontSize: 16,
  notifications: true,
};
// Get the entries using Object.entries()
const entries = Object.entries(settings);
// Log the entries array
console.log(entries);
