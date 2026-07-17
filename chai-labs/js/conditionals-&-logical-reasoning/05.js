/**
 * Create three variables: `hasKey` (true), `hasPermission` (true), and `isLocked` (false). Write an if statement that checks if the user has BOTH the key AND permission, and the door is NOT locked. If all conditions are met, log 'Door opened successfully'.
 */

// solution

// Create your variables
let hasKey = true;
let hasPermission = true;
let isLocked = false;
// Write your logical condition
if (hasKey && hasPermission && !isLocked) {
  console.log("Door opened successfully");
}
