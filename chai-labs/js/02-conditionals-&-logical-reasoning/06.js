/**
 * Create three variables: `hasMasterKey` (false), `isAdmin` (true), and `emergencyMode` (true). Write an if statement that grants access if the user has a master key OR (is an admin AND emergency mode is active). Log 'Emergency access granted' if conditions are met.
 */

// solution

// Create your variables
const hasMasterKey = false;
const isAdmin = true;
const emergencyMode = true;
// Write your OR logic
if (hasMasterKey || (isAdmin && emergencyMode)) {
  console.log("Emergency access granted");
}
