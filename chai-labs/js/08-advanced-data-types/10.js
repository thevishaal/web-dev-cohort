/**
 * Create a Map named `userRoles` with entries: 'alice' -> 'admin', 'bob' -> 'user', 'charlie' -> 'moderator'. Get the size and store it in `userCount`. Add a new entry 'diana' -> 'user'. Get the size again and store in `newCount`. Log both values.
 */

// solution

// Create your Map
const userRoles = new Map([
  ["alice", "admin"],
  ["bob", "user"],
  ["charlie", "moderator"],
]);
// Get the size
const userCount = userRoles.size;
// Add new entry
userRoles.set("diana", "user");
// Get size again
const newCount = userRoles.size;
// Log both values
console.log(userCount, newCount);
