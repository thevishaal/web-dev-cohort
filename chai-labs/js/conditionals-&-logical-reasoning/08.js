/**
 * Create a variable named `command` and set it to `'status'`. Write a switch statement that logs: - 'System operational' for 'status' - 'Shutting down...' for 'shutdown' - 'Rebooting system...' for 'restart' - 'Unknown command' for default case Don't forget break statements!
 */

// solution

// Create the command variable
const command = "status";
// Write your switch statement
switch (command) {
  case "status":
    console.log("System operational");
    break;
  case "shutdown":
    console.log("Shutting down...");
    break;
  case "restart":
    console.log("Rebooting system...");
    break;
  default:
    console.log("Unknown command");
}
