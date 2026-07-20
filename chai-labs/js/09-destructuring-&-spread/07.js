/**
 * Create an object `defaults` with {theme: 'light', fontSize: 14}. Create an object `userSettings` with {fontSize: 16, notifications: true}. Use spread to merge them into `settings` (userSettings should override defaults). Log the settings object.
 */

// solution

// Create your objects
const defaults = {
  theme: "light",
  fontSize: 14,
};

const userSettings = {
  fontSize: 16,
  notifications: true,
};
// Merge with spread
const settings = { ...defaults, ...userSettings };
// Log the settings
console.log(settings);
